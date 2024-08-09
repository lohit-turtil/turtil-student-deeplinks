import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const privacyPolicy = [
  {
    id: 1,
    title: "Introduction",
    content:
      "Turtil Student is a community app for college students in India, operated by Teachbricks Private Limited ('we', 'us', 'our'), a company registered in India. This privacy policy explains how we collect, use, and protect your personal information in compliance with applicable data protection laws.",
  },
  {
    id: 2,
    title: "Information We Collect",
    content:
      "- Personal Information: Name, email address, college affiliation, profile picture\n- User Content: Posts, comments, messages, listings for used items, room shares, ride shares\n- Usage Data: Interactions within the app, game participation, rewards earned\n- Location Data: For ride sharing and event features (with your consent)\n- Payment Information: For premium subscriptions (processed securely by authorized payment gateways)",
  },
  {
    id: 3,
    title: "How We Use Your Information",
    content:
      "- To provide and maintain our service\n- To enable interactions between users\n- To process transactions and manage accounts\n- To organize and facilitate events and games\n- To provide customer support\n- To send service-related communications\n- To improve our services and develop new features",
  },
  {
    id: 4,
    title: "Data Sharing and Disclosure",
    content:
      "We may share your information with:\n- Other users, as part of the app's functionality\n- Third-party service providers (e.g., payment processors, cloud storage providers)\n- Advertising partners, for targeted advertising (with your explicit consent)\n- Legal authorities, when required by law or to protect our rights",
  },
  {
    id: 5,
    title: "Data Security",
    content:
      "We implement industry-standard security measures to protect your data, including encryption and access controls. However, no method of transmission over the Internet is 100% secure.",
  },
  {
    id: 6,
    title: "User Rights",
    content:
      "You have the right to:\n- Access your personal data\n- Correct inaccuracies in your data\n- Delete your data\n- Object to processing of your data\n- Data portability\n- Withdraw consent (where processing is based on consent)\nTo exercise these rights, please contact us at support@turtilstudent.com.",
  },
  {
    id: 7,
    title: "Cookies and Tracking",
    content:
      "We use cookies and similar tracking technologies to enhance your experience. You can manage cookie preferences in your browser settings or through our app settings.",
  },
  {
    id: 8,
    title: "Data Retention",
    content:
      "We retain your data for as long as necessary to provide our services and comply with legal obligations. You can request deletion of your data at any time.",
  },
  {
    id: 9,
    title: "International Data Transfers",
    content:
      "Your data may be transferred to and processed in countries outside of India. We ensure appropriate safeguards are in place for such transfers.",
  },
  {
    id: 10,
    title: "Children's Privacy",
    content:
      "Our services are not intended for users under 18. We do not knowingly collect data from children under 18.",
  },
  {
    id: 11,
    title: "Changes to Privacy Policy",
    content:
      "We may update this policy from time to time. We will notify you of any significant changes via email or through the app.",
  },
  {
    id: 12,
    title: "Third-Party Services",
    content:
      "Our app may contain links to third-party websites or services. We are not responsible for their privacy practices. Please review their privacy policies before using their services.",
  },
  {
    id: 13,
    title: "Contact Us",
    content:
      "If you have any questions about this Privacy Policy, please contact us at:\nTeachbricks Private Limited\n4-2-564 RADHA KRISHNA NAGAR ROTARY NAGAR\nKHAMMAM, Telangana 507002\nIndia\nPhone: +91-9908121089\nEmail: support@turtilstudent.com\nData Protection Officer: privacy@turtilstudent.com",
  },
];

const PrivacyPolicy = () => {
  const allItemValues = privacyPolicy.map((item) => `item-${item.id}`);

  return (
    <div className="p-8">
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Privacy Policy for Turtil Student
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion
            type="multiple"
            defaultValue={allItemValues}
            className="w-full"
          >
            {privacyPolicy.map((term) => (
              <AccordionItem key={term.id} value={`item-${term.id}`}>
                <AccordionTrigger>{`${term.id}. ${term.title}`}</AccordionTrigger>
                <AccordionContent>
                  <div className="whitespace-pre-line">{term.content}</div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default PrivacyPolicy;
