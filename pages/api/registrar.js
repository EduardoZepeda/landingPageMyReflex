import mailchimp from "@mailchimp/mailchimp_marketing";
import MD5 from "crypto-js/md5";

import validateEmail from "../../utils/validateEmail"
import settings from "../../settings/settings"

const listId = settings.LIST_ID

mailchimp.setConfig({
  apiKey: settings.MAILCHIMP_API_KEY,
  server: settings.MAILCHIMP_PREFIX_SERVER,
})

async function registerUserInMailchimp({email}) {
    const response = await mailchimp.lists.setListMember(
        listId,
        MD5(email.toLowerCase()).toString(),
        { email_address: email, 
          status_if_new: "pending", 
        }
      );
  return response
}

export default async function registerUser(req, res) {
  const { email } = req.body
  if(!validateEmail(email)){
    return res.status(403).json({error: "Por favor envía un correo electrónico válido."})
  }
  try{
    const response = await registerUserInMailchimp(req.body)
    return res.status(201).json({id:response.id})
  }catch(error){
    return res.status(error.status?error.status:403).json({error:error.toString()})    
  }
}