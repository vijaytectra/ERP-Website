'use client'

import React, { useActionState, useEffect, useState, useTransition } from 'react' // Import useTransition
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Loader2, AlertCircle } from 'lucide-react'
import { contactFormSchema } from './schema/contactformschema'
import PrivacyPolicyModal from './PrivacyPolicyModal'
import { ServerActionState, submitContactForm } from '@/app/actions/contactform.actions'

type ContactFormData = z.infer<typeof contactFormSchema>

// SubmitButton now receives the isPending state as a prop
const SubmitButton = ({ isPending }: { isPending: boolean }) => {
  return (
    <Button
      type="submit"
      disabled={isPending}
      aria-label="submit form"
      className="w-full bg-primary-web cursor-pointer hover:bg-primary-web/90 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isPending ? (
        <div className="flex items-center justify-center space-x-2">
          <Loader2 className="h-4 w-4 animate-spin" />
          <span>Submitting...</span>
        </div>
      ) : (
        'Submit Form'
      )}
    </Button>
  )
}

const ContactForm = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false)
  // --- THIS IS THE FIX ---
  const [isPending, startTransition] = useTransition()

  const initialState: ServerActionState = {
    success: false,
    message: '',
    errors: null,
  }

  const [state, formAction] = useActionState(submitContactForm, initialState)

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onTouched',
    defaultValues: {
      name: '',
      institutionName: '',
      email: '',
      mobileNumber: '',
      message: '',
      consent: false,
    },
  })

  const onSubmit = (data: ContactFormData) => {
    const formData = new FormData()
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, String(value))
    })

    // Wrap the server action call in startTransition
    startTransition(() => {
      formAction(formData)
    })
  }

  useEffect(() => {
    if (state.success) {
      form.reset()
    }
  }, [state, form])

  if (state.success) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <Card className="border-green-200 bg-green-50/50 text-center">
          <CardContent className="pt-6">
            <div className="flex items-center justify-center space-x-2 text-green-700">
              <CheckCircle className="h-8 w-8" />
              <h2 className="text-2xl font-semibold">Thank You!</h2>
            </div>
            <p className="text-green-600 mt-2">{state.message}</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto lg:p-10">
      <Card className="shadow-lg bg-black border-none">
        <CardHeader className="text-left">
          <CardTitle className="text-xl font-bold text-primary-web">Request A Demo</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <FormField control={form.control} name="name" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center text-white font-medium">Full Name <span className='text-red-600'>*</span></FormLabel>
                    <FormControl><Input placeholder="e.g., John Doe" {...field} className="bg-white rounded-sm border-[1px] border-gray-300 px-1 h-auto focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-blue-500 transition-colors" /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="institutionName" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center text-white font-medium">Institution Name <span className='text-red-600'>*</span></FormLabel>
                    <FormControl><Input placeholder="e.g., Springfield University" {...field} className="bg-white rounded-sm border-[1px] border-gray-300 px-1 h-auto focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-blue-500 transition-colors" /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <FormField control={form.control} name="email" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center text-white font-medium">Email Address <span className='text-red-600'>*</span></FormLabel>
                    <FormControl><Input type="email" placeholder="e.g., john.doe@example.com" {...field} className="bg-white rounded-sm border-[1px] border-gray-300 px-1 h-auto focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-blue-500 transition-colors" /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField
                  control={form.control}
                  name="mobileNumber"
                  render={({ field }) => {
                    // Create a new onChange handler to intercept and sanitize the input
                    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
                      // Use a regular expression to remove any non-digit characters
                      const numericValue = e.target.value.replace(/[^0-9]/g, '');
                      // Call the original onChange from the field prop with the sanitized value
                      field.onChange(numericValue);
                    };

                    return (
                      <FormItem>
                        <FormLabel className="flex items-center text-white font-medium">
                          Mobile Number <span className='text-red-600'>*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="tel" // Keep 'tel' for better mobile UX
                            placeholder="e.g., 9876543210"
                            {...field} // Spread the original field props
                            onChange={handleInputChange} // Override the onChange handler
                            className="bg-white rounded-sm border-[1px] border-gray-300 px-1 h-auto focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-blue-500 transition-colors"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
              </div>
              <FormField control={form.control} name="message" render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-white font-medium'>Message <span className='text-red-600'>*</span></FormLabel>
                  <FormControl><Textarea placeholder="Please describe your inquiry..." rows={4} {...field} className="bg-white rounded-sm border-[1px] border-gray-300 px-1 h-auto focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-blue-500 transition-colors" /></FormControl>
                  <div className="flex justify-between items-center"><FormMessage /><span className="text-xs text-white ml-auto">{field.value?.length || 0}/500</span></div>
                </FormItem>
              )} />
              <FormField control={form.control} name="consent" render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl><Checkbox checked={field.value} onCheckedChange={field.onChange} className="mt-0.5 border-white" /></FormControl>
                  <div className="space-y-1 leading-none">
                    <label htmlFor={field.name} className="text-sm font-medium leading-snug text-white cursor-pointer">
                      I agree to the{' '}
                      <button type="button" onClick={(e) => { e.stopPropagation(); setIsPrivacyOpen(true); }} className="text-blue-600 underline hover:text-blue-800 focus:outline-none">
                        Privacy Policy
                      </button>{' '}
                      and consent to the use of my personal information.{' '}
                      <span className="text-red-600">*</span>
                    </label>
                    <FormMessage />
                  </div>
                </FormItem>
              )} />

              <div className="pt-4">
                {/* Pass the pending state to the button */}
                <SubmitButton isPending={isPending} />
              </div>

              {!state.success && state.message && (
                <div className="flex items-center p-3 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
                  <AlertCircle className="flex-shrink-0 inline w-4 h-4 mr-3" />
                  <span className="font-medium">{state.errors || state.message}</span>
                </div>
              )}
              <p className="text-xs text-white text-center">* All fields are required</p>
            </form>
          </Form>
        </CardContent>
      </Card>
      <PrivacyPolicyModal isActive={isPrivacyOpen} setIsActive={setIsPrivacyOpen} />
    </div>
  )
}

export default ContactForm
