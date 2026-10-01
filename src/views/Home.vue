
<template>
  <main>
    <!-- Hero Section -->
    <section
      id="home"
      class="min-h-[85vh] flex items-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50"
    >
      <div
        class="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-16"
      >
        <!-- Left Content -->
        <div class="text-left">
          <div
            class="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 mb-6"
          >
            <i class="pi pi-whatsapp text-lg"></i>
            Shopify & WhatsApp Integration
          </div>

          <h1
            class="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
            style="line-height: 1.2"
          >
            Connect Your Shopify Store with WhatsApp
          </h1>

          <p class="text-lg md:text-xl text-gray-600 mb-8 leading-8">
            WBA for Shopify helps merchants connect their Shopify stores
            with WhatsApp Business Platform. Simplify your setup, manage
            your integration, and bring your store and WhatsApp workflow
            closer together.
          </p>

          <div class="flex flex-wrap gap-4">
            <a
              href="#services"
              class="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700"
            >
              Explore Our Services
              <i class="pi pi-arrow-right"></i>
            </a>

            <router-link
              to="/contact"
              class="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-7 py-3 font-semibold text-gray-800 transition hover:bg-gray-50"
            >
              Contact Us
              <i class="pi pi-envelope"></i>
            </router-link>
          </div>

          <div class="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-500">
            <span class="flex items-center gap-2">
              <i class="pi pi-check-circle text-green-600"></i>
              Shopify integration
            </span>
            <span class="flex items-center gap-2">
              <i class="pi pi-check-circle text-green-600"></i>
              WhatsApp Business Platform
            </span>
          </div>
        </div>

        <!-- Right Illustration -->
        <div class="relative">
          <div
            class="absolute inset-4 rounded-full bg-blue-200/40 blur-3xl"
          ></div>

          <div
            class="relative rounded-3xl border border-gray-100 bg-white p-6 md:p-10 shadow-xl"
          >
            <img
              src="/banner1.png"
              alt="Elden Software logo"
              class="relative mx-auto w-full max-w-md object-contain transition-transform duration-300 hover:scale-105"
            />

            <div
              class="mt-6 rounded-2xl bg-gray-50 p-5"
            >
              <div class="flex items-center gap-4">
                <div
                  class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600"
                >
                  <i class="pi pi-whatsapp text-2xl"></i>
                </div>

                <div>
                  <h3 class="font-semibold text-gray-900">
                    Shopify + WhatsApp
                  </h3>
                  <p class="text-sm text-gray-500">
                    One connected workflow for your store
                  </p>
                </div>

                <div class="ml-auto text-green-600">
                  <i class="pi pi-link text-xl"></i>
                </div>
              </div>
            </div>
          </div>

          <div
            class="absolute -top-5 -right-5 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl"
          ></div>
          <div
            class="absolute -bottom-5 -left-5 h-24 w-24 rounded-full bg-purple-500/10 blur-2xl"
          ></div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-20 bg-white">
      <div class="container mx-auto px-6 md:px-12 lg:px-20">
        <div class="mx-auto max-w-3xl text-center mb-12">
          <p class="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-3">
            What We Do
          </p>

          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
            Software Solutions for Modern Businesses
          </h2>

          <p class="text-lg text-gray-600 leading-8">
            Elden Software builds practical software and integrations
            that help businesses connect their tools, simplify workflows,
            and operate more efficiently.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            v-for="service in services.slice(0, 3)"
            :key="service.title"
            v-bind="service"
          />
        </div>

        <div class="text-center mt-12">
          <router-link to="/services">
            <Button
              label="Explore All Services"
              icon="pi pi-arrow-right"
              iconPos="right"
              severity="secondary"
              class="p-button-rounded"
            />
          </router-link>
        </div>
      </div>
    </section>

    <!-- Product Highlight -->
    <section class="py-20 bg-gray-50">
      <div
        class="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <p class="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-3">
            Our Featured Product
          </p>

          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Meet WBA for Shopify
          </h2>

          <p class="text-lg text-gray-600 mb-6 leading-8">
            Connect your Shopify store with WhatsApp Business Platform
            through an integration designed for merchants. Configure
            your connection and manage the integration from one place.
          </p>

          <ul class="space-y-4 mb-8">
            <li class="flex items-start gap-3">
              <i class="pi pi-check-circle text-green-600 mt-1"></i>
              <div>
                <h3 class="font-semibold text-gray-900">
                  Connect Your Business Accounts
                </h3>
                <p class="text-gray-600 mt-1">
                  Set up the supported connection between Shopify
                  and WhatsApp Business Platform.
                </p>
              </div>
            </li>

            <li class="flex items-start gap-3">
              <i class="pi pi-check-circle text-green-600 mt-1"></i>
              <div>
                <h3 class="font-semibold text-gray-900">
                  Simplify Your Workflow
                </h3>
                <p class="text-gray-600 mt-1">
                  Manage supported integration settings in one place.
                </p>
              </div>
            </li>

            <li class="flex items-start gap-3">
              <i class="pi pi-check-circle text-green-600 mt-1"></i>
              <div>
                <h3 class="font-semibold text-gray-900">
                  Built for Shopify Merchants
                </h3>
                <p class="text-gray-600 mt-1">
                  Designed around the needs of businesses using Shopify
                  and WhatsApp Business Platform.
                </p>
              </div>
            </li>
          </ul>

          <router-link
            to="/contact"
            class="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Get in Touch
            <i class="pi pi-arrow-right"></i>
          </router-link>
        </div>

        <!-- Product Visual -->
        <div class="relative">
          <div class="absolute inset-0 rounded-3xl bg-blue-100/70 blur-2xl"></div>

          <div class="relative rounded-3xl bg-white p-8 md:p-12 shadow-lg border border-gray-100">
            <div class="flex items-center gap-4 mb-8">
              <div
                class="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-600"
              >
                <i class="pi pi-whatsapp text-4xl"></i>
              </div>

              <div>
                <h3 class="text-xl font-bold text-gray-900">
                  WhatsApp Business
                </h3>
                <p class="text-gray-500">
                  Business messaging platform
                </p>
              </div>
            </div>

            <div class="flex items-center justify-center gap-4 py-8">
              <div class="rounded-2xl border border-gray-200 p-5 text-center">
                <i class="pi pi-shopping-cart text-3xl text-blue-600"></i>
                <p class="font-semibold text-gray-900 mt-3">Shopify</p>
                <p class="text-xs text-gray-500 mt-1">Online store</p>
              </div>

              <div class="flex flex-col items-center text-blue-600">
                <i class="pi pi-arrow-right text-2xl"></i>
                <span class="text-xs mt-2">Connect</span>
              </div>

              <div class="rounded-2xl border border-gray-200 p-5 text-center">
                <i class="pi pi-whatsapp text-3xl text-green-600"></i>
                <p class="font-semibold text-gray-900 mt-3">WhatsApp</p>
                <p class="text-xs text-gray-500 mt-1">Business account</p>
              </div>
            </div>

            <p class="text-sm text-center text-gray-500 leading-6">
              Connect supported business services through
              WBA for Shopify.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Preview -->
    <section id="portfolio" class="py-20 bg-white">
      <div class="container mx-auto px-6 md:px-12 lg:px-20">
        <div class="text-center mb-12">
          <p class="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-3">
            Our Work
          </p>

          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
            Projects and Products
          </h2>

          <p class="max-w-2xl mx-auto text-lg text-gray-600 leading-8">
            Explore our software products and projects built to solve
            real business challenges.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProjectCard
            v-for="project in projects.slice(0, 3)"
            :key="project.title"
            v-bind="project"
          />
        </div>

        <div class="text-center mt-12">
          <router-link to="/portfolio">
            <Button
              label="View All Projects"
              icon="pi pi-arrow-right"
              iconPos="right"
              severity="secondary"
              class="p-button-rounded"
            />
          </router-link>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 bg-gray-50">
      <div
        class="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <p class="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-3">
            About Elden Software
          </p>

          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Technology That Helps Businesses Move Forward
          </h2>

          <p class="text-lg text-gray-600 mb-8 leading-8">
            Elden Software develops software products, web applications,
            and integrations designed to help businesses simplify
            operations and connect the tools they use every day.
            We focus on practical solutions, reliable technology,
            and a better experience for our customers.
          </p>

          <router-link
            to="/about"
            class="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-7 py-3 font-semibold text-gray-800 transition hover:bg-gray-100"
          >
            Learn More About Us
            <i class="pi pi-arrow-right"></i>
          </router-link>
        </div>

        <div class="relative">
          <img
            src="/banner3.jpg"
            alt="Elden Software solutions"
            class="w-full rounded-2xl shadow-lg object-cover transition-transform duration-300 hover:scale-[1.02]"
            loading="lazy"
          />
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <section
      id="contact"
      class="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white"
    >
      <div class="container mx-auto px-6 md:px-12 lg:px-20 text-center">
        <p class="text-sm font-semibold uppercase tracking-wider text-blue-100 mb-4">
          Let's Work Together
        </p>

        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Ready to Connect Your Business?
        </h2>

        <p class="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-8 text-white/90">
          Have questions about WBA for Shopify or our software services?
          Get in touch with Elden Software and tell us how we can help.
        </p>

        <router-link
          to="/contact"
          class="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3 font-semibold text-blue-700 transition hover:bg-blue-50"
        >
          Contact Our Team
          <i class="pi pi-send"></i>
        </router-link>

        <p class="mt-6 text-sm text-white/80">
          <i class="pi pi-envelope mr-2"></i>
          support@eldensoftware.com
        </p>
      </div>
    </section>
  </main>
</template>

<script setup>
import ServiceCard from '@/components/services/ServiceCard.vue';
import ProjectCard from '@/components/portfolio/ProjectCard.vue';
import { services } from '@/data/services';
import { projects } from '@/data/projects';
</script>