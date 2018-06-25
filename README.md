# GrafanaCon

## Installation

* [Gihub Pages system requirements](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/#requirements)
* Install Ruby dependencies: `bundle install`

## Running / Development

`bundle exec jekyll serve`

## Adding a new conference

Adding a new conference requires the addition and editing of a few directories and files.

For the purpose of these instructions, `[NAME]` will reference the name of the new conference directory and `[IDENTIFIER]` will be used to indicate the conference's unique identifier.

A new directory must be added for all of the new conferences assets. This directory `[NAME]` will determine the URL of the conference, e.g. `https://www.grafanacon.com/[NAME]`. A conference also has a unique `[IDENTIFIER]`, which can be the same name as the new directory and is used to designate the directory for the conference's content.

### 1. Add new...

#### Conference directory

```
[NAME]/                 # New directory
|
|-  images
|   |- gallery          # Photo gallery
|   |- headshots        # Speaker bio photos
|   |- sponsors         # Sponsor logos
|   |- videos           # Video thumbnails
|   `- logo.png         # Conference's logo
|
|-  presentations       # Slide decks
|
`-  index.html          # Contains the [IDENTIFIER]
```

#### Content directory

```
_data/
|-  [IDENTIFIER]        # New directory
|   `- conference.yml   # Conference content file
```

#### Styles

```
css/[NAME].css          # Conference-specific styles and overrides
```

### 2. Edit existing...

```
_data/conferences.yml   # Add new conference to this list of conferences
index.html              # If new conference is the most current, add its [IDENTIFIER] here
```

## Content editing

The majority of conference content is found in the `conference.yml` file and is formatted using the YAML language.

YAML uses indentation to indicate nesting and requires strict formatting. Data structure hierarchy is maintained by outline indentation.

### Example

```
item: value
secondary:
  item: value
  item: value
list:
  - list-item
  - list-item
```

### Advance formatting

If you need to include markup or other formatting, you must set it off with a `|` character.

### Example

```
content: |
  Aliquam <strong>tincidunt</strong> mauris eu risus.
```

The `markdownify` paramter should be used for template content requiring inline rendering of advanced formatting.

```
{{ conference.content | markdownify }}
```
