import React from 'react';

const Orders = () => {
  return (
     <>
      <div class="mb-8 mt-20">
        <h2 class="text-3xl font-extrabold text-on-surface tracking-tight font-headline">
          Orders Management
        </h2>
        <p class="text-on-surface-variant font-body mt-1">
          Review and fulfill high-priority medical orders in real-time.
        </p>
      </div>

      {/* <!-- Dashboard Stats / Bento Grid Mini --> */}
<div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
<div class="bg-surface-container-lowest p-6 rounded-2xl shadow-sm">
<p class="text-label-md text-outline tracking-wider font-bold uppercase mb-2">Incoming</p>
<div class="flex items-end gap-2">
<span class="text-3xl font-bold text-primary font-headline">24</span>
<span class="text-secondary text-sm font-bold mb-1">+12%</span>
</div>
</div>
<div class="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border-l-4 border-primary">
<p class="text-label-md text-outline tracking-wider font-bold uppercase mb-2">Pending Action</p>
<div class="flex items-end gap-2">
<span class="text-3xl font-bold text-primary font-headline">08</span>
<span class="text-error text-sm font-bold mb-1">Urgent</span>
</div>
</div>
<div class="bg-surface-container-lowest p-6 rounded-2xl shadow-sm">
<p class="text-label-md text-outline tracking-wider font-bold uppercase mb-2">Processing</p>
<div class="flex items-end gap-2">
<span class="text-3xl font-bold text-primary font-headline">15</span>
<span class="text-outline text-sm font-medium mb-1">Steady</span>
</div>
</div>
<div class="bg-surface-container-lowest p-6 rounded-2xl shadow-sm">
<p class="text-label-md text-outline tracking-wider font-bold uppercase mb-2">Delivered Today</p>
<div class="flex items-end gap-2">
<span class="text-3xl font-bold text-primary font-headline">142</span>
<span class="text-secondary text-sm font-bold mb-1">Peak</span>
</div>
</div>
</div>
    </>
  );
};

export default Orders;