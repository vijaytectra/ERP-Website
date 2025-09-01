// components/PrivacyPolicyModal.tsx
"use client"

import React from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface PrivacyPolicyModalProps {
  isActive: boolean
  setIsActive: (open: boolean) => void
}

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({
  isActive,
  setIsActive,
}) => {
  return (
    <Dialog open={isActive} onOpenChange={setIsActive}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Privacy Policy
          </DialogTitle>
          <DialogDescription>
            Last updated: {new Date().toLocaleDateString()}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 text-sm text-gray-700">
          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Information We Collect
            </h3>
            <p>
              We collect information you provide directly to us, such as when
              you fill out our contact form. This may include your name, email
              address, phone number, institution name, and any messages you send
              to us.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              How We Use Your Information
            </h3>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you information about our products and services</li>
              <li>Improve our services and develop new features</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Information Sharing
            </h3>
            <p>
              We do not sell, trade, or otherwise transfer your personal
              information to third parties without your consent, except as
              described in this policy or as required by law.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Data Security
            </h3>
            <p>
              We implement appropriate security measures to protect your
              personal information against unauthorized access, alteration,
              disclosure, or destruction.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Contact Us
            </h3>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us through our contact form or email.
            </p>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default PrivacyPolicyModal
