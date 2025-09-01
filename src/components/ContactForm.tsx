'use client'

import { useState } from 'react'
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
import { CheckCircle, Loader2 } from 'lucide-react'
import { contactFormSchema } from './schema/contactformschema'
import PrivacyPolicyModal from './PrivacyPolicyModal'

type ContactFormData = z.infer<typeof contactFormSchema>

const ContactForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isPrivacyOpen, setIsPrivacyOpen] = useState(false)

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

    const { isSubmitting, isValid } = form.formState

    const onSubmit = async (data: ContactFormData) => {
        try {
            await new Promise(resolve => setTimeout(resolve, 2000))
            console.log('Form submitted:', data)
            setIsSubmitted(true)
            form.reset()
        } catch (error) {
            console.error('Submission error:', error)
        }
    }



    if (isSubmitted) {
        return (
            <div className="max-w-2xl mx-auto p-6">
                <Card className="border-green-200 bg-green-50 text-center">
                    <CardContent className="pt-6">
                        <div className="flex items-center justify-center space-x-2 text-green-700">
                            <CheckCircle className="h-8 w-8" />
                            <h2 className="text-2xl font-semibold">Thank You!</h2>
                        </div>
                        <p className="text-green-600 mt-2">
                            Your message has been sent successfully. We will get back to you shortly.
                        </p>
                        <div className="flex justify-center mt-6">
                            <Button
                                onClick={() => setIsSubmitted(false)}
                                variant="outline"
                                className="border-green-300 text-green-700 hover:bg-green-100"
                            >
                                Submit Another Response
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        )
    }

    return (
        <div className="max-w-2xl mx-auto ">
            <Card className="shadow-lg">
                <CardHeader className="text-left">
                    <CardTitle className="text-xl font-bold text-primary-web">Request A Demo</CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="flex items-center text-text-heading">
                                                Full Name <span className='text-red-600'>*</span>
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="e.g., John Doe"
                                                    {...field}
                                                    className="bg-transparent border-0 border-b border-gray-300 rounded-none px-1 h-auto focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-blue-500 transition-colors"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="institutionName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="flex items-center text-text-heading">Institution Name <span className='text-red-600'>*</span></FormLabel>
                                            <FormControl>
                                                <Input placeholder="e.g., Springfield University" {...field} className="bg-transparent border-0 border-b border-gray-300 rounded-none px-1 h-auto focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-blue-500 transition-colors"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="flex items-center">Email Address <span className='text-red-600'>*</span></FormLabel>
                                            <FormControl>
                                                <Input type="email" placeholder="e.g., john.doe@example.com" {...field}
                                                    className="bg-transparent border-0 border-b border-gray-300 rounded-none px-1 h-auto focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-blue-500 transition-colors"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="mobileNumber"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="flex items-center">Mobile Number <span className='text-red-600'>*</span></FormLabel>
                                            <FormControl>
                                                <Input type="tel" placeholder="e.g., +1 234 567 890" {...field}
                                                    className="bg-transparent border-0 border-b border-gray-300 rounded-none px-1 h-auto focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-blue-500 transition-colors"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Message <span className='text-red-600'>*</span></FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Please describe your inquiry..."
                                                rows={4}
                                                {...field}
                                                className="bg-transparent border-0 border-b border-gray-300 rounded-none px-1 h-auto focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-blue-500 transition-colors"
                                            />
                                        </FormControl>
                                        <div className="flex justify-between items-center">
                                            <FormMessage />
                                            <span className="text-xs text-gray-500 ml-auto">
                                                {field.value?.length || 0}/500
                                            </span>
                                        </div>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="consent"
                                render={({ field }) => (
                                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                                className="mt-0.5 border-black"
                                            />
                                        </FormControl>
                                        <div className="space-y-1 leading-none">
                                            <label
                                                htmlFor={field.name}
                                                className="text-sm font-medium leading-snug text-gray-700 cursor-pointer"
                                            >
                                                I agree to the{' '}
                                                <button
                                                    type="button"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setIsPrivacyOpen(true);
                                                    }}
                                                    className="text-blue-600 underline hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                                                >
                                                    Privacy Policy
                                                </button>{' '}
                                                and consent to the use of my personal information.{' '}
                                                <span className="text-red-600">*</span>
                                            </label>
                                            <FormMessage />
                                        </div>
                                    </FormItem>
                                )}
                            />

                            <div className="pt-4">
                                <Button
                                    type="submit"
                                    disabled={isSubmitting || !isValid}
                                    className="w-full bg-primary-web cursor-pointer  hover:bg-primary-web/90 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center space-x-2">
                                            <Loader2 className="h-4 w-4 animate-spin text-black" />
                                            <span>Submitting...</span>
                                        </div>
                                    ) : (
                                        'Submit Form'
                                    )}
                                </Button>
                            </div>

                            <p className="text-xs text-gray-500 text-center">
                                * All fields are required
                            </p>
                        </form>
                    </Form>
                </CardContent>
            </Card>

            {/* Render the Privacy Policy Modal */}
            <PrivacyPolicyModal isActive={isPrivacyOpen} setIsActive={setIsPrivacyOpen} />
        </div>
    )
}

export default ContactForm