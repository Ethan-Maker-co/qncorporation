import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/term-of-services",
      name: "Term of Services",
      component: () => import("@/views/Services.vue"),
    },
    {
      path: "/portfolio",
      name: "Portfolio",
      component: () => import("@/views/Portfolio.vue"),
    },
    {
      path: "/about",
      name: "About",
      component: () => import("@/views/About.vue"),
    },
    {
      path: "/contact",
      name: "Contact",
      component: () => import("@/views/Contact.vue"),
    },
    {
      path: "/policy",
      name: "Policy",
      component: () => import("@/views/Policy.vue"),
    },
    {
      path: "/setup",
      name: "Setup",
      component: () => import("@/views/Setup.vue"),
    },
    {
      path: "/services",
      name: "Terms of Service",
      component: () => import("@/views/Services.vue"),
    },
        {
      path: "/termsofservice",
      name: "Terms",
      component: () => import("@/views/Termsofservice.vue"),
    },
    {
      path: "/data-deletion",
      name: "Data Deletion",
      component: () => import("@/views/DataDeletion.vue"),
    },
    {
      path: "/privacy-policy",
      name: "Privacy Policy",
      component: () => import("@/views/PrivacyPolicy.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // If there's a saved scroll position (back/forward navigation), restore it
    if (savedPosition) {
      return savedPosition;
    }
    // Scroll to the top of the page for all other navigations
    return { top: 0 };
  },
});

export default router;
