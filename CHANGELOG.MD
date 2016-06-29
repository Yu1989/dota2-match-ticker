## 1.9.0
- Added react-motion for animations.

## 1.8.0
- Added i18n support, en and zh-cn for now.
- Moved live-in calculation to client-side.

## 1.7.0
- Now you can highlight matches and it is remembered by cookie.

## 1.6.0
- Added etag, so 304 is returned for conditional gets.

## 1.5.0
- Added static file cache, e.g., js bundle, images.

## 1.4.1
- Added AVA as testing framework. More tests to come.

## 1.4.0
- Auto-refresh data on page periodically.

## 1.3.1
- Visually differentiate TBD teams.
- Fixed failed scrape still overwriting cache with empty lists.

## 1.3.0
- Replaced file caching with redis for match data.

## 1.2.1
- Fixed travis build failure by forcing npm to install latest version.
- Simplified error handling.

## 1.2.0
- Added npm shrinkwrap for better dependencies management.
- Added page view count with redis storage.

## 1.1.0
- Allow clicking on match component to search it.
- Fixed match array in MatchList missing a unique key.

## 1.0.0
- Core functionalities.
