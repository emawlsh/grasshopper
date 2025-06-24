import {
  Outlet,
  ScrollRestoration,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import { Meta, Scripts } from "@tanstack/start";
import * as React from "react";
import type { QueryClient } from "@tanstack/react-query";
import { DefaultCatchBoundary } from "../components/DefaultCatchBoundary";
import { NotFound } from "../components/NotFound";
import { Analytics } from "@vercel/analytics/react";
import {
  ClerkProvider,
  SignIn,
  SignedOut,
  UserButton,
  SignedIn,
  SignInButton,
  useUser,
} from "@clerk/tanstack-react-start";
import { useState } from "react";

import { createServerFn } from "@tanstack/start";
import { getAuth } from "@clerk/tanstack-react-start/server";
import { getWebRequest } from "@tanstack/start/server";
import { useRouterState } from "@tanstack/react-router";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "../components/ui/navigation-menu";

const fetchClerkAuth = createServerFn({ method: "GET" }).handler(async () => {
  const { userId } = await getAuth(getWebRequest()!);

  console.log = () => {};
  console.info = () => {};

  return {
    userId,
  };
});

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
    ],
    links: [{ rel: "icon", href: "/logo.png" }],
  }),
  beforeLoad: async ({ location }) => {
    // Skip auth check for share routes
    if (location.pathname.startsWith("/share/")) {
      return {};
    }

    const { userId } = await fetchClerkAuth();
    return {
      userId,
    };
  },
  errorComponent: (props) => {
    return (
      <RootDocument>
        <DefaultCatchBoundary {...props} />
      </RootDocument>
    );
  },
  notFoundComponent: () => <NotFound />,
  component: RootComponent,
});

function RootComponent() {
  const location = useRouterState({ select: (s) => s.location });
  const isShareRoute = location.pathname.startsWith("/share/");
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
  };

  return (
    <ClerkProvider>
      <RootDocument>
        <SignedIn>
          <div className="flex h-screen bg-gray-50">
            <aside className="w-64 h-screen bg-white border-r shadow-sm p-4">
              <NavigationMenu orientation="vertical" className="w-full">
                <NavigationMenuList className="flex flex-col space-y-2">
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="w-full justify-start text-left">
                      Item One
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="w-full">
                      <NavigationMenuLink className="block px-4 py-2 hover:bg-gray-100 rounded">
                        Link
                      </NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Add more items here if needed */}
                </NavigationMenuList>
              </NavigationMenu>
              <UserButton />
            </aside>
            <main className="flex-1 p-6">
              <Outlet />
            </main>
          </div>
        </SignedIn>
        <SignedOut>
          <div>
            <SignInButton mode="modal" />
          </div>
        </SignedOut>
      </RootDocument>
    </ClerkProvider>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <Meta />
      </head>
      <body>
        <div>{children}</div>
        <ScrollRestoration />
        <Scripts />
        <Analytics />
      </body>
    </html>
  );
}
