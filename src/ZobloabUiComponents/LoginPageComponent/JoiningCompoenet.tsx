// import Link from "next/link"
import React, { useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import GoogleJoinComponent from './GoogleLoginComponent';


export default function JoiningCompoenet() {
  return (
    <div className="login-component">
      <div className="login-component-interir">
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">Join now</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first-name">First name</Label>
              <Input id="first-name" placeholder="Max" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input id="last-name" placeholder="Robinson" required />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="Phone">Phone Number</Label>
            <Input
              id="Phone"
              type="tel"
              placeholder="Phone number"
              pattern="[0-9]{10}"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="Re-enter-password">Re-enter the password</Label>
            <Input id="Re-enter-password" type="password" />
          </div>
          <Button type="submit" className="w-full">
            Join now
          </Button>
          <GoogleJoinComponent />
        </div>
      </CardContent>
    </Card>
    </div>
    </div>
  )
}
