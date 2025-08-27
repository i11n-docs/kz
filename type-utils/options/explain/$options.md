---
id: type-utils--options-1
type: explanation
layout: layouts/doc.vto
title: $Options
versions:
  start: v0.0
author_id: ebntly
---

`$Options` are the core of type-level programming with `@kz/type-utils`, simplifying complex types using simple, yet robust, configurations.

## Terminology

- **`$Options`** refers to a type that encapsulates numerous configuration options for creating dynamic types. They allow breaking down of complex actions in type-level programming into simple flags, or other pieces of expression.
- **`$Option` setting**, or just **option setting**, refers to a single setting within the `$Options` type.
- **`$Option` setting type**, also referred to as **option setting type** or just **setting type**, is the type associated with the option setting.
Consider the following example:

```typescript
import type {
  $Async,
  $Default,
  $UseAsync,
  $UseDefault,
} from '@kz/type-utils/options';

type Signature = $UseAsync | $UseDefault;
type Options = $Async & $Default<number>;
```

- `Signature` and `Options` are both considered **`$Options`**.
- In `Signature`, `$UseAsync` and `$UseDefault` are **`$Option` settings**, with the default ambiguous **`$Option` setting types** of `boolean` and `unknown`, respectively.
- In `Options`, `$Async` and `$Default` are **`$Option` settings**, with the **`$Option` setting types** of `true` and `number`, satisfying the default ambiguous **`$Option` setting types** of `$UseAsync` and `$UseDefault`, respectively.

## Forms

There are two types of forms for `$Options` types, which you can see in the example above.

- **Signature form** refers to the signature of an `$Options` type, what **`$Option` settings** the implementing type supports and can be provided. These are the types that are prefixed with `$Use`, such as `$UseAsync` and `$UseDefault`.
- **Provider form** refers to the **`$Option` settings** provided to a **signature**. They are settings that satisfy the **Signature form**, and not prefixed, but have a naming convention related to their **Signature form**. These are types such as `$Async` and `$Default`.

## Variants

There are a few different variants of option settings, though despite their differences, their usage should still be fairly intuitive.

- **Simple** option settings are the most abundant of `$Options`, containing a single `boolean` setting type, which toggles targeted functionality. They are typically named for the enabled (`true`) result, such as `$UseAsync`. When implemented they are often defaulted to the `false` option setting type, such as `$Sync`.
- **Value** option settings offer somewhat more complicated configurations requiring a type, such as the `$UseDefault` option setting, which has a default option setting value of `unknown`. You would use the `$Default<T>` provider form with the type you wish to have as default.
- **Multi-setting** option settings are slightly more complicated, having two option settings. These are connected settings, such as in the `$UsePaths<T, K>`, which has settings for both the paths (`K`) and the reference type (`T`).
- **Compound** option settings are a combination of multiple settings and are generally used to further simplify the **signature form** and **provider form**, such as the `$UseCondition` which combines the `$UseThen` and `$UseElse` value option settings. They are also used to improve predictability by setting boundaries and limits on the dynamics of `$Options`.
