"use client";

import AppHeader from "@/layout/AppHeader";
import Backdrop from "@/layout/Backdrop";
import React from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  // Dynamic class for main content margin based on sidebar state
  // const mainContentMargin = isMobileOpen
  //   ? "ml-0"
  //   : isExpanded || isHovered
  //   ? "lg:ml-[290px]"
  //   : "lg:ml-[90px]";

  return (
    <div className="min-h-screen xl:flex">
      {/* Sidebar and Backdrop */}
      {/* <AppSidebar /> */}
      <Backdrop />
      {/* Main Content Area */}
      <div
        // className={`flex-1 transition-all  duration-300 ease-in-out ${mainContentMargin}`}
        className={`flex-1 transition-all  duration-300 ease-in-out ml-0`}
      >
        {/* Header */}
        <AppHeader />
        {/* Page Content */}
        <div className="p-4 mx-auto md:p-6">{children}</div>
      </div>
    </div>
  );
}
