
<template>
  <main>
    <PageHeader
      title="Data Deletion"
      description="Instructions for deleting your data from WBA for Marketing."
    />
    <section class="py-16 bg-white">
      <div class="container mx-auto px-6 md:px-20">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 class="text-3xl font-bold mb-4">Data Deletion Instructions</h2>
            <p class="text-sm text-gray-500 mb-6">Last updated: November 17, 2026</p>
            <p class="text-gray-600 mb-6">
              WBA for Marketing respects your privacy and provides a simple way to delete your data associated with our application. You can request data deletion simply by uninstalling the application from your Shopify store.
            </p>
            <div class="space-y-6 text-gray-600">
              <div>
                <h3 class="font-semibold text-lg text-black mb-2">1. How to Delete Your Data</h3>
                <p>
                  To delete your data, simply uninstall WBA for Marketing from your Shopify store by following these steps:
                </p>
                <ul class="list-disc pl-6 space-y-2 mt-3">
                  <li>Log in to your Shopify Admin.</li>
                  <li>Navigate to Settings → Apps and sales channels.</li>
                  <li>Find WBA for Marketing in your installed applications.</li>
                  <li>Click Uninstall and confirm your action.</li>
                </ul>
                <p class="mt-3">
                  Once the application is uninstalled, the data associated with your store will automatically be deleted from our systems.
                </p>
                <p class="mt-2 font-medium text-black">
                  No additional deletion request or email is required.
                </p>
              </div>
              <div>
                <h3 class="font-semibold text-lg text-black mb-2">2. What Data Will Be Deleted?</h3>
                <p>
                  When you uninstall WBA for Marketing, the following application data will be deleted:
                </p>
                <ul class="list-disc pl-6 space-y-2 mt-2">
                  <li>Connected WhatsApp Business Account (WABA) information.</li>
                  <li>WhatsApp access tokens and authorization credentials.</li>
                  <li>WhatsApp message templates and configurations.</li>
                  <li>WhatsApp message records and related application data.</li>
                  <li>Shopify store information and application settings.</li>
                  <li>Other data associated with your application account.</li>
                </ul>
              </div>
              <div>
                <h3 class="font-semibold text-lg text-black mb-2">3. Data Deletion Process</h3>
                <p>
                  Once we receive the application uninstall notification from Shopify, our system automatically initiates the data deletion process for the corresponding store.
                </p>
                <p class="mt-2">
                  All associated application data will be removed from our database as part of this process.
                </p>
              </div>
              <div>
                <h3 class="font-semibold text-lg text-black mb-2">4. Third-Party Services</h3>
                <p>
                  WBA for Marketing integrates with Shopify and Meta's WhatsApp Business Platform.
                </p>
                <p class="mt-2">
                  Uninstalling our application deletes data stored and managed by WBA for Marketing. However, it does not automatically delete information independently stored by Shopify, Meta, or WhatsApp.
                </p>
                <p class="mt-2">
                  To manage data held by these third-party services, please contact the respective provider.
                </p>
              </div>
              <div>
                <h3 class="font-semibold text-lg text-black mb-2">5. Data Retention</h3>
                <p>
                  We do not retain application data after the deletion process has been completed, except where retention is required by applicable laws or regulations.
                </p>
                <p class="mt-2">
                  Any information required to be retained for legal or compliance purposes will be securely stored and handled in accordance with applicable requirements.
                </p>
              </div>
              <div>
                <h3 class="font-semibold text-lg text-black mb-2">6. Contact Us</h3>
                <p>
                  If you have any questions regarding data deletion or privacy, please contact us:
                </p>
                <div class="mt-3 p-5 bg-gray-50 rounded-lg space-y-2">
                  <p><strong>Company:</strong> ELDEN SOFTWARE COMPANY LIMITED</p>
                  <p><strong>Application:</strong> WBA for Marketing</p>
                  <p><strong>Email:</strong> <a href="mailto:support@eldensoftware.com" class="text-blue-600 hover:underline">support@eldensoftware.com</a></p>
                  <p><strong>Website:</strong> <a href="https://eldensoftware.com" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">https://eldensoftware.com</a></p>
                </div>
              </div>
            </div>
          </div>
          <div class="relative">
            <img
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800"
              alt="Data privacy and security"
              class="rounded-lg shadow-xl w-full"
            />
            <div class="mt-6 p-6 bg-gray-50 rounded-lg">
              <h3 class="text-xl font-bold text-black mb-3">Your Data, Your Control</h3>
              <p class="text-gray-600">
                WBA for Marketing gives merchants control over their application data. Simply uninstall the application from your Shopify store to initiate the automatic deletion of your associated data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script setup>
import PageHeader from '@/components/shared/PageHeader.vue';
</script>
