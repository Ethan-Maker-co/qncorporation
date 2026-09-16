```vue
<template>
  <main>
    <PageHeader
      title="Hubsy Setup Guide"
      description="Connect Shopify with HubSpot and automatically sync your store data."
    />

    <section class="py-16 bg-white">
      <div class="container mx-auto px-20">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          <!-- LEFT CONTENT -->
          <div>
            <h2 class="text-3xl font-bold mb-6">
              Get Started with Hubsy
            </h2>

            <p class="text-gray-600 mb-8">
              Hubsy connects your Shopify store with HubSpot, allowing you to
              automatically sync customers, products, orders, and other
              important store data with your CRM.
            </p>

            <div class="space-y-8 text-gray-600">

              <!-- STEP 1 -->
              <div>
                <div class="flex items-center gap-3 mb-2">
                  <span
                    class="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-semibold"
                  >
                    1
                  </span>

                  <h3 class="font-semibold text-lg text-black">
                    Connect HubSpot
                  </h3>
                </div>

                <p class="ml-11">
                  Connect your HubSpot account to Hubsy and select the HubSpot
                  portal where you want your Shopify data to be synchronized.
                </p>
              </div>

              <!-- STEP 2 -->
              <div>
                <div class="flex items-center gap-3 mb-2">
                  <span
                    class="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-semibold"
                  >
                    2
                  </span>

                  <h3 class="font-semibold text-lg text-black">
                    Connect Shopify
                  </h3>
                </div>

                <p class="ml-11">
                  Connect your Shopify store using a Shopify Custom App.
                  Hubsy uses the connection to securely access the store data
                  required for synchronization.
                </p>
              </div>

              <!-- STEP 3 -->
              <div>
                <div class="flex items-center gap-3 mb-2">
                  <span
                    class="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-semibold"
                  >
                    3
                  </span>

                  <h3 class="font-semibold text-lg text-black">
                    Start Data Sync
                  </h3>
                </div>

                <p class="ml-11">
                  Once both platforms are connected, Hubsy automatically
                  synchronizes your Shopify data with HubSpot.
                </p>

                <ul class="ml-11 mt-3 space-y-1 list-disc list-inside">
                  <li>Customers → HubSpot Contacts</li>
                  <li>Products → HubSpot Products</li>
                  <li>Orders → HubSpot Orders</li>
                  <li>Companies → HubSpot Companies</li>
                  <li>Abandoned Checkouts → HubSpot</li>
                </ul>
              </div>

              <!-- STEP 4 -->
              <div>
                <div class="flex items-center gap-3 mb-2">
                  <span
                    class="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-semibold"
                  >
                    4
                  </span>

                  <h3 class="font-semibold text-lg text-black">
                    Verify Your Data
                  </h3>
                </div>

                <p class="ml-11">
                  After synchronization starts, you can monitor your synced
                  data directly from Hubsy and verify the corresponding
                  records in your HubSpot portal.
                </p>
              </div>

              <!-- SUPPORT -->
              <div class="pt-4 border-t border-gray-200">
                <h3 class="font-semibold text-lg text-black mb-2">
                  Need Help?
                </h3>

                <p>
                  If you have any questions or experience problems while
                  connecting Shopify and HubSpot, please contact our support
                  team at
                  <a
                    href="mailto:support@hubsy.com"
                    class="text-blue-600 hover:underline"
                  >
                    support@eldensoftware.com
                  </a>
                </p>
              </div>

            </div>
          </div>

          <!-- RIGHT IMAGE -->
          <div class="relative">
            <img
              src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800"
              alt="Hubsy Shopify HubSpot integration"
              class="rounded-lg shadow-xl w-full"
            />
          </div>

        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import PageHeader from '@/components/shared/PageHeader.vue';
</script>
```
