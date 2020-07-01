import React from "react";

const Article_4 = () => {

  return (
    <React.Fragment>
      <div className="vf-container vf-container--tight">
        <div className="vf-text--center pt-4 pb-2">
          <h1 id={"article-2"} style={{fontSize: "48px", lineHeight: "1.2"}}>Bring your expertise to the table!</h1>
        </div>

        <p className="pb-3">
          <strong className="vf-intro-in-caps-small" style={{textTransform: "uppercase"}}>While global brand </strong> consistency is important, it’s also important to acknowledge your local needs in different markets. To set the DDS up for long-term success and create a helpful resource, we want to involve you as well as other users and stakeholders as much as possible in the workflow. The goal is to achieve a living toolbox where we take varying needs into account, support collaboration, and engage in shared activities. Therefore, we would love your feedback, requirements and/or questions on what would help you most. Please take a couple of minutes to complete our short survey. Thanks!
        </p>
        <p><a href={"https://forms.office.com/Pages/ResponsePage.aspx?id=F2zl7uECe0eOLajgeZu-WlvDc0_bQn5MpJmWVDxaVYpUQ1ZGSjBFUkQ3QUI2MEE2TEZFTzk1VE9FVS4u"} style={{fontWeight: "normal"}}>Share your ideas</a></p>
      </div>
      <div className="vf-container vf-container--tight">
        <img
          src="/img/articles/article_05_large.jpg"
          alt=""
          style={{maxWidth: "100%", marginBottom: "48px"}}/>
      </div>
      <div className="vf-container vf-container--tight">
        <p>
          We’re happy to have you here! Please let anyone who can benefit from Digital Design News know that they can get on the list by e-mailing <a href="mailto:branding@vattenfall.com">branding@vattenfall.com</a>.
        </p>
      </div>

    </React.Fragment>
  );
};

export default Article_4;
