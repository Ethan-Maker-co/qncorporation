<template>
  <main>
    <PageHeader
      title="Privacy Policy"
      description=""
    />
    
<section class="py-16 bg-white">
  <div class="container mx-auto px-20">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
      
      <!-- LEFT CONTENT -->
      <div>
        <h2 class="text-3xl font-bold mb-6">Privacy Policy</h2>

        <p class="text-gray-600 mb-4">
          This Privacy Policy explains how we collect, use, and protect your information when you use our services.
        </p>

        <div class="space-y-4 text-gray-600">
          <div>
            <h3 class="font-semibold text-lg text-black">Information We Collect</h3>
            <p>
              We may collect personal information such as your name, email address, and account data, as well as usage data to improve our services.
            </p>
          </div>

          <div>
            <h3 class="font-semibold text-lg text-black">Use of Information</h3>
            <p>
              We use your information to operate, maintain, and improve our services, and to communicate with you when necessary.
            </p>
          </div>

          <div>
            <h3 class="font-semibold text-lg text-black">Data Sharing</h3>
            <p>
              We do not sell your personal data. We only share data with trusted service providers when required.
            </p>
          </div>

          <div>
            <h3 class="font-semibold text-lg text-black">Data Security</h3>
            <p>
              We implement appropriate technical and organizational measures to protect your data from unauthorized access or disclosure.
            </p>
          </div>

          <div>
            <h3 class="font-semibold text-lg text-black">User Rights</h3>
            <p>
              You may request access, correction, or deletion of your personal data where applicable.
            </p>
          </div>

          <div>
            <h3 class="font-semibold text-lg text-black">Policy Updates</h3>
            <p>
              This Privacy Policy may be updated periodically to reflect changes in our practices.
            </p>
          </div>

          <div>
            <h3 class="font-semibold text-lg text-black">Contact</h3>
            <p>
              For any privacy-related concerns, please contact: <span class="text-blue-600">support@eldensoftware.com</span>
            </p>
          </div>
        </div>
      </div>

      <!-- RIGHT IMAGE -->
      <div class="relative">
        <img
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800"
          alt="Privacy and security"
          class="rounded-lg shadow-xl"
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