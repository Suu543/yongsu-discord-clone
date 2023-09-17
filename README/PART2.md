# Part2

## Initial Modal UI

- Dialog: https://ui.shadcn.com/docs/components/dialog
- Input: https://ui.shadcn.com/docs/components/input
- Form: https://ui.shadcn.com/docs/components/form

```bash
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add input
npx shadcn-ui@latest add form
```

```tsx
// components/modals/initial-modal.tsx
"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Server name is required!",
  }),
  imageUrl: z.string().min(1, {
    message: "Server image is required!",
  }),
});

export const InitialModal = () => {
  // Hydration 오류 방지
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // isSubmitting은 내장형
  const form = useForm({
    defaultValues: {
      name: "",
      imageUrl: "",
    },
  });

  console.log("form: ", form.control);

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // console.log(values);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <Dialog open>
      <DialogContent className="p-0 overflow-hidden text-black bg-white">
        <DialogHeader className="px-6 pt-8">
          <DialogTitle className="text-2xl font-bold text-center">
            Customize Your Server
          </DialogTitle>
          <DialogDescription className="text-center text-zinc-500">
            Give your server a personality with a name and an image. You can
            always change it later.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="px-6 space-y-8">
              <div className="flex items-center justify-center text-clip">
                TODO: Image Upload
              </div>

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs font-bold uppercase text-zinc-500 dark:text-secondary/70">
                      ServerName
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        className="text-black border-0 bg-zinc-300/50 focus-visible:ring-0 focus-visible:ring-offset-0"
                        placeholder="Enter Server Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter className="px-6 py-4 bg-gray-100">
              <Button disabled={isLoading} variant="primary">
                Create
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
```

## UploadThing Setup

- https://uploadthing.com/dashboard
- package: https://docs.uploadthing.com/getting-started

```bash
npm install uploadthing @uploadthing/react react-dropzone
```

- UploadThing Setup
- https://docs.uploadthing.com/nextjs/appdir

1. components/modals/initial-modal.tsx 정의
2. 공식문서 참고해서 다음 두 파일 생성

- app/api/uploadthing/core.ts
- app/api/uploadthing/route.ts

3. components/file-upload.tsx 파일 생성

```tsx
"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { FileUpload } from "@/components/file-upload";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Server name is required!",
  }),
  imageUrl: z.string().min(1, {
    message: "Server image is required!",
  }),
});

export const InitialModal = () => {
  // Hydration 오류 방지
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // isSubmitting은 내장형
  const form = useForm({
    defaultValues: {
      name: "",
      imageUrl: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <Dialog open>
      <DialogContent className="p-0 overflow-hidden text-black bg-white">
        <DialogHeader className="px-6 pt-8">
          <DialogTitle className="text-2xl font-bold text-center">
            Customize Your Server
          </DialogTitle>
          <DialogDescription className="text-center text-zinc-500">
            Give your server a personality with a name and an image. You can
            always change it later.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="px-6 space-y-8">
              <div className="flex items-center justify-center text-clip">
                <FormField
                  control={form.control}
                  name="imageUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        {/* core.ts에서 정의한 프로퍼티 키값이 주소가됨 */}
                        <FileUpload
                          endpoint="serverImage"
                          value={field.value}
                          onChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs font-bold uppercase text-zinc-500 dark:text-secondary/70">
                      ServerName
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        className="text-black border-0 bg-zinc-300/50 focus-visible:ring-0 focus-visible:ring-offset-0"
                        placeholder="Enter Server Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter className="px-6 py-4 bg-gray-100">
              <Button disabled={isLoading} variant="primary">
                Create
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
```

## Server Creation API

```bash
npx prisma studio
npm install axios
npm install uuid
npm install -D @types/uuid
```

- 모든 API 요청시 로그인 된 사람을 체크할 수 있는 함수 생성
- lib/current-profile.ts

1. initial-modal에서 서버 생성
2. 서버 생성 과정에 (app/api/servers/route.ts)

- 모든 서버는 general이라는 하나의 서버를 가짐.
- 모든 서버의 첫번째 멤버는 생성자 자기자신 (ADMIN)
