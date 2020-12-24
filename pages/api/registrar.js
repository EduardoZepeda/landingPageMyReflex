import mailchimp from "@mailchimp/mailchimp_marketing";
import MD5 from "crypto-js/md5";

const listId = process.env.LIST_ID

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_PREFIX_SERVER,
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
  const response = registerUserInMailchimp(req.body)
  res.statusCode = response.hasOwnProperty('id') ? 201 : 403
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ email_address: response.hasOwnProperty('id')? response.email_address : ""}))
}




