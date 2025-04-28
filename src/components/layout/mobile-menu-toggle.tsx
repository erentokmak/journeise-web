"use client"

import * as React from "react"
import { Menu, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu"
import Link from "next/link"

export function MobileModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu  className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Menu className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <Link href="/">
          <DropdownMenuItem>
            Anasayfa
          </DropdownMenuItem>
        </Link>
        <Link href="/about">
          <DropdownMenuItem>
            Hakkımızda
          </DropdownMenuItem>
        </Link>
        <Link href="/countries">
          <DropdownMenuItem>
            Ülkeler
          </DropdownMenuItem>
        </Link>
        <Link href="/blog">
          <DropdownMenuItem>
            Blog
          </DropdownMenuItem>
        </Link>
        <Link href="/faq">
          <DropdownMenuItem>
            SSS
          </DropdownMenuItem>
        </Link>
        <Link href="/contact">
          <DropdownMenuItem>
            İletişim
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 