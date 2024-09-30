'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { ArrowRightIcon, MailIcon, MessageSquare, User } from 'lucide-react';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const formSchema = z.object({
  name: z.string().min(1, {
    message: 'Name is required.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  message: z
    .string()
    .min(10, {
      message: 'Message must be at least 10 characters.',
    })
    .max(500, {
      message: 'Message must be at most 500 characters.',
    }),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // TODO: handle form submission
    console.log('values:', values);
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-y-4 [&_label]:flex [&_label]:items-center [&_label]:gap-x-1"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        {/* name */}
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <User size={20} />
                <span>Name</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* email */}
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <MailIcon size={20} />
                <span>Email</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="yourmail@xxx.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* message */}
        <FormField
          name="message"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <MessageSquare size={20} />
                <span>Message</span>
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Type your message here."
                  rows={5}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="flex max-w-[166px] items-center gap-x-1"
          type="submit"
        >
          Let&apos;s Talk
          <ArrowRightIcon size={20} />
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
