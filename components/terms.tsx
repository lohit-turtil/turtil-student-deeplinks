import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const termsAndConditions = [
  {
    id: 1,
    title: "Acceptance of Terms",
    content:
      "By using Turtle Student, you agree to these Terms and Conditions. Turtle Student is operated by Teachbricks Private Limited ('we', 'us', 'our'), a company registered in India.",
  },
  {
    id: 2,
    title: "Company Information",
    content:
      "Teachbricks Private Limited\nRegistered Address: 4-2-564 RADHA KRISHNA NAGAR ROTARY NAGAR, KHAMMAM, Telangana 507002, India\nPhone: +91-99XXXXX089",
  },
  {
    id: 3,
    title: "Licensing and Services",
    content:
      "All services provided through the Turtle Student app are owned and licensed by Teachbricks Private Limited. We comply with all applicable laws and regulations in India.",
  },
  {
    id: 4,
    title: "Eligibility",
    content:
      "You must be a college student in India and at least 18 years old to use Turtle Student. We reserve the right to verify your student status and age.",
  },
  {
    id: 5,
    title: "User Accounts",
    content:
      "• You are responsible for maintaining the confidentiality of your account\n• You must provide accurate and complete information when creating your account\n• You may not use another user's account without permission\n• We reserve the right to suspend or terminate accounts that violate our policies",
  },
  {
    id: 6,
    title: "User Content",
    content:
      "• You retain ownership of your content, but grant Turtle Student a non-exclusive, worldwide, royalty-free license to use, display, and distribute it within the app\n• You are responsible for your content and must not post illegal, offensive, or harmful material\n• We reserve the right to remove any content that violates our policies",
  },
  {
    id: 7,
    title: "Premium Features and Payments",
    content:
      "• Premium subscriptions allow messaging and full profile viewing\n• Subscriptions are billed on a recurring basis through authorized payment gateways\n• You can cancel your subscription at any time through the app or by contacting our support team\n• Refunds are subject to our refund policy, which complies with app store guidelines",
  },
  {
    id: 8,
    title: "Rewards and Leaderboards",
    content:
      "• Rewards are earned based on in-app activities\n• Rewards have no cash value and cannot be transferred or redeemed for cash\n• We reserve the right to modify or terminate the rewards program at any time",
  },
  {
    id: 9,
    title: "Prohibited Activities",
    content:
      "• Spam, harassment, or abuse of other users\n• Impersonation of others\n• Posting false or misleading information\n• Unauthorized commercial activities\n• Any activity that violates local, state, or national laws",
  },
  {
    id: 10,
    title: "Intellectual Property",
    content:
      "Turtle Student and its original content are protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used without our prior written permission.",
  },
  {
    id: 11,
    title: "Limitation of Liability",
    content:
      "Turtle Student is not responsible for the actions, content, information, or data of third parties. You use the app at your own risk. To the fullest extent permitted by law, we disclaim all warranties, express or implied.",
  },
  {
    id: 12,
    title: "Termination",
    content:
      "We may terminate or suspend your account for violations of these Terms, illegal activities, or any other reason at our sole discretion, without prior notice.",
  },
  {
    id: 13,
    title: "Governing Law and Dispute Resolution",
    content:
      "These Terms shall be governed by the laws of India. Any disputes shall be resolved through arbitration in accordance with the Arbitration and Conciliation Act, 1996 of India.",
  },
  {
    id: 14,
    title: "Changes to Terms",
    content:
      "We reserve the right to modify these terms at any time. We will provide notice of significant changes through the app or via email.",
  },
  {
    id: 15,
    title: "Third-Party Services",
    content:
      "Our app may integrate with third-party services, including payment gateways and app stores. Your use of these services is subject to their respective terms and conditions.",
  },
  {
    id: 16,
    title: "Refund Policy",
    content:
      "Refunds are subject to our refund policy, which complies with app store guidelines. Please refer to our separate Refund Policy document for detailed information.",
  },
  {
    id: 17,
    title: "Contact Information",
    content:
      "For any questions regarding these Terms, please contact us at:\nTeachbricks Private Limited\n4-2-564 RADHA KRISHNA NAGAR ROTARY NAGAR\nKHAMMAM, Telangana 507002\nIndia\nPhone: +91-99XXXXX089\nEmail: support@turtlestudent.co",
  },
];

const TermsAndConditions = () => {
  return (
    <div className="p-8">
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Terms and Conditions for Turtle Student
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {termsAndConditions.map((term) => (
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

export default TermsAndConditions;
