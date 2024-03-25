// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *ArrowCarrousel → arrowleft*
 */
export interface ArrowcarrouselDocumentDataArrowleftItem {
  /**
   * arrowleftTriger field in *ArrowCarrousel → arrowleft*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: arrowcarrousel.arrowleft[].arrowlefttriger
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  arrowlefttriger: prismic.BooleanField;

  /**
   * arrows field in *ArrowCarrousel → arrowleft*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: arrowcarrousel.arrowleft[].arrows
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  arrows: prismic.SelectField<"arrowleft" | "arrowright">;
}

/**
 * Content for ArrowCarrousel documents
 */
interface ArrowcarrouselDocumentData {
  /**
   * arrowleft field in *ArrowCarrousel*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: arrowcarrousel.arrowleft[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  arrowleft: prismic.GroupField<
    Simplify<ArrowcarrouselDocumentDataArrowleftItem>
  >;
}

/**
 * ArrowCarrousel document from Prismic
 *
 * - **API ID**: `arrowcarrousel`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ArrowcarrouselDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ArrowcarrouselDocumentData>,
    "arrowcarrousel",
    Lang
  >;

type HomepageDocumentDataSlicesSlice = CarrouselSlice | PourquoiSlice;

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
  /**
   * Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * Meta Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

/**
 * Item in *Settings → Navigation*
 */
export interface SettingsDocumentDataNavigationItem {
  /**
   * Link field in *Settings → Navigation*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Label field in *Settings → Navigation*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Item in *Settings → Social Network*
 */
export interface SettingsDocumentDataSocialNetworkItem {
  /**
   * Social network image field in *Settings → Social Network*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.social_network[].social_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  social_image: prismic.ImageField<never>;

  /**
   * Social network name field in *Settings → Social Network*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.social_network[].social_network_name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  social_network_name: prismic.KeyTextField;

  /**
   * Link field in *Settings → Social Network*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.social_network[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Site Title field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.site_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  site_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.meta_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * OG image field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.og_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  og_image: prismic.ImageField<never>;

  /**
   * Navigation field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  navigation: prismic.GroupField<Simplify<SettingsDocumentDataNavigationItem>>;

  /**
   * Social Network field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.social_network[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  social_network: prismic.GroupField<
    Simplify<SettingsDocumentDataSocialNetworkItem>
  >;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

type TestDocumentDataSlicesSlice = TestSlice;

/**
 * Content for test documents
 */
interface TestDocumentData {
  /**
   * Slice Zone field in *test*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: test.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<TestDocumentDataSlicesSlice>;
}

/**
 * test document from Prismic
 *
 * - **API ID**: `test`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type TestDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<TestDocumentData>, "test", Lang>;

export type AllDocumentTypes =
  | ArrowcarrouselDocument
  | HomepageDocument
  | SettingsDocument
  | TestDocument;

/**
 * Primary content in *Carrousel → Primary*
 */
export interface CarrouselSliceDefaultPrimary {
  /**
   * Heading field in *Carrousel → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: carrousel.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * arrowleft field in *Carrousel → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: carrousel.primary.arrowleft
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  arrowleft: prismic.BooleanField;

  /**
   * arrowright field in *Carrousel → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: carrousel.primary.arrowright
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  arrowright: prismic.BooleanField;
}

/**
 * Primary content in *Carrousel → Items*
 */
export interface CarrouselSliceDefaultItem {
  /**
   * Images field in *Carrousel → Items*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: carrousel.items[].images
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  images: prismic.SelectField<"img1" | "img2" | "img3">;
}

/**
 * Default variation for Carrousel Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CarrouselSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CarrouselSliceDefaultPrimary>,
  Simplify<CarrouselSliceDefaultItem>
>;

/**
 * Slice variation for *Carrousel*
 */
type CarrouselSliceVariation = CarrouselSliceDefault;

/**
 * Carrousel Shared Slice
 *
 * - **API ID**: `carrousel`
 * - **Description**: Carrousel
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CarrouselSlice = prismic.SharedSlice<
  "carrousel",
  CarrouselSliceVariation
>;

/**
 * Primary content in *Pourquoi → Primary*
 */
export interface PourquoiSliceDefaultPrimary {
  /**
   * Heading field in *Pourquoi → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: pourquoi.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;
}

/**
 * Primary content in *Pourquoi → Items*
 */
export interface PourquoiSliceDefaultItem {
  /**
   * Body 1 field in *Pourquoi → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: pourquoi.items[].body_1
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body_1: prismic.RichTextField;

  /**
   * Body 2 field in *Pourquoi → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: pourquoi.items[].body_2
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body_2: prismic.RichTextField;

  /**
   * Body 3 field in *Pourquoi → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: pourquoi.items[].body_3
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body_3: prismic.RichTextField;

  /**
   * dssfsd field in *Pourquoi → Items*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: pourquoi.items[].dssfsd
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  dssfsd: prismic.ContentRelationshipField;
}

/**
 * Default variation for Pourquoi Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PourquoiSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<PourquoiSliceDefaultPrimary>,
  Simplify<PourquoiSliceDefaultItem>
>;

/**
 * Slice variation for *Pourquoi*
 */
type PourquoiSliceVariation = PourquoiSliceDefault;

/**
 * Pourquoi Shared Slice
 *
 * - **API ID**: `pourquoi`
 * - **Description**: Pourquoi
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PourquoiSlice = prismic.SharedSlice<
  "pourquoi",
  PourquoiSliceVariation
>;

/**
 * Primary content in *TestHead → Primary*
 */
export interface TestSliceDefaultPrimary {
  /**
   * titleHead field in *TestHead → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: test.primary.titlehead
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  titlehead: prismic.KeyTextField;
}

/**
 * Default variation for TestHead Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TestSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *TestHead*
 */
type TestSliceVariation = TestSliceDefault;

/**
 * TestHead Shared Slice
 *
 * - **API ID**: `test`
 * - **Description**: Test
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestSlice = prismic.SharedSlice<"test", TestSliceVariation>;

/**
 * Primary content in *TestBody → Primary*
 */
export interface TestBodySliceDefaultPrimary {
  /**
   * titre field in *TestBody → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: test_body.primary.titre
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  titre: prismic.RichTextField;
}

/**
 * Default variation for TestBody Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestBodySliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TestBodySliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *TestBody*
 */
type TestBodySliceVariation = TestBodySliceDefault;

/**
 * TestBody Shared Slice
 *
 * - **API ID**: `test_body`
 * - **Description**: TestBody
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestBodySlice = prismic.SharedSlice<
  "test_body",
  TestBodySliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      ArrowcarrouselDocument,
      ArrowcarrouselDocumentData,
      ArrowcarrouselDocumentDataArrowleftItem,
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      SettingsDocumentDataNavigationItem,
      SettingsDocumentDataSocialNetworkItem,
      TestDocument,
      TestDocumentData,
      TestDocumentDataSlicesSlice,
      AllDocumentTypes,
      CarrouselSlice,
      CarrouselSliceDefaultPrimary,
      CarrouselSliceDefaultItem,
      CarrouselSliceVariation,
      CarrouselSliceDefault,
      PourquoiSlice,
      PourquoiSliceDefaultPrimary,
      PourquoiSliceDefaultItem,
      PourquoiSliceVariation,
      PourquoiSliceDefault,
      TestSlice,
      TestSliceDefaultPrimary,
      TestSliceVariation,
      TestSliceDefault,
      TestBodySlice,
      TestBodySliceDefaultPrimary,
      TestBodySliceVariation,
      TestBodySliceDefault,
    };
  }
}
