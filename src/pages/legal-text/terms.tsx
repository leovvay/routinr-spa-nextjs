import React from 'react';
import Head from 'next/head';

import SideNav from '@components/SideNav';
import Header from '@components/Header';
import { PageContent, PageWrapper } from '@components/PageWrapper';
import Footer from '@components/Footer';

import { linkOptions } from '@modules/legal-text/constants';
import {
  LegalTextContainer,
  LegalTextList,
  LegalTextTermsList,
  LegalTextTermsListCircle,
} from '@modules/legal-text/index.styled';

function Terms() {
  return (
    <PageWrapper>
      <Head>
        <title>Terms of Service | Routinr</title>
        <meta
          property="og:title"
          content="Terms of Service | Routinr"
          key="title"
        />
      </Head>
      <Header />
      <PageContent>
        <SideNav links={linkOptions}>
          <LegalTextContainer>
            <h2>Welcome to Routinr!</h2>
            <p>
              Routinr is a marketplace platform operated by Routinr Pty Ltd to
              enable people around the world to create, share, sell and purchase
              their daily, weekly or monthly routines, plans and tactics.
              Services offered on Routinr reflect the diversity of an expanding
              sharing economy.
            </p>
            <p>
              The following terms and conditions (these <b>Terms of Service</b>)
              govern the way in which a person (<b>User</b> or <b>you</b>) can
              access and use the Routinr platform, including any content,
              functionality and services offered on or through{' '}
              <a href="https://routinr.org" target="_blank" rel="noreferrer">
                www.routinr.org
              </a>
              , the Apple App Store, Google Play or other platforms (each a
              <b>Site</b>).
            </p>
            <p>
              <b>
                Please read the Terms of Service carefully before you start to
                use Routinr on any Site. By using the Site, opening an account
                or by clicking to accept or agree to the Terms of Service when
                this option is made available to you, you accept and agree to be
                bound and abide by these Terms of Service and our{' '}
                <a
                  href="https://routinr.org/legal-text"
                  target="_blank"
                  rel="noreferrer"
                >
                  Privacy Policy
                </a>
                , incorporated herein by reference. If you do not want to agree
                to these Terms of Service or the Privacy Policy, you must not
                access or use Routinr on the Site.
              </b>
            </p>
            <h2>Key Terms</h2>
            <LegalTextList $type="decimal" $size="large">
              <li>
                <h2>Overview</h2>
                <LegalTextTermsList>
                  <li>
                    <p>
                      The Site creates an opportunity for a registered and
                      authorised user to offer for sale (<b>Seller</b>)
                      routines, programs, tips, recipes, planners and other
                      lifestyle content (<b>Routine(s)</b>) in accordance with
                      these Terms of Service. A user who accesses a Seller’s
                      Routine, whether free of charge or paid, is taken to be a{' '}
                      <b>Buyer</b>.
                    </p>
                  </li>
                  <li>
                    <p>
                      Routinr is offered and available to users who are 16 years
                      of age or older. If you are under 16 you may not use the
                      Routinr services without the consent and agreement to
                      these Terms of Service by a parent or guardian. By using
                      this Site, you represent and warrant that you are of legal
                      age to form a binding contract and meet all of the
                      foregoing eligibility requirements. If you do not meet all
                      of these requirements, you must not access or use Routinr.
                    </p>
                  </li>
                  <li>
                    <p>
                      Whether you are a Buyer or Seller, the features, services,
                      materials, templates and functionality (<b>Services</b>)
                      made available through the Site are licensed, not sold, to
                      you.
                    </p>
                    <ol style={{ listStyleType: 'lower-roman' }}>
                      <li>
                        <p>
                          <i>Scope of License</i>: Routinr grants to you a
                          limited, revocable, non-transferable license to use
                          the Services on the Site as permitted by the{' '}
                          <i>Usage Rules</i> (set out below). Except as provided
                          in the Usage Rules, you may not distribute or make the
                          Services available over a network where it could be
                          used by multiple devices at the same time. You may not
                          transfer, redistribute or sublicense the Services. You
                          may not copy (except as permitted by this license and
                          the Usage Rules), reverse-engineer, disassemble,
                          attempt to derive the source code of, modify, or
                          create derivative works of the Site or Services, any
                          updates, or any part thereof (except as and only to
                          the extent that any foregoing restriction is
                          prohibited by applicable law).
                        </p>
                      </li>
                      <li>
                        <p>
                          <i>Consent to Use of Data</i>: You agree that Routinr
                          may collect and use technical data and related
                          information—including but not limited to technical
                          information about your device, system and application
                          software, and peripherals—that is gathered
                          periodically to facilitate the provision of updates,
                          product support, and other services to you (if any)
                          related to the Services.
                        </p>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <p>
                      <i>Termination.</i> Your rights under these Terms of Use
                      will terminate automatically if you fail to comply with
                      any of its terms.
                    </p>
                    <p>
                      If you fail, or Routinr suspects on reasonable grounds
                      that you have failed, to comply with any of the provisions
                      of these Terms of Service, Routinr may, without notice to
                      you: (i) terminate its contract with you; and/or (ii)
                      terminate your access to Routinr on any of the Sites.
                    </p>
                  </li>
                  <li>
                    <p>
                      <i>Routinr discretion:</i> Generally, Routinr further
                      reserves the right to modify, suspend, or discontinue the
                      Services (or any part or Routines thereof) at any time
                      with or without notice to you and, to the full extent
                      permitted by law, Routinr will not be liable to a you or
                      to any third party should it exercise such rights.
                      Termination may affect the Routines or Services you have
                      already acquired.
                    </p>
                  </li>
                  <li>
                    <p>
                      <i>External Services.</i> The Services may enable access
                      to Routinr’s and/or third-party services and websites
                      (collectively and individually, <b>External Services</b>).
                      You agree to use the External Services at your sole risk.
                      Routinr is not responsible for examining or evaluating the
                      content or accuracy of any third-party External Services,
                      and shall not be liable for any such third-party External
                      Services, to the full extent permitted by law. Data
                      displayed by any External Service is not guaranteed or
                      endorsed by Routinr or its representatives. Routinr
                      reserves the right to change, suspend, remove, disable or
                      impose access restrictions or limits on any External
                      Services at any time without notice or liability to you.
                    </p>
                  </li>
                </LegalTextTermsList>
              </li>
              <li>
                <h2>Usage Rules</h2>
                <p>
                  <i>
                    Routinr maintains a friendly, community spirited, and
                    professional environment. Users should keep to that spirit
                    while participating in any activity or extensions of
                    Routinr. This section relates to the expected conduct users
                    should adhere to while interacting with each other on
                    Routinr. To report a violation of our Terms of Service,
                    Usage Rules, or inquiries regarding your account, please
                    contact our{' '}
                    <a
                      href="https://routinr.zendesk.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Customer Support team
                    </a>{' '}
                    at{' '}
                    <a href="mailto: support@routinr.org">
                      support@routinr.org
                    </a>
                    .
                  </i>
                </p>
                <LegalTextTermsList>
                  <li>
                    <h4>User Generated Content</h4>
                    <p>
                      User Generated Content refers to the content added by
                      Sellers and Buyers as opposed to content created by the
                      Site. All content uploaded to Routinr by Users is “User
                      Generated Content” and may be hosted by a third party.
                    </p>
                    <p>
                      Routinr does not screen, examine, evaluate, check the
                      accuracy of or moderate the content of Routines for
                      appropriateness, violations of copyright, trademarks or
                      other violations however it may take action for content or
                      use which is in breach of these Terms of Service.
                    </p>
                    <p>
                      We invite everyone to report violations together with
                      proof of ownership as appropriate. To this end, Routinr is
                      not responsible for the content, quality or the level of
                      service provided by the Sellers. We provide no warranty
                      with respect to the Routines.
                    </p>
                  </li>
                  <li>
                    <h4>Prohibited Use</h4>
                    <p>
                      Routinr may suspend, disable or terminate Routines or
                      other User content (in whole or in part) where Routinr
                      reasonably believes or suspects that there has been a
                      violation of these Terms of Service, which may include
                      (but are not limited to) the following violations:
                    </p>
                    <LegalTextTermsListCircle>
                      <li>
                        <p>
                          posting, transmitting, storing or otherwise making
                          available material that a User does not have
                          permission, right or license to use, publish or
                          display (otherwise known as copyright infringement,
                          trademark infringement, violation of a third
                          party&#39;s terms of service or the like);
                        </p>
                      </li>
                      <li>
                        <p>
                          posting, transmitting or storing objectionable,
                          offensive, unlawful, deceptive or harmful content
                          including advocating hatred against any person or
                          group of people based on their race, religion,
                          ethnicity, sex, gender identity, sexual orientation,
                          disability, or impairment, indecent, obscene,
                          defamatory, libelous, harassing, threatening,
                          fraudulent, offensive, enabling online gambling or
                          inconsistent with the generally accepted practices of
                          the Internet community, including without limitation
                          promoting or facilitating pornography, offering or
                          disseminating fraudulent goods, services, schemes, or
                          promotions, spamming, make-money-fast schemes, ponzi
                          and pyramid schemes, phishing, or pharming, and use of
                          content or technology that may damage, interfere with,
                          surreptitiously intercept, or expropriate any system,
                          program, or data, including viruses, Trojan horses,
                          worms or time bombs;
                        </p>
                      </li>
                      <li>
                        <p>
                          posting personal, private or confidential information
                          belonging to others;
                        </p>
                      </li>
                      <li>
                        <p>
                          impersonating or misrepresenting affiliations with
                          another person, or entity;
                        </p>
                      </li>
                      <li>
                        <p>
                          posting or transmitting spam, including but not
                          limited to unsolicited or unauthorised advertising,
                          promotional materials, or informational announcements;
                        </p>
                      </li>
                      <li>
                        <p>
                          planning or engaging in any illegal, fraudulent, or
                          manipulative activity;
                        </p>
                      </li>
                      <li>
                        <p>
                          copying or passing off of other Routines or third
                          party content.
                        </p>
                      </li>
                    </LegalTextTermsListCircle>
                  </li>
                  <li>
                    <h4>User suspension</h4>
                    <LegalTextTermsListCircle>
                      <li>
                        <p>
                          Routinr reserves the right to put any account on hold
                          or permanently disable accounts due to breach of these
                          Terms of Service or due to any illegal or
                          inappropriate use of the Site or Services.
                        </p>
                      </li>
                      <li>
                        <p>
                          Routines that are removed for violations mentioned
                          above, may result in the suspension of the Seller’s
                          account with or without notice. Alternatively, Routinr
                          may send a warning or a request to rectify the
                          violation and whilst a warning may not limit account
                          activity, it can lead to the account losing status or
                          becoming permanently disabled based on the severity of
                          the violation.
                        </p>
                      </li>
                      <li>
                        <p>
                          Routinr does not tolerate Users who engage in targeted
                          abuse or harassment towards other Users on the Site.
                          This includes creating new multiple accounts to harass
                          members through our message or ordering system.
                        </p>
                      </li>
                      <li>
                        <p>A person may not buy or sell Routinr accounts.</p>
                      </li>
                      <li>
                        <p>
                          Routines or User accounts may be removed from our
                          search feature due to poor performance and/or user
                          misconduct.
                        </p>
                      </li>
                      <li>
                        <p>
                          Routines must not embed or link to third party
                          websites unless expressly agreed to and such violation
                          shall cause the Seller’s account and routines to be
                          suspended and removed.
                        </p>
                      </li>
                      <li>
                        <p>
                          Users who make statements which Routinr determines to
                          be disparaging or undermining the Site or Services or
                          otherwise seek to circumvent the use of the Services
                          shall be in breach and can have their account barred.
                        </p>
                      </li>
                      <li>
                        <p>
                          To protect our users&#39; privacy, Routinr does not
                          permit the exchange of email addresses, usernames,
                          telephone numbers or any other personal contact
                          details to communicate outside of Routinr in order to
                          circumvent or abuse the Routinr messaging system or
                          Routinr platform.
                        </p>
                      </li>
                      <li>
                        <p>
                          The Routinr marketplace is open to everyone within
                          reason. Discrimination against a community member
                          based on gender, race, age, religious affiliation,
                          sexual preference or otherwise is not acceptable and
                          may result in the suspension/removal of your account.
                        </p>
                      </li>
                    </LegalTextTermsListCircle>
                  </li>
                  <li>
                    <h4>Miscellaneous</h4>
                    <LegalTextTermsListCircle>
                      <li>
                        <p>
                          Where the Service is being used via the App Store or
                          Google Play, additional usage rules may apply.
                        </p>
                      </li>
                      <li>
                        <p>
                          Routinr does not provide or make available any
                          insurance for users who utilise the Services.
                        </p>
                      </li>
                    </LegalTextTermsListCircle>
                  </li>
                </LegalTextTermsList>
              </li>
              <li>
                <h2>Payments</h2>
                <LegalTextTermsList>
                  <li>
                    <p>
                      Other than payments processed by the App or Google store,
                      payment processing services on Routinr are provided by
                      Stripe and are subject to the{' '}
                      <a
                        href="https://stripe.com/connect-account/legal"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Stripe Connected Account Agreement
                      </a>
                      , which includes the{' '}
                      <a
                        href="https://stripe.com/legal"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Stripe Terms of Service
                      </a>{' '}
                      (collectively, the <b>“Stripe Services Agreement”</b>). By
                      agreeing to these Terms of Service and/or completing a
                      purchase on the Site or accepting payment on the Site, you
                      agree to be bound by the Stripe Services Agreement, as the
                      same may be modified by Stripe from time to time. As a
                      condition of the Site enabling payment processing services
                      through Stripe, you agree to provide the Site with
                      accurate and complete information about you and your
                      business, and you authorise Routinr to share it and
                      transaction information related to your use of the payment
                      processing services provided by Stripe.
                    </p>
                  </li>
                  <li>
                    <p>
                      Processing fees may be added at the time of purchase where
                      a Buyer can review and accept the total amount requested
                      to pay. These fees cover payment processing and
                      administrative fees.
                    </p>
                  </li>
                  <li>
                    <p>
                      GST- This paragraph only applies to buyers located in
                      Australia: Australian Buyers will have the Goods and
                      Services Tax included in the Routine price shown on the
                      Routine page.
                    </p>
                  </li>
                </LegalTextTermsList>
              </li>
              <li>
                <h2>Sellers</h2>
                <LegalTextTermsList>
                  <li>
                    <p>
                      Each Seller warrants that it owns or has the unfettered
                      and unlimited right to use, display and licence its
                      Routines (including any material, content, graphics,
                      audio, links, references and designs) for the purposes
                      contemplated by the Terms of Service.
                    </p>
                  </li>
                  <li>
                    <p>
                      Each Seller consents and agrees to grant Routinr an
                      unlimited, worldwide, perpetual, royalty free right to use
                      the Seller’s materials for the purposes of providing,
                      developing and supporting the Service as well as marketing
                      and promotional purposes by Routinr.
                    </p>
                  </li>
                  <li>
                    <p>
                      Sellers must comply with any usage limitations notified to
                      them including technical and security requirements.
                    </p>
                  </li>
                  <li>
                    <p>
                      Each Routine you sell and successfully complete, accredits
                      your account with a revenue of 85% of the listed purchase
                      amount after taking into account any App Store fees, other
                      promotions or discounts.
                    </p>
                    <p>
                      <i>For example</i>
                    </p>
                    <ol>
                      <li>
                        <p>
                          if you sell $100 worth of routines through the Apple
                          App Store, Apple currently takes 30% so your revenue
                          will be:
                        </p>
                        <p>
                          ($100- 30) x 0.85 = <b>$59.50</b>
                        </p>
                      </li>
                      <li>
                        <p>
                          if you sell $100 worth of routines through the Routinr
                          website your revenue will be:
                        </p>
                        <p>
                          $100 x 0.85 = <b>$85.00</b>
                        </p>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <p>
                      Routinr will use best endeavours to distribute any revenue
                      to the Seller’s account within 7 days after the payment is
                      accepted by Stripe (payment gateway) or otherwise received
                      by Routinr. Please note that Routines purchased through
                      the App Store or Google Play may take up to 60 days to be
                      processed.
                    </p>
                  </li>
                  <li>
                    <p>
                      Routinr may suspend or temporarily hold a Seller’s revenue
                      payment to prevent fraudulent or illicit activity. This
                      may come as a result of security issues, an investigation
                      of a breach of the Terms of Service or suspected improper
                      behaviour.
                    </p>
                  </li>
                  <li>
                    <p>
                      A Seller can choose to terminate their account. However,
                      if a Seller deletes content from the Services, we note
                      that copies of the content may remain viewable in cached
                      and archived pages, or might have been copied or stored by
                      other users for eg buyers of your content. Routinr is not
                      obliged to remove cached, archived, sold or copied
                      extracts of your content.
                    </p>
                  </li>
                </LegalTextTermsList>
              </li>
              <li>
                <h2>Buyers</h2>
                <LegalTextTermsList>
                  <li>
                    <p>
                      Routinr does not moderate user generated content and as
                      such, we recommend that you seek professional advice
                      before starting any exercise, diet or other lifestyle
                      regime to ensure that it suits your needs and conditions.
                      For the avoidance of doubt, Routinr does not provide any
                      guarantee around the level of results or satisfaction for
                      any Routines offered Buyers or users in general. Routinr
                      is not responsible for any statements or representations
                      made by Sellers.
                    </p>
                  </li>
                  <li>
                    <p>
                      To protect against fraud, unauthorised transactions (such
                      as money laundering), claims or other liabilities, we do
                      not collect credit information; but allow our payment
                      vendors to collect information for the purpose of
                      collecting payments from Buyers on the Site or
                      transferring payments to Sellers on the Site. We are not
                      exposed to the payment information provided to our payment
                      vendors, and this information is subject to the privacy
                      policy applicable to the payment vendor.
                    </p>
                  </li>
                  <li>
                    <p>
                      Routinr retains the right to use all published content
                      (including comments or testimonials) for its marketing and
                      promotional purposes.
                    </p>
                  </li>
                  <li>
                    <p>
                      <i>Feedback reviews</i> provided by Buyers are an
                      essential part of Routinr&#39;s rating system. Reviews
                      demonstrate the Buyer&#39;s overall experience with the
                      Sellers and their Routine. Leaving feedback is a basic
                      prerogative of a Buyer. Feedback reviews will not be
                      removed unless there are clear violations to our Terms of
                      Service.
                    </p>
                  </li>
                  <li>
                    <p>
                      To prevent any misuse of our feedback system, all feedback
                      reviews must come from legitimate purchases executed
                      exclusively through the Site platform from users within
                      our community. Purchases arranged, determined to
                      artificially enhance seller ratings, or to abuse the
                      Services with purchases from additional accounts, will
                      result in a permanent suspension of all related accounts.
                    </p>
                  </li>
                  <li>
                    <p>
                      Feedback comments given by Buyers are publicly displayed
                      on a Seller’s Routine page. Buyers have the option not to
                      include a comment, but still rate the service.
                    </p>
                  </li>
                </LegalTextTermsList>
              </li>
              <li>
                <h2>Intellectual Property</h2>
                <LegalTextTermsList>
                  <li>
                    <p>
                      Unless clearly stated otherwise, all material and content
                      within a Routine including written content, audiovisuals,
                      video clips and graphics are the copyright of the
                      respective Seller.
                    </p>
                  </li>
                  <li>
                    <p>
                      Buyers cannot duplicate a Seller’s Routine or content for
                      a commercial purpose or claim any Routine or a part
                      thereof as their own.
                    </p>
                  </li>
                  <li>
                    <p>
                      All Users agree that the Services, including but not
                      limited to content, graphics, user interface,
                      audiovisuals, video clips, editorial content, and the
                      scripts and software used to implement the Services,
                      contain proprietary information and material that is owned
                      by Routinr and/or its licensors, and is protected by
                      applicable intellectual property and other laws, including
                      but not limited to copyright. Users agree that they will
                      not use such proprietary information or materials in any
                      way whatsoever except for use of the Services for personal
                      uses in compliance with these Terms of Service. No portion
                      of the Services may be reproduced in any form or by any
                      means, except as expressly permitted by these Terms of
                      Service. You agree not to modify, rent, loan, sell, or
                      distribute the Services, Routines or content in any
                      manner, and you shall not exploit the Services in any
                      manner not expressly authorised. This clause does not
                      modify, restrict or exclude any additional rights you may
                      have under applicable laws that cannot be so modified,
                      restricted or excluded.
                    </p>
                  </li>
                  <li>
                    <p>
                      Furthermore, Users agree that the content they voluntarily
                      create/upload to Routinr, including Routine texts, photos,
                      videos, usernames, user photos, audiovisuals and any other
                      information, including the display of delivered work, may
                      be hosted by third parties or used by Routinr for no
                      consideration for marketing and/or other purposes. Sellers
                      are responsible for keeping a back-up of all of their
                      content including images and audio-visual work as Routinr
                      will not be responsible for damage or loss of any content.
                    </p>
                  </li>
                </LegalTextTermsList>
              </li>
              <li>
                <h2>Indemnity</h2>
                <p>
                  BY USING THE SERVICES, USERS AGREE, TO THE EXTENT PERMITTED BY
                  LAW, TO INDEMNIFY AND HOLD ROUTINR, ITS DIRECTORS, OFFICERS,
                  EMPLOYEES, AFFILIATES, AGENTS, CONTRACTORS HARMLESS WITH
                  RESPECT TO ANY CLAIMS ARISING OUT OF A USER’S BREACH OF THESE
                  TERMS OF SERVICE, YOUR MISUSE OF THE SERVICES, OR, TO THE
                  EXTENT PERMITTED BY LAW, ANY ACTION TAKEN BY ROUTINR AS PART
                  OF ITS INVESTIGATION OF A SUSPECTED VIOLATION OF THIS
                  AGREEMENT OR AS A RESULT OF ITS FINDING OR DECISION THAT A
                  VIOLATION OF THIS AGREEMENT HAS OCCURRED. TO THE EXTENT
                  PERMITTED BY LAW, USERS AGREE THAT THEY SHALL NOT SUE OR
                  RECOVER ANY DAMAGES FROM ROUTINR, ITS DIRECTORS, OFFICERS,
                  EMPLOYEES, AFFILIATES, AGENTS, CONTRACTORS AS A RESULT OF ITS
                  DECISION TO REMOVE OR REFUSE TO PROCESS ANY INFORMATION OR
                  CONTENT, TO WARN A USER, TO SUSPEND OR TERMINATE A USER’S
                  ACCESS TO THE SERVICES, OR TO TAKE ANY OTHER ACTION DURING THE
                  INVESTIGATION OF A SUSPECTED VIOLATION OR AS A RESULT OF
                  ROUTINR’S REASONABLE CONCLUSION THAT A VIOLATION OF THIS
                  AGREEMENT HAS OCCURRED. THIS WAIVER AND INDEMNITY PROVISION
                  APPLIES TO ALL VIOLATIONS DESCRIBED IN OR CONTEMPLATED BY
                  THESE TERMS OF SERVICE.
                </p>
              </li>

              <li>
                <h2>Disclaimer of Warranties</h2>
                <p>
                  ROUTINR DOES NOT GUARANTEE, REPRESENT, OR WARRANT THAT USE OF
                  THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE, AND USERS
                  AGREE THAT FROM TIME TO TIME ROUTINR MAY REMOVE THE SERVICES
                  FOR INDEFINITE PERIODS OF TIME, CANCEL THE SERVICES AT ANY
                  TIME, OR OTHERWISE LIMIT OR DISABLE YOUR ACCESS TO THE
                  SERVICES WITHOUT NOTICE TO YOU, WHERE REASONABLY NECESSARY TO
                  PROTECT ROUTINR’S LEGITIMATE INTERESTS.
                </p>
                <p>
                  ROUTINR DOES NOT REPRESENT OR GUARANTEE THAT THE SERVICES WILL
                  BE FREE FROM LOSS, CORRUPTION, ATTACK, VIRUSES, INTERFERENCE,
                  HACKING, OR OTHER SECURITY INTRUSION, AND USERS HEREBY RELEASE
                  ROUTINR FROM ANY LIABILITY RELATING THERETO. USERS SHALL BE
                  RESPONSIBLE FOR BACKING UP THEIR OWN SYSTEM, INCLUDING ANY
                  CONTENT UPLOADED OR THROUGH THE SERVICES.
                </p>
                <p>
                  YOUR USE OF THE SITE, ITS CONTENT AND ANY SERVICES OR ITEMS
                  OBTAINED THROUGH THE WEBSITE IS AT YOUR OWN RISK. THE SITE,
                  ITS CONTENT AND ANY SERVICES OR ITEMS OBTAINED THROUGH THE
                  WEBSITE ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS
                  AVAILABLE&quot; BASIS WITH ALL FAULTS, WITHOUT ANY WARRANTIES
                  OF ANY KIND, EITHER EXPRESS OR IMPLIED. NEITHER ROUTINR NOR
                  ANY PERSON ASSOCIATED WITH ROUTINR MAKES ANY WARRANTY OR
                  REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY,
                  RELIABILITY, QUALITY, ACCURACY, FITNESS FOR PURPOSE OR
                  AVAILABILITY OF THE WEBSITE OR ROUTINES WITHIN IT. NO ORAL OR
                  WRITTEN INFORMATION OR ADVICE GIVEN BY ROUTINR, A SELLER OR
                  ITS AUTHORIZED REPRESENTATIVE SHALL CREATE A WARRANTY.THE
                  FOREGOING DOES NOT AFFECT ANY WARRANTIES WHICH CANNOT BE
                  EXCLUDED OR LIMITED UNDER APPLICABLE LAW.
                </p>
                <p>
                  SHOULD THE ROUTINE FILES PROVE DEFECTIVE, SELLERS SHALL ASSUME
                  THE ENTIRE COST OF ALL NECESSARY SERVICING, REPAIR, OR
                  CORRECTION. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF
                  IMPLIED WARRANTIES OR LIMITATIONS ON APPLICABLE STATUTORY
                  RIGHTS OF A CONSUMER, SO THE ABOVE EXCLUSION AND LIMITATIONS
                  MAY NOT APPLY TO YOU.
                </p>
                <p>
                  CERTAIN LEGISLATION, INCLUDING THE AUSTRALIAN COMPETITION AND
                  CONSUMER ACT 2010 (CTH), MAY IMPLY WARRANTIES OR CONDITIONS OR
                  IMPOSE OBLIGATIONS WHICH CANNOT BE EXCLUDED, RESTRICTED OR
                  MODIFIED EXCEPT TO A LIMITED EXTENT. THESE TERMS MUST IN ALL
                  CASES BE READ SUBJECT TO THESE STATUTORY PROVISIONS. IF
                  ROUTINR IS LIABLE TO YOU UNDER THE AUSTRALIAN COMPETITION AND
                  CONSUMER ACT 2010 (CTH) OR SIMILAR LEGISLATION, TO THE EXTENT
                  TO WHICH ROUTINR IS ENTITLED TO DO SO, ROUTINR LIMITS ITS
                  LIABILITY IN RESPECT OF ANY CLAIM UNDER THOSE PROVISIONS TO:
                </p>
                <LegalTextTermsList $size="large" $padding>
                  <li>
                    <p>
                      IN THE CASE OF GOODS, AT ROUTINR’S OPTION: (i)THE
                      REPLACEMENT OF THE GOODS OR THE SUPPLY OF EQUIVALENT
                      GOODS; (ii) THE REPAIR OF THE GOODS; (iii) THE PAYMENT OF
                      THE COST OF REPLACING THE GOODS OR OF ACQUIRING EQUIVALENT
                      GOODS; AND
                    </p>
                  </li>
                  <li>
                    <p>
                      IN THE CASE OF SERVICES, AT ROUTINR’S OPTION: (i)THE
                      SUPPLYING OF THE SERVICES AGAIN; OR (ii) THE PAYMENT OF
                      THE COST OF HAVING THE SERVICES SUPPLIED AGAIN.
                    </p>
                  </li>
                </LegalTextTermsList>
              </li>
              <li>
                <h2>Limitation on Liability</h2>
                <p>
                  IN NO EVENT WILL ROUTINR, ITS AFFILIATES OR THEIR LICENSORS,
                  SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS OR DIRECTORS BE
                  LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY,
                  ARISING OUT OF OR IN CONNECTION WITH THE USE, OR INABILITY TO
                  USE, THE SITE, ANY WEBSITES LINKED TO IT, ANY CONTENT ON THE
                  SITE OR SUCH OTHER WEBSITES OR ANY SERVICES OR ITEMS OBTAINED
                  THROUGH THE SITE OR SUCH OTHER WEBSITES, INCLUDING ANY DIRECT,
                  INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL OR PUNITIVE
                  DAMAGES, INCLUDING BUT NOT LIMITED TO, PERSONAL INJURY, PAIN
                  AND SUFFERING, DEATH, EMOTIONAL DISTRESS, LOSS OF REVENUE,
                  LOSS OF PROFITS, LOSS OF BUSINESS OR ANTICIPATED SAVINGS, LOSS
                  OF USE, LOSS OF GOODWILL, LOSS OF DATA, AND WHETHER CAUSED BY
                  TORT (INCLUDING NEGLIGENCE), BREACH OF CONTRACT OR OTHERWISE,
                  EVEN IF FORESEEABLE. THE FOREGOING DOES NOT AFFECT ANY
                  LIABILITY WHICH CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE
                  LAW.
                </p>
                <p>
                  SOME JURISDICTIONS DO NOT ALLOW THE LIMITATION OF LIABILITY
                  FOR PERSONAL INJURY, OR OF INCIDENTAL OR CONSEQUENTIAL
                  DAMAGES, SO THIS LIMITATION MAY NOT APPLY TO YOU. CERTAIN
                  LEGISLATION, INCLUDING THE{' '}
                  <i>AUSTRALIAN COMPETITION AND CONSUMER ACT 2010(CTH)</i>, MAY
                  LIMIT THE ABILITY TO EXCLUDE LIABILITY. IF ROUTINR IS LIABLE
                  TO YOU UNDER THE
                  <i>AUSTRALIAN COMPETITION AND CONSUMER ACT 2010 (CTH)</i> OR
                  SIMILAR LEGISLATION, TO THE EXTENT TO WHICH ROUTINR IS
                  ENTITLED TO DO SO, ROUTINR LIMITS ITS LIABILITY IN RESPECT OF
                  ANY CLAIM UNDER THOSE PROVISIONS TO:
                </p>
                <LegalTextTermsList $size="large" $padding>
                  <li>
                    <p>
                      IN THE CASE OF GOODS, AT ROUTINR’S OPTION: (i)THE
                      REPLACEMENT OF THE GOODS OR THE SUPPLY OF EQUIVALENT
                      GOODS; (ii) THE REPAIR OF THE GOODS; (iii) THE PAYMENT OF
                      THE COST OF REPLACING THE GOODS OR OF ACQUIRING EQUIVALENT
                      GOODS; AND
                    </p>
                  </li>
                  <li>
                    <p>
                      IN THE CASE OF SERVICES, AT ROUTINR’S OPTION: (i) THE
                      SUPPLYING OF THE SERVICES AGAIN; OR (ii) THE PAYMENT OF
                      THE COST OF HAVING THE SERVICES SUPPLIED AGAIN.
                    </p>
                  </li>
                </LegalTextTermsList>
                <p>
                  To the maximum extent permitted by law, in no event shall
                  Routinr’s total liability to you for all damages exceed the
                  amount of fifty Australian dollars (AUD$50.00).
                </p>
              </li>
              <li>
                <h2>General</h2>
                <LegalTextTermsList>
                  <li>
                    <p>
                      These Terms of Service constitutes the entire agreement
                      between a User and Routinr and thereby governs the use of
                      the Services, superseding any prior agreements with
                      respect to the same subject matter. A User also may be
                      subject to additional terms and conditions that may apply
                      when you use affiliate services, third-party content or
                      third-party services such as the payment gateway or App
                      Store.
                    </p>
                  </li>
                  <li>
                    <p>
                      Routinr may make changes to its Terms of Service from time
                      to time. When these changes are made, Routinr will make a
                      new copy of the Terms of Service available on this page.
                    </p>
                  </li>
                  <li>
                    <p>
                      You understand and agree that if you use Routinr after the
                      date on which the Terms of Service have changed, Routinr
                      will treat your use as acceptance of the updated Terms of
                      Service.
                    </p>
                  </li>
                  <li>
                    <p>
                      This Agreement is governed by the laws of New South Wales,
                      Australia. Each User and Routinr submit to the exclusive
                      jurisdiction of the courts of New South Wales, Australia.
                    </p>
                  </li>
                </LegalTextTermsList>
              </li>
            </LegalTextList>
          </LegalTextContainer>
        </SideNav>
      </PageContent>
      <Footer />
    </PageWrapper>
  );
}

export default Terms;
