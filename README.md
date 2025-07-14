# @grellium/seo

Simple, flexible SEO metadata helper for Next.js 14+ applications.

## Installation

```bash
npm install @grellium/seo
```

## Quick Start

```ts
import { buildMetadata } from "@grellium/seo";

export const metadata = buildMetadata({
  title: "Grellium Store",
  description: "Premium products for modern developers",
  urlPath: "/products",
  image: "/og-image.png"
});
```

## API Reference

### `buildMetadata(options)`

Generates comprehensive metadata object for Next.js pages.

#### Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `title` | `string` | ✅ | - | Page title (used for `<title>` and Open Graph) |
| `description` | `string` | ❌ | `"Premium products for modern developers"` | Page description for meta tags |
| `urlPath` | `string` | ❌ | `"/"` | Relative path for canonical URL |
| `image` | `string` | ❌ | `"/default-og.png"` | Open Graph image path |

#### Returns

Returns a metadata object compatible with Next.js App Router's `generateMetadata()` function.

## Environment Setup

Set your base domain in `.env.local`:

```env
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
```

For development, it defaults to `http://localhost:3000`.

## Examples

### Basic Page Metadata

```ts
import { buildMetadata } from "@grellium/seo";

export const metadata = buildMetadata({
  title: "About Us",
  description: "Learn about our company and mission",
  urlPath: "/about"
});
```

### Product Page with Custom Image

```ts
import { buildMetadata } from "@grellium/seo";

export const metadata = buildMetadata({
  title: "Premium Headphones - Grellium Store",
  description: "High-quality wireless headphones with noise cancellation",
  urlPath: "/products/headphones",
  image: "/images/headphones-og.jpg"
});
```

### Dynamic Metadata Generation

```ts
import { buildMetadata } from "@grellium/seo";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug);
  
  return buildMetadata({
    title: `${product.name} - Grellium Store`,
    description: product.description,
    urlPath: `/products/${params.slug}`,
    image: product.image
  });
}
```

## Features

- 🧼 **Clean Metadata**: Generates Open Graph and Twitter Card metadata
- 🔁 **Environment Aware**: Uses `NEXT_PUBLIC_BASE_URL` for absolute URLs
- 🧩 **Next.js Compatible**: Works seamlessly with App Router's `generateMetadata()`
- 🧘‍♀️ **Flexible**: Optional parameters with sensible defaults
- 📱 **Social Ready**: Optimized for social media sharing
- 🔍 **SEO Friendly**: Includes canonical URLs and proper meta tags

## TypeScript Support

Full TypeScript support with proper type definitions included.

```ts
interface MetadataOptions {
  title: string;
  description?: string;
  urlPath?: string;
  image?: string;
}
```

## Framework Integration

This package is part of the [Grellium](https://github.com/grellium/grellium) eCommerce framework ecosystem.

### Related Packages

- `@grellium/analytics` - Google Analytics integration (coming soon)
- `@grellium/ui` - UI component library (coming soon)
- `@grellium/auth` - Authentication utilities (coming soon)

## Requirements

- Next.js 14+
- React 18+
- TypeScript (recommended)

## License

MIT © [Grellium](https://github.com/grellium)

## Contributing

Contributions are welcome! Please read our [contributing guidelines](https://github.com/grellium/grellium/blob/main/CONTRIBUTING.md) before submitting PRs.

## Support

- 📖 [Documentation](https://grellium.dev/docs)
- 💬 [Discord Community](https://discord.gg/grellium)
- 🐛 [Report Issues](https://github.com/grellium/grellium/issues)
- 📧 [Email Support](mailto:support@grellium.dev)