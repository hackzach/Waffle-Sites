<!--
	Convert XSPF to HTML.
	Author: Lucas Gonze <lucas@gonze.com>
	Copyright 2004 Lucas Gonze.
	Licensed under version 2.0 of the Gnu General Public License.
-->
<xsl:stylesheet version = '1.0'
				xmlns:xsl='http://www.w3.org/1999/XSL/Transform'
				xmlns:xspf="http://xspf.org/ns/0/"
				>

  <xsl:output method="html" indent="yes"/>

  <xsl:template match="/">
	<html>
	  <head>
		  <title>Xspf.php playlist</title>

	  </head>

	  <body>

		  <h1 style="text-align:center">
			<a href="http://www.trbailey.net/xspf/">XSPF.PHP</a>, free playlist generator
		  </h1><br />
		  Use Browser "View -> Source" to see actual playlist<hr />

		<dl class="top">
		  <xsl:apply-templates select="*" />
		</dl>

	  </body>
	</html>
	
  </xsl:template>

  <!-- all href elements -->
  <xsl:template match="xspf:location|xspf:info|xspf:license|xspf:link|xspf:meta">
	<xsl:if test="string(.)">
	  <ul>
		<xsl:attribute name="class">
		  <xsl:value-of select="name(.)"/>
		</xsl:attribute>
		<li><xsl:value-of select="name(.)"/></li>
	  </ul>
	  <dd>
		<xsl:attribute name="class">
		  <xsl:value-of select="name(.)"/>
		</xsl:attribute>

		<!-- fixme: if there is a @rel or @property attribute, display
		and link to it.  We'll get an @rel if the current item is
		xspf:link and @property if current item is xspf:meta. -->
		
		<a>
		  <xsl:attribute name="href">
			<xsl:value-of select="." />
		  </xsl:attribute> 		
		  <xsl:value-of select="." />
		</a>

	  </dd>
	</xsl:if>
  </xsl:template>

  <!-- all image elements -->
  <xsl:template match="xspf:image">
	<xsl:if test="string(.)">
	  <dt>
		<xsl:attribute name="class">
		  <xsl:value-of select="name(.)"/>
		</xsl:attribute>
		<xsl:value-of select="name(.)"/>
	  </dt>
	  <dd>
		<xsl:attribute name="class">
		  <xsl:value-of select="name(.)"/>
		</xsl:attribute>
		<img>
		  <xsl:attribute name="src">
			<xsl:value-of select="." />
		  </xsl:attribute> 		
		</img>
	  </dd>
	</xsl:if>
  </xsl:template>

  <!-- all text elements -->
  <xsl:template match="xspf:title|xspf:annotation|xspf:trackNum|xspf:creator|xspf:identifier|xspf:date|xspf:duration">
	<xsl:if test="string(.)">
	  <ul>
      <xsl:attribute name="class">
		  <xsl:value-of select="name(.)"/>
      </xsl:attribute>
		<li>
      <xsl:value-of select="name(.)"/>
      <xsl:attribute name="class">
		  <xsl:value-of select="name(.)"/>
      </xsl:attribute>
      .........
      <strong><xsl:value-of select="." /></strong>
		</li>
	  </ul>
	  <dd>
		
	  </dd>
	</xsl:if>
  </xsl:template>

  <!-- ordered lists -->
  <xsl:template match="xspf:trackList|xspf:attribution">
	<xsl:if test="string(.)">
	  <p><dt>
		<xsl:attribute name="class">
		  <xsl:value-of select="name(.)"/>
		</xsl:attribute>
		<xsl:value-of select="name(.)"/>
	  </dt></p>
	  <dd>
		<xsl:attribute name="class">
		  <xsl:value-of select="name(.)"/>
		</xsl:attribute>
		
		<ol>
		  <xsl:for-each select="*">
			<li>
			  <xsl:apply-templates select="." />
			</li>
		  </xsl:for-each>
		</ol>
	  </dd>
	</xsl:if>
  </xsl:template>

  <!-- track element is an oddball that needs its own template -->
  <xsl:template match="xspf:track">
	<dl><div style="position:absolute; left:3px; font-size: 120%;"><img src="/images/alert.png"/></div>
	  <xsl:attribute name="class">
		<xsl:value-of select="name(.)"/>
	  </xsl:attribute>
	  <xsl:apply-templates select="*"/>
	</dl>
  </xsl:template>

  <!-- top-level title element is an oddball that needs its own template -->
  <xsl:template match="xspf:title"/>
  
  <!-- Suppress items not accounted for in templates.  Disable during debugging, enable in production.
  -->
  <xsl:template match="text()" />

</xsl:stylesheet>

