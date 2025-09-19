# vk64-react

Reusable React components built with ❤️ by [Kalees V](https://github.com/kalees64).  
This package provides simple and reusable UI utilities for React projects.

---

## 📦 Installation

Install with npm:

```bash
npm install vk64-react
```

## 🚀 Usage

```
import React from "react";
import { WhatIF } from "vk64-react";

export default function App() {
  const isLoggedIn = true;

  return (
    <div>
      <WhatIF
        check={isLoggedIn}
        if={<p>Welcome back, user!</p>}
        else={<p>Please log in</p>}
      />
    </div>
  );
}

```
