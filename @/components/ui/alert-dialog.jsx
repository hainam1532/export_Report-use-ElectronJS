"use client"

import * as React from "react"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const AlertDialog = AlertDialogPrimitive.Root

const AlertDialogTrigger = AlertDialogPrimitive.Trigger

const AlertDialogPortal = AlertDialogPrimitive.Portal

const AlertDialogOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      "tailwind.config.jsfixed tailwind.config.jsinset-0 tailwind.config.jsz-50 tailwind.config.jsbg-black/80 tailwind.config.js data-[state=open]:tailwind.config.jsanimate-in data-[state=closed]:tailwind.config.jsanimate-out data-[state=closed]:tailwind.config.jsfade-out-0 data-[state=open]:tailwind.config.jsfade-in-0",
      className
    )}
    {...props}
    ref={ref} />
))
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName

const AlertDialogContent = React.forwardRef(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        "tailwind.config.jsfixed tailwind.config.jsleft-[50%] tailwind.config.jstop-[50%] tailwind.config.jsz-50 tailwind.config.jsgrid tailwind.config.jsw-full tailwind.config.jsmax-w-lg tailwind.config.jstranslate-x-[-50%] tailwind.config.jstranslate-y-[-50%] tailwind.config.jsgap-4 tailwind.config.jsborder tailwind.config.jsborder-slate-200 tailwind.config.jsbg-white tailwind.config.jsp-6 tailwind.config.jsshadow-lg tailwind.config.jsduration-200 data-[state=open]:tailwind.config.jsanimate-in data-[state=closed]:tailwind.config.jsanimate-out data-[state=closed]:tailwind.config.jsfade-out-0 data-[state=open]:tailwind.config.jsfade-in-0 data-[state=closed]:tailwind.config.jszoom-out-95 data-[state=open]:tailwind.config.jszoom-in-95 data-[state=closed]:tailwind.config.jsslide-out-to-left-1/2 data-[state=closed]:tailwind.config.jsslide-out-to-top-[48%] data-[state=open]:tailwind.config.jsslide-in-from-left-1/2 data-[state=open]:tailwind.config.jsslide-in-from-top-[48%] sm:tailwind.config.jsrounded-lg dark:tailwind.config.jsborder-slate-800 dark:tailwind.config.jsbg-slate-950",
        className
      )}
      {...props} />
  </AlertDialogPortal>
))
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName

const AlertDialogHeader = ({
  className,
  ...props
}) => (
  <div
    className={cn(
      "tailwind.config.jsflex tailwind.config.jsflex-col tailwind.config.jsspace-y-2 tailwind.config.jstext-center sm:tailwind.config.jstext-left",
      className
    )}
    {...props} />
)
AlertDialogHeader.displayName = "AlertDialogHeader"

const AlertDialogFooter = ({
  className,
  ...props
}) => (
  <div
    className={cn(
      "tailwind.config.jsflex tailwind.config.jsflex-col-reverse sm:tailwind.config.jsflex-row sm:tailwind.config.jsjustify-end sm:tailwind.config.jsspace-x-2",
      className
    )}
    {...props} />
)
AlertDialogFooter.displayName = "AlertDialogFooter"

const AlertDialogTitle = React.forwardRef(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn("tailwind.config.jstext-lg tailwind.config.jsfont-semibold", className)}
    {...props} />
))
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName

const AlertDialogDescription = React.forwardRef(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn(
      "tailwind.config.jstext-sm tailwind.config.jstext-slate-500 dark:tailwind.config.jstext-slate-400",
      className
    )}
    {...props} />
))
AlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName

const AlertDialogAction = React.forwardRef(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action ref={ref} className={cn(buttonVariants(), className)} {...props} />
))
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName

const AlertDialogCancel = React.forwardRef(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(
      buttonVariants({ variant: "outline" }),
      "tailwind.config.jsmt-2 sm:tailwind.config.jsmt-0",
      className
    )}
    {...props} />
))
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}
