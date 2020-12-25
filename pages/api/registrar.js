import mailchimp from "@mailchimp/mailchimp_marketing";
import MD5 from "crypto-js/md5";

import validateEmail from "../../utils/validateEmail"
import { LIST_ID, MAILCHIMP_API_KEY, MAILCHIMP_PREFIX_SERVER } from "../../settings/settings"

const listId = LIST_ID

mailchimp.setConfig({
  apiKey: MAILCHIMP_API_KEY,
  server: MAILCHIMP_PREFIX_SERVER,
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

export default function registerUser(req, res) {
  const { email } = req.body
  if(!validateEmail(email)){
    return res.status(403).json({error: "Por favor envia un correo electrónico válido."})
  }
  const response = registerUserInMailchimp(req.body)
  if(response.hasOwnProperty('id')){
    return res.status(201).json({email})
  }else{
    return res.status(403).json({error:"No pudimos registrar tu correo, por favor intenta más tarde"})
  }
}




