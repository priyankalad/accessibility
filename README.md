## List of Guidelines

1. [TEXT ALTERNATIVES](#text-alternatives)
2. [TIME-BASED MEDIA](#time-based-media)
3. [ADAPTABLE](#adaptable)
4. DISTINGUISHABLE
5. KEYBOARD ACCESSIBLE
6. ENOUGH TIME
7. SEIZURES AND PHYSICAL REACTIONS
8. NAVIGABLE
9. INPUT MODALITIES
10. READABLE
11. PREDICTABLE
12. INPUT ASSISTANCE
13. COMPATIBLE

---

<a id="text-alternatives"></a>

### 1. TEXT ALTERNATIVES

###### 1. Use **aria-label** attribute to provide a label for objects that can be read by assistive technology.

- aria-label may be disregarded by assistive technologies in situations where aria-labelledby is used for the same object.
- use of aria-label will override any native naming such as alt on images or label associated with a form field using the for attribute.
  e.g. _The following example shows how a generic "region" landmark might be added to a weather portlet._

```
<div role="region" aria-label="weather portlet">
...
</div>
```

###### 2. Use **aria-labelledby** attribute to provide short description for an element that can be read by assistive technologies (AT)

The aria-labelledby attribute associates an element with text that is visible elsewhere on the page by using an ID reference value that matches the ID attribute of the labeling element
e.g _To provide a short text description for a read-only complex graphic of an star rating pattern_

```
<div role="img" aria-labelledby="star_id">
<img src="fullstar.png" alt=""/>
<img src="fullstar.png" alt=""/>
<img src="fullstar.png" alt=""/>
<img src="fullstar.png" alt=""/>
<img src="emptystar.png" alt=""/>
</div>

<div id="star_id">4 of 5</div>
```

###### 3. Examine all images added to the content via CSS, HTML style attributes, or dynamically in script as background images.

e.g. _A book distributor uses background images to provide prices of books._

- Check that the images do not convey important information.
- If an image does convey important information, the information is provided to assistive technologies and is also available when the CSS image is not displayed.

###### 4. For all images in the content that convey information by way of color differences, Check that the information conveyed by color differences is included in the text alternative for the image.

e.g. _In a bar chart image of sales data, text alternative like "The red bars indicate sales that were below the yearly quota" fails to provide the information which is conveyed by the color red in the image._

###### 5. Check each text alternative to see if it is not describing content other than the currently-displayed non-text content.

e.g. _The source attribute of images on a page is updated periodically using script, but the text alternatives are not updated at the same time._

###### 6. Check each text alternative to see if it is actually a text alternative for the non-text content.

e.g. _programming references that do not convey the information or function of the non-text content such as "picture 1", "picture 2" or "0001", "0002" or "Intro#1", "Intro#2"._

###### 7. When an image is used for decoration, spacing or other purpose that is not part of the meaningful content in the page then the image has no meaning and should be ignored by assistive technologies. For decorative images which need to be ignored by AT, either role="presentation" must be used or the alt attribute must be provided and have a null value (i.e., alt="")

e.g. _Below image is meant to be ignored but its alternative text "spacer" is announced by screen readers and displayed in some alternate color schemes._
` <img src="spacer.gif" width="100" height="1" alt="spacer"/>Cedrus deodara</div>`

###### 8. If there is no source of text to provide an alternative for the image then assistive technologies are not able to identify the image or to convey its purpose to the user.

Identify img, area and input elements of type image and text alternative is applied by either of below mentioned ways

- Check if the alt attribute is present (most preferrable).
- Check if aria-labelledby attribute is present AND references one or more id elements in the page AND check if aria-labelledby is [accessibility supported](https://www.w3.org/TR/WCAG21/#dfn-accessibility-supported).
- Check if the aria-label attribute is present AND check if aria-label is [accessibility supported](https://www.w3.org/TR/WCAG21/#dfn-accessibility-supported).
- Check if the title attribute is present AND check if title is [accessibility supported](https://www.w3.org/TR/WCAG21/#dfn-accessibility-supported).

###### 9. For all non-text content that requires a long description, Check that the long description serves the same purpose or presents the same information as the non-text content.

e.g. _An image showing the locations of venues for events at the Olympic Games displayed on a street map. The image also contains an icon for each type of sporting event held at each venue. The long description states, "Map showing the location of each Olympic venue. Skating, hockey and curling are held at the Winter Park Ice Arena, Downhill skiing and jumping are held at Snow Mountain, Gymnastics is held at the JumpUp Arena, Cross Country Skiing is held at the Kilometer Forest". While this description provides useful information, it does not convey the same information as the image because it provides no specific location information such as the address or the distance of each location from some fixed point. Note that long descriptions do not always need to be in prose form; sometimes the information may best be presented in a table or other alternate format._

###### 10. Avoid substituting characters whose glyphs look similar to the intended character, for that intended character. While the glyphs for some of these characters may look like the glyphs for other characters in visual presentation, they are not processed the same by text-to-speech tools.

The characters U+0063 and U+03F2 both look like the letter "c", yet the first is from the Western alphabet and the second from the Greek alphabet and not used in Western languages

e.g. _The following word looks, in browsers with appropriate font support, like the English word "cook", yet is composed of the string U+03f2 U+043E U+03BF U+006B, only one of which is a letter from the Western alphabet. This word will not be processed meaningfully, and a text alternative is not provided._

```
ϲоοk
```

###### 11. Avoid the use of ASCII art when a text alternative is not provided.

Although ASCII art is implemented as a character string, its meaning comes from the pattern of glyphs formed by a visual presentation of that string, not from the text itself. Therefore ASCII art is non-text content and requires a text alternative.

###### 12. Use a text alternative on one item within a group of images that describes all items in the group

e.g. _In the following example, a rating is shown as three filled stars and two empty stars. While a text alternative could have been provided for each of the five images, the author has instead provided the rating in the form "3 out of 5 stars" for the first image and has marked the others using null alt text._

```
   <p>Rating:
        <img src="star1" alt="3 out of 5 stars">
        <img src="star1" alt="">
        <img src="star1" alt="">
        <img src="star2" alt="">
        <img src="star2" alt="">
    </p>
```

###### 13. Providing a long description in another location with a link to it that is immediately adjacent to the non-text content

e.g. _There is a chart. The figure caption immediately below the chart serves as a link to the long description. The Title attribute of the link makes it clear that this is a link to a long description._

###### 13.1. Using longdesc

Point 14 can be achieved alternatively using the built-in feature "longdesc"

```
<!-- The description is on the same page as the image -->
<p><img src="chart.gif" alt="a complex chart" longdesc="chartdesc.html"/></p>

<!-- The description is in an external page -->
<img longdesc="thispage.html#desc" alt="Line graph of the number of subscribers" src="http://www.company/images/graph.png">
<div id="desc">
<h3>Long Description: Line graph of the number of subscribers</h3>
<!-- Full Description of Graph -->
<p>Long description ends.</p>
<div>
```

###### 14. If an `img` element is the only content of the `a` element, check that its text alternative describes the purpose of the link

```
<a href="routes.html">
   <img src="topo.gif" alt="Current routes at Boulders Climbing Gym" />
</a>
```

###### 14.1 If the `a` element contains one or more `img` element(s) and the text alternative of the `img` element(s) is empty, check that the text of the link describes the purpose of the link

###### 14.2 If the `a` element only contains text, check that the text describes the purpose of the link

```
<a href="routes.html">
  Current routes at Boulders Climbing Gym
</a>
```

---

<a id="time-based-media"></a>

### 2. [TIME-BASED MEDIA]

###### 1. Provide transcripts for the audio content as users with audio processing disabilities need the audio content to be provided in an accessible format.

&nbsp;

###### 2. Provide an audio track that describes the video

e.g. _if the video included a step-by step diagram of a chemical process, the audio track should describe that process._

###### 2.1 Provide a textual description of the video within the content of a website before the video is shown or provide a link to another web page that describes the video.

&nbsp;

###### 3. For each video element used to play a video, Check that the video contains a track element of kind descriptions in the language of the video.

```
 <video poster="myvideo.png" controls>
				<source src="myvideo.mp4" srclang="en" type="video/mp4">
				<source src="myvideo.webm" srclang="fr" type="video/webm">
				<track src="myvideo_en.vtt" kind="descriptions" srclang="en" label="English">
				<track src="myvideo_fr.vtt" kind="descriptions" srclang="fr" label="French">
			  </video>
```

###### 4. Check that all dialogue and all important sounds are accompanied by a caption.

&nbsp;

---

<a id="adaptable"></a>

### 3. ADAPTABLE

###### 1. If any images of text are used to convey structural information of the document, Check that the proper semantic structure (e.g., HTML headings) is used with the text to convey the information.

```
<img src="Chapter1.gif" alt="Chapter One"/> //wrong
<h1><img src="Chapter1.gif" alt="Chapter One"></h1> //correct
<h1 class="heading">Chapter One</h1> //more appropriate
<p>Once upon a time in the land of the Web.....
</p>
```

###### 1.1 For styled text that conveys information, Check that in addition to styling, the proper semantic structure is used with the text to convey the information.

```
<style type="text/css">
 .heading1{
        font-family: Times, serif;
        font-size:200%;
        font-weight:bold;
 }
 </style>

 <p class="heading1">Introduction</p> //wrong
 <h1 class="heading1">Introduction</h1> //correct
 <p>This introduction provides detailed information about how to use this
 ........
 </p>
```

###### 2. Do not use white space characters, such as space, tab, line break, or carriage return, **++to format columns of data++** or **++to format tables++** in text content because using white space characters to create multiple columns does not provide the information in a natural reading order.

e.g. _The following example incorrectly uses white space characters to format a paragraph into a two column format_

```
Web Content Accessibility Guidelines      including blindness and low vision,
2.0 (WCAG 2.0) covers a wide range of     deafness and hearing loss, learning
issues and recommendations for making     difficulties, cognitive limitations, limited
Web content more accessible. This         movement, speech difficulties, and
```

_If this table was to be interpreted and spoken by a screen reader it would speak the following lines:_

    Web Content Accessibility Guidelines including blindness and low vision,
    2.0 (WCAG 2.0) covers a wide range of deafness and hearing loss, learning

###### 3. Do not attach Javascript event handlers to emulate links.

- A link created in this manner cannot be tabbed to from the keyboard and does not gain keyboard focus like other controls and/or links
- . If scripting events are used to emulate links, user agents including assistive technology may not be able to identify the links in the content as links.
  e.g. _Scripted event handling is added to an img element so that it functions as a link. In this example, the link functionality can be invoked with the mouse or via the Enter key if the user agent includes the element in the tab chain. Nevertheless, the element will not be recognized as a link._

```
function doNav(url) {
   window.location.href = url;

}
function doKeyPress(url) {
   //if the enter key was pressed
   if (window.event.type == "keypress" &&
       window.event.keyCode == 13) {
      doNav(url);
   }
}
//The markup for the image is:
<p>
	<img src="bargain.jpg"
		tabindex="0"
		alt="View Bargains"
		onclick="doNav('viewbargains.html');"
		onkeypress="doKeyPress('viewbargains.html');">
</p>
```

###### 4. Do not use structural markup to achieve a presentational effect, where structural markup indicates relationships that do not exist in the content.

e.g. _Example 1: In this example, a heading element is used to display an address in a large, bold font. The address does not identify a new section of the document, however, so it should not be marked as a heading_

```
<p>Interested in learning more? Write to us at</p>
<h4>3333 Third Avenue, Suite 300 · New York City</h4>
<p>And we'll send you the complete informational packet absolutely Free!</p>
```

_Example 2: The h1 and h2 elements are used properly to structure document, but the h3 and h4 elements between the title and the abstract are used only for visual effect — to control the fonts used to display the authors' names and the date._

```
<h1>Study on the Use of Heading  Elements in Web Pages</h1>
<h3>Joe Jones and Mary Smith<h3>
<h4>March 14, 2006</h4>
<h2>Abstract</h2>
<p>A study was conducted in early 2006 ...
</p>
```

###### 5. Do not use th elements, caption elements, or non-empty summary attributes in layout tables

- When a table is used for layout purposes the th element should not be used. Since the table is not presenting data there is no need to mark any cells as column or row headers.
- Likewise, there is no need for an additional description of a table which is only used to layout content. Do not include a summary attribute and do not use the summary attribute to describe the table as, for instance, "layout table". When spoken, this information does not provide value and will only distract users navigating the content via a screen reader.
  e.g. _Here is a simple example that uses a table to layout content in a three column format. The navigation bar is in the left column, the main content in the middle column, and an additional sidebar is on the right. At the top is a page title. The example marks the page title as <th>, and provides a summary attribute indicating that the table is a layout table. This example is a bad practice_

```
 <table summary="layout table">
 <tr>
   <th colspan=3>Page Title</th>
 </tr>
 <tr>
   <td><div>navigation content</div></td>
   <td><div>main content</div></td>
   <td><div>right sidebar content</div></td>
 </tr>
 <tr>
   <td colspan=3>footer</td>
 </tr>
 </table>
```

###### 6. Do not use `pre` element to markup tabular information

The pre element preserves only visual formatting. If the pre element is used to markup tabular information, the visually implied logical relationships between the table cells and the headers are lost
e.g _A schedule formatted with tabs between columns which is a bad practice_

```
<pre>
 	Monday	Tuesday	Wednesday	Thursday	Friday
 8:00-
 9:00	Meet with Sam
 9:00-
 10:00			Dr. Williams	Sam again	Leave for San Antonio
 </pre>
```

###### 7. Do not use `:before` and `:after` pseudo-elements and the `content` property in CSS to insert non-decorative content

For users who need to customize style information in order to view content according to their needs, they may not be able to access the information that is inserted using CSS
&nbsp;
Note: A common way to test this critieria is to disable CSS styles to view whether content added using pseudo-elements remains visible.
e.g._In the following example, :before and :after are used to indicate speaker changes and to insert quotation marks in a screenplay_

```
//The CSS contains:
p.jim:before {	content: "Jim: " }
p.mary:before { content: "Mary: " }
q:before { content: open-quote }
q:after  { content: close-quote }

//It is used in this excerpt:
<p class="jim">
 <q>Do you think he's going to make it?</q>
</p>
<p class="mary">
 <q>It's not looking good.</q>
</p>
```

###### 8. If `id` and `headers` attributes are used to associate data cells to header cells, ensure that programmatic association is correct.

&nbsp;

###### 9. Make sure that data tables use header elements (th) or other appropriate table mark-up.

table headers can be correctly programmatically determined by use of one of the following mechanisms:

- headers marked up with table header (th) elements
- scope attributes on th for tables with more than a single row or column of table headers.
- scope attributes on th for tables with more than a single row or column of table headers.
- headers and data cells associated using headers and id attributes
- headers marked up as td elements with the scope attribute
- headers marked up with ARIA role attributes rowheader or columnheader

###### 10. Do not use `role = 'presentation'` to an element whose purpose is to convey information or relationships in the content

e.g. \*\*
