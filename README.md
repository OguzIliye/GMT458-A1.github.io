# GMT 458 - Web GIS Assignment 1

This is the repository for the first assignment of GMT 458 Web GIS course.

## Files Structure
- \index.html\: Background, Technologies, Projects.
- \openlayers.html\: Implementation of an OpenLayers map solving the two required issues.
- \leaflet.html\: Implementation of a Leaflet map solving the two required issues.
- \style.css\: Stylesheet containing animations and tabular information styling.
- \script-ol.js\: OpenLayers logic.
- \script-leaflet.js\: Leaflet logic.

## Solved Issues
### Issue 1: Zoom Threshold for Markers
- **OpenLayers**: Solved by setting the \minZoom\ property directly on the \ol.layer.Vector\.
- **Leaflet**: Solved by listening to the \zoomend\ event of the map and conditionally adding or removing the \L.layerGroup\ containing the markers based on \map.getZoom()\.

### Issue 2: Earth Repeating Itself
- **OpenLayers**: Solved by setting \wrapX: false\ in the \ol.source.OSM\.
- **Leaflet**: Solved by setting \
oWrap: true\ in \L.tileLayer\ and restricting \maxBounds\.

## AI Usage Statement
- **What I learned from AI**: I learned how to effectively handle map bounds and layer visibility thresholds in both OpenLayers and Leaflet. I also utilized AI to generate boilerplate HTML and CSS for a responsive layout with animations.
- **Estimated AI usage time**: ~30 minutes for generating boilerplate and troubleshooting map constraints.
