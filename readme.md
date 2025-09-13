# Javascript Interview Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

**Answer:**

- getElementById → এইটা তখন ব্যবহার করা হয় যখন কোন element কে তার id এর মাধ্যমে select করা হয়। যেহেতু id সবসময় unique হয় তাই একটাই element রিটার্ন করে।

- getElementsByClassName → এইটার মাধ্যমে element কে class দিয়ে select করা হয়। যেহেতু একই class একাধিক element এ থাকে তাই এটা একসাথে একাধিক element কে select করতে পারে।

- querySelector → এটা CSS selector এর মতো কাজ করে অর্থাৎ এইটার মধ্যে css selector(id, class, tag) ব্যবহার করে element select করে তবে যেটা প্রথমে match করবে শুধু সেটাই select করবে। অর্থাৎ match হওয়া প্রথম element কে select করবে।

- querySelectorAll → এটাও querySelector এর মতো কাজ করে কিন্তু সব matching হওয়া element-কেই select করে।

### 2. How do you create and insert a new element into the DOM?

**Answer:**
নতুন element বানাতে হয় document.createElement() দিয়ে। চাইলে তার মধ্যে innerText, class, id সব দেয়া যায়। তারপর যেই জায়গায় দরকার সেখানে appendChild() বা append() দিয়ে insert করা হয়।

### 3. What is Event Bubbling and how does it work?

**Answer:**
Event bubbling মানে হলো কোনো element এ event ট্রিগার হলে সেটা প্রথমে সেই element এ কাজ করে, তারপর তার parent এ যায়, তারপর parent এর parent এ যায়। এভাবে একদম document পর্যন্ত যেতে পারে।

### 4. What is Event Delegation in JavaScript? Why is it useful?

**Answer:**
Event delegation মানে হলো parent element এ event বসালে child element এও কাজ করবে। যেমন ul এ event বসালে তার ভিতরের li ক্লিক ধরতে পারবে।

এটা useful কারণ: Parent element এ event সেট করলে আলাদাভাবে child এ একই event সেট করা লাগে না। অর্থাৎ child এ ক্লিক করলেও parent এর ইভেন্ট trigger হয়। পরবর্তীতে নতুন element আসলেও ঠিকঠাক কাজ করে।

### 5. What is the difference between preventDefault() and stopPropagation() methods?

**Answer:**

- এর কাজ হলো default behavior বন্ধ করা। যেমন: একটি form submit করলে browser ডিফল্টভাবে page reload করে অথবা একটি `<a>` tag এ click করলে browser ডিফল্টভাবে link এ চলে যায়। কিন্তু যদি event.preventDefault() ব্যবহার করা হয় তাহলে এই ডিফল্ট action আর হবে না।
- stopPropagation() → এর কাজ হলো event bubbling বন্ধ করা। অর্থাৎ event আর parent element পর্যন্ত যাবে না। শুধু সেই element এর মধ্যে থেমে যাবে।
