# CEITEC BioIT — Landing Page

Official landing page for the **CEITEC Bioinformatics Core Facility (BioIT)** at Masaryk University, Brno, Czech Republic.

Live sites:
- [bioit.ceitec.eu](https://bioit.ceitec.eu)
- [bioit.ceitec.cz](https://bioit.ceitec.cz)

## About

This is a fully static website built to present the BioIT core facility — its services, projects, publications, team, and community. It is part of the ELIXIR Czech Republic infrastructure.

## Deployment

The site is hosted on **GitHub Pages** and deployed to two domains simultaneously.

Run `npm run deploy` to build and publish to both:

| Domain | Repo |
| ------ | ---- |
| [bioit.ceitec.eu](https://bioit.ceitec.eu) | `bioit-ceitec-landing-page` (`gh-pages` branch) |
| [bioit.ceitec.cz](https://bioit.ceitec.cz) | `bioit-ceitec-landing-page-cz` (`gh-pages` branch) |

The `.eu` CNAME is set via `public/CNAME`. The `.cz` CNAME is injected automatically during deploy.

## Visual Identity

The site follows the official CEITEC brand guidelines:

| Element | Value                    |
| ------- | ------------------------ |
| Font    | Roboto (all UI elements) |
| Blue    | `#21a9c0`                |
| Green   | `#7ac143`                |
| Grey    | `#39464a`                |

## Contact

For questions about the website, contact [alireza.dantism@ceitec.muni.cz](mailto:alireza.dantism@ceitec.muni.cz).
