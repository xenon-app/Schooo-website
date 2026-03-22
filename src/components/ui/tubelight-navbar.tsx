"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Link, useLocation } from "react-router-dom"
import { type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
  rightItem?: NavItem
}

export function NavBar({ items, className, rightItem }: NavBarProps) {
  const location = useLocation()
  const [activeTab, setActiveTab ] = useState(items[0]?.name || "")



  // Update active tab based on location
  useEffect(() => {
    const currentPath = location.pathname
    const match = items.find(item => item.url === currentPath)
    if (match) {
      setActiveTab(match.name)
    } else if (rightItem && rightItem.url === currentPath) {
      setActiveTab("") // Don't highlight any of the main items if right item is active
    }
  }, [location.pathname, items, rightItem])

  return (
    <div
      className={cn(
        "fixed top-0 left-1/2 -translate-x-1/2 z-50 pt-6",
        className,
      )}
    >
      <div className="flex items-center gap-2 bg-navy/60 border border-white/10 backdrop-blur-2xl py-2 px-2 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              to={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300",
                "text-white/50 hover:text-white uppercase tracking-wider",
                isActive && "text-white",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-white/10 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-white rounded-t-full">
                    <div className="absolute w-12 h-6 bg-white/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-white/10 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-white/5 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}

        {rightItem && (
          <Link
            to={rightItem.url}
            className={cn(
              "ml-2 px-6 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-500",
              location.pathname === rightItem.url 
                ? "bg-cta text-white scale-105 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                : "bg-white text-navy hover:bg-cta hover:text-white hover:scale-105"
            )}
          >
            {rightItem.name}
          </Link>
        )}
      </div>
    </div>
  )
}
