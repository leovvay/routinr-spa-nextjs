import React from 'react';
import Head from 'next/head';

import SideNav from '@components/SideNav';
import Header from '@components/Header';
import { PageContent, PageWrapper } from '@components/PageWrapper';
import Footer from '@components/Footer';

import { linkOptions } from '@modules/legal-text/constants';
import {
  LegalTextList,
  LegalTextContainer,
} from '@modules/legal-text/index.styled';

function PrivacyPolicy() {
  return (
    <PageWrapper>
      <Head>
        <title>Privacy Policy | Routinr</title>
        <meta
          property="og:title"
          content="Privacy Policy | Routinr"
          key="title"
        />
      </Head>
      <Header />
      <PageContent>
        <SideNav links={linkOptions}>
          <LegalTextContainer>
            <h1>Privacy Policy</h1>
            <p>
              <i>This Privacy Policy was last updated on 1 June 2020.</i>
            </p>
            <p>
              Routinr Pty Ltd ACN 619 914 911 (<b>Routinr, we, us</b>) are
              committed to providing you with the best user experience we can.
              We also respect your privacy and want you to understand how we
              collect, use and share data about you.
            </p>
            <p>
              Routinr is bound by the <i>Privacy Act 1988 (Cth)</i> in
              Australia, which sets out a number of principles concerning the
              privacy of individuals and this Privacy Policy covers our data
              collection practices when you visit or use the website (
              <a href="https://routinr.org" target="_blank" rel="noreferrer">
                Routinr.org
              </a>
              ), mobile applications or related services (collectively,{' '}
              <b>Services</b>).
            </p>
            <p>
              <b>
                By using the Services, you agree to the terms of this Privacy
                Policy. You should not use the Services if you do not agree with
                the Privacy Policy.
              </b>
            </p>
            <LegalTextList $type="decimal" $size="large">
              <li>
                <h2>Information We Collect</h2>
                <p>
                  We may collect data from or about you depending on how you use
                  the Services,including:
                </p>
                <LegalTextList $type="square" $size="small">
                  <li>
                    <p>
                      your name, email address, facebook or google account
                      credentials, your nominated username as well as personal
                      photographs/images, audiovisuals and graphics which you
                      provide to get access to the Services or register an
                      account/ profile or create a program within the Service;
                    </p>
                  </li>
                  <li>
                    <p>
                      information to process your purchases and payments. You
                      may be asked to provide certain payment and billing
                      information directly to our payment processing partners
                      including your name, credit card details and billing
                      address. For security reasons, Routinr does not collect or
                      store sensitive cardholder data;
                    </p>
                  </li>
                  <li>
                    <p>
                      contact details and other personal information you
                      volunteer to provide when you contact us for support or to
                      report a problem;
                    </p>
                  </li>
                  <li>
                    <p>
                      information about your access, interactions and usage of
                      the Services including geolocation information, IP
                      address, device and connection information, browser
                      information and web-log information, and all
                      communications recorded by Users through the Services. We
                      use that information to enhance user experience,
                      personalise your browsing experience as well as monitoring
                      the Services for preventing fraud and inappropriate
                      content or behaviour. We may also collect supplemental
                      information obtained from third parties such as
                      demographic and navigation data.
                    </p>
                  </li>
                </LegalTextList>
                <p>
                  <i>Children Under the Age of 16</i>
                </p>
                <p>
                  Our Services are not intended for children under 16 years of
                  age. No one under age 16 should provide any personal
                  information to or on the Services. We do not knowingly collect
                  personal information from children under 16. Parents and
                  guardians should at all times supervise their children&#39;s
                  activities. If you believe we might have any information from
                  or about a child under 16, please contact us at
                  <a href="mailto: legal@routinr.org">legal@routinr.org</a>.
                </p>
              </li>
              <li>
                <h2>How do we collect Information?</h2>
                <LegalTextList $type="square" $size="small">
                  <li>
                    <p>
                      You directly provide us with most of the information we
                      collect. You do this through registration, making
                      purchases, contacting us with a query and by posting and
                      sharing additional information voluntarily. This can
                      include information about users and their routines, your
                      location, ratings and feedback by users/subscribers and
                      anything you choose to add to your user profile.
                    </p>
                  </li>
                  <li>
                    <p>
                      We also collect technical information indirectly and
                      automatically through our systems. This information may
                      include logging your Internet Protocol (IP) address,
                      software configuration, operating system and use of
                      cookies (cookies are small files sent from us to your
                      computer and sometimes back). Cookies ultimately help us
                      improve your navigation and ease of use of our Services.
                      You can find{' '}
                      <b>
                        further information about Cookies below, under
                        &quot;Cookies Policy&quot;.
                      </b>
                    </p>
                  </li>
                  <li>
                    <p>
                      We may also collect information from commercially
                      available sources such as data aggregators and public
                      databases.
                    </p>
                  </li>
                </LegalTextList>
              </li>
              <li>
                <h2>How do we use the Information collected?</h2>
                <p>
                  We use and process personal information we collect on the
                  basis that:
                </p>
                <LegalTextList>
                  <li>
                    <p>
                      you have provided your consent for us to use your personal
                      information for a specific purpose;
                    </p>
                  </li>
                  <li>
                    <p>
                      our use of your personal information is necessary to
                      perform a contract or take steps to enter into a contract
                      with you (e.g. to provide you with services which you have
                      purchased);
                    </p>
                  </li>
                  <li>
                    <p>
                      the processing is necessary to comply with a relevant
                      legal obligation or regulatory obligation that we have
                      (e.g. fraud prevention); or
                    </p>
                  </li>
                  <li>
                    <p>
                      the processing is necessary to support our legitimate
                      interests as a business (e.g. to improve our services to
                      you or to customise your browsing experience), subject to
                      your interests and fundamental rights and provided it is
                      conducted at all times in a way that is proportionate.
                    </p>
                  </li>
                </LegalTextList>
                <p>
                  We may use your personal information for the following
                  purposes:
                </p>
                <LegalTextList>
                  <li>
                    <p>
                      to provide you with access to the Service. For example, we
                      may use the information collected from you to verify your
                      identity. We may also use this information to establish
                      and set up your account, verify or re-issue a password,
                      log your activity and contact you from time to time. The
                      information helps us improve our services to you and
                      customise your browsing experience;
                    </p>
                  </li>
                  <li>
                    <p>
                      fraud and risk mitigation by tracking any fraudulent
                      activities and other inappropriate activities and monitor
                      content integrity;
                    </p>
                  </li>
                  <li>
                    <p>
                      to administer and facilitate the Services including
                      completing purchases, troubleshooting, processing and
                      responding to your requests, sending communications
                      relevant for your use of the Services;
                    </p>
                  </li>
                  <li>
                    <p>
                      inform you about new features, promotions and other
                      available courses available;
                    </p>
                  </li>
                  <li>
                    <p>
                      sending push notifications to provide updates and other
                      relevant information;
                    </p>
                  </li>
                  <li>
                    <p>
                      solicit feedback from users including surveys by or on
                      behalf of Routinr;
                    </p>
                  </li>
                  <li>
                    <p>
                      identify and/or investigate a breach of the Terms of
                      Service;
                    </p>
                  </li>
                  <li>
                    <p>
                      learn more about you with the assistance of analytics
                      service providers;
                    </p>
                  </li>
                  <li>
                    <p>analyse trends and track usage data;</p>
                  </li>
                  <li>
                    <p>advertise and promote the Services; or</p>
                  </li>
                  <li>
                    <p>
                      to maintain appropriate business records, to comply with
                      lawful requests by public authorities and to comply with
                      applicable laws and regulations or as otherwise required
                      by law. Should you ever deactivate your account with us,
                      we will keep your information for a limited period in
                      order to meet the above purposes.
                    </p>
                  </li>
                </LegalTextList>
                <h4>Direct marketing:</h4>
                <LegalTextList>
                  <li>
                    <p>
                      We may use your personal information to send you direct
                      marketing communications about our products, services or
                      promotions from Routinr that may be of interest to you or
                      our related services. This may be via email, push
                      notifications, SMS or targeted online advertisements.
                    </p>
                  </li>
                  <li>
                    <p>
                      In most cases our processing of your personal information
                      for marketing purposes is based on our legitimate
                      interest, although some cases (such as where required by
                      law) may be based on your consent. You have a right to
                      prevent direct marketing of any form at any time and this
                      can be exercised by following the opt-out link attached to
                      each communication or by sending an email to{' '}
                      <a href="mailto: optout@routinr.org">
                        optout@routinr.org
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      We take steps to limit direct marketing to a reasonable
                      and proportionate level, and to send you communications
                      which we believe may be of interest or relevance to you,
                      based on the information we have about you.
                    </p>
                  </li>
                </LegalTextList>
                <p>
                  We will ask for your consent before using information for a
                  purpose other than those set out in this Policy.
                </p>
                <h4>Sharing your information</h4>
                <p>
                  We engage third party service providers to facilitate the
                  provision of the Services and the above purposes. To enable us
                  to provide the Services, we regularly share your information
                  with a core few organisations that we work with to collect,
                  process and use your information. These include:
                </p>
                <LegalTextList>
                  <li>
                    <p>Payment gateway providers (Stripe)</p>
                  </li>
                  <li>
                    <p>Workflow (Mailchip)</p>
                  </li>
                  <li>
                    <p>Communications (Intercom &amp; Onesignal)</p>
                  </li>
                  <li>
                    <p>Targeted marketing (Facebook)</p>
                  </li>
                  <li>
                    <p>Hosting (Cloudinary &amp; Segment)</p>
                  </li>
                  <li>
                    <p>upport (Zendesk)</p>
                  </li>
                  <li>
                    <p>Analytics (Google &amp; Amplitude)</p>
                  </li>
                </LegalTextList>
                <p>
                  Aside from these, we might also occasionally share your
                  information with other contractors and groups like marketers,
                  advisors, data storage and payment service providers, and only
                  on a need-to-know basis.
                </p>
              </li>
              <li>
                <h2>How long do we keep your information?</h2>
                <p>
                  We apply a general rule of keeping personal information only
                  for as long as is required to fulfil the purpose for which it
                  was collected. However, in some circumstances we may retain
                  your personal information for longer periods of time. We may
                  retain your information for the following purposes:
                </p>
                <LegalTextList>
                  <li>
                    <p>
                      as long as it is necessary and relevant for our
                      operations, e.g. so that we have an accurate record of
                      your dealings with us in the event of any complaints or
                      challenge; and
                    </p>
                  </li>
                  <li>
                    <p>
                      we may retain personal information from closed accounts to
                      comply with applicable laws, prevent fraud, collect any
                      fees owed, resolve disputes, troubleshoot problems, assist
                      with any investigation, enforce our Services terms and
                      take other actions as permitted by law.
                    </p>
                  </li>
                </LegalTextList>
              </li>
              <li>
                <h2>Where We Store Your Personal Information</h2>
                <p>
                  We will take reasonable steps to protect personal information
                  from misuse, interference and loss, as well as unauthorised
                  access, modification or disclosure.
                </p>
                <p>
                  Some of the personal information you provide to us may be
                  stored or processed on our behalf by third party suppliers and
                  data processors and may be located in other jurisdictions,
                  such as the United States or Australia, whose laws may differ
                  from the jurisdiction in which you live.
                </p>
                <p>
                  Whether to third parties or internally, any transfers of
                  personal information from the European Economic Area to
                  countries not deemed to provide an adequate level of data
                  protection are governed by European Union{' '}
                  <a
                    href="https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection/standard-contractual-clauses-scc_en"
                    target="_blank"
                    rel="noreferrer"
                  >
                    standard contractual clauses
                  </a>
                  , or in the case of the United States, the EU - US Privacy
                  Shield, and/or equivalent data transfer regulations to protect
                  the security and confidentiality of personal information.
                </p>
                <p>
                  We will take all steps reasonably necessary to ensure that
                  your personal information is treated securely and in
                  accordance with this Privacy Policy.
                </p>
              </li>
              <li>
                <h2>Cookies Policy</h2>
                <p>
                  When you use the Services, we may apply industry-wide
                  technologies such as cookies (or similar technologies), which
                  store certain information on your computer or device and which
                  will allow us to make your browsing much more convenient and
                  effortless and allow us to test user experience and offer you
                  personalised browsing or promotions.
                </p>
                <p>
                  By continuing to use the Services, you acknowledge and agree
                  that Routinr and its service providers acting on our behalf
                  (eg Google Analytics) may use server log files and automated
                  data collection tools like cookies, tags, scripts, customised
                  links, device and browser tags and web beacons (collectively
                  lets call these Cookies) in accordance with the terms of this
                  Privacy Policy.
                </p>
                <p>
                  We use Cookies to collect statistical data about the use of
                  the Services, to tailor the Service’s functionality to suit
                  personal preferences and to assist with various aspects of
                  operation. These files contain a variety of information such
                  as information about Routinr webpages, widgets or plugins you
                  have viewed on the Services and other websites, the length of
                  time you visited the Services, data about how you came to
                  visit the Services, areas viewed by you within the Services,
                  and additional information. The following is a more detailed
                  explanation of the types of cookies we use:
                </p>
                <LegalTextList>
                  <li>
                    <h4>Necessary Cookies</h4>
                    <p>
                      Necessary Cookies are essential and help you navigate the
                      Services. This helps to support security and basic
                      functionality and are necessary for the proper operation
                      of the Services. If you block these Cookies we can&#39;t
                      guarantee your access or the security during your visit.
                    </p>
                  </li>
                  <li>
                    <h4>Functionality Cookies</h4>
                    <p>
                      Functionality Cookies are used to provide you a smooth
                      user experience. These Cookies are, for instance, used to
                      personalise content for you in line with your location. It
                      also allows the Services to remember choices made (among
                      other things) to enable automatic sign-in to the Services
                      (eliminating the need to repeatedly enter the same data)
                      and to provide more personal features.
                    </p>
                  </li>
                  <li>
                    <h4>Performance Cookies</h4>
                    <p>
                      Performance Cookies help us to understand the behaviour of
                      visitors and users of the Services. This allows us to
                      continuously improve the Services. These Cookies are also
                      used to help us understand how effective our Services are;
                      for instance these Cookies tell us which pages visitors go
                      to most often and if they get error messages from web
                      pages. All of the information that these Cookies collect
                      is aggregated, to assist us to improve how the Services
                      works. Some of these Cookies are managed by third parties.
                    </p>
                    <p>
                      In particular, we use <i>Google Analytics Cookies</i> to
                      obtain an overall view of user habits and volumes, and to
                      help improve the overall experience on the Services.
                      Google Analytics is a third-party web analysis service
                      provided by Google Inc, which uses performance cookies and
                      targeting cookies. The information generated by these
                      cookies about your use of the Services (including your IP
                      address) will be transmitted to and stored by Google Inc
                      on servers in the United States.
                    </p>
                    <p>
                      Google will use the information collected for the purpose
                      of evaluating your use of our Services on our behalf,
                      compiling reports on website activity and providing other
                      services relating to activity and internet usage to us.
                      Google will not associate your IP address with any other
                      data held by Google. You may refuse the use of cookies by
                      selecting the appropriate settings on your browser as
                      described below. Furthermore, you can prevent Google’s
                      collection and use of data (cookies and IP address) by
                      downloading and installing the{' '}
                      <a
                        href="https://tools.google.com/dlpage/gaoptout"
                        target="_blank"
                        rel="noreferrer"
                      >
                        browser plug-in
                      </a>
                      . This creates an opt-out cookie which prevents the
                      further processing of your data. For more information
                      about Google Analytics cookies, please see{' '}
                      <a
                        href="https://support.google.com/analytics"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Google&#39;s help pages
                      </a>{' '}
                      and{' '}
                      <a
                        href="https://support.google.com/analytics/topic/2919631?hl=en&amp;ref_topic=1008008"
                        target="_blank"
                        rel="noreferrer"
                      >
                        privacy policy
                      </a>
                      . If you prevent these cookies, we cannot guarantee how
                      the Services will perform for you.
                    </p>
                  </li>
                </LegalTextList>
                <p>
                  You may set your browser to block all cookies, including
                  cookies associated with our Services, or to indicate when a
                  cookie is being set by us. You should do this through the
                  browser settings for each browser you use. Please be aware
                  that some of our Services will not function if your browser
                  does not accept cookies. However, you can allow cookies from
                  specific website by making them &quot;trusted website&quot; in
                  your internet browser.
                </p>
                <p>
                  Information on deleting or controlling cookies is also
                  available at{' '}
                  <a
                    href="https://www.aboutcookies.org"
                    target="_blank"
                    rel="noreferrer"
                  >
                    www.aboutcookies.org
                  </a>{' '}
                  or if you are located in the European Union, visit the{' '}
                  <a
                    href="https://www.youronlinechoices.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Your Online Choices Site
                  </a>{' '}
                  (note that these websites are not provided by Routinr, and we
                  therefore cannot ensure their accuracy, completeness or
                  availability).
                </p>
                <p>
                  It is important to remember that many of our services may not
                  function properly if your Cookies are disabled. For example,
                  Cookies may, in certain cases, save you from the need to enter
                  usernames and passwords, and allow session continuity.
                </p>
              </li>
              <li>
                <h2>Rights of Users Under EU Regulation</h2>
                <p>
                  If you are a resident of the European Economic Area, you may
                  have some or all of the following rights in respect of your
                  personal information:
                </p>
                <LegalTextList>
                  <li>
                    <p>
                      to obtain a copy of your personal information together
                      with information about how and on what basis that personal
                      information is processed;
                    </p>
                  </li>
                  <li>
                    <p>to rectify inaccurate personal information;</p>
                  </li>
                  <li>
                    <p>
                      to erase your personal information in limited
                      circumstances where (a) it is no longer necessary in
                      relation to the purposes for which it was collected or
                      processed; (b) the processing is unlawful; (c) you object
                      to the processing or withdraw your consent for processing
                      and there is no overriding legitimate grounds for the
                      processing;
                    </p>
                  </li>
                  <li>
                    <p>
                      to restrict processing of your personal information where:
                      (a) the accuracy of the personal information is contested;
                      (b) the processing is unlawful but you object to the
                      erasure of the personal information; (c) we no longer
                      require the personal information for the purposes for
                      which it was collected but it is required for the
                      establishment, exercise or defence of a legal claim;
                    </p>
                  </li>
                  <li>
                    <p>
                      to challenge processing which we have justified on the
                      basis of our legitimate interest;
                    </p>
                  </li>
                  <li>
                    <p>
                      to object to decisions which are based solely on automated
                      processing or profiling;
                    </p>
                  </li>
                  <li>
                    <p>
                      to obtain a portable copy of your personal information, or
                      to have a copy transferred to a third party controller; or
                    </p>
                  </li>
                  <li>
                    <p>
                      to obtain a copy of or access to safeguards under which
                      your personal information is transferred outside of the
                      European Union.
                    </p>
                  </li>
                </LegalTextList>
                <p>
                  In addition to the above, you have the right to lodge a
                  complaint with a supervisory authority for data protection.
                </p>
                <p>
                  We may ask you for additional data to confirm your identity
                  and for security purposes, before disclosing data requested to
                  you. We reserve the right to charge a fee where permitted by
                  law. We may also decline to process requests that jeopardise
                  the privacy of others, are extremely impractical, or would
                  cause us to take any action that is not permissible under
                  applicable laws. Additionally, as permitted by applicable
                  laws, we may need to retain certain personal information for a
                  limited period of time for record-keeping, accounting, audits
                  and fraud prevention purposes.
                </p>
              </li>
              <li>
                <h2>Updating Your Information</h2>
                <p>
                  We take reasonable steps to ensure that the personal
                  information we collect is accurate and up to date, and we
                  provide you with the opportunity to update your information
                  through your <i>account profile settings</i>. In the event
                  that you believe your information is in any way incorrect or
                  inaccurate and you are unable to make the changes yourself,
                  please let us know immediately. We will make sure we
                  investigate the matter and correct any inaccuracies in a
                  reasonable period of time or give you ways to update it
                  quickly or to delete it - unless we have to keep that
                  information for legitimate business or legal purposes. When
                  updating your personal information, we may ask you to verify
                  your identity before we can act on your request.
                </p>
              </li>
              <li>
                <h2>Accessing Your Personal Information</h2>
                <p>
                  You have a right to access your personal information, subject
                  to exceptions allowed by law. If you would like to have a copy
                  of the information we collect about you, please let us know -{' '}
                  <a href="mailto: support@routinr.org">support@routinr.org</a>.
                  You may be required to put your request in writing for
                  security reasons. Routinr reserves the right to charge a fee
                  for searching for, and providing access to, your information
                  on a per request basis.
                </p>
              </li>
              <li>
                <h2>Changes to this Privacy Policy</h2>
                <p>
                  Routinr reserves the right to make amendments to this Privacy
                  Policy at any time. If you have objections to the Privacy
                  Policy, you should not access or use the Services.
                </p>
              </li>
              <li>
                <h2>Contact us</h2>
                <p>
                  If you have any comments, questions or you are unhappy with
                  something we’ve done or you think we’re not following privacy
                  laws, let us know and we’ll get back to you promptly to try
                  and fix that. Just reach out at{' '}
                  <a href="mailto: support@routinr.org">support@routinr.org</a>.
                </p>
                <p>
                  You can also make a complaint to the Office of the{' '}
                  <a
                    href="https://www.oaic.gov.au/individuals/privacy-complaint-checker/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Australian Information Commissioner
                  </a>
                  .
                </p>
                <p>If this policy ever changes, we’ll update it here.</p>
              </li>
            </LegalTextList>
          </LegalTextContainer>
        </SideNav>
      </PageContent>
      <Footer />
    </PageWrapper>
  );
}

export default PrivacyPolicy;
