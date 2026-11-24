
<template>
  <main class="min-h-screen bg-gray-50 p-4 md:p-8">
    <div class="max-w-6xl mx-auto space-y-6">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">Pricing</h1>
        <p class="text-sm text-gray-500 mt-2">
          Choose the right plan to connect Shopify with HubSpot and keep your business data synchronized.
        </p>
      </div>

      <section class="bg-white border border-gray-200 rounded-xl p-6">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
          <div>
            <h2 class="text-lg font-semibold text-gray-900">Choose your plan</h2>
            <p class="text-sm text-gray-500 mt-1">Select a subscription that fits your business needs.</p>
          </div>
          <span class="text-xs text-gray-500">All plans include Shopify connection</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <button
            v-for="plan in plans"
            :key="plan.id"
            @click="selectedPlan = plan.id"
            class="relative text-left rounded-xl border-2 p-5 transition-all"
            :class="selectedPlan === plan.id ? 'border-gray-900 bg-gray-50' : 'border-gray-200 hover:border-gray-400'"
          >
            <div class="flex justify-between items-start">
              <div>
                <h3 class="font-semibold text-gray-900">{{ plan.name }}</h3>
                <p class="text-sm text-gray-500 mt-1">{{ plan.shortDescription }}</p>
              </div>
              <span
                v-if="plan.trial"
                class="text-xs bg-gray-100 text-gray-700 rounded-full px-3 py-1"
              >
                7 day free trial
              </span>
            </div>
            <div class="mt-5 flex items-baseline gap-1">
              <span class="text-3xl font-bold text-gray-900">${{ plan.price }}</span>
              <span v-if="plan.price > 0" class="text-sm text-gray-500">/month</span>
            </div>
            <p class="text-xs text-gray-500 mt-1">{{ plan.billing }}</p>
            <div class="mt-5 space-y-2">
              <div v-for="feature in plan.highlights" :key="feature" class="flex gap-2 items-center text-sm text-gray-700">
                <svg class="w-4 h-4 text-green-600 shrink-0" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10L8 14L16 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                {{ feature }}
              </div>
            </div>
            <div class="mt-5 flex items-center gap-2 text-sm font-semibold">
              <span class="w-4 h-4 rounded-full border flex items-center justify-center"
                :class="selectedPlan === plan.id ? 'border-gray-900' : 'border-gray-400'">
                <span v-if="selectedPlan === plan.id" class="w-2 h-2 rounded-full bg-gray-900"></span>
              </span>
              {{ selectedPlan === plan.id ? 'Selected plan' : 'Select plan' }}
            </div>
          </button>
        </div>
      </section>

      <section class="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <div class="p-6 border-b border-gray-200">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div class="flex items-center gap-2">
                <h2 class="text-xl font-bold text-gray-900">{{ currentPlan.name }} Plan</h2>
                <span class="text-xs bg-green-50 text-green-700 rounded-full px-3 py-1">
                  {{ currentPlan.trial ? '7 day free trial' : 'Free forever' }}
                </span>
              </div>
              <p class="text-sm text-gray-500 mt-2">{{ currentPlan.description }}</p>
            </div>
            <div class="sm:text-right">
              <div class="flex items-baseline gap-1 sm:justify-end">
                <span class="text-4xl font-bold text-gray-900">${{ currentPlan.price }}</span>
                <span v-if="currentPlan.price > 0" class="text-sm text-gray-500">/month</span>
              </div>
              <p class="text-xs text-gray-500 mt-1">{{ currentPlan.price === 0 ? 'No payment required' : 'Billed monthly' }}</p>
            </div>
          </div>
        </div>

        <div class="p-6">
          <h3 class="font-semibold text-gray-900 mb-5">What's included</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
            <div v-for="group in currentPlan.groups" :key="group.title">
              <h4 class="text-sm font-semibold text-gray-800 mb-3">{{ group.title }}</h4>
              <div class="space-y-3">
                <div v-for="item in group.features" :key="item" class="flex items-start gap-3">
                  <svg class="w-4 h-4 mt-0.5 text-green-600 shrink-0" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10L8 14L16 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span class="text-sm text-gray-600">{{ item }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-white border border-gray-200 rounded-xl p-6">
        <div class="mb-6">
          <h2 class="text-lg font-bold text-gray-900">Compare plans</h2>
          <p class="text-sm text-gray-500 mt-1">See what is included in each subscription.</p>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full min-w-[600px] text-sm">
            <thead>
              <tr class="border-b border-gray-200">
                <th class="text-left py-4 font-semibold text-gray-700 w-1/2">Features</th>
                <th class="text-center py-4 font-semibold text-gray-900">Free</th>
                <th class="text-center py-4 font-semibold text-gray-900">Premium</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in comparison" :key="item.name" class="border-b border-gray-100">
                <td class="py-4 text-gray-700">{{ item.name }}</td>
                <td class="py-4 text-center text-gray-700">{{ item.free }}</td>
                <td class="py-4 text-center font-medium text-gray-900">{{ item.premium }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="bg-white border border-gray-200 rounded-xl p-6">
        <h2 class="text-lg font-bold text-gray-900 mb-5">Frequently asked questions</h2>
        <div class="divide-y divide-gray-100">
          <div v-for="(faq, index) in faqs" :key="index" class="py-4">
            <button @click="openFaq = openFaq === index ? null : index" class="w-full flex items-center justify-between text-left gap-4">
              <span class="text-sm font-semibold text-gray-800">{{ faq.question }}</span>
              <svg class="w-4 h-4 shrink-0 transition-transform" :class="openFaq === index ? 'rotate-180' : ''" viewBox="0 0 20 20" fill="none">
                <path d="M5 7L10 12L15 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </button>
            <p v-if="openFaq === index" class="text-sm text-gray-500 mt-3 leading-6">{{ faq.answer }}</p>
          </div>
        </div>
      </section>

      <p class="text-xs text-gray-400 leading-5">
        * Pricing is displayed for informational purposes only. Prices exclude applicable taxes, discounts, and other pricing variables. Subscription availability and billing terms may vary.
      </p>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'

defineEmits(['select-plan'])

const selectedPlan = ref('free')
const openFaq = ref(null)

const plans = [
  {
    id: 'free',
    name: 'Free',
    shortDescription: 'Free forever with limited syncs',
    description: 'Get started with essential Shopify and HubSpot synchronization features.',
    price: 0,
    trial: true,
    billing: 'Free forever with no subscription fee',
    highlights: [
      'Connect with Shopify',
      '30 Customers Sync',
      '30 Products Sync',
      '30 Orders Sync',
      '10 Companies Sync',
      '30 Abandoned Checkouts Sync'
    ],
    groups: [
      {
        title: 'Shopify Integration',
        features: [
          'Connect your Shopify store',
          'Access Shopify store data',
          'Manage your connected store'
        ]
      },
      {
        title: 'Customer Synchronization',
        features: [
          'Sync up to 30 customers',
          'Sync customer information to HubSpot'
        ]
      },
      {
        title: 'Product & Order Synchronization',
        features: [
          'Sync up to 30 products',
          'Sync up to 30 orders',
          'Sync up to 30 abandoned checkouts'
        ]
      },
      {
        title: 'Company Synchronization',
        features: [
          'Sync up to 10 companies',
          'Connect Shopify companies with HubSpot'
        ]
      }
    ]
  },
  {
    id: 'premium',
    name: 'Premium',
    shortDescription: 'Unlimited access to all sync features',
    description: 'Unlock unlimited synchronization and manage your Shopify and HubSpot data without limits.',
    price: 50,
    trial: true,
    billing: 'Billed monthly after your free trial',
    highlights: [
      'Unlimited Customers Sync',
      'Unlimited Products Sync',
      'Unlimited Orders Sync',
      'Unlimited Companies Sync',
      'Unlimited Abandoned Checkouts Sync',
      '7-day free trial'
    ],
    groups: [
      {
        title: 'Shopify Integration',
        features: [
          'Connect your Shopify store',
          'Access Shopify store data',
          'Manage your connected store'
        ]
      },
      {
        title: 'Customer Synchronization',
        features: [
          'Unlimited customers synced',
          'Sync customer information to HubSpot'
        ]
      },
      {
        title: 'Product & Order Synchronization',
        features: [
          'Unlimited products synced',
          'Unlimited orders synced',
          'Unlimited abandoned checkouts synced'
        ]
      },
      {
        title: 'Company Synchronization',
        features: [
          'Unlimited companies synced',
          'Connect Shopify companies with HubSpot'
        ]
      }
    ]
  }
]

const currentPlan = computed(() => plans.find(plan => plan.id === selectedPlan.value))

const comparison = [
  { name: 'Shopify Connection', free: 'Included', premium: 'Included' },
  { name: 'Customer Sync', free: 'Up to 30', premium: 'Unlimited' },
  { name: 'Product Sync', free: 'Up to 30', premium: 'Unlimited' },
  { name: 'Order Sync', free: 'Up to 30', premium: 'Unlimited' },
  { name: 'Company Sync', free: 'Up to 10', premium: 'Unlimited' },
  { name: 'Abandoned Checkout Sync', free: 'Up to 30', premium: 'Unlimited' },
  { name: 'Monthly Subscription', free: 'Free', premium: '$50/month' },
  { name: 'Free Trial', free: '7 days', premium: '7 days' }
]

const faqs = [
  {
    question: 'Can I use Shopify Connector for free?',
    answer: 'Yes. The Free plan lets you connect Shopify and synchronize a limited number of customers, products, orders, companies, and abandoned checkouts.'
  },
  {
    question: 'What happens when I reach the Free plan limits?',
    answer: 'You can upgrade to Premium to remove synchronization limits and continue syncing your store data.'
  },
  {
    question: 'Can I cancel my Premium subscription?',
    answer: 'You can manage or cancel your subscription through your Shopify billing settings.'
  },
  {
    question: 'What happens after the 7-day free trial?',
    answer: 'The Premium subscription is billed at $50 per month after the trial period, according to the applicable subscription terms.'
  }
]
</script>
