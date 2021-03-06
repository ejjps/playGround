/**latest*/
/**
 * @class kony
 * @returns {kony} 
 */
 // version 5.5.20
 // last updated on 19 march, releaserawbytes for camera widget.
 // Widgets added Form, Button, ComboBox, ListBox, RadiobuttonGroup, Box, CheckBox, Label, Alert, Image2, ImageGallery,Browser.
 // Widgets added  Map, popup, ScrollBox, RichText, Segmentedui, Calendar, Textarea, Textbox,Tab,MenuBar,MenuItem,Call   //WebWidget,Slider,Tabpane,Datagrid,objectselector3D,Line,Pickerview,Switch,Video,Phone
 // Link added on June 25.
 //updated show,destroy methods in form
 //updated toolTip,hoverSkin on October 19
 //updated signatureCapture widget 22nd April 2013.
 //Camera and OS APIs
 //textbox oncancel event 10-4-2014
 //508 compliance changes
 
function kony(){ 
	
	//Form2 Widget properties are defined here
	ui.Form2 = 
	/**
	 * Creates a new Form2 object
	 * @class kony.ui.Form2
	 * @returns {kony.ui.Form2}
	 */
	function Form2 (basicProperties, layoutProperties, platformSpecificProperties){
	
	    //Form2 - Basic Properties Starts here
		
	 	/**
		 * Defines a string of alpha numeric characters that uniquely identifies a widget within an application.
		 * @property {String}
		 * @Mandatory Yes
		 * @Available All Platforms
		 * @access Read
		 */
		this.id = ""	
		
		/**
		 * Specifies custom JS Object with the key value pairs that a developer can use to store the context with the widget. 
		 * @property {Object}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.info = {}
		
		/**
		 * Specifies the possible types of the form. 
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read
		 */
		this.type = 0
		
		/**
		 * Specifies the form title. 
		 * @property {String}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.title = ""
		
		/**
		 * Specifies a background skin for form widget.
		 * @property {String}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.skin = ""	
		
		
		/**
		 * This is a skin property of a form level menu and it determines the look and feel of the Menu Item when focused.
		 * @property {String}
		 * @Available ipad,iphone,Android,Android tablet,Blackberry,Window Phone 7,J2ME
		 * @access Write
		 */
		this.menuFocusSkin = ""	
		
		
		/**
		 * menuItems represents the list of items to be displayed in the device menu control. Unlike application menu items, which are available across all the forms, these items are only available for a specific form. 
		 * @property {Object}
		 * @Available All platforms except SPA platform
		 * @access Write
		 */
		this.menuItems = {}
		
		/**
		 * This is a skin property and it determines the look and feel of a menu items when not in focus.
		 * @property {String}
		 * @Available All Platforms
		 * @access Write
		 */
		this.menuNormalSkin = ""	
		
		
		/**
		 * A header is a section of the form that is docked at the top of the form (does not scroll along with the content of the form). It accepts an array of kony.ui.Box object references with horizontal orientation that are added as header docked at the top of the Form. These headers can be reused across forms.
		 * @property {Array}
		 * @Available All Platforms except Desktop Web
		 * @access Read 
		 */
		this.headers = []	
		
		/**
		 * A footer is a section of the form that is docked at the bottom of the form (does not scroll along with the content of the form). It accepts an array of kony.ui.Box object references with horizontal orientation that are added as footer docked at the bottom of the Form. These footers can be reused across forms.
		 * @property {Array}
		 * @Available All Platforms except Desktop Web 
		 * @access Read 
		 */
		this.footers = []	
		
		/**
		 * Specifies the accessiblity configuration property for the widget.
		 * @property {Object}
		 * @Available iPhone, Android, and SPA-iPhone Platforms
		 * @access Read and Write
		 * @usage <pre>
		 /* accessibilityConfig =  {
				"a11yLabel": "Your text goes here",
			},
		*/
		this.accessibilityConfig = {}
		
	    //Form2 - Layout Configuration Properties starts here.
		
		/**
		 * Specifies the space between the content of the widget and the widget boundaries.
		 * @property {Array}
		 * @Available All Platforms except Mobile Web platforms.
		 * @access Read and Write
		 */
		this.padding = []
		
		/**
		 * Specifies the property to set the display orientation of the form on the device.
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read 
		 */
		this.displayOrientation = 0
		
		
		
        //Form2 - Platform Specific Properties starts here.
		

		/**
		 * Specifies the whether the scroll view bounces past the edge of the content and back again. When set to true the scroll view bounce is applied.
		 * @property {Boolean}
		 * @Available Available on iOS platform only.
		 * @access Read and Write
		 */
		this.bounces = true
		
		/**
		 * Specifies if the application menu is shown or hidden in the application.In some platforms, form menu items appear along with app menu items.
		 * @property {Boolean}
		 * @Available Android,Android Tablet and BlackBerry
		 * @access Read and Write
		 */
		this.menuPosition = true	
		
		/**
		 * Specifies the configuration to be used when the user arrives on this form.
		 * @property {Object}
		 * @Available All Platforms except Mobile Web Platforms
		 * @access Read and Write
		 */
		this.inTransitionConfig = {}	

		/**
		 * Specifies the type of transition effect to be applied when the Form is going out of view. 
		 * @property {Object}
		 * @Available All Platforms except Mobile Web platforms
		 * @access Read and Write
		 */
		this.outTransitionConfig = {}	
		
		/**
		 * Specifies the title bar that must be displayed on the form.
		 * @property {Boolean}
		 * @Available iPad,iPhone,Android,BlackBerry,J2ME
		 * @access Read and Write
		 */
		this.titleBar = true	
	
		/**
		 * Specifies the skin to be applied to the titleBar of the form.
		 * @property {String}
		 * @Available iPhone,Android,BlackBerry,J2ME
		 * @access Read and Write
		 */
		this.titleBarSkin = ""	
		
		
		/**
		 * Specifies the position of the title bar of the form.
		 * @property {Number}
		 * @Available iPad,iPhone
		 * @access Read and Write
		 */
		this.titleBarConfig = 1	
		
		/**
		 * Specifies the image for action bar icon. It is displayed on the left side of the action bar.
		 * @property {String}
		 * @Available Android,AndroidTablet
		 * @access Read and Write
		 */
		this.actionBarIcon = ""	
		
		/**
		 * Specifies if the action bar should be displayed.
		 * @property {Boolean}
		 * @Available Android,AndroidTablet
		 * @access Read and Write
		 */
		this.showActionBar = true	
		
		/**
		 * Specifies the icon to be displayed for the action bar.
		 * @property {Boolean}
		 * @Available Android,AndroidTablet
		 * @access Read and Write
		 */
		this.showActionBarIcon = true
		
		/**
		 * Specifies the layout changes that occur due to the animations applied/removed on other widgets. 
		 * @property {Object}
		 * @Available iOS and Android Platforms
		 * @access Read and Write
		 */
		this.layoutAnimConfig = {}
		 
        //Form2 - Events Starts here.
		
		/**
		 * An event callback invoked by the platform when the form is accessed for first time after its construction.
		 * @property {Event}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.addWidgets = new Event() 
	
		/**
		 * This event gets called only once in form life cycle that is when the form is ready with its widget hierarchy.
		 * @property {Event}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.init = new Event() 
	
		/**
		 * Specifies an Event which is triggered when a form goes completely out of view.
		 * @property {Event}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.onHide = new Event()	
		
		/**
		 * Specifies an Event which is triggered when there is a change in orientation of the form from portrait to landscape or vice versa.
		 * @property {Event}
		 * @Available All Platforms except Mobile Web platforms
		 * @access Read and Write
		 */
		this.onOrientationChange = new Event()
		
		/**
		 * Specifies an event which is triggered when the user uses the back button on the device.
		 * @property {Event}
		 * @Available Android,Android Tablet,BlackBerry,Desktop Web
		 * @access Read and Write
		 */
		this.onDeviceBack = new Event()
		
		/**
		 * preShow is executed every time a form is to be displayed. This event is called even on device back or while navigating back to the form through title bar navigation items.
		 * @property {Event}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.preShow = new Event()
		
		/**
		 * postShow is invoked after a form is displayed. Gets called even on device back or while navigating back to the form through title bar navigation items.
		 * @property {Event}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.postShow = new Event()
		
		/**
		 * Specifies an event which is triggered when the user uses the back button on the device.
		 * @property {Event}
		 * @Available Android,Android Tablet
		 * @access Read and Write
		 */
		this.onDeviceMenu = new Event()
		
	    /**
		 * Specifies the name of function to be executed when a form is loaded. The function must exist in the javascript folder.
		 * @property {Event}
		 * @Available Mobile Web(BJS),Mobile Web(Advanced),SPA (iPhone/Android/BlackBerry/Windows NTH)/Playbook
		 * @access Read and Write
		 */
		this.onLoadJS = new Event()
		
		/**
		 * Specifies the name of function to be executed when a form is unloaded. The function must exist in a javascript file. 
		 * @property {Event}
		 * @Available Mobile Web(BJS),Mobile Web(Advanced),SPA (iPhone/Android/BlackBerry/Windows NTH)/Playbook
		 * @access Read and Write
		 */
		this.unLoadJS = new Event()
		
		/**
		 * An event callback that is invoked by the platform when the back button is pressed on an action bar. The back button exists on the left side of the action bar with UP caret symbol. It is enabled only when onActionBarBack callback is registered on form and showActionBarIcon is set to true.
		 * @property {Event}
		 * @Available Android,AndroidTablet
		 * @access Read and Write
		 */
		this.onActionBarBack = new Event()
		
		//Form2 - Methods Starts here.		
		/**
		 * This method is used to add widgets to the form.
		 * @param widgetArray{Object} Comma separated list of widgets.<b>Mandatory</b>
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>
		//Procedure to create an OK button.<br/>
		var basicConfBut = {id : "buttonForOk", text:"OK", isVisible:true,onClick:gotofrmNext, setEnabled:true, skin: "btnskn", focusSkin: "btnfocusskn"};<br/>
		var layoutConfBut = {contentAlignment : constants.CONTENT_ALIGN_BOTTOM_RIGHT, containerWeight:100};<br/>
		var buttonForOk = new kony.ui.Button(basicConfBut, layoutConfBut, {});<br/>

		//Procedure to create a Cancel button.<br/>
		var basicConfBut = {id : "buttonForCancel", text:"Cancel", isVisible:true,onClick:gotofrmPrevious, setEnabled:true, skin: "btnskn", focusSkin: "btnfocusskn"};<br/>
		var layoutConfBut = {contentAlignment : constants.CONTENT_ALIGN_BOTTOM_LEFT, containerWeight:100};<br/>
		var buttonForCancel = new kony.ui.Button(basicConfBut, layoutConfBut, {});<br/>

		//Method to add an OK and a Cancel button.<br/>
		frmHome.add(buttonForOk, buttonForCancel);</pre>
		 */
		this.add = function (/**Object*/widgetArray)	{}
	
		/**
		 * This method is used to add widgets to the form container at the specified index.
		 * @param widgetref{Object} Reference of the name of the widget.<b>Mandatory</b>
		 * @param index {Number} Index number at which the widget is to be added.<b>Mandatory</b>
		 * @param animationConfig {Object} <b>Specifies the animation configuration object.<b> Note: This is OPTIONAL parameter and is supported only on iOS and Android platforms.</b></dd>
			<pre>  &nbsp;&nbsp;  <pre> &nbsp;&nbsp;<b>- animEffect</b> {Object} Specifies the animation effect. Following are the available options of animation effect. <b>Optional </b></pre> </pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_EFFECT_EXPAND:&#160;Specifies the widget must expand gradually by increasing the height of the widget. This option is applicable only when visibility is turned on.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_EFFECT_REVEAL: Specifies the widget must appear gradually by decreasing the transparency of the widget.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_EFFECT_NONE:&#160;This is the default option. Specifies animation should not be applied to the widget, but layout animations are applied on the Form that may be change the current widgets layout. The animation events are not triggered when this option is set.</pre></li></pre></dd>
		
			<pre>  &nbsp;&nbsp;  <pre> &nbsp;&nbsp;<b>- animDuration - Optional </b> {Number} Specifies the duration of the animation effect in seconds. The default value is 1. <b>Optional </b></pre> </pre></dd>
			
			<pre>  &nbsp;&nbsp;  <pre> &nbsp;&nbsp;<b>- animDelay - Optional </b> {Number} Specifies the delay of the animation effect in seconds. The default value is 0. <b>Optional </b></pre> </pre></dd>
			
			<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp; <b>- animCurve - Optional </b> Specifies the animation curve to be applied while playing the animation. An animation curve defines the speed of the animations at different intervals of the animation duration. Following are the available options of animation curve: </p></dd> </pre> </pre> </dd>
        		<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_CURVE_EASEIN:&#160;Specifies the animation to start slowly and then continues with normal speed.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_CURVE_EASEOUT: Specifies the animation to start with normal speed and slowdown towards the end.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_CURVE_EASEINOUT:&#160;Specifies the animation to start slowly and then continues with normal speed and then again slowdown towards the end.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_CURVE_LINEAR:&#160;This is the default value. Specifies the animation to continue with normal speed.</pre></li></pre></dd>

			<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp; <b>- animCallBacks - Optional </b> It is a JS dictionary containing the events invoked by the platform during the animation life cycle. Following are the available events: </p></dd> </pre> </pre> </dd>
        		<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; animStarted:&#160;Invoked at the end of the animation without any parameters. Following is the signature of the event:</pre></li></pre></dd><b>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp;<b>function animStarted() </b></dd> </p></pre> </pre> </pre> </br> </pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; animEnded: Invoked at the end of the animation without any parameters. Following is the signature of the event:</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp;<b>function animEnded() </b></pre> </pre> </pre>
				

		 * @Available All Platforms
		 * @access Write
		 * @usage <pre> 
		//Procedure to create animation at addAt.<br/>
			
		var basicConfBut = {id : "buttonForOk", text:"OK", isVisible:true,onClick:gotofrmNext, setEnabled:true, skin: "btnskn", focusSkin: "btnfocusskn"};<br/>
		var layoutConfBut = {contentAlignment : constants.CONTENT_ALIGN_BOTTOM_RIGHT, containerWeight:100};<br/>
		var buttonForOk = new kony.ui.Button(basicConfBut, layoutConfBut, {});<br/>
    
	    //Method to add an OK button at index 1.<br/>
		frmHome.addAt(buttonForOk, 1,animationConfig);</pre>
		 */
		this.addAt = function (/**Object*/widgetref,/**Number*/index,/**Object*/animationConfig)	{}
	
		/**
		 * This method is used to display the form on the screen.
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>
		//Defining properties of a form.<br/>
		var basicConf = {id : "formHome", title:"Form Home for FORM",addWidgets:addwidgetsfrmNew, skin:"frmskn"};<br/>
		var layoutConf = {contentAlignment : constants.CONTENT_ALIGN_TOP_CENTER, containerWeight:100};<br/>
		var pspConf = {titleBar: true, titleBarSkin: "skntitlebar"};<br/>

		//Creating a form using the properties defined above.<br/>
		var myForm = new kony.ui.Form2(basicConf,layoutConf,pspConf)<br/>

		//Showing a form using show method.<br/>
		myForm.show(); </pre>
		 */
		this.show = function ()	{}
	
		/**
		 * This method is used to destroy any unwanted forms at any point in time, and allows increasing the application life by reducing the memory usage.
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>	
		//Defining properties of a form.<br/>
		var basicConf = {id : "formHome", title:"Form Home for FORM",addWidgets:addwidgetsfrmNew, skin:"frmskn"};<br/>
		var layoutConf = {contentAlignment : constants.CONTENT_ALIGN_TOP_CENTER, containerWeight:100};<br/>
		var pspConf = {titleBar: true, titleBarSkin: "skntitlebar"};<br/>

		//Creating a form using the properties defined above.<br/>
		var myForm = new kony.ui.Form2(basicConf,layoutConf,pspConf)<br/>

		//Destroying a form using destroy method.<br/>
		myForm.destroy();</pre>		 
		 */
		this.destroy = function ()	{}
	
	
		/**
		 * This method removes a widget from the form container. If a new widget is removed will reflect immediately from the Form hierarchy model perspective, however the changes are displayed when the Form appears. When the widgets are added to the current visible Form, then the changes will reflect immediately.
		 * @param widgetref {Object} Reference of the name of the widget.<b>Mandatory</b>
		 * @return The current Form handle is returned.
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>	
		//Defining properties of a form.<br/>
		var basicConf = {id : "formHome", title:"Form Home for FORM",addWidgets:addwidgetsfrmNew, skin:"frmskn"};<br/>
		var layoutConf = {contentAlignment : constants.CONTENT_ALIGN_TOP_CENTER, containerWeight:100};<br/>
		var pspConf = {titleBar: true, titleBarSkin: "skntitlebar"};<br/>

		//Creating a form using the properties defined above.<br/>
		var myForm = new kony.ui.Form2(basicConf,layoutConf,pspConf)<br/>

		//Procedure to create an OK button.<br/>
		var basicConfBut = {id : "buttonForOk", text:"OK", isVisible:true,onClick:gotofrmNext, setEnabled:true, skin: "btnskn", focusSkin: "btnfocusskn"};<br/>
		var layoutConfBut = {contentAlignment : constants.CONTENT_ALIGN_BOTTOM_RIGHT, containerWeight:100};<br/>
		var buttonForOk = new kony.ui.Button(basicConfBut, layoutConfBut, {});<br/>

		//Removing a form using remove method.<br/>
		myForm.remove(buttonForOk);</pre>		 
		 */
		this.remove = function (/**Object*/widgetref)	{}
	

		/**
		 * This method removes a widget at the given index from the Form container. If a new widget is removed will reflect immediately from the Form hierarchy model perspective, however the changes are displayed when the Form appears.
		 * @param index {Number} Reference of the name of the widget.<b>Mandatory</b>
		 * @param animationConfig {Object} <b>Specifies the animation configuration object.<b> Note: This is OPTIONAL parameter and is supported only on iOS and Android platforms.</b></dd>
			<pre>  &nbsp;&nbsp;  <pre> &nbsp;&nbsp;<b>- animEffect</b> {Object} Specifies the animation effect. Following are the available options of animation effect.<b>Optional </b></pre> </pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_EFFECT_COLLAPSE:�Specifies the widget must collapse gradually by decreasing the height of the widget. This option is applicable only when visibility is turned on.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_EFFECT_FADE: Specifies the widget must disappear gradually by increasing the transparency of the widget.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_EFFECT_NONE:&#160;This is the default option. Specifies animation should not be applied to the widget, but layout animations are applied on the Form that may be change the current widgets layout. The animation events are not triggered when this option is set.</pre></li></pre></dd>
		
			<pre>  &nbsp;&nbsp;  <pre> &nbsp;&nbsp;<b>- animDuration - Optional </b> {Number} Specifies the duration of the animation effect in seconds. The default value is 1. <b>Optional </b></pre> </pre></dd>
			
			<pre>  &nbsp;&nbsp;  <pre> &nbsp;&nbsp;<b>- animDelay - Optional </b> {Number} Specifies the delay of the animation effect. The default value is 0.<b>Optional </b></pre> </pre></dd>
			
			<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp; <b>- animCurve - Optional </b> Specifies the animation curve to be applied while playing the animation. An animation curve defines the speed of the animations at different intervals of the animation duration. Following are the available options of animation curve: </p></dd> </pre> </pre> </dd>
        		<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_CURVE_EASEIN:&#160;Specifies the animation to start slowly and then continues with normal speed.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_CURVE_EASEOUT: Specifies the animation to start with normal speed and slowdown towards the end.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_CURVE_EASEINOUT:&#160;Specifies the animation to start slowly and then continues with normal speed and then again slowdown towards the end.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_CURVE_LINEAR:&#160;This is the default value. Specifies the animation to continue with normal speed.</pre></li></pre></dd>

			<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp; <b>- animCallBacks - Optional </b> It is a JS dictionary containing the events invoked by the platform during the animation life cycle. Following are the available events: </p></dd> </pre> </pre> </dd>
        		<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; animStarted:&#160;Invoked at the end of the animation without any parameters. Following is the signature of the event:</pre></li></pre></dd><b>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp;<b>function animStarted() </b></dd> </p></pre> </pre> </pre> </br> </pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; animEnded: Invoked at the end of the animation without any parameters. Following is the signature of the event:</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp;<b>function animEnded() </b></pre> </pre> </pre>
		 
		 * @returns {Object} Reference of the name of the widget to be removed.
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>	
		//Defining properties of a form.<br/>
		var basicConf = {id : "formHome", title:"Form Home for FORM",addWidgets:addwidgetsfrmNew, skin:"frmskn"};<br/>
		var layoutConf = {contentAlignment : constants.CONTENT_ALIGN_TOP_CENTER, containerWeight:100};<br/>
		var pspConf = {titleBar: true, titleBarSkin: "skntitlebar"};<br/>

		//Creating a form using the properties defined above.<br/>
		var myForm = new kony.ui.Form2(basicConf,layoutConf,pspConf)<br/>

		//Procedure to create an OK button.<br/>
		var basicConfBut = {id : "buttonForOk", text:"OK", isVisible:true,onClick:gotofrmNext, setEnabled:true, skin: "btnskn", focusSkin: "btnfocusskn"};<br/>
		var layoutConfBut = {contentAlignment : constants.CONTENT_ALIGN_BOTTOM_RIGHT, containerWeight:100};<br/>
		var buttonForOk = new kony.ui.Button(basicConfBut, layoutConfBut, {});<br/>
	
		//Removing a form using remove method at index 1.<br/>
		myForm.removeAt(1);</pre>		 
		 */
		this.removeAt = function (/**Number*/index,/**Object*/animationConfig)	{}
	
	
		/**
		 * Note: This method is supported only on iOS and Android platforms. This method removes a widget and replaces with another widget in a form. If a widget is replaced from the form, will reflect immediately from the Form hierarchy model perspective; however the changes are displayed when the Form appears.
		 * @param widgetref{Object} Reference of the name of the widget.<b>Mandatory</b>
		 * @param index {Number} Index number at which the widget is to be replaced. If the index is lessthan 0, then first widget in the container gets replaced. If the index greater than size -1, then the last widget in the container widget gets replaced. The term size refers to the number of widgets present in the container widget.<b>Mandatory</b>
		 * @param animationConfig {Object} <b>Specifies the animation configuration object.<b> Optional</b></dd>
			<pre>  &nbsp;&nbsp;  <pre> &nbsp;&nbsp;<b>- animEffect</b> {Object} Specifies the animation effect. Following are the available options of animation effect. <b>Optional </b></pre> </pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_EFFECT_FLIP_RIGHT:�Specifies the widget must flip from right to left.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_EFFECT_FLIP_LEFT: Specifies the widget must flip from left to right.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_EFFECT_NONE:&#160;This is the default option. Specifies animation should not be applied to the widget, but layout animations are applied on the Form that may be change the current widgets layout. The animation events are not triggered when this option is set.</pre></li></pre></dd>
		
			<pre>  &nbsp;&nbsp;  <pre> &nbsp;&nbsp;<b>- animDuration - Optional </b> {Number} Specifies the duration of the animation effect in seconds. The default value is 1. <b>Optional </b></pre> </pre></dd>
			
			<pre>  &nbsp;&nbsp;  <pre> &nbsp;&nbsp;<b>- animDelay - Optional </b> {Number} Specifies the delay of the animation effect in seconds. The default value is 0. <b>Optional </b></pre> </pre></dd>
			
			<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp; <b>- animCurve - Optional </b> Specifies the animation curve to be applied while playing the animation. An animation curve defines the speed of the animations at different intervals of the animation duration. Following are the available options of animation curve: </p></dd> </pre> </pre> </dd>
        		<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_CURVE_EASEIN:&#160;Specifies the animation to start slowly and then continues with normal speed.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_CURVE_EASEOUT: Specifies the animation to start with normal speed and slowdown towards the end.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_CURVE_EASEINOUT:&#160;Specifies the animation to start slowly and then continues with normal speed and then again slowdown towards the end.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_CURVE_LINEAR:&#160;This is the default value. Specifies the animation to continue with normal speed.</pre></li></pre></dd>

			<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp; <b>- animCallBacks - Optional </b> It is a JS dictionary containing the events invoked by the platform during the animation life cycle. Following are the available events: </p></dd> </pre> </pre> </dd>
        		<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; animStarted:&#160;Invoked at the end of the animation without any parameters. Following is the signature of the event:</pre></li></pre></dd><b>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp;<b>function animStarted() </b></dd> </p></pre> </pre> </pre> </br> </pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; animEnded: Invoked at the end of the animation without any parameters. Following is the signature of the event:</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp;<b>function animEnded() </b></pre> </pre> </pre>
				

		 * @Available iOS and Android platforms
		 * @access Write
		 * @usage <pre> 
		//Procedure to create animation at replaceAt.<br/>
			
		var basicConfBut = {id : "buttonForOk", text:"OK", isVisible:true,onClick:gotofrmNext, setEnabled:true, skin: "btnskn", focusSkin: "btnfocusskn"};<br/>
		var layoutConfBut = {contentAlignment : constants.CONTENT_ALIGN_BOTTOM_RIGHT, containerWeight:100};<br/>
		var buttonForOk = new kony.ui.Button(basicConfBut, layoutConfBut, {});<br/>
    
	    //Method to add an OK button at index 1.<br/>
		frmHome.replaceAt(buttonForOk, 1,animationConfig);</pre>
		 */
		this.replaceAt = function (/**Object*/widgetref,/**Number*/index,/**Object*/animationConfig)	{}
	

	
		/**
		 * This method returns an array of the widget references which are direct children of Form.
		 * @returns {Array} This method returns Read only array of widget references. Modifying the array and changing the position of widgets in this array doesn't reflect in the Form hierarchy, however you can get handle to the widgets through this array and modify the widgets through widget level methods as exposed by individual widgets.
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>	
		//Defining properties of a form.<br/>
		var basicConf = {id : "formHome", title:"Form Home for FORM",addWidgets:addwidgetsfrmNew, skin:"frmskn"};<br/>
		var layoutConf = {contentAlignment : constants.CONTENT_ALIGN_TOP_CENTER, containerWeight:100};<br/>
		var pspConf = {titleBar: true, titleBarSkin: "skntitlebar"};<br/>

		//Creating a form using the properties defined above.<br/>
		var myForm = new kony.ui.Form2(basicConf,layoutConf,pspConf)<br/>

		//Procedure to create an OK button.<br/>
		var basicConfBut = {id : "buttonForOk", text:"OK", isVisible:true,onClick:gotofrmNext, setEnabled:true, skin: "btnskn", focusSkin: "btnfocusskn"};<br/>
		var layoutConfBut = {contentAlignment : constants.CONTENT_ALIGN_BOTTOM_RIGHT, containerWeight:100};<br/>
		var buttonForOk = new kony.ui.Button(basicConfBut, layoutConfBut, {});<br/>

		//Method to return myForm widgets.<br/>
		myForm.widgets();</pre>		 
		 */
		this.widgets = function ()	{}
	
	
		/**
		 * This method gives you the control to scroll the form upto the position of selected widget.
		 * @param widgetref {Object} Reference of the name of the widget.<b>Mandatory</b>
		 * @Available All Platforms except Mobile Web platforms
		 * @access Write
		 * @usage <pre>	
		//Procedure to create a label for OK button.<br/>
		var basicConfLbl = {id : "labelForOk", text:"OK", isVisible:true};<br/>
		var layoutConfLbl = {contentAlignment : constants.CONTENT_ALIGN_BOTTOM_RIGHT, containerWeight:100};<br/>
		var labelForOk = new kony.ui.Label(basicConfLbl, layoutConfLbl, {});<br/>

		//Defining properties for a form.<br/>
		var basicConf = {id : "formHome", title:"My Form"};<br/>
		var layoutConf = {padding: [20,20,20,20]};<br/>

		//Creating a form with the properties defined above.<br/>
		var frmScrollToWidget= new kony.ui.Form2(basicConf, layoutConf, {} );<br/>

		//Method to scroll the form upto label.<br/>
		frmScrollToWidget.scrollToWidget(labelForOk);</pre>		 
		 */
		this.scrollToWidget = function (/**Object*/widgetref)	{}
	
	    /**
		 * This method enables you to set the properties for a left-side button of a titlebar.
		 * @Available iPhone,iPad
		 * @access Write
		 * @usage <pre>	
	     */
		this.setTitleBarLeftSideButton = function ()	{}
	
	    /**
		 * This method enables you to set the properties for a right-side button of a titlebar.
		 * @Available iPhone,iPad
		 * @access Write
		 * @usage <pre>	
	     */
		this.setTitleBarRightSideButton = function ()	{}
	   
	    /**
		 * This method enables you to set the skin for a titlebar of a form.
		 * @Available iPhone,iPad
		 * @access Write
		 * @usage <pre>	
	     */
		this.setTitleBarSkin= function ()	{}
	
	    /**
		 * This method gives you the control to show a titlebar within a form.
		 * @Available iPhone,iPad
		 * @access Write
		 * @usage <pre>	
	     */
		this.showTitleBar= function ()	{}
	
	    /**
		 * This method gives you the control to hide a titlebar within a form.
		 * @Available iPhone,iPad
		 * @access Write
		 * @usage <pre>	
	     */
		this.hideTitleBar= function ()	{}
		
		/**
		 * This method gives you the control to scroll to the beginning of the form.
		 * @Available All Platforms except Mobile Web platforms
		 * @access Write
		 * @usage <pre>	
		//Defining properties for a form.<br/>
		var basicConf = {id : "formHome", title:"My Form"};<br/>
		var layoutConf = {padding: [20,20,20,20]};<br/>

		//Creating a form with the properties defined above.<br/>
		var frmScrollToBeginning= new kony.ui.Form2(basicConf, layoutConf, {} );<br/>

		//Method to scroll to the beginning of the form.<br/>
		frmScrollToBeginning.scrollToBeginning();</pre>		 
		 */
		this.scrollToBeginning = function ()	{}
	
	
		/**
		 * This method gives you the control to scroll to the end of the form.
		 * @Available All Platforms except Mobile Web
		 * @access Write
		 * @usage <pre>	
		//Defining properties for a form.<br/>
		var basicConf = {id : "formHome", title:"My Form"};<br/>
		var layoutConf = {padding: [20,20,20,20]};<br/>

		//Creating a form with the properties defined above.<br/>
		var frmScrollToEnd= new kony.ui.Form2(basicConf, layoutConf, {} );<br/>

		//Method to scroll to the end of the form.<br/>
		frmScrollToEnd.scrollToEnd(labelForOk);</pre>		 
		 */
		this.scrollToEnd = function ()	{}
		
		
		/**
	     * This method specifies the widget that must be enabled or disabled.
		 * @param enabled{Boolean} Indicates widget whether true or false.<b>Mandatory</b>
		 * @Available All Platforms except on Map widget for SPA platform 
		 * @access Write
		 */
        this.setEnabled = function (/**Boolean*/enabled) {}	
    

        /**
	     * This method allows you to set a gesture recognizer for a specified gesture for a specified widget. 
		 * @param gestureType{Number} Indicates the type of gesture that needs to be detected on the widget.<b>Mandatory</b>
		 * @param setupParams {Array}Specifies an object that has the configuration parameters needed to setup a gesture recognizer.<b>Mandatory</b>
		 * @param gestureHandler{Function} Specifies the function that needs to be executed when a gesture is recognized.<b>Mandatory</b>
		 * @Available ios,Android,BlackBerry,Windows phone/Windows Kiosk,J2ME,SPA 
		 * @access Write
		 * @usage <pre>
	    //The below function will get invoked  when a gesture is recognized.
        function myTap(myWidget,gestureInfo)<br/>
       {
		alert(" Tap Gesture detected");
		alert("gestureType :"+gestureInfo.gestureType);
		alert("gesturePosition :"+gestureInfo.gesturePosition);
		//write any further logic here
	    } <br/>

		//Setting Gesture configuration.<br/>
		local setupTblTap = {fingers:1,taps:2};//double tap gesture<br/>

		//To add a TAP gesture recognizer on a hbox with ID hbx1 placed on a form frm1<br/>
		var tapGesture=frm1.hbx1.setGgestureRecognizer(1,setupTblTap,myTap);</pre>
		 */
		this.setGestureRecognizer = function (/**Number*/gestureType,/**Array*/setupParams,/**Function*/gestureHandler) {}

		/**
	     * This method allows you to remove a specified gesture recognizer for a specified widget. 
		 * @param uniqueIdentifier{Widgetref} Indicates the type of gesture added to the form.<b>Mandatory</b>
		 * @Available iPhone,iPad,Android,BlackBerry,Windows phone,SPA 
		 * @access Write
		 * @usage <pre>
		//The below function will get invoked when a gesture is recognized.<br/>
		function myTap(myWidget,gestureInfo)<br/>
	    {
		alert(" Tap Gesture detected");
		alert("gestureType :"+gestureInfo.gestureType);
		alert("gesturePosition :"+gestureInfo.gesturePosition);
		//write any further logic here
		}<br/>

		//Setting Gesture configuration.<br/>
		local setupTblTap = {fingers:1,taps:2};//double tap gesture<br/>

		//To add a TAP gesture recognizer on a hbox with ID hbx1 placed on a form frm1<br/>
		var tapGesture=frm1.hbx1.setGestureRecognizer(1,setupTblTap,myTap)<br/>

		//To remove the TAP gesture recognizer on a hbox with ID hbx1 placed on a form frm1<br/>
		frm1.hbx1.removeGestureRecognizer(tapGesture);</pre>
		 */
		this.removeGestureRecognizer = function (/**Widgetref*/uniqueIdentifier) {}
    }
		
	
		
	//For Backward compatability this code has been added to support 4.1 and below versions. 
	
	//Form starts here
	ui.Form = 
	/**
	 * Creates a new Form object
	 * @class kony.ui.Form
	 * @returns {kony.ui.Form}
	 */
	function Form (basicProperties, layoutProperties, platformSpecificProperties){
	
	    //Form - Basic Properties Starts here
		
	 	/**
		 * Defines a string of alpha numeric characters that uniquely identifies a widget within an application.
		 * @property {String}
		 * @Mandatory Yes
		 * @Available All Platforms
		 * @access Read
		 */
		this.id = ""	
		
		/**
		 * Specifies custom JS Object with the key,value pairs that a developer can use to store the context with the widget. 
		 * @property {Object}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.info = {}	
		
		/**
		 * Specifies the possible types of the form. 
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read
		 */
		this.type = 0
		
		/**
		 * Specifies the form title. 
		 * @property {String}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.title = ""	
		
		/**
		 * Specifies a background skin for Form widget.
		 * @property {String}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.skin = ""	
		
		/**
		 * This is a skin property of a form level menu and it determines the look and feel of the Menu Item when focused.
		 * @property {String}
		 * @Available ipad,iphone,Android,Android tablet,Blackberry,Window Phone 7,J2ME
		 * @access Write
		 */
		this.menuFocusSkin = ""	
		
		
		/**
		 * MenuItems represents the list of items to be displayed in the device menu control. Unlike application menu items, which are available across all the forms, these items are only available for a specific form. 
		 * @property {Object}
		 * @Available All platforms except SPA platform
		 * @access Write
		 */
		this.menuItems = ""	
		
		/**
		 * This is a skin property and it determines the look and feel of a menu items when not in focus.
		 * @property {String}
		 * @Available All Platforms
		 * @access Write
		 */
		this.menuNormalSkin = ""	
		
		
	    //Form - Layout Configuration Properties starts here.
		
		/**
		 * Specifies the property to set the display orientation of the form on the device.
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read 
		 */
		this.displayOrientation = 0
		
		/**
		 * Specifies the space between the content of the widget and the widget boundaries.
		 * @property {Array}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.padding = []
	
	    
        //Form - Platform Specific Properties starts here.
		
		/**
		 * Specifies if the application menu is shown or hidden in the application. In some platforms, form menu items appear along with app menu items.
		 * @property {Boolean}
		 * @Available Android,Android Tablet BlackBerry
		 * @access Read and Write
		 */
		this.menuPosition = true	
		
		/**
		 * Specifies the configuration to be used when the user arrives on this form. It accepts hash values.
		 * @property {Object}
		 * @Available All Platforms except Server side Mobile Web and Windows 8 platforms
		 * @access Read and Write
		 */
		this.inTransitionConfig = {}	

		/**
		 * Specifies the type of transition effect to be applied when the Form is going out of view.
		 * @property {Object}
		 * @Available All Platforms except Server Side Mobile Web and Windows 8 platforms
		 * @access Read and Write
		 */
		this.outTransitionConfig = {}	
		
		/**
		 * Specifies the title bar must be displayed on the form.
		 * @property {Boolean}
		 * @Available iPhone,iPad,Android,BlackBerry,Windows 8
		 * @access Read and Write
		 */
		this.titleBar = true	
		
		
		/**
		 * Specifies the skin to be applied to the titleBar of the form.
		 * @property {String}
		 * @Available iPhone,Android,BlackBerry
		 * @access Read and Write
		 */
		this.titleBarSkin = ""	
	
       /**
		 * Specifies the position of the titleBar of the form.
		 * @property {Number}
		 * @Available iPhone,iPad
		 * @access Read and Write
		 */
		this.titleBarConfig = 1
	   
	   
	   
        //Form - Events Starts here.
		
		/**
		 * An event callback invoked by the platform when the form is accessed for first time after its construction.
		 * @property {Event}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.addWidgets = new Event() 
	
		/**
		 * This event gets called only once in form life cycle that is when the form is ready with its widget hierarchy.
		 * @property {Event}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.init = new Event() 
	
		/**
		 * Specifies an Event which is triggered when a form goes completely out of view.
		 * @property {Event}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.onHide = new Event()	
		
		/**
		 * Specifies an Event which is triggered when there is a change in orientation of the form from portrait to landscape or vice versa.
		 * @property {Event}
		 * @Available All Platforms except Serverside Mobile Web and Desktop Web 
		 * @access Read and Write
		 */
		this.onOrientationChange = new Event()
		
		/**
		 * Specifies an event which is triggered when the user uses the back button on the device.
		 * @property {Event}
		 * @Available Android,Android Tablet, BlackBerry
		 * @access Read and Write
		 */
		this.onDeviceBack = new Event()
		
		/**
		 * preShow is executed every time a form is to be displayed. This event is called even on device back or while navigating back to the form through title bar navigation items.
		 * @property {Event}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.preShow = new Event()
		
		/**
		 * postShow is invoked after a form is displayed. Gets called even on device back or while navigating back to the form through title bar navigation items.
		 * @property {Event}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.postShow = new Event()
		
		/**
		 * Specifies an event which is triggered when the user uses the back button on the device.
		 * @property {Event}
		 * @Available Android, Android Tablet
		 * @access Read and Write
		 */
		this.onDeviceMenu = new Event()
		
	    /**
		 * Specifies the name of function to be executed when a form is loaded. The function must exist in the javascript folder.
		 * @property {Event}
		 * @Available Mobile Web(BJS),Mobile Web(Advanced)
		 * @access Read and Write
		 */
		this.onLoadJS = new Event()
		
		/**
		 * Specifies the name of function to be executed when a form is unloaded. The function must exist in a javascript file. 
		 * @property {Event}
		 * @Available Mobile Web(BJS),Mobile Web(Advanced)
		 * @access Read and Write
		 */
		this.unLoadJS = new Event()
		
		/**
		 * Specifies an event which is triggered when the form is destroyed.
		 * @property {Event}
		 * @Available iPhone/iPad
		 * @access Read and Write
		 */
		this.onDestroy = new Event()
		
		
		//Form - Methods Starts here.		
		/**
		 * This method is used to add widgets to the form.
		 * @param widgetArray{Object} Specifies a list of all widgets to be added.
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>
		//Procedure to create an OK button.<br/>
		var basicConfBut = {id : "buttonForOk", text:"OK", isVisible:true,onClick:gotofrmNext, setEnabled:true, skin: "btnskn", focusSkin: "btnfocusskn"};<br/>
		var layoutConfBut = {contentAlignment : constants.CONTENT_ALIGN_BOTTOM_RIGHT, containerWeight:100};<br/>
		var buttonForOk = new kony.ui.Button(basicConfBut, layoutConfBut, {});<br/>

		//Procedure to create a Cancel button.<br/>
		var basicConfBut = {id : "buttonForCancel", text:"Cancel", isVisible:true,onClick:gotofrmPrevious, setEnabled:true, skin: "btnskn", focusSkin: "btnfocusskn"};<br/>
		var layoutConfBut = {contentAlignment : constants.CONTENT_ALIGN_BOTTOM_LEFT, containerWeight:100};<br/>
		var buttonForCancel = new kony.ui.Button(basicConfBut, layoutConfBut, {});<br/>

		//Method to add an OK and a Cancel button.<br/>
		frmHome.add(buttonForOk, buttonForCancel);</pre>
		 */
		this.add = function (/**Object*/widgetArray)	{}
	
		/**
		 * This method is used to add widgets to the form container at the specified index.
		 * @param widgetref{Object} Reference of the name of the widget.<b>Mandatory</b>
		 * @param index {Number} Index number at which the widget is to be added.<b>Mandatory</b>
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre> 
		//Procedure to create an OK button.<br/>
		var basicConfBut = {id : "buttonForOk", text:"OK", isVisible:true,onClick:gotofrmNext, setEnabled:true, skin: "btnskn", focusSkin: "btnfocusskn"};<br/>
		var layoutConfBut = {contentAlignment : constants.CONTENT_ALIGN_BOTTOM_RIGHT, containerWeight:100};<br/>
		var buttonForOk = new kony.ui.Button(basicConfBut, layoutConfBut, {});<br/>
    
	    //Method to add an OK button at index 1.<br/>
		frmHome.addAt(buttonForOk, 1);</pre>
		 */
		this.addAt = function (/**Object*/widgetref,/**Number*/index)	{}
	
		/**
		 * This method is used to display the form on to the screen.
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>
		//Defining properties of a form.<br/>
		var basicConf = {id : "formHome", title:"Form Home for FORM",addWidgets:addwidgetsfrmNew, skin:"frmskn"};<br/>
		var layoutConf = {contentAlignment : constants.CONTENT_ALIGN_TOP_CENTER, containerWeight:100};<br/>
		var pspConf = {titleBar: true, titleBarSkin: "skntitlebar"};<br/>

		//Creating a form using the properties defined above.<br/>
		var myForm = new kony.ui.Form(basicConf,layoutConf,pspConf)<br/>

		//Showing a form using show method.<br/>
		myForm.show(); </pre>
		 */
		this.show = function ()	{}
	
		/**
		 * This method is used to destroy any unwanted forms at any point in time, and allows increasing the application life by reducing the memory usage.
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>	
		//Defining properties of a form.<br/>
		var basicConf = {id : "formHome", title:"Form Home for FORM",addWidgets:addwidgetsfrmNew, skin:"frmskn"};<br/>
		var layoutConf = {contentAlignment : constants.CONTENT_ALIGN_TOP_CENTER, containerWeight:100};<br/>
		var pspConf = {titleBar: true, titleBarSkin: "skntitlebar"};<br/>

		//Creating a form using the properties defined above.<br/>
		var myForm = new kony.ui.Form(basicConf,layoutConf,pspConf)<br/>

		//Destroying a form using destroy method.<br/>
		myForm.destroy();</pre>		 
		 */
		this.destroy = function ()	{}
	
	
		/**
		 * This method removes a widget from the form container. If a new widget is removed will reflect immediately from the Form hierarchy model perspective, however the changes are displayed when the Form appears. When the widgets are added to the current visible Form, then the changes will reflect immediately.
		 * @param widgetref {Object} Reference of the name of the widget.<b>Mandatory</b> 
		 * @returns The current Form handle is returned.
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>	
		//Defining properties of a form.<br/>
		var basicConf = {id : "formHome", title:"Form Home for FORM",addWidgets:addwidgetsfrmNew, skin:"frmskn"};<br/>
		var layoutConf = {contentAlignment : constants.CONTENT_ALIGN_TOP_CENTER, containerWeight:100};<br/>
		var pspConf = {titleBar: true, titleBarSkin: "skntitlebar"};<br/>

		//Creating a form using the properties defined above.<br/>
		var myForm = new kony.ui.Form(basicConf,layoutConf,pspConf)<br/>

		//Procedure to create an OK button.<br/>
		var basicConfBut = {id : "buttonForOk", text:"OK", isVisible:true,onClick:gotofrmNext, setEnabled:true, skin: "btnskn", focusSkin: "btnfocusskn"};<br/>
		var layoutConfBut = {contentAlignment : constants.CONTENT_ALIGN_BOTTOM_RIGHT, containerWeight:100};<br/>
		var buttonForOk = new kony.ui.Button(basicConfBut, layoutConfBut, {});<br/>

		//Removing a form using remove method.<br/>
		myForm.remove(buttonForOk);</pre>		 
		 */
		this.remove = function (/**Object*/widgetref)	{}
	

		/**
		 * This method removes a widget at the given index from the Form container. If a new widget is removed will reflect immediately from the Form hierarchy model perspective, however the changes are displayed when the Form appears. When the widgets are added to the current visible Form, then the changes will reflect immediately.
		 * @param index {Number} Reference of the name of the widget.<b>Mandatory</b>
		 * @returns Reference of the name of the widget to be removed. 
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>	
		//Defining properties of a form.<br/>
		var basicConf = {id : "formHome", title:"Form Home for FORM",addWidgets:addwidgetsfrmNew, skin:"frmskn"};<br/>
		var layoutConf = {contentAlignment : constants.CONTENT_ALIGN_TOP_CENTER, containerWeight:100};<br/>
		var pspConf = {titleBar: true, titleBarSkin: "skntitlebar"};<br/>

		//Creating a form using the properties defined above.<br/>
		var myForm = new kony.ui.Form(basicConf,layoutConf,pspConf)<br/>

		//Procedure to create an OK button.<br/>
		var basicConfBut = {id : "buttonForOk", text:"OK", isVisible:true,onClick:gotofrmNext, setEnabled:true, skin: "btnskn", focusSkin: "btnfocusskn"};<br/>
		var layoutConfBut = {contentAlignment : constants.CONTENT_ALIGN_BOTTOM_RIGHT, containerWeight:100};<br/>
		var buttonForOk = new kony.ui.Button(basicConfBut, layoutConfBut, {});<br/>
	
		//Removing a form using remove method at index 1.<br/>
		myForm.removeAt(1);</pre>		 
		 */
		this.removeAt = function (/**Number*/index)	{}
	
	
		/**
		 * This method returns an array of the widget references which are direct children of Form.
		 * @returns {array} This method returns Read only array of widget references. Modifying the array and changing the position of widgets in this array doesn't reflect in the Form hierarchy, however you can get handle to the widgets through this array and modify the widgets through widget level methods as exposed by individual widgets.
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>	
		//Defining properties of a form.<br/>
		var basicConf = {id : "formHome", title:"Form Home for FORM",addWidgets:addwidgetsfrmNew, skin:"frmskn"};<br/>
		var layoutConf = {contentAlignment : constants.CONTENT_ALIGN_TOP_CENTER, containerWeight:100};<br/>
		var pspConf = {titleBar: true, titleBarSkin: "skntitlebar"};<br/>

		//Creating a form using the properties defined above.<br/>
		var myForm = new kony.ui.Form(basicConf,layoutConf,pspConf)<br/>

		//Procedure to create an OK button.<br/>
		var basicConfBut = {id : "buttonForOk", text:"OK", isVisible:true,onClick:gotofrmNext, setEnabled:true, skin: "btnskn", focusSkin: "btnfocusskn"};<br/>
		var layoutConfBut = {contentAlignment : constants.CONTENT_ALIGN_BOTTOM_RIGHT, containerWeight:100};<br/>
		var buttonForOk = new kony.ui.Button(basicConfBut, layoutConfBut, {});<br/>

		//Method to return myForm widgets.<br/>
		myForm.widgets();</pre>		 
		 */
		this.widgets = function ()	{}
	
	
		/**
		 * This method gives you the control to scroll to the widget in the form.
		 * @param widgetref {Object} Reference of the name of the widget.<b>Mandatory</b>
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>	
		//Procedure to create a label for OK button.<br/>
		var basicConfLbl = {id : "labelForOk", text:"OK", isVisible:true};<br/>
		var layoutConfLbl = {contentAlignment : constants.CONTENT_ALIGN_BOTTOM_RIGHT, containerWeight:100};<br/>
		var labelForOk = new kony.ui.Label(basicConfLbl, layoutConfLbl, {});<br/>

		//Defining properties for a form.<br/>
		var basicConf = {id : "formHome", title:"My Form"};<br/>
		var layoutConf = {padding: [20,20,20,20]};<br/>

		//Creating a form with the properties defined above.<br/>
		var frmScrollToWidget= new kony.ui.Form(basicConf, layoutConf, {} );<br/>

		//Method to scroll the form upto label.<br/>
		frmScrollToWidget.scrollToWidget(labelForOk);</pre>		 
		 */
		this.scrollToWidget = function (/**Object*/widgetref)	{}
	
	
		/**
		 * This method gives you the control to scroll to the beginning of the form.
		 * @Available All Platforms except Mobile Web
		 * @access Write
		 * @usage <pre>	
		//Defining properties for a form.<br/>
		var basicConf = {id : "formHome", title:"My Form"};<br/>
		var layoutConf = {padding: [20,20,20,20]};<br/>

		//Creating a form with the properties defined above.<br/>
		var frmScrollToBeginning= new kony.ui.Form(basicConf, layoutConf, {} );<br/>

		//Method to scroll to the beginning of the form.<br/>
		frmScrollToBeginning.scrollToBeginning();</pre>		 
		 */
		this.scrollToBeginning = function ()	{}
	
	
		/**
		 * This method gives you the control to scroll to the end of the form.
		 * @Available All Platforms except Mobile Web
		 * @access Write
		 * @usage <pre>	
		//Defining properties for a form.<br/>
		var basicConf = {id : "formHome", title:"My Form"};<br/>
		var layoutConf = {padding: [20,20,20,20]};<br/>

		//Creating a form with the properties defined above.<br/>
		var frmScrollToEnd= new kony.ui.Form(basicConf, layoutConf, {} );<br/>

		//Method to scroll to the end of the form.<br/>
		frmScrollToEnd.scrollToEnd(labelForOk);</pre>		 
		 */
		this.scrollToEnd = function ()	{}
	
	    /**
		 * This method enables you to set the properties for a left-side button of a titlebar.
		 * @Available iPhone,iPad
		 * @access Write
		 * @usage <pre>	
	     */
		this.setTitleBarLeftSideButton = function ()	{}
	
	    /**
		 * This method enables you to set the properties for a right-side button of a titlebar.
		 * @Available iPhone,iPad
		 * @access Write
		 * @usage <pre>	
	     */
		this.setTitleBarRightSideButton = function ()	{}
	   
	    /**
		 * This method enables you to set the skin for a titlebar of a form.
		 * @Available iPhone,iPad
		 * @access Write
		 * @usage <pre>	
	     */
		this.setTitleBarSkin= function ()	{}
	
	    /**
		 * This method gives you the control to show a titlebar within a form.
		 * @Available iPhone,iPad
		 * @access Write
		 * @usage <pre>	
	     */
		this.showTitleBar= function ()	{}
	
	    /**
		 * This method gives you the control to hide a titlebar within a form.
		 * @Available iPhone,iPad
		 * @access Write
		 * @usage <pre>	
	     */
		this.hideTitleBar= function ()	{}
			
	    /**
	     * This method specifies the widget that must be enabled or disabled.
		 * @param enabled{Boolean} Indicates widget whether true or false.<b>Mandatory</b>
		 * @Available All Platforms except on Map widget for SPA platform 
		 * @access Write
		 */
        this.setEnabled = function (/**Boolean*/enabled) {}	
    

        /**
	     * This method allows you to set a gesture recognizer for a specified gesture for a specified widget. 
		 * @param gestureType{Number} Indicates the type of gesture that needs to be detected on the widget.<b>Mandatory</b>
		 * @param setupParams {Array}Specifies an object that has the configuration parameters needed to setup a gesture recognizer.<b>Mandatory</b>
		 * @param gestureHandler{Function} Specifies the function that needs to be executed when a gesture is recognized.<b>Mandatory</b>
		 * @Available ios,Android,BlackBerry,Windows phone/Windows Kiosk,J2ME,SPA 
		 * @access Write
		 * @usage <pre>
	    //The below function will get invoked  when a gesture is recognized.
        function myTap(myWidget,gestureInfo)<br/>
       {
		alert(" Tap Gesture detected");
		alert("gestureType :"+gestureInfo.gestureType);
		alert("gesturePosition :"+gestureInfo.gesturePosition);
		//write any further logic here
	    } <br/>

		//Setting Gesture configuration.<br/>
		local setupTblTap = {fingers:1,taps:2};//double tap gesture<br/>

		//To add a TAP gesture recognizer on a hbox with ID hbx1 placed on a form frm1<br/>
		var tapGesture=frm1.hbx1.setGgestureRecognizer(1,setupTblTap,myTap);</pre>
		 */
		this.setGestureRecognizer = function (/**Number*/gestureType,/**Array*/setupParams,/**Function*/gestureHandler) {}

		/**
	     * This method allows you to remove a specified gesture recognizer for a specified widget. 
		 * @param uniqueIdentifier{Widgetref} Indicates the type of gesture added to the form.<b>Mandatory</b>
		 * @Available iPhone,iPad,Android,BlackBerry,Windows phone,SPA 
		 * @access Write
		 * @usage <pre>
		//The below function will get invoked when a gesture is recognized.<br/>
		function myTap(myWidget,gestureInfo)<br/>
	    {
		alert(" Tap Gesture detected");
		alert("gestureType :"+gestureInfo.gestureType);
		alert("gesturePosition :"+gestureInfo.gesturePosition);
		//write any further logic here
		}<br/>

		//Setting Gesture configuration.<br/>
		local setupTblTap = {fingers:1,taps:2};//double tap gesture<br/>

		//To add a TAP gesture recognizer on a hbox with ID hbx1 placed on a form frm1<br/>
		var tapGesture=frm1.hbx1.setGestureRecognizer(1,setupTblTap,myTap)<br/>

		//To remove the TAP gesture recognizer on a hbox with ID hbx1 placed on a form frm1<br/>
		frm1.hbx1.removeGestureRecognizer(tapGesture);</pre>
		 */
		this.removeGestureRecognizer = function (/**Widgetref*/uniqueIdentifier) {}
    }	
	
	//Button Widget properties are defined here
	ui.Button = 
	/**
	 * Creates a new Button object
	 * @class kony.ui.Button
	 * @returns {kony.ui.Button}
	 */
	function Button(basicProperties, layoutProperties, platformSpecificProperties){
	
	    //Button - Basic Properties Starts here
	
	 	/**
		 * Defines a string of alpha numeric characters that uniquely identifies a widget within an application.
		 * @property {String}
		 * @Mandatory Yes
		 * @Available All Platforms 
		 * @access Read
		 */
		this.id = ""
		
		/**
		 * Specifies a custom JS Object with the key,value pairs that a developer can use to store the context with the widget.
		 * @property {Object}
		 * @Available All Platforms 
		 * @access Read and Write
		 */		 
		this.info = {}	
		
		/**
		 * Specifies the look and feel of the Button when not in focus.
		 * @property {String}
		 * @Available All Platforms 
		 * @access Read and Write
		 */		 
		this.skin = ""	
		
		/**
		 * This is a skin property and it determines the look and feel of the widget when in focus.
		 * @property {String}
		 * @Available All Platforms except on all Mobile Web platforms.
		 * @access Read and Write
		 */
		this.focusSkin = ""	
	
		/**
		 * Specifies a general or descriptive text for the Button widget.
		 * @property {String}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.text = ""	
	
		/**
		 * Specifies the visibility of the widget on the form. 
		 * @property {Boolean}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.isVisible = true	
		
		/**
		 * Specifies the rawbytes representing an Image (usually the image captured from the camera) that can be used as a background for the button. 
		 * @property {Object}
		 * @Available All Platforms except on all Mobile Web platforms.
		 * @access Read and Write
		 */
		this.rawBytes = {}	
		
		/**
		 * Specifies the accessiblity configuration property for the widget.
		 * @property {Object}
		 * @Available iPhone, Android, SPA-iPhone, and SPA-Android Platforms
		 * @access Read and Write
		 * @usage <pre>
		 /* accessibilityConfig =  {
				"a11yHidden": false,
				"a11yValue": "Your text goes here",
				"a11yLabel": "Your text goes here",
				"a11yHint": "Your text goes here"
			},
		*/
		this.accessibilityConfig = {}
		
		//Button - Layout Configuration Properties starts here

		/**
		 * Specifies percentage of width to be allocated by its parent widget widget.The parent widget space is distributed to its child widgets based on this weight factor. All its child widgets should sum up to 100% of weight except when placed in kony.ui.ScrollBox.
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.containerWeight = 0	
		
		/**
		 * Specifies the space between the content of the widget and the widget boundaries.
		 * @property {Array}
		 * @Available All Platforms except Mobile Web (basic).
		 * @access Read and Write
		 */
		this.padding = []	
		
		/**
		 * Specifies the space around a widget.
		 * @property {Array}
		 * @Available All Platforms except Mobile Web (basic) and Win Mobile6x.
		 * @access Read and Write
		 */
		this.margin = []	
		
		/**
		 * Specifies if the text (present in text property) to be rendered or not.
		 * @property {Boolean}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.displayText = true	
		
		/**
		 * Specifies the alignment of the text on the Button with respect to its boundaries.
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.contentAlignment = 1	
		
		
		
		//Button - Platform Specific Properties starts here.
		
		/**
		 * Specifies the skin to indicate when the Button is pressed or clicked. 
		 * @property {String}
		 * @Available Andriod,Android Tablet and Symbian
		 * @access Read and Write
		 */
		this.pressedSkin = ""	
		
		/**
		 * Specifies the skin that must be used to block the interface until the action in progress (for example, a service call) is completed.
		 * @property {String}
		 * @Available Mobile Web(Advanced),SPA (iPhone/Android/BlackBerry/Windows NTH)/Playbook
		 * @access Read and Write
		 */
		this.blockedUISkin = ""	
		
		/**
		 * A context menu is a menu that appears upon clicking a button. A context menu typically offers a limited set of choices that are applicable for that button. 
		 * @property {Array}
		 * @Available Android,Android Tablet,BlackBerry
		 * @access Read and Write
		 */
		this.contextMenu = []	
		
		/**
		 * Specifies the hint text when the cursor hovers over a widget.
		 * @property {String}
		 * @Available windows 8,Desktop Web
		 * @access Read and Write
		 */
		this.toolTip = ""	
		
		/**
		 * Specifies the look and feel of a widget when the cursor hovers on the widget.
		 * @property {String}
		 * @Available Windows 8, Desktop web
		 * @access Read and Write
		 */
		this.hoverSkin = ""	
		
		/**
		 * Specifies the layout changes that occur due to the animations applied/removed on other widgets. 
		 * @property {Object}
		 * @Available iOS and Android Platforms
		 * @access Read and Write
		 */
		this.layoutAnimConfig = {}
		
		
		//Button - Events starts here.
		
		/**
		 * This event allows the developer to execute custom javascript function before the onClick callback of the widget is invoked.This is applicable only for Mobile Web channel.
		 * @property {Event}
		 * @Available Mobile Web (Advanced),SPA (iPhone/Android/BlackBerry/Windows NTH)/Playbook
		 * @access Read and Write
		 */
		this.preOnclickJS = new Event() 
		
		/**
		 * This event allows the developer to execute custom javascript function after the onClick callback of the widget is invoked. This is applicable only for Mobile Web channel.
		 * @property {Event}
		 * @Available Mobile Web (Advanced),SPA (iPhone/Android/BlackBerry/Windows NTH)/Playbook
		 * @access Read and Write
		 */
		this.postOnclickJS = new Event()
		
		/**
		 * An event callback is invoked by the platform when the user performs a click action on the button.
		 * @property {Event}
		 * @Available All Platforms except Mobile Web (basic) and Win Mobile6x
		 * @access Read and Write
		 */
		this.onClick = new Event() 
	
        // Button - Methods starts here

        /**
	     * This method specifies the widget that must be enabled or disabled.
		 * @param enabled{Boolean} Indicates widget whether true or false.<b>Mandatory</b>
		 * @Available All Platforms except on Map widget forSPA platform 
		 * @access Write
		 */
        this.setEnabled = function (/**Boolean*/enabled) {}	
    	
	
	    /**
	     * This method specifies the widget on which there must be focus. 
		 * @param focus{Boolean} Indicates focus is set on a widget.<b>Mandatory</b>
		 * @Available All Platforms 
		 * @access Write
		 */
        this.setFocus = function (/**Boolean*/focus) {}	 
		
		/**
	     * Specifies the method to set the visibility of the widget.
		 * @param visible{Boolean} Indicates visibility on a widget.<b>Mandatory</b>
		 * @param animationConfig {Object} <b>Specifies the animation configuration object.<b> Note: This is OPTIONAL parameter and is supported only on iOS and Android platforms.</b></dd>
			<pre>  &nbsp;&nbsp;  <pre> &nbsp;&nbsp;<b>- animEffect</b> {Object} Specifies the animation effect. Following are the available options of animation effect. <b>Optional </b></pre> </pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_EFFECT_EXPAND:&#160;Specifies the widget must expand gradually by increasing the height of the widget. This option is applicable only when visibility is turned on.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_EFFECT_REVEAL: Specifies the widget must appear gradually by decreasing the transparency of the widget.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_EFFECT_COLLAPSE: This is applicable when the visibility is turned off. Specifies the widget must collapse gradually by decreasing the height of the widget.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_EFFECT_FADE:�This is applicable when the visibility is turned off. Specifies the widget must disappear gradually by increasing the transparency of the widget.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_EFFECT_NONE:&#160;This is the default option. Specifies animation should not be applied to the widget, but layout animations are applied on the Form that may be change the current widgets layout. The animation events are not triggered when this option is set.</pre></li></pre></dd>
		
			<pre>  &nbsp;&nbsp;  <pre> &nbsp;&nbsp;<b>- animDuration - Optional </b> {Number} Specifies the duration of the animation effect in seconds. The default value is 1. <b>Optional </b></pre> </pre></dd>
			
			<pre>  &nbsp;&nbsp;  <pre> &nbsp;&nbsp;<b>- animDelay - Optional </b> {Number} Specifies the delay of the animation effect in seconds. The default value is 0. <b>Optional </b></pre> </pre></dd>
			
			<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp; <b>- animCurve - Optional </b> Specifies the animation curve to be applied while playing the animation. An animation curve defines the speed of the animations at different intervals of the animation duration. Following are the available options of animation curve: </p></dd> </pre> </pre> </dd>
        		<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_CURVE_EASEIN:&#160;Specifies the animation to start slowly and then continues with normal speed.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_CURVE_EASEOUT: Specifies the animation to start with normal speed and slowdown towards the end.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_CURVE_EASEINOUT:&#160;Specifies the animation to start slowly and then continues with normal speed and then again slowdown towards the end.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_CURVE_LINEAR:&#160;This is the default value. Specifies the animation to continue with normal speed.</pre></li></pre></dd>

			<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp; <b>- animCallBacks - Optional </b> It is a JS dictionary containing the events invoked by the platform during the animation life cycle. Following are the available events: </p></dd> </pre> </pre> </dd>
        		<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; animStarted:&#160;Invoked at the end of the animation without any parameters. Following is the signature of the event:</pre></li></pre></dd><b>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp;<b>function animStarted() </b></dd> </p></pre> </pre> </pre> </br> </pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; animEnded: Invoked at the end of the animation without any parameters. Following is the signature of the event:</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp;<b>function animEnded() </b></pre> </pre> </pre>
		 
		 * @Available All Platforms except on all Mobile Web platforms
		 * @access Write
		 */
		this.setVisibility = function (/**Boolean*/visible,/**Object*/animationConfig) {}	
	
	
	    /**
	     * This method enables you to set the badge value to the given widget at the upper, right corner of the widget.
		 * @param badgeText{String} Specifies the Text value that appears within the badge.<b>Mandatory</b>
		 * @param skin{String}Specifies the background color for the badge.
		 * @Available iPhone,iPad 
		 * @access Write
		 * @usage <pre> 
	    //To set a badge value with skin "badgeSkin" on a box with ID hbx1 placed on a form frm1, use the following code:<br/>
		frm1.hbx1.setBadge("2","badgeSkin");</pre>
		 */
		this.setBadge = function (/**String*/badgeText,/**String*/skin) {}

        /**
	     * This method enables you to read the badge value (if any) attached to the given widget. 
		 * @return {String} Reference to the gesture is returned.
		 * @Available iPhone,iPad 
		 * @access Write
		 * @usage <pre> 
	    //To get a badge value on a box with ID hbx1 placed on a form frm1, use the following code:<br/>
		var badgeVal =frm1.hbx1.getBadge();<br/>
		alert("badge value is::"+badgeVal);</pre>
		 */
		this.getBadge = function () {}
	}

	
	// ComboBox Widget properties are defined here.
	ui.ComboBox = 
	/**
	 * Creates a new ComboBox object
	 * @class kony.ui.ComboBox
	 * @returns {kony.ui.ComboBox}
	 */
	function ComboBox(basicProperties, layoutProperties, platformSpecificProperties){
	
	    //ComboBox - Basic Properties Starts here
	
	 	/**
		 * Defines a string of alpha numeric characters that uniquely identify ComboBox widget within an application.
		 * @property {String}
		 * @Mandatory Yes
		 * @Available All Platforms 
		 * @access Read
		 */
		this.id = ""
		
		/**
		 * Specifies custom JS Object with the key,value pairs that a developer can use to store the context with the widget. 
		 * @property {Object}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.info = {}	
		
		/**
		 * Specifies the look and feel of the ComboBox when not in focus.
		 * @property {String}
		 * @Available All Platforms 
		 * @access Read and Write
		 */		 
		this.skin = ""	
		
		/**
		 * This is a skin property and it determines the look and feel of the ComboBox widget when in focus.
		 * @property {String}
		 * @Available All Platforms except on all Mobile web platforms
		 * @access Read and Write
		 */
		this.focusSkin = ""				
	
		/**
		 * Specifies the visibility of the widget on the form. 
		 * @property {Boolean}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.isVisible = true	
		
		/**
		 * Specifies the set of values that must be displayed for the user to make a selection from the available choices.
		 * @property {Array}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.masterData = []	
		
		/**
		 * Specifies the set of values from which you can make a selection. You must set the values from the code.
		 * @property {Array}
		 * @Available All Platforms except Mobile Web (basic) and Win Mobile6x
		 * @access Read and Write
		 */
		this.masterDataMap = []
	
		/**
		 * Returns the array of selected key-value pair.
		 * @property {Array}
		 * @Available All Platforms except Mobile Web (basic) and Win Mobile6x 
		 * @access Read 
		 */
		this.selectedKeyValue = []	
		
		/**
		 * Specifies the value to be shown as selected.
		 * @property {String}
		 * @Available All Platforms except Mobile Web (basic) and Win Mobile6x 
		 * @access Read and Write
		 */
		this.selectedKey = ""	
		
		/**
		 * Specifies the accessiblity configuration property for the widget.
		 * @property {Object}
		 * @Available iPhone, Android, SPA-iPhone, and SPA-Android Platforms
		 * @access Read and Write
		 * @usage <pre>
		 /* accessibilityConfig =  {
				"a11yHidden": false,
				"a11yValue": "Your text goes here",
				"a11yLabel": "Your text goes here",
				"a11yHint": "Your text goes here"
			},
		*/
		this.accessibilityConfig = {}
		
		
		//ComboBox - Layout Configuration Properties Starts here
		
		/**
		 * Specifies percentage of width to be allocated by its parent widget widget. The parent widget space is distributed to its child widgets based on this weight factor. All its child widgets should sum up to 100% of weight except when placed in kony.ui.ScrollBox.
		 * @property {Number}
		 * @Available All Platforms except Win Mobile 6x
		 * @access Read and Write
		 */
		this.containerWeight = 0	

		/**
		 * Specifies the space between the content of the widget and the widget boundaries.
		 * @property {Array}
		 * @Available All Platforms except Mobile Web (basic).
		 * @access Read and Write
		 */
		this.padding = []	
		
		/**
		 * Specifies the space around a widget.
		 * @property {Array}
		 * @Available All Platforms except Mobile Web (basic) and Win Mobile6x.
		 * @access Read and Write
		 */
		this.margin = []	
		
		/**
		 * Specifies the alignment of the text on the Combobox with respect to its boundaries.
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.contentAlignment = 1
		
		//ComboBox - Platform Specific Properties starts here.
		
		/**
		 * Specifies the view mode of the ComboBox. 
		 * @property {Number}
		 * @Available iPhone,iPad,Android/Android Tablet ( only Spinner view is available for the platform)
		 * @access Read and Write
		 */
		this.viewType = 0	

		/**
		 * Specifies the skin that must be used to block the interface until the action in progress (for example, a service call) is completed. 
		 * @property {String}
		 * @Available Mobile Web(Advanced),SPA (iPhone/Android/BlackBerry/Windows NTH)/Playbook
		 * @access Read and Write
		 */
		this.blockedUISkin = ""	
		
		/**
		 * Specifies the skin that is applied to each item in the native popup (list of options available) that appears when you select the ComboBox. 
		 * @property {String}
		 * @Available BlackBerry
		 * @access Read and Write
		 */
		this.popupSkin = ""
		
		/**
		 * Specifies the skin that is applied to a focused item in the native popup (list of options available) that appears when you select the ComboBox. 
		 * @property {String}
		 * @Available BlackBerry
		 * @access Read and Write
		 */
		this.popupFocusSkin = ""
		
		/**
		 * Specifies the temporary or substitute text (a hint provided as a word or phrase)that must be displayed on the ComboBox until the actual selection is made. 
		 * @property {String}
		 * @Available iPhone,iPad,BlackBerry,J2ME,Symbian,Windows Phone/Windows Kiosk
		 * @access Read and Write
		 */
		this.placeholder = ""	
		
		/**
		 * Specifies the Title text to be displayed for the ComboBox.
		 * @property {String}
		 * @Available Android,Android Tablet and Symbian
		 * @access Read and Write
		 */
		this.popupTitle = ""			
		
		/**
		 * Specifies the view configuration for different viewtypes. You can set the configuration for toggle view.
		 * @property {Object}
		 * @Available iPad,iPhone,Desktop Web
		 * @access Read and Write
		 */
		this.viewConfig = {}		

		/**
		 * Specifies the hint text when the cursor hovers over a widget.
		 * @property {String}
		 * @Available windows 8,Desktop Web
		 * @access Read and Write
		 */
		this.toolTip = ""	
		
		/**
		 * Specifies the look and feel of a widget when the cursor hovers on the widget.
		 * @property {String}
		 * @Available windows 8,Desktop Web
		 * @access Read and Write
		 */
		this.hoverSkin = ""	
		
		
		/**
		 * Specifies the layout changes that occur due to the animations applied/removed on other widgets. 
		 * @property {Object}
		 * @Available iOS and Android Platforms
		 * @access Read and Write
		 */
		this.layoutAnimConfig = {}

		//ComboBox-Events starts here.		
		
		/**
		 * This event allows the developer to execute custom javascript function before the onSelection callback of the ComboBox is invoked. This is applicable only for Mobile Web channel.The function must exist in a javascript file under project>module>js folder.
		 * @property {Event}
		 * @Available Mobile Web(Advanced), SPA (iPhone/Android/BlackBerry/Windows NTH) playbook
		 * @access Read and Write
		 */
		this.preOnclickJS = new Event() 

		/**
		 * This event allows the developer to execute custom javascript function after the onSelection callback of the ComboBox is invoked. This is applicable only for Mobile Web channel.The function must exist in a javascript file under project>module>js folder.
		 * @property {Event}
		 * @Available Mobile Web(Advanced), SPA(iPhone/Android/BlackBerry/Windows NTH) playbook
		 * @access Read and Write
		 */
		this.postOnclickJS = new Event() 
		
		/**
		 * This event is triggered when you select or unselect any item in ComboBox.
		 * @property {Event}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.onSelection = new Event() 
	
	
	    //ComboBox - Methods Starts here
		
		/**
	     * This method specifies the widget that must be enabled or disabled.
		 * @param enabled{Boolean} Indicates widget whether true or false.<b>Mandatory</b>
		 * @Available All Platforms except on Map widget forSPA platform 
		 * @access Write
		 */
        this.setEnabled = function (/**Boolean*/enabled) {}	
    	
	
	    /**
	     * This method specifies the widget on which there must be focus. 
		 * @param focus{Boolean} Indicates focus is set on a widget.<b>Mandatory</b>
		 * @Available All Platforms 
		 * @access Write
		 */
        this.setFocus = function (/**Boolean*/focus) {}	 
		
		
		/**
	     * Specifies the method to set the visibility of the widget.
		 * @param visible{Boolean} Indicates visibility on a widget.<b>Mandatory</b>
		 * @Available All Platforms except on all Mobile Web platforms.
		 * @access Write
		 */
		this.setVisibility = function (/**Boolean*/visible) {}	
	}
		
	// ListBox Widget properties are defined here.
	ui.ListBox = 
	/**
	 * Creates a new ListBox object
	 * @class kony.ui.ListBox
	 * @returns {kony.ui.ListBox}
	 */
	function ListBox(basicProperties, layoutProperties, platformSpecificProperties){
	
	    //ListBox - Basic Properties Starts here
		
	 	/**
		 * Defines a string of alpha numeric characters that uniquely identify ListBox widget within an application.
		 * @property {String}
		 * @Mandatory {Yes}
		 * @Available All Platforms 
		 * @access {Read}
		 */
		this.id = ""
		
		/**
		 * Specifies custom JS Object with the key,value pairs that a developer can use to store the context with the widget. 
		 * @property {Object}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.info = {}
		
		/**
		 * Specifies a background skin for ListBox Widget.
		 * @property {String}
		 * @Available All Platforms 
		 * @access Read and Write
		 */		 
		this.skin = ""	
		
		/**
		 * This is a skin property and it determines the look and feel of the ListBox widget when in focus .
		 * @property {String}
		 * @Available All Platforms except on Mobile Web platforms
		 * @access Read and Write
		 */
		this.focusSkin = ""				
	
		/**
		 * Specifies the visibility of the widget on the form. 
		 * @property {Boolean}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.isVisible = true	
		
		/**
		 * Specifies the set of values that must be displayed for the user to make a selection from the available choices.
		 * @property {Array}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.masterData = []	
		
		/**
		 * Specifies the set of values from which you can make selections.You must specify a key and a value in a master data map.
		 * @property {Array}
		 * @Available All Platforms except Mobile Web (basic) and win Mobile6x.
		 * @access Read and Write
		 */
		this.masterDataMap = []
		
		/**
		 * Returns the array of selected key-value pair.
		 * @property {Array}
		 * @Available All Platforms except Mobile Web (basic) and Win Mobile6x
		 * @access Read 
		 */
		this.selectedKeyValue = []	
		
		/**
		 * Represents the key that is shown as selected.
		 * @property {String}
		 * @Available All Platforms except Mobile Web(basic) and Win Mobile6x
		 * @access Read and Write
		 */
		this.selectedKey = ""
		
		/**
		 * Specifies the accessiblity configuration property for the widget.
		 * @property {Object}
		 * @Available iPhone, Android, SPA-iPhone, and SPA-Android Platforms
		 * @access Read and Write
		 * @usage <pre>
		 /* accessibilityConfig =  {
				"a11yHidden": false,
				"a11yValue": "Your text goes here",
				"a11yLabel": "Your text goes here",
				"a11yHint": "Your text goes here"
			},
		*/
		this.accessibilityConfig = {}
		
	    //ListBox - Layout Configuration Properties Starts here 

	    /**
		 * Specifies percentage of width to be allocated by its parent widget widget. The parent widget space is distributed to its child widgets based on this weight factor. All its child widgets should sum up to 100% of weight except when placed in kony.ui.ScrollBox.
		 * @property {Number}
		 * @Available All Platforms except Win Mobile 6x.
		 * @access Read and Write
		 */
		this.containerWeight = 0	

		/**
		 * Specifies the space between the content of the widget and the widget boundaries.
		 * @property {Array}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.padding = []	
		
		/**
		 * Specifies the space around a widget.
		 * @property {Array}
		 * @Available All Platforms except Mobile Web (basic)
		 * @access Read and Write
		 */
		this.margin = []	
		
		/**
		 * Specifies the alignment of the text on the Listbox with respect to its boundaries.
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.contentAlignment = 1
		
		//ListBox - Platform Specific Properties starts here.
		
		/**
		 * Specifies the view type of the ListBox. 
		 * @property {Number}
		 * @Available iPhone,iPad,Android,Android Tablet ( only Spinner view is available for the platform)
		 * @access Read and Write
		 */
		this.viewType = 0	

		/**
		 * Specifies the skin that must be used to block the interface until the action in progress (for example, a service call) is completed. 
		 * @property {String}
		 * @Available Mobile Web (Advanced),SPA (iPhone/Android/BlackBerry/Windows NTH)PlayBook
		 * @access Read and Write
		 */
		this.blockedUISkin = ""	

		/**
		 * Specifies the skin that is applied to each item in the native popup that appears when you click on the ListBox. 
		 * @property {String}
		 * @Available Android,Android Tablet,BlackBerry,J2ME
		 * @access Read and Write
		 */
		this.nativeListFieldSkin = ""	

		/**
		 * Specifies the skin that is applied to a focused item in the native popup that appears when you click on the ListBox.
		 * @property {String}
		 * @Available Android,Android Tablet,BlackBerry,J2ME
		 * @access Read and Write
		 */
		this.nativeListFieldFocusSkin = ""	

		/**
		 * Specifies the temporary or substitute text that must be displayed on the ListBox until the actual selection is made. 
		 * @property {String}
		 * @Available iPhone,iPad,Android,Android Tablet,Windows Phone/Windows Kiosk,BlackBerry,J2ME
		 * @access Read and Write
		 */
		this.placeholder = ""	
		
		/**
		 * This property reads the font color set in the skin and ignores the other attributes.Android does not support setting a background color for a placeholder. 
		 * @property {String}
		 * @Available Android, Android Tablet
		 * @access Read and Write
		 */
		this.placeholderSkin = ""	

		/**
		 * Specifies the view configuration for different viewtypes. You can set the configuration for toggle view.
		 * @property {Object}
		 * @Available iPad,iPhone
		 * @access Read and Write
		 */
		this.viewConfig = {}		

		/**
		 * Specifies the hint text when the cursor hovers over a widget.
		 * @property {String}
		 * @Available windows 8
		 * @access Read and Write
		 */
		this.toolTip = ""	
		
		/**
		 * Specifies the look and feel of a widget when the cursor hovers on the widget.
		 * @property {String}
		 * @Available windows 8, Desktop web
		 * @access Read and Write
		 */
		this.hoverSkin = ""	
		
		/**
		 * Returns the keys from the masterdata representing the selected keys. 
		 * @property {String}
		 * @Available Desktop Web
		 * @access Read and Write
		 */
		this.selectedKeys = ""		
		
		/**
		 * Returns the key,value pairs from the masterdata representing the selected key value. 
		 * @property {String}
		 * @Available Desktop Web
		 * @access Read and Write
		 */
		this.selectedKeyValues = ""	
		
		/**
		 * Specifies no of rows that the list box can display.  
		 * @property {Number}
		 * @Available Desktop Web
		 * @access Read and Write
		 */
		this.multiSelectRows = 1
		
		/**
		 * Specifies the layout changes that occur due to the animations applied/removed on other widgets. 
		 * @property {Object}
		 * @Available iOS and Android Platforms
		 * @access Read and Write
		 */
		this.layoutAnimConfig = {}
		
		
		//ListBox - Event starts here.
		
		/**
		 * This event allows the developer to execute custom javascript function before the onClick callback of the ListBox is invoked. This is applicable only for Mobile Web channel. The function must exist in a javascript file under project>module>js folder.
		 * @property {Event}
		 * @Available Mobile Web(Advanced),SPA (iPhone/Android/BlackBerry/Windows NTH)/Playbook
		 * @access Read and Write
		 */
		this.preOnclickJS = new Event() 

		/**
		 * This event allows the developer to execute custom javascript function after the onClick callback of the ListBox is invoked. This is applicable only for Mobile Web channel.The function must exist in a javascript file under project>module>js folder.
		 * @property {Event}
		 * @Available Mobile Web(Advanced),SPA (iPhone/Android/BlackBerry/Windows NTH)/Playbook
		 * @access Read and Write
		 */
		this.postOnclickJS = new Event() 

        /**
		 * An event callback that is invoked by the platform when an item is selected or deselected.
		 * @property {Event}
		 * @Available All Platforms except Mobile Web platforms
		 * @access Write
		 */
		this.onSelection = new Event() 
	
	    //ListBox - Methods starts here
		
		 /**
	     * This method specifies the widget that must be enabled or disabled.
		 * @param enabled{Boolean} Indicates widget whether true or false.<b>Mandatory</b>
		 * @Available All Platforms except onMap widget for SPA platform 
		 * @access Write
		 */
        this.setEnabled = function (/**Boolean*/enabled) {}	
    	
	
	    /**
	     * This method specifies the widget on which there must be focus. 
		 * @param focus{Boolean} Indicates focus is set on a widget.<b>Mandatory</b>
		 * @Available All Platforms 
		 * @access Write
		 */
        this.setFocus = function (/**Boolean*/focus) {}	 
		
		
		/**
	     * Specifies the method to set the visibility of the widget.
		 * @param visible{Boolean} Indicates visibility on a widget.<b>Mandatory</b>
		 * @Available All Platforms except on all Mobile Web platforms
		 * @access Write
		 */
		this.setVisibility = function (/**Boolean*/visible) {}	
	}


	//RadioButtonGroup Widget properties are defined here.
	ui.RadioButtonGroup = 
	/**
	 * Creates a new RadioButtonGroup object
	 * @class kony.ui.RadioButtonGroup
	 * @returns {kony.ui.RadioButtonGroup}
	 */
	function RadioButtonGroup(basicProperties, layoutProperties, platformSpecificProperties){
	
	    // RadioButtonGroup - Basic Properties Starts here 
		
	 	/**
		 * Defines a string of alpha numeric characters that uniquely identify The RadioButtonGroup widget within an application.
		 * @property {String}
		 * @Mandatory Yes
		 * @Available All Platforms except Mobile Web (basic) and Win Mobile6x.
		 * @access Read
		 */
		this.id = ""
		
		/**
		 * Specifies custom JS Object with the key,value pairs that a developer can use to store the context with the widget. 
		 * @property {Object}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.info = {}	
		
		/**
		 * Specifies a background skin for RadioButtonGroup Widget.
		 * @property {String}
		 * @Available All Platforms except
		 * @access Read and Write
		 */		 
		this.skin = ""	
		
		/**
		 * This is a skin property and it determines the look and feel of the RadioButton widget when in focus.
		 * @property {String}
		 * @Available All Platforms except on all Mobile Web platforms 
		 * @access Read and Write
		 */
		this.focusSkin = ""				
	
		/**
		 * Specifies a RadioButtonGroup widget visibility on the form. 
		 * @property {Boolean}
		 * @Available All Platforms
		 * @access {Read, Write}
		 */
		this.isVisible = true	
		
		/**
		 * Specifies the set of values that must be displayed for the user to make a selection from the available choices.
		 * @property {Array}
		 * @Available All Platforms except Mobile Web (basic).
		 * @access Read and Write
		 */
		this.masterData = []		
		
		/**
		 * Specifies the set of values from which you can make a selection.You must specify a key and a value in a master data map.
		 * @property {Array}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.masterDataMap = []
		
		/**
		 * Returns the array of selected key-value pair.
		 * @property {Array}
		 * @Available All Platforms
		 * @access Read 
		 */
		this.selectedKeyValue = []
		
		/**
		 * Represents the key that is shown as selected.
		 * @property {String}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.selectedKey = ""
		
		/**
		 * Specifies the accessiblity configuration property for the widget.
		 * @property {Object}
		 * @Available iPhone, Android, SPA-iPhone, and SPA-Android Platforms
		 * @access Read and Write
		 * @usage <pre>
		 /* accessibilityConfig =  {
				"a11yHidden": false,
				"a11yValue": "Your text goes here",
				"a11yLabel": "Your text goes here",
				"a11yHint": "Your text goes here"
			},
		*/
		this.accessibilityConfig = {}
		
		//RadioButtonGroup - Layout Configuration Properties Starts here
		
		/**
		 * Specifies percentage of width to be allocated by its parent widget widget. The parent widget space is distributed to its child widgets based on this weight factor. All its child widgets should sum up to 100% of weight except when placed in kony.ui.ScrollBox.
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.containerWeight = 0	
		
		/**
		 * Specifies the space between the content of the widget and the widget boundaries.
		 * @property {Array}
		 * @Available All Platforms except Mobile Web (basic).
		 * @access Read and Write
		 */
		this.padding = []	
		
		/**
		 * Specifies the space around a widget.
		 * @property {Array}
		 * @Available All Platforms except Mobile Web (basic).
		 * @access Read and Write
		 */
		this.margin = []
		
		
		//RadioButtonGroup - Platform Specific Properties start here
		
		/**
		 * Specifies the temporary or substitute text that must be displayed on the RadioButton until the actual selection is made. If you do not specify the Placeholder text, the first option in the list is shown as the selected value.
		 * @property {String}
		 * @Available iPhone,iPad
		 * @access Read and Write
		 */
		this.placeholder = ""
		
		/**
		 * Specifies a property for the View of the RadioButton. 
		 * @property {Number}
		 * @Available iPhone,iPad,Android,Android Tablet ( only Spinner view is available for the platform)
		 * @access Read and Write
		 */
		this.viewType = 0				

		/**
		 * Specifies the view configuration for different viewtypes. You can set the configuration for toggle view. 
		 * @property {Object}
		 * @Available iPhone,iPad
		 * @access Read and Write
		 */
		this.viewConfig = {}		
		
		/**
		 * Specifies the hint text when the cursor hovers over a widget.
		 * @property {String}
		 * @Available windows 8
		 * @access Read and Write
		 */
		this.toolTip = ""	
		
		/**
		 * Specifies the look and feel of a widget when the cursor hovers on the widget.
		 * @property {String}
		 * @Available windows 8, Desktop web
		 * @access Read and Write
		 */
		this.hoverSkin = ""	
		
		
		/**
		 * Specifies the layout changes that occur due to the animations applied/removed on other widgets. 
		 * @property {Object}
		 * @Available iOS and Android Platforms
		 * @access Read and Write
		 */
		this.layoutAnimConfig = {}
		
		//RadioButtonGroup - Events Starts here.
		
		/**
		 * This event allows the developer to execute custom javascript function before the onSelection callback of the RadioButton is invoked. This is applicable only for Mobile Web channel. The function must exist in a javascript file under project>module>js folder.
		 * @property {Event}
		 * @Available Mobile Web (Advanced),SPA (iPhone/Android/BlackBerry/Windows NTH)/Playbook
		 * @access Read and Write
		 */
		this.preOnclickJS = new Event() 

		/**
		 * This event allows the developer to execute custom javascript function after the onSelection callback of the RadioButton is invoked. This is applicable only for Mobile Web channel.The function must exist in a javascript file under project>module>js folder. 
		 * @property {Event}
		 * @Available Mobile Web (Advanced),SPA (iPhone/Android/BlackBerry/Windows NTH)/Playbook
		 * @access  Read and Write
		 */
		this.postOnclickJS = new Event() 
		
		/**
		 * An event callback that is invoked by the platform when an item is selected or deselected.
		 * @property {Event}
		 * @Available All Platforms except Mobile Web (basic)
		 * @access Read and Write
		 */
		this.onSelection = new Event()
	
        //RadioButton - Methods starts here

        /**
	     * This method specifies the widget that must be enabled or disabled.
		 * @param enabled{Boolean} Indicates widget whether true or false.<b>Mandatory</b>
		 * @Available All Platforms except on Map widget forSPA platform 
		 * @access Write
		 */
        this.setEnabled = function (/**Boolean*/enabled) {}	
    	
	
	    /**
	     * This method specifies the widget on which there must be focus. 
		 * @param focus{Boolean} Indicates focus is set on a widget.<b>Mandatory</b>
		 * @Available All Platforms 
		 * @access Write
		 */
        this.setFocus = function (/**Boolean*/focus) {}	 
		
		
		/**
	     * Specifies the method to set the visibility of the widget.
		 * @param visible{Boolean} Indicates visibility on a widget.<b>Mandatory</b>
		 * @Available All Platforms except on all Mobile Web platforms
		 * @access Write
		 */
		this.setVisibility = function (/**Boolean*/visible) {}	
	}		
	
	
	
	//Box Widget properties are defined here.
	ui.Box = 
	/**
	 * Creates a new Box object
	 * @class kony.ui.Box
	 * @returns {kony.ui.Box}
	 */
	function Box (basicProperties, layoutProperties, platformSpecificProperties){
	
	    //Box - Basic Properties Starts here
		
	 	/**
		 * Defines a string of alpha numeric characters that uniquely identifies a widget within an application.
		 * @property {String}
		 * @Mandatory Yes
		 * @Available All Platforms
		 * @access Read
		 */
		this.id = ""	
		
		/**
		 * Specifies custom JS Object with the key,value pairs that a developer can use to store the context with the widget. 
		 * @property {Object}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.info = {}	
		
		/**
		 * Specifies the look and feel of the Box widget.
		 * @property {String}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.skin = ""	
		
		/**
		 * Specifies a skin property when it is in focus.
		 * @property {String}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.focusSkin = ""	
	
		/**
		 * Specifies the visibility of the Box widget. 
		 * @property {Boolean}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.isVisible = true	
	
	    /**
		 * Specifies the orientation of the Box.You can select the orientation as horizontal or vertical. 
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read 
		 */
		this.orientation = 0	
		
		/**
		 * Specifies the accessiblity configuration property for the widget.
		 * @property {Object}
		 * @Available iPhone, Android, SPA-iPhone, and SPA-Android Platforms
		 * @access Read and Write
		 * @usage <pre>
		 /* accessibilityConfig =  {
				"a11yHidden": false,
				"a11yValue": "Your text goes here",
				"a11yLabel": "Your text goes here",
				"a11yHint": "Your text goes here"
			},
		*/
		this.accessibilityConfig = {}
	
	
        //Box - Layout Configuration Properties Starts here
		
		/**
		 * Specifies percentage of width to be allocated by its parent widget widget. The parent widget space is distributed to its child widgets based on this weight factor. All its child widgets should sum up to 100% of weight except when placed in kony.ui.ScrollBox.
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.containerWeight = 0	
		
		/**
		 * Specifies the space between the content of the widget and the widget boundaries.
		 * @property {Array}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.padding = []	
		
		/**
		 * Specifies the space around a widget.
		 * @property {Array}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.margin = []
	
	    
	    // Box - Platform Specific Properties Starts here
		
		/**
		 * Specifies the skin that must be used to block the interface until the action in progress (for example, a service call) is completed.
		 * @property {String}
		 * @Available Mobile Web(basic),SPA,Playbook
		 * @access Read and Write
		 */
		this.blockedUISkin = ""	
		
		/**
		 * Specifies the list of actions (appropriate to the widget in focus) as menu items.
		 * @property {Array}
		 * @Available Android,BlackBerry
		 * @access Read and Write
		 */
		this.contextMenu = []	
		
		/**
		 * Specifies the look and feel of a widget when the cursor hovers on the widget.
		 * @property {String}
		 * @Available windows 8
		 * @access Read and Write
		 */
		this.hoverSkin = ""	
		
		/**
		 * Specifies the layout changes that occur due to the animations applied/removed on other widgets. 
		 * @property {Object}
		 * @Available iOS and Android Platforms
		 * @access Read and Write
		 */
		this.layoutAnimConfig = {}
		
		//Box - Events starts here.		
		
		/**
		 * This event allows the developer to execute custom javascript function before the onClick callback of the box is invoked. This is applicable only for Mobile Web channel. The function must exist in a javascript file under project>module>js folder.
		 * @property {Event}
		 * @Available Mobile Web(Advanced)
		 * @access Read and Write
		 */
		this.preOnclickJS = new Event() 
	
		/**
		 * This event allows the developer to execute custom javascript function after the onClick callback of the widget is invoked. This is applicable only for Mobile Web channel.The function must exist in a javascript file under project>module>js folder.
		 * @property {Event}
		 * @Available Mobile Web(Advanced)
		 * @access Read and Write
		 */
		this.postOnclickJS = new Event() 
	
	    /**
		 * An event callback is invoked by the platform when the user performs a click action on the widget.
		 * @property {Event}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.onClick = new Event() 
		
	
		//Box Widget Methods Starts here.
		
		/**
		 * This method is used to add widgets to the Box container. If a new widget is removed will reflect immediately from the Form hierarchy model perspective, however the changes are displayed when the Form appears. When the widgets are added to the current visible Form, then the changes will reflect immediately.
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>
		//Defining the properties for a Box properties.<br/>
		var basicConfBox = {id : "boxAddMethodTest", isVisible:true, orientation:constants.BOX_LAYOUT_VERTICAL, skin:"gradroundbox"};<br/>
		var layoutConfBox = {containerWeight:100};<br/>
		
		//Creating the Box.<br/>
		var boxAddMethodTest = new kony.ui.Box(basicConfBox, layoutConfBox, {});<br/>
		
		//Adding label ,button widgets to the box Here label and button widgets should be created already and accessible as well.<br/>
		boxAddMethodTest.add(lbl,btn);</pre>
		 */
		this.add = function (/**Object*/widgetref)	{}
	
		/**
		 * This method is used to add widgets to the Box container at the specified index. Widget is prepended if index<0 and appended at the end of the container if index >size+1. 
		 * @param widgetref{Object} Reference of the name of the widget.<b>Mandatory</b>
		 * @param index {Number} Index number at which the widget is to be added.<b>Mandatory</b>
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre> 
		//Defining the Box properties.<br/>
		var basicConfBox = {id : "boxAddAtMethodTest", isVisible:true, orientation:constants.BOX_LAYOUT_VERTICAL, skin:"gradroundbox"};<br/>
		var layoutConfBox = {containerWeight:100};<br/>
		
		//Creating the Box.<br/>
		var boxAddAtMethodTest = new kony.ui.Box(basicConfBox, layoutConfBox, {});<br/>
		
		//Adding label to the box at 15th index Position.Here label should be created already and accessible as well.<br/>
		boxAddAtMethodTest.addAt(lbl,15);</pre>
		 */
		this.addAt = function (/**Object*/widgetref,/**Number*/index)	{}
	
		/**
		 * This method removes a widget from the Box container. If a new widget is removed will reflect immediately from the Box hierarchy model perspective, however the changes are displayed when the Box appears. 
		 * @param widgetref {Object} Reference of the widget to be removed.<b>Mandatory</b> 
		 * @return The current Form handle is returned.
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>	
		//Defining the Box properties.
		var basicConfBox = {id : "boxRemoveMethodTest", isVisible:true, orientation:constants.BOX_LAYOUT_VERTICAL, skin:"gradroundbox"};<br/>
		var layoutConfBox = {containerWeight:100};<br/>
		
		//Creating the Box.<br/>
		var boxRemoveMethodTest = new kony.ui.Box(basicConfBox, layoutConfBox, {});<br/>
		
		//Removing label widget from the box .Here label should be created already and added inside the box.<br/>
		boxRemoveMethodTest.remove(lbl);</pre> 
		 */
		this.remove = function (/**Object*/widgetref)	{}
	

		/**
		 * This method removes a widget at the given index from the Box container. If a new widget is removed will reflect immediately from the Box hierarchy model perspective, however the changes are displayed when the Box appears. 
		 * @param index {Number}Index number at which the widget is to be removed.<b>Mandatory</b>
		 * @param animationConfig {Object} <b>Specifies the animation configuration object.<b> Note: This is OPTIONAL parameter and is supported only on iOS and Android platforms.</b></dd>
			<pre>  &nbsp;&nbsp;  <pre> &nbsp;&nbsp;<b>- animEffect</b> {Object} Specifies the animation effect. Following are the available options of animation effect.<b>Optional </b></pre> </pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_EFFECT_COLLAPSE:�Specifies the widget must collapse gradually by decreasing the height of the widget. This option is applicable only when visibility is turned on.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_EFFECT_FADE: Specifies the widget must disappear gradually by increasing the transparency of the widget.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_EFFECT_NONE:&#160;This is the default option. Specifies animation should not be applied to the widget, but layout animations are applied on the Form that may be change the current widgets layout. The animation events are not triggered when this option is set.</pre></li></pre></dd>
		
			<pre>  &nbsp;&nbsp;  <pre> &nbsp;&nbsp;<b>- animDuration - Optional </b> {Number} Specifies the duration of the animation effect in seconds. The default value is 1. <b>Optional </b></pre> </pre></dd>
			
			<pre>  &nbsp;&nbsp;  <pre> &nbsp;&nbsp;<b>- animDelay - Optional </b> {Number} Specifies the delay of the animation effect. The default value is 0.<b>Optional </b></pre> </pre></dd>
			
			<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp; <b>- animCurve - Optional </b> Specifies the animation curve to be applied while playing the animation. An animation curve defines the speed of the animations at different intervals of the animation duration. Following are the available options of animation curve: </p></dd> </pre> </pre> </dd>
        		<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_CURVE_EASEIN:&#160;Specifies the animation to start slowly and then continues with normal speed.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_CURVE_EASEOUT: Specifies the animation to start with normal speed and slowdown towards the end.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_CURVE_EASEINOUT:&#160;Specifies the animation to start slowly and then continues with normal speed and then again slowdown towards the end.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_CURVE_LINEAR:&#160;This is the default value. Specifies the animation to continue with normal speed.</pre></li></pre></dd>

			<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp; <b>- animCallBacks - Optional </b> It is a JS dictionary containing the events invoked by the platform during the animation life cycle. Following are the available events: </p></dd> </pre> </pre> </dd>
        		<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; animStarted:&#160;Invoked at the end of the animation without any parameters. Following is the signature of the event:</pre></li></pre></dd><b>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp;<b>function animStarted() </b></dd> </p></pre> </pre> </pre> </br> </pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; animEnded: Invoked at the end of the animation without any parameters. Following is the signature of the event:</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp;<b>function animEnded() </b></pre> </pre> </pre>
		 
		 * @return Reference of the name of the widget to be removed.
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>	
		//Defining the Box properties.<br/>
	    var basicConfBox = {id : "boxRemoveAtMethodTest", isVisible:true, orientation:constants.BOX_LAYOUT_VERTICAL, skin:"gradroundbox"};<br/>
		var layoutConfBox = {containerWeight:100};<br/>
		
		//Creating the Box.<br/>
		var boxRemoveAtMethodTest = new kony.ui.Box(basicConfBox, layoutConfBox, {});<br/>
		
		//Removing label from the box at 15th index Position. Here label should be created and added at 15th index position of the box.<br/>
		boxRemoveAtMethodTest.removeAt(lbl,15,animationConfig);</pre>  
		 */
		this.removeAt = function (/**Number*/index,/**Object*/animationConfig)	{}
	
	
		/**
		 * Note: This method is supported only on iOS and Android platforms. This method removes a widget and replaces with another widget in a HBox or VBox container. If a widget is replaced from the HBox or VBox, will reflect immediately from the HBox or VBox hierarchy model perspective; however the changes are displayed when the HBox or VBox appears.
		 * @param widgetref{Object} Reference of the name of the widget.<b>Mandatory</b>
		 * @param index {Number} Index number at which the widget is to be replaced. If the index is lessthan 0, then first widget in the container gets replaced. If the index greater than size -1, then the last widget in the container widget gets replaced. The term size refers to the number of widgets present in the container widget.<b>Mandatory</b>
		 * @param animationConfig {Object} <b>Specifies the animation configuration object.<b> Optional</b></dd>
			<pre>  &nbsp;&nbsp;  <pre> &nbsp;&nbsp;<b>- animEffect</b> {Object} Specifies the animation effect. Following are the available options of animation effect. <b>Optional </b></pre> </pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_EFFECT_FLIP_RIGHT:�Specifies the widget must flip from right to left.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_EFFECT_FLIP_LEFT: Specifies the widget must flip from left to right.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_EFFECT_NONE:&#160;This is the default option. Specifies animation should not be applied to the widget, but layout animations are applied on the Form that may be change the current widgets layout. The animation events are not triggered when this option is set.</pre></li></pre></dd>
		
			<pre>  &nbsp;&nbsp;  <pre> &nbsp;&nbsp;<b>- animDuration - Optional </b> {Number} Specifies the duration of the animation effect in seconds. The default value is 1. <b>Optional </b></pre> </pre></dd>
			
			<pre>  &nbsp;&nbsp;  <pre> &nbsp;&nbsp;<b>- animDelay - Optional </b> {Number} Specifies the delay of the animation effect in seconds. The default value is 0. <b>Optional </b></pre> </pre></dd>
			
			<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp; <b>- animCurve - Optional </b> Specifies the animation curve to be applied while playing the animation. An animation curve defines the speed of the animations at different intervals of the animation duration. Following are the available options of animation curve: </p></dd> </pre> </pre> </dd>
        		<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_CURVE_EASEIN:&#160;Specifies the animation to start slowly and then continues with normal speed.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_CURVE_EASEOUT: Specifies the animation to start with normal speed and slowdown towards the end.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_CURVE_EASEINOUT:&#160;Specifies the animation to start slowly and then continues with normal speed and then again slowdown towards the end.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_CURVE_LINEAR:&#160;This is the default value. Specifies the animation to continue with normal speed.</pre></li></pre></dd>

			<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp; <b>- animCallBacks - Optional </b> It is a JS dictionary containing the events invoked by the platform during the animation life cycle. Following are the available events: </p></dd> </pre> </pre> </dd>
        		<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; animStarted:&#160;Invoked at the end of the animation without any parameters. Following is the signature of the event:</pre></li></pre></dd><b>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp;<b>function animStarted() </b></dd> </p></pre> </pre> </pre> </br> </pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; animEnded: Invoked at the end of the animation without any parameters. Following is the signature of the event:</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp;<b>function animEnded() </b></pre> </pre> </pre>
				

		 * @Available iOS and Android platforms
		 * @access Write
		 * @usage <pre> 
		//Procedure to create animation at replaceAt.<br/>
			
		var basicConfBut = {id : "buttonForOk", text:"OK", isVisible:true,onClick:gotofrmNext, setEnabled:true, skin: "btnskn", focusSkin: "btnfocusskn"};<br/>
		var layoutConfBut = {contentAlignment : constants.CONTENT_ALIGN_BOTTOM_RIGHT, containerWeight:100};<br/>
		var buttonForOk = new kony.ui.Button(basicConfBut, layoutConfBut, {});<br/>
    
	    //Method to add an OK button at index 1.<br/>
		frmHome.replaceAt(buttonForOk, 1,animationConfig);</pre>
		 */
		this.replaceAt = function (/**Object*/widgetref,/**Number*/index,/**Object*/animationConfig)	{}
	
	
	
	
		/**
		 * This method returns an array of the widget references which are direct children of box.
		 * @returns {array} This method returns Read only array of widget references. 
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>	
		//Defining the Box properties.<br/>
		var wigArr = new Array();<br/>
		var basicConfBox = {id : "boxWidgetsMethodTest", isVisible:true, orientation:constants.BOX_LAYOUT_VERTICAL, skin:"gradroundbox"};<br/>
		var layoutConfBox = {containerWeight:100};<br/>
		
		//Creating the Box.<br/>
		var boxWidgetsMethodTest = new kony.ui.Box(basicConfBox, layoutConfBox, {});<br/>
		
		//Collecting all the widgets of the box into array and displaying the references.
		wigArr = boxWidgetsMethodTest.widgets();<br/>
		alert("Widgets are::"+wigArr);</pre> 
		*/
		this.widgets = function ()	{}
	
	    /**
	     * This method specifies the widget that must be enabled or disabled.
		 * @param enabled{Boolean} Indicates widget whether true or false.<b>Mandatory</b>
		 * @Available All Platforms except on Map widget forSPA platform 
		 * @access Write
		 */
        this.setEnabled = function (/**Boolean*/enabled) {}	
    		
	
	    /**
	     * This method specifies the widget on which there must be focus. 
		 * @param focus{Boolean} Indicates focus is set on a widget.<b>Mandatory</b>
		 * @Available All Platforms 
		 * @access Write
		 */
        this.setFocus = function (/**Boolean*/focus) {}	 
		 
		 
		/**
	     * Specifies the method to set the visibility of the widget.
		 * @param visible{Boolean} Indicates visibility on a widget.<b>Mandatory</b>
		 * @param animationConfig {Object} <b>Specifies the animation configuration object.<b> Note: This is OPTIONAL parameter and is supported only on iOS and Android platforms.</b></dd>
			<pre>  &nbsp;&nbsp;  <pre> &nbsp;&nbsp;<b>- animEffect</b> {Object} Specifies the animation effect. Following are the available options of animation effect. <b>Optional </b></pre> </pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_EFFECT_EXPAND:&#160;Specifies the widget must expand gradually by increasing the height of the widget. This option is applicable only when visibility is turned on.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_EFFECT_REVEAL: Specifies the widget must appear gradually by decreasing the transparency of the widget.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_EFFECT_COLLAPSE: This is applicable when the visibility is turned off. Specifies the widget must collapse gradually by decreasing the height of the widget.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_EFFECT_FADE:�This is applicable when the visibility is turned off. Specifies the widget must disappear gradually by increasing the transparency of the widget.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_EFFECT_NONE:&#160;This is the default option. Specifies animation should not be applied to the widget, but layout animations are applied on the Form that may be change the current widgets layout. The animation events are not triggered when this option is set.</pre></li></pre></dd>
		
			<pre>  &nbsp;&nbsp;  <pre> &nbsp;&nbsp;<b>- animDuration - Optional </b> {Number} Specifies the duration of the animation effect in seconds. The default value is 1. <b>Optional </b></pre> </pre></dd>
			
			<pre>  &nbsp;&nbsp;  <pre> &nbsp;&nbsp;<b>- animDelay - Optional </b> {Number} Specifies the delay of the animation effect in seconds. The default value is 0. <b>Optional </b></pre> </pre></dd>
			
			<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp; <b>- animCurve - Optional </b> Specifies the animation curve to be applied while playing the animation. An animation curve defines the speed of the animations at different intervals of the animation duration. Following are the available options of animation curve: </p></dd> </pre> </pre> </dd>
        		<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_CURVE_EASEIN:&#160;Specifies the animation to start slowly and then continues with normal speed.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_CURVE_EASEOUT: Specifies the animation to start with normal speed and slowdown towards the end.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_CURVE_EASEINOUT:&#160;Specifies the animation to start slowly and then continues with normal speed and then again slowdown towards the end.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_CURVE_LINEAR:&#160;This is the default value. Specifies the animation to continue with normal speed.</pre></li></pre></dd>

			<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp; <b>- animCallBacks - Optional </b> It is a JS dictionary containing the events invoked by the platform during the animation life cycle. Following are the available events: </p></dd> </pre> </pre> </dd>
        		<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; animStarted:&#160;Invoked at the end of the animation without any parameters. Following is the signature of the event:</pre></li></pre></dd><b>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp;<b>function animStarted() </b></dd> </p></pre> </pre> </pre> </br> </pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; animEnded: Invoked at the end of the animation without any parameters. Following is the signature of the event:</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp;<b>function animEnded() </b></pre> </pre> </pre>
		 
		 * @Available All Platforms except on all Mobile Web platforms
		 * @access Write
		 */
		this.setVisibility = function (/**Boolean*/visible,/**Object*/animationConfig) {}	
	
	    /**
	     * This method allows you to set a gesture recognizer for a specified gesture for a specified widget. 
		 * @param gestureType{Number} Indicates the type of gesture that needs to be detected on the widget.<b>Mandatory</b>
		 * @param setupParams {Array}Specifies an object that has the configuration parameters needed to setup a gesture recognizer.<b>Mandatory</b>
		 * @param gestureHandler{Function} Specifies the function that needs to be executed when a gesture is recognized.<b>Mandatory</b>
		 * @return String - Reference(uniqueidentifier) to the gesture is returned.
		 * @Available ios,Android,BlackBerry,Windows phone/Windows Kiosk,J2ME,SPA 
		 * @access Write
		 * @usage <pre>
	    //The below function will get invoked  when a gesture is recognized.
        function myTap(myWidget,gestureInfo)<br/>
       {
		alert(" Tap Gesture detected");
		alert("gestureType :"+gestureInfo.gestureType);
		alert("gesturePosition :"+gestureInfo.gesturePosition);
		//write any further logic here
	    } <br/>

		//Setting Gesture configuration.<br/>
		local setupTblTap = {fingers:1,taps:2};//double tap gesture<br/>

		//To add a TAP gesture recognizer on a hbox with ID hbx1 placed on a form frm1<br/>
		var tapGesture=frm1.hbx1.setGgestureRecognizer(1,setupTblTap,myTap);</pre>
		 */
		this.setGestureRecognizer = function (/**Number*/gestureType,/**Array*/setupParams,/**Function*/gestureHandler) {}

		/**
	     * This method allows you to remove a specified gesture recognizer for a specified widget. 
		 * @param uniqueIdentifier{Widgetref} Indicates the type of gesture added to the form.<b>Mandatory</b>
		 * @Available iPhone,iPad,Android,BlackBerry,Windows phone,SPA 
		 * @access Write
		 * @usage <pre>
		//The below function will get invoked when a gesture is recognized.<br/>
		function myTap(myWidget,gestureInfo)<br/>
	    {
		alert(" Tap Gesture detected");
		alert("gestureType :"+gestureInfo.gestureType);
		alert("gesturePosition :"+gestureInfo.gesturePosition);
		//write any further logic here
		}<br/>

		//Setting Gesture configuration.<br/>
		local setupTblTap = {fingers:1,taps:2};//double tap gesture<br/>

		//To add a TAP gesture recognizer on a hbox with ID hbx1 placed on a form frm1<br/>
		var tapGesture=frm1.hbx1.setGestureRecognizer(1,setupTblTap,myTap)<br/>

		//To remove the TAP gesture recognizer on a hbox with ID hbx1 placed on a form frm1<br/>
		frm1.hbx1.removeGestureRecognizer(tapGesture);</pre>
		 */
		this.removeGestureRecognizer = function (/**Widgetref*/uniqueIdentifier) {}
	
	    /**
	     * This method enables you to set the badge value to the given widget at the upper, right corner of the widget.
		 * @param badgeText{String} Specifies the Text value that appears within the badge.<b>Mandatory</b>
		 * @param skin{String}Specifies the background color for the badge.
		 * @Available iPhone,iPad 
		 * @access Write
		 * @usage <pre> 
	    //To set a badge value with skin "badgeSkin" on a box with ID hbx1 placed on a form frm1, use the following code:<br/>
		frm1.hbx1.setBadge("2","badgeSkin");</pre>
		 */
		this.setBadge = function (/**String*/badgeText,/**String*/skin) {}

        /**
	     * This method enables you to read the badge value (if any) attached to the given widget.
		 * @return String - Reference to the gesture is returned.
		 * @Available iPhone,iPad 
		 * @access Write
		 * @usage <pre> 
	    //To get a badge value on a box with ID hbx1 placed on a form frm1, use the following code:<br/>
		var badgeVal =frm1.hbx1.getBadge();<br/>
		alert("badge value is::"+badgeVal);</pre>
		 */
		this.getBadge = function () {}
	}
	
	
	//CheckBox Widget properties are defined here.
	ui.CheckBoxGroup = 
	/**
	 * Creates a new CheckBoxGroup object
	 * @class kony.ui.CheckBoxGroup
	 * @returns {kony.ui.CheckBoxGroup}
	 */
	function CheckBoxGroup (basicProperties, layoutProperties, platformSpecificProperties){
	
        //CheckBoxGroup - Basic Properties Starts Here	
		
	 	/**
		 * Defines a string of alpha numeric characters that uniquely identifies a widget within an application.
		 * @property {String}
		 * @Mandatory {Yes}
		 * @Available All Platforms
		 * @access Read
		 */		
		this.id = ""			

		/**
		 * Specifies custom JS Object with the key,value pairs that a developer can use to store the context with the widget. 
		 * @property {Object}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.info = {}	
		
		/**
		 * Specifies the look and feel of the CheckBox when not in focus.
		 * @property {String}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.skin = ""	
		
		/**
		 * Specifies the look and feel of the CheckBox when in focus.
		 * @property {String}
		 * @Available All Platforms except on all Mobile Web platforms.
		 * @access Read and Write
		 */
		this.focusSkin = ""	
		
		/**
		 * Specifies the visibility of the widget on the form. 
		 * @property {Boolean}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.isVisible = true	
		
		/**
		 * Specifies  the set of values that must be displayed for the user to make a selection from the available choices.
		 * @property {Array}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.masterData = []		
		
		/**
		 * Specifies  the set of values from which you can make one or more selections. You must set the values from the code.
		 * @property {Array}
		 * @Available All Platforms except Mobile Web (basic) and Win Mobile6x
		 * @access Read and Write
		 */
		this.masterDataMap = []
		
		/**
		 * Specifies  the property to return the array of key,value pair selected from the masterdata representing the selected key,value.
		 * @property {Array}
		 * @Available All Platforms except Mobile Web (basic) and Win Mobile6x 
		 * @access Read 
		 */
		this.selectedKeyValues = []
		
		/**
		 * Specifies  the property to return the array of selected keys from the masterdata representing the selected key.
		 * @property {Array}
		 * @Available All Platforms,except Mobile Web (basic) and Win Mobile6x
		 * @access Read and Write
		 */
		this.selectedKeys = []
		
		//CheckBoxGoup - Layout Configuration Properties Starts here.
		
		/**
		 * Specifies percentage of width to be allocated by its parent widget widget. The parent widget space is distributed to its child widgets based on this weight factor. All its child widgets should sum up to 100% of weight except when placed in kony.ui.ScrollBox.
		 * @property {Number}
		 * @Available All Platforms except Win Mobile 6x.
		 * @access Read and Write
		 */
		this.containerWeight = 0	
		
		/**
		 * Specifies the space between the content of the widget and the widget boundaries.
		 * @property {Array}
		 * @Available All Platforms except Mobile Web (basic)
		 * @access Read and Write
		 */
		this.padding = []	
		
		/**
		 * Specifies the space around a widget.
		 * @property {Array}
		 * @Available All Platforms except Mobile Web (basic) and Win Mobile6x.
		 * @access Read and Write
		 */
		this.margin = []
		
		/**
		 * Specifies the accessiblity configuration property for the widget.
		 * @property {Object}
		 * @Available iPhone, Android, SPA-iPhone, and SPA-Android Platforms
		 * @access Read and Write
		 * @usage <pre>
		 /* accessibilityConfig =  {
				"a11yHidden": false,
				"a11yValue": "Your text goes here",
				"a11yLabel": "Your text goes here",
				"a11yHint": "Your text goes here"
			},
		*/
		this.accessibilityConfig = {}
		
		
		//CheckBoxGroup - Platform Specific Properties starts here.
		
		/**
		 * Specifies the view type of the CheckBox. 
		 * @property {Number}
		 * @Available iPhone,iPad,Android,Android Tablet (only Spinner view is available for the platform)
		 * @access Read and Write
		 */
		this.viewType = 0	
		
		/**
		 * Specifies the hint text when the cursor hovers over a widget.
		 * @property {String}
		 * @Available windows 8
		 * @access Read and Write
		 */
		this.toolTip = ""	
		
		/**
		 * Specifies the look and feel of a widget when the cursor hovers on the widget.
		 * @property {String}
		 * @Available windows 8,Desktop Web
		 * @access Read and Write
		 */
		this.hoverSkin = ""	
		
		/**
		 * Specifies the layout changes that occur due to the animations applied/removed on other widgets. 
		 * @property {Object}
		 * @Available iOS and Android Platforms
		 * @access Read and Write
		 */
		this.layoutAnimConfig = {}
		
		//CheckBoxGroup - Events Starts here.
		
		/**
		 * This event allows the developer to execute custom javascript function before the onSelection callback of the CheckBox is invoked. This is applicable only for Mobile Web channel. The function must exist in a javascript file under project>module>js folder.
		 * @property {Event}
		 * @Available Mobile Web(Advanced),SPA (iPhone/Android/BlackBerry/Windows NTH)/Playbook 
		 * @access Read and Write
		 */
		this.preOnclickJS = new Event() 
		
		/**
		 * This event allows the developer to execute custom javascript function after the onSelection callback of the CheckBox is invoked. This is applicable only for Mobile Web channel.The function must exist in a javascript file under project>module>js folder. 
		 * @property {Event}
		 * @Available Mobile Web(Advanced),SPA (iPhone/Android/BlackBerry/Windows NTH)/Playbook
		 * @access Read and Write
		 */
		this.postOnclickJS = new Event() 
		
		/**
		 * An event callback that is invoked by the platform when an item is selected or deselected.
		 * @property {Event}
		 * @Available All Platforms except Mobile Web (basic).
		 * @access Read and Write
		 */
		 this.onSelection = new Event() 
	
	
	    //CheckBoxGroup - Methods starts here
	    
		/**
	     * This method specifies the widget that must be enabled or disabled.
		 * @param enabled{Boolean} Indicates widget whether true or false.<b>Mandatory</b>
		 * @Available All Platforms except on Map widget forSPA platform 
		 * @access Write
		 */
        this.setEnabled = function (/**Boolean*/enabled) {}	
    	
	
	    /**
	     * This method specifies the widget on which there must be focus. 
		 * @param focus{Boolean} Indicates focus is set on a widget.<b>Mandatory</b>
		 * @Available All Platforms 
		 * @access Write
		 */
        this.setFocus = function (/**Boolean*/focus) {}	 
		
		
		/**
	     * Specifies the method to set the visibility of the widget.
		 * @param visible{Boolean} Indicates visibility on a widget.<b>Mandatory</b>
		 * @Available All Platforms except on all Mobile Web platforms 
		 * @access Write
		 */
		this.setVisibility = function (/**Boolean*/visible) {}	
	}
	
	
	
	//Label Widget Properties are defined here.
	ui.Label = 
	/**
	 * Creates a new Label object
	 * @class kony.ui.Label
	 * @returns {kony.ui.Label}
	 */	 
	 
	function Label (basicProperties, layoutProperties, platformSpecificProperties){
	
	    //Label - Basic Properties Starts here
		
	 	/**
		 * Defines a string of alpha numeric characters that uniquely identifies a widget within an application.
		 * @property {String}
		 * @Mandatory Yes
		 * @Available All Platforms
		 * @access Read
		 */
		this.id = ""	
		
		/**
		 * Specifies custom JS Object with the key,value pairs that a developer can use to store the context with the widget. 
		 * @property {Object}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.info = {}	
		
		/**
		 * Specifies the look and feel of the Label widget when not in focus.
		 * @property {String}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		 this.skin = ""	
		 
		 /**
		 * Specifies a general or descriptive text for Label widget.
		 * @property {String|Number}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.text = ""
		
		/**
		 * Specifies the visibility of the widget. 
		 * @property {Boolean}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.isVisible = true	
		
		/**
		 * Specifies the accessiblity configuration property for the widget.
		 * @property {Object}
		 * @Available iPhone, Android, and SPA-Android Platforms
		 * @access Read and Write
		 * @usage <pre>
		 /* accessibilityConfig =  {
				"a11yHidden": false,
				"a11yValue": "Your text goes here",
				"a11yLabel": "Your text goes here",
				"a11yHint": "Your text goes here"
			},
		*/
		this.accessibilityConfig = {}
		
		//Label - Layout Configuration Properties Starts here
		
		/**
		 * Specifies percentage of width to be allocated by its parent widget widget. The parent widget space is distributed to its child widgets based on this weight factor. All its child widgets should sum up to 100% of weight except when placed in kony.ui.ScrollBox.
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.containerWeight = 0
	
	    /**
		 * Specifies the space between the content of the widget and the widget boundaries.
		 * @property {Array}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.padding = []	
		
		/**
		 * Specifies the space around a widget.
		 * @property {Array}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.margin = []	
		
		/**
		 * Specifies the alignment of the text on the Label with respect to its boundaries.
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.contentAlignment = 1	
	
	   //Label - Platform Specific Properties
	   
	   /**
		 * Specifies the hint text when the cursor hovers over a widget.
		 * @property {String}
		 * @Available windows 8,Desktop Web
		 * @access Read and Write
		 */
		this.toolTip = ""	
		
		/**
		 * Specifies the look and feel of a widget when the cursor hovers on the widget.
		 * @property {String}
		 * @Available windows 8,Desktop Web
		 * @access Read and Write
		 */
		this.hoverSkin = ""	
	   
	   /**
		 * Specifies the layout changes that occur due to the animations applied/removed on other widgets. 
		 * @property {Object}
		 * @Available iOS and Android Platforms
		 * @access Read and Write
		 */
		this.layoutAnimConfig = {}
		
		
        //Label- Methods starts here

        /**
	     * This method specifies the widget that must be enabled or disabled.
		 * @param enabled{Boolean} Indicates widget whether true or false.<b>Mandatory</b>
		 * @Available All Platforms except on Map widget forSPA platform 
		 * @access Write
		 */
        this.setEnabled = function (/**Boolean*/enabled) {}	
    		
	
	    /**
	     * This method specifies the widget on which there must be focus. 
		 * @param focus{Boolean} Indicates focus is set on a widget.<b>Mandatory</b>
		 * @Available All Platforms 
		 * @access Write
		 */
        this.setFocus = function (/**Boolean*/focus) {}	 
		
		
		/**
	     * Specifies the method to set the visibility of the widget.
		 * @param visible{Boolean} Indicates visibility on a widget.<b>Mandatory</b>
		 * @param animationConfig {Object} <b>Specifies the animation configuration object.<b> Note: This is OPTIONAL parameter and is supported only on iOS and Android platforms.</b></dd>
			<pre>  &nbsp;&nbsp;  <pre> &nbsp;&nbsp;<b>- animEffect</b> {Object} Specifies the animation effect. Following are the available options of animation effect. <b>Optional </b></pre> </pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_EFFECT_EXPAND:&#160;Specifies the widget must expand gradually by increasing the height of the widget. This option is applicable only when visibility is turned on.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_EFFECT_REVEAL: Specifies the widget must appear gradually by decreasing the transparency of the widget.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_EFFECT_COLLAPSE: This is applicable when the visibility is turned off. Specifies the widget must collapse gradually by decreasing the height of the widget.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_EFFECT_FADE:�This is applicable when the visibility is turned off. Specifies the widget must disappear gradually by increasing the transparency of the widget.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_EFFECT_NONE:&#160;This is the default option. Specifies animation should not be applied to the widget, but layout animations are applied on the Form that may be change the current widgets layout. The animation events are not triggered when this option is set.</pre></li></pre></dd>
		
			<pre>  &nbsp;&nbsp;  <pre> &nbsp;&nbsp;<b>- animDuration - Optional </b> {Number} Specifies the duration of the animation effect in seconds. The default value is 1. <b>Optional </b></pre> </pre></dd>
			
			<pre>  &nbsp;&nbsp;  <pre> &nbsp;&nbsp;<b>- animDelay - Optional </b> {Number} Specifies the delay of the animation effect in seconds. The default value is 0. <b>Optional </b></pre> </pre></dd>
			
			<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp; <b>- animCurve - Optional </b> Specifies the animation curve to be applied while playing the animation. An animation curve defines the speed of the animations at different intervals of the animation duration. Following are the available options of animation curve: </p></dd> </pre> </pre> </dd>
        		<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_CURVE_EASEIN:&#160;Specifies the animation to start slowly and then continues with normal speed.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_CURVE_EASEOUT: Specifies the animation to start with normal speed and slowdown towards the end.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_CURVE_EASEINOUT:&#160;Specifies the animation to start slowly and then continues with normal speed and then again slowdown towards the end.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_CURVE_LINEAR:&#160;This is the default value. Specifies the animation to continue with normal speed.</pre></li></pre></dd>

			<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp; <b>- animCallBacks - Optional </b> It is a JS dictionary containing the events invoked by the platform during the animation life cycle. Following are the available events: </p></dd> </pre> </pre> </dd>
        		<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; animStarted:&#160;Invoked at the end of the animation without any parameters. Following is the signature of the event:</pre></li></pre></dd><b>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp;<b>function animStarted() </b></dd> </p></pre> </pre> </pre> </br> </pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; animEnded: Invoked at the end of the animation without any parameters. Following is the signature of the event:</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp;<b>function animEnded() </b></pre> </pre> </pre>
		 
		 * @Available All Platforms except on all Mobile Web platforms
		 * @access Write
		 */
		this.setVisibility = function (/**Boolean*/visible,/**Object*/animationConfig) {}		
	
	    /**
	     * This method enables you to set the badge value to the given widget at the upper, right corner of the widget.
		 * @param badgeText{String} Specifies the Text value that appears within the badge.<b>Mandatory</b>
		 * @param skin{String}Specifies the background color for the badge.
		 * @Available iPhone,iPad 
		 * @access Write
		 * @usage <pre> 
	    //To set a badge value with skin "badgeSkin" on a box with ID hbx1 placed on a form frm1, use the following code:<br/>
		frm1.hbx1.setBadge("2","badgeSkin");</pre>
		 */
		this.setBadge = function (/**String*/badgeText,/**String*/skin) {}

        /**
	     * This method enables you to read the badge value (if any) attached to the given widget. 
		 * @return String - Reference to the gesture is returned
		 * @Available iPhone,iPad 
		 * @access Write
		 * @usage <pre> 
	    //To get a badge value on a box with ID hbx1 placed on a form frm1, use the following code:<br/>
		var badgeVal =frm1.hbx1.getBadge();<br/>
		alert("badge value is::"+badgeVal);</pre>
		 */
		this.getBadge = function () {}
	}
	
	
	//Alert widget properties are defined here.
	ui.Alert = 
	/**
	 * Creates a new Alert object
	 * @class kony.ui.Alert
	 * @returns {kony.ui.Alert}
	 */
	function Alert (basicProperties, platformSpecificProperties){
	
	    //Alert - Event Starts here
		
	 	/**
		 * JS function that should get called when alert is dismissed either through �yes� label button or through �no� label button.
		 * @property {Event}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.alertHandler = new Event() 
	}
	
	
	//Image2 Widget Properties are defined here
	ui.Image2 = 
	/**
	 * Creates a new Image2 object
	 * @class kony.ui.Image2
	 * @returns {kony.ui.Image2}
	 */
	function Image2 (basicProperties, layoutProperties, platformSpecificProperties){
	
	    //Image2 - Basic Properties Starts here
		
	 	/**
		 * Defines a string of alpha numeric characters that uniquely identifies a widget within an application.
		 * @property {String}
		 * @Mandatory Yes
		 * @Available All Platforms
		 * @access Read
		 */
		this.id = ""	
		
		/**
		 * Specifies custom JS Object with the key,value pairs that a developer can use to store the context with the widget. 
		 * @property {Object}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.info = {}
		
		/**
		 * Specifies the visibility of the widget. 
		 * @property {Boolean}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.isVisible = true	
		
		/**
		 * Represents the images raw bytes.
		 * @property {Object}
		 * @Available All Platforms except on all Mobile Web platforms.
		 * @access Read and Write
		 */
		this.rawBytes = {}	
		
		/**
		 * Returns the base64 encoded string of the image raw bytes.
		 * @property {Object}
		 * @Available All Platforms except on all Mobile Web platforms.
		 * @access Read and Write
		 */
		this.base64 = {}	
		
		/**
		 * Specifies the source of the image to be displayed. You can specify an image from the resources folder or specify a URL of the image.
		 * @property {String}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.src = ""
		
		/**
		 * Specifies the accessiblity configuration property for the widget.
		 * @property {Object}
		 * @Available iPhone, Android, SPA-iPhone, and SPA-Android Platforms
		 * @access Read and Write
		 * @usage <pre>
		 /* accessibilityConfig =  {
				"a11yHidden": false,
				"a11yValue": "Your text goes here",
				"a11yLabel": "Your text goes here",
				"a11yHint": "Your text goes here"
			},
		*/
		this.accessibilityConfig = {}
		
	
		//Image2 - Layout Configuration Properties Starts here
		
		/**
		 * Specifies percentage of width to be allocated by its parent widget widget. The parent widget space is distributed to its child widgets based on this weight factor. All its child widgets should sum up to 100% of weight except when placed in kony.ui.ScrollBox.
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.containerWeight = 0
		
		/**
		 * Specifies how the rendered image�s width and height are identified when those of the source image varies from the Image widget itself.
		 * @property {Number}
		 * @Available All Platforms except Mobile Web,Symbian and SPA.
		 * @access Read and Write
		 */
		this.imageScaleMode = 1	
		
		/**
		 * Specifies the space between the content of the widget and the widget boundaries.
		 * @property {Array}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.padding = []	
		
		/**
		 * Specifies the space around a widget.
		 * @property {Array}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.margin = []
		
		/**
		 * Specifies the reference image height in pixels. These are device independent Pixels specified against 163 dpi.
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.referenceHeight = 1
		
		/**
		 * Specifies the reference image width in pixels. These are device independent Pixels specified against 163 dpi.
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.referenceWidth = 1
		
		
		// Image2 - Platform Specific Properties Starts here
		
		/**
		 * Specifies the look and feel of the Image.
		 * @property {Boolean}
		 * @Available BlackBerry,J2ME,Windows phone7/Windows Kiosk,Windows phone6.x,Symbian,iPhone
		 * @access Read and Write
		 */
		this.skin = true		

		/**
		 * Specifies the hint text when the cursor hovers over a widget.
		 * @property {String}
		 * @Available windows 8,Desktop Web
		 * @access Read and Write
		 */
		this.toolTip = ""	
		
		
	    /**
		 * Specifies the array of menu items that are displayed when the Image is selected.
		 * @property {Array}
		 * @Available Desktop Web
		 * @access Read and Write
		 */
		this.contextMenu = []	
	
		/**
		 * Specifies the layout changes that occur due to the animations applied/removed on other widgets. 
		 * @property {Object}
		 * @Available iOS and Android Platforms
		 * @access Read and Write
		 */
		this.layoutAnimConfig = {}
		
		
	    //Image2 - Methods starts here
	
	    /**
	     * This method specifies the widget that must be enabled or disabled.
		 * @param enabled{Boolean} Indicates widget whether true or false.<b>Mandatory</b>
		 * @Available All Platforms except on Map widget for SPA platform 
		 * @access Write
		 */
        this.setEnabled = function (/**Boolean*/enabled) {}	
    		
	
	    /**
	     * This method specifies the widget on which there must be focus. 
		 * @param focus{Boolean} Indicates focus is set on a widget.<b>Mandatory</b>
		 * @Available All Platforms 
		 * @access Write
		 */
        this.setFocus = function (/**Boolean*/focus) {}	 
		
		
		/**
	     * Specifies the method to set the visibility of the widget.
		 * @param visible{Boolean} Indicates visibility on a widget.<b>Mandatory</b>
		 * @param animationConfig {Object} <b>Specifies the animation configuration object.<b> Note: This is OPTIONAL parameter and is supported only on iOS and Android platforms.</b></dd>
			<pre>  &nbsp;&nbsp;  <pre> &nbsp;&nbsp;<b>- animEffect</b> {Object} Specifies the animation effect. Following are the available options of animation effect. <b>Optional </b></pre> </pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_EFFECT_EXPAND:&#160;Specifies the widget must expand gradually by increasing the height of the widget. This option is applicable only when visibility is turned on.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_EFFECT_REVEAL: Specifies the widget must appear gradually by decreasing the transparency of the widget.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_EFFECT_COLLAPSE: This is applicable when the visibility is turned off. Specifies the widget must collapse gradually by decreasing the height of the widget.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_EFFECT_FADE:�This is applicable when the visibility is turned off. Specifies the widget must disappear gradually by increasing the transparency of the widget.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_EFFECT_NONE:&#160;This is the default option. Specifies animation should not be applied to the widget, but layout animations are applied on the Form that may be change the current widgets layout. The animation events are not triggered when this option is set.</pre></li></pre></dd>
		
			<pre>  &nbsp;&nbsp;  <pre> &nbsp;&nbsp;<b>- animDuration - Optional </b> {Number} Specifies the duration of the animation effect in seconds. The default value is 1. <b>Optional </b></pre> </pre></dd>
			
			<pre>  &nbsp;&nbsp;  <pre> &nbsp;&nbsp;<b>- animDelay - Optional </b> {Number} Specifies the delay of the animation effect in seconds. The default value is 0. <b>Optional </b></pre> </pre></dd>
			
			<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp; <b>- animCurve - Optional </b> Specifies the animation curve to be applied while playing the animation. An animation curve defines the speed of the animations at different intervals of the animation duration. Following are the available options of animation curve: </p></dd> </pre> </pre> </dd>
        		<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_CURVE_EASEIN:&#160;Specifies the animation to start slowly and then continues with normal speed.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_CURVE_EASEOUT: Specifies the animation to start with normal speed and slowdown towards the end.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_CURVE_EASEINOUT:&#160;Specifies the animation to start slowly and then continues with normal speed and then again slowdown towards the end.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_CURVE_LINEAR:&#160;This is the default value. Specifies the animation to continue with normal speed.</pre></li></pre></dd>

			<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp; <b>- animCallBacks - Optional </b> It is a JS dictionary containing the events invoked by the platform during the animation life cycle. Following are the available events: </p></dd> </pre> </pre> </dd>
        		<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; animStarted:&#160;Invoked at the end of the animation without any parameters. Following is the signature of the event:</pre></li></pre></dd><b>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp;<b>function animStarted() </b></dd> </p></pre> </pre> </pre> </br> </pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; animEnded: Invoked at the end of the animation without any parameters. Following is the signature of the event:</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp;<b>function animEnded() </b></pre> </pre> </pre>
		 
		 * @Available All Platforms except on all Mobile Web platforms
		 * @access Write
		 */
		this.setVisibility = function (/**Boolean*/visible,/**Object*/animationConfig) {}	
	
	    /**
	     * This method enables you to set the badge value to the given widget at the upper, right corner of the widget.
		 * @param badgeText{String} Specifies the Text value that appears within the badge.<b>Mandatory</b>
		 * @param skin{String}Specifies the background color for the badge.
		 * @Available iPhone,iPad 
		 * @access Write
		 * @usage <pre> 
	    //To set a badge value with skin "badgeSkin" on a box with ID hbx1 placed on a form frm1, use the following code:<br/>
		frm1.hbx1.setBadge("2","badgeSkin");</pre>
		 */
		this.setBadge = function (/**String*/badgeText,/**String*/skin) {}

        /**
	     * This method enables you to read the badge value (if any) attached to the given widget. 
		 * @return String - Reference to the gesture is returned.
		 * @Available iPhone,iPad 
		 * @access Write
		 * @usage <pre> 
	    //To get a badge value on a box with ID hbx1 placed on a form frm1, use the following code:<br/>
		var badgeVal =frm1.hbx1.getBadge();<br/>
		alert("badge value is::"+badgeVal);</pre>
		 */
		this.getBadge = function () {}
	}
	
	
	//Image Widget Properties are defined here
	ui.Image = 
	/**
	 * Creates a new Image object
	 * @class kony.ui.Image
	 * @returns {kony.ui.Image}
	 */
	function Image (basicProperties, layoutProperties, platformSpecificProperties){
	
	    //Image - Basic Properties Starts here
		
	 	/**
		 * Defines a string of alpha numeric characters that uniquely identifies a widget within an application.
		 * @property {String}
		 * @Mandatory Yes
		 * @Available All Platforms
		 * @access Read
		 */
		this.id = ""	
		
		/**
		 * Specifies custom JS Object with the key,value pairs that a developer can use to store the context with the widget. 
		 * @property {Object}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.info = {}
		
		/**
		 * Specifies the visibility of the widget. 
		 * @property {Boolean}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.isVisible = true	
		
		/**
		 * Represents the images raw bytes.
		 * @property {Object}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.rawBytes = {}	
		
		/**
		 * Returns the base64 encoded string of the image raw bytes.
		 * @property {String}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.base64 = ""	
		
		/**
		 * Specifies the source of the image to be displayed. You can specify an image from the resources folder or specify a URL of the image.
		 * @property {String}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.src = ""
		
		
		//Image - Layout Configuration Properties Starts here
		
		/**
		 * Specifies percentage of width to be allocated by its parent widget widget. The parent widget space is distributed to its child widgets based on this weight factor. All its child widgets should sum up to 100% of weight except when placed in kony.ui.ScrollBox.
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.containerWeight = 0
		
		/**
		 * Specifies how the rendered image�s width and height are identified when those of the source image varies from the Image widget itself.
		 * @property {Number}
		 * @Available All Platforms except Mobile Web, Symbian and SPA.
		 * @access Read and Write
		 */
		this.imageScaleMode = 1	
		
		/**
		 * Specifies the space between the content of the widget and the widget boundaries.
		 * @property {Array}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.padding = []	
		
		/**
		 * Specifies the space around a widget.
		 * @property {Array}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.margin = []
		
		
		// Image - Platform Specific Properties Starts here
		
		/**
		 * Specifies a background skin for Image widget.
		 * @property {Boolean}
		 * @Available BlackBerry,J2ME,Windows phone7,Windows phone6.x,Symbian,iPhone
		 * @access Read and Write
		 */
		this.skin = true			
		
		/**
		 * Specifies the hint text when the cursor hovers over a widget.
		 * @property {String}
		 * @Available windows 8,Desktop Web
		 * @access Read and Write
		 */
		this.toolTip = ""	
		
		/**
		 * Specifies the array of menu items that are displayed when the Image is selected.
		 * @property {Array}
		 * @Available Desktop Web
		 * @access Read and Write
		 */
		this.contextMenu = []	
	
	
	
	    //Image - Methods starts here
		
		/**
	     * This method specifies the widget that must be enabled or disabled.
		 * @param enabled{Boolean} Indicates widget whether true or false.<b>Mandatory</b>
		 * @Available All Platforms except on Map widget for SPA platform 
		 * @access Write
		 */
        this.setEnabled = function (/**Boolean*/enabled) {}	
    		
	
	    /**
	     * This method specifies the widget on which there must be focus. 
		 * @param focus{Boolean} Indicates focus is set on a widget.<b>Mandatory</b>
		 * @Available All Platforms 
		 * @access Write
		 */
        this.setFocus = function (/**Boolean*/focus) {}	 
		 
		 
		/**
	     * Specifies the method to set the visibility of the widget.
		 * @param visible{Boolean} Indicates visibility on a widget.<b>Mandatory</b>
		 * @Available All Platforms except on all Mobile Web platforms
		 * @access Write
		 */
		this.setVisibility = function (/**Boolean*/visible) {}	
	
	    /**
	     * This method enables you to set the badge value to the given widget at the upper, right corner of the widget.
		 * @param badgeText{String} Specifies the Text value that appears within the badge.<b>Mandatory</b>
		 * @param skin{String}Specifies the background color for the badge.
		 * @Available iPhone,iPad 
		 * @access Write
		 * @usage <pre> 
	    //To set a badge value with skin "badgeSkin" on a box with ID hbx1 placed on a form frm1, use the following code:<br/>
		frm1.hbx1.setBadge("2","badgeSkin");</pre>
		 */
		this.setBadge = function (/**String*/badgeText,/**String*/skin) {}

        /**
	     * This method enables you to read the badge value (if any) attached to the given widget.
         * @return String - Reference to the gesture is returned		 
		 * @Available iPhone,iPad 
		 * @access Write
		 * @usage <pre> 
	    //To get a badge value on a box with ID hbx1 placed on a form frm1, use the following code:<br/>
		var badgeVal =frm1.hbx1.getBadge();<br/>
		alert("badge value is::"+badgeVal);</pre>
		 */
		this.getBadge = function () {}
	}
	
	
	//ImageGallery2 Widget Properties are defined here.
	ui.ImageGallery2 = 
	/**
	 * Creates a new ImageGallery2 object
	 * @class kony.ui.ImageGallery2
	 * @returns {kony.ui.ImageGallery2}
	 */
	function ImageGallery2(basicProperties, layoutProperties, platformSpecificProperties){
	
	    //ImageGallery2 - Basic Properties Starts here
		
	 	
        /**
		 * Defines a string of alpha numeric characters that uniquely identifies a widget within an application.
		 * @property {String}
		 * @Mandatory Yes
		 * @Available All Platforms
		 * @access Read
		 */
		this.id = ""		
		
		/**
		 * Specifies custom JS Object with the key,value pairs that a developer can use to store the context with the widget. 
		 * @property {Object}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.info = {}	
		
		/**
		 * Specifies the look and feel of the ImageGallery widget when not in focus.
		 * @property {String}
		 * @Available All Platforms except Mobile Web (basic) and Win Mobile6x.
		 * @access Read and Write
		 */
		this.skin = ""	
		
		/**
		 * This is a skin property and it determines the look and feel of the widget when focused.
		 * @property {String}
		 * @Available All Platforms except on all Mobile Web platforms.
		 * @access Read and Write
		 */
		this.focusSkin = ""	
		
		/**
		 * Specifies the visibility of the widget on the form.
		 * @property {Boolean}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.isVisible = true		


		/**
		 * Indicates the currently selected image in the ImageGallery. The index is with respect to the order in which data is set with data property. 
		 * @property {Number}
		 * @Available All Platforms except Mobile Web (basic) and Win Mobile6x.
		 * @access Read and Write
		 */
		this.selectedIndex = 0		


		/**
		 * Returns the selected data object(input array) corresponding to the selected image of the ImageGallery.If no image is selected,null/nil is returned.
		 * @property {Object}
		 * @Available All Platforms except Mobile Web (basic) and Win Mobile6x.
		 * @access Read 
		 */
		this.selectedItem = {}	
		
		/**
		 * Specifies the JS Object which represents the images to be rendered in ImageGallery.
		 * @property {Array}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.data = []	
		
		
		
	    //ImageGallery2 - Layout Configuration Properties Starts here

		/**
		 * Specifies percentage of width to be allocated by its parent widget widget. The parent widget space is distributed to its child widgets based on this weight factor. All its child widgets should sum up to 100% of weight except when placed in kony.ui.ScrollBox.
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.containerWeight = 0
		
		/**
		 * Specifies the space around a widget.
		 * @property {Array}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.margin = []	
		
		
		/**
		 * Specifies the reference image height in pixels. These are device independent Pixels specified against 163 dpi.
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.referenceHeight = 1
		
		/**
		 * Specifies the reference image width in pixels. These are device independent Pixels specified against 163 dpi.
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.referenceWidth = 1
		
		//ImageGallery2 - Platform Specific Properties
		
				
		/**
		 * Specifies the view type of imageGallery should display. 
		 * @property {Number}
		 * @Available Desktop Web
		 * @access Read and Write
		 */
		this.viewType = 1	
		
		/**
		 * Specifies the view configuration for different viewtypes. 
		 * @property {Object}
		 * @Available Desktop Web
		 * @access Read and Write
		 */
		this.viewConfig = {}
		
		/**
		 * Specifies the layout changes that occur due to the animations applied/removed on other widgets. 
		 * @property {Object}
		 * @Available iOS and Android Platforms
		 * @access Read and Write
		 */
		this.layoutAnimConfig = {}
		
	    //ImageGallery2 - Events  starts here.	
		
		/**
		 * This event allows the developer to execute custom javascript function when the ImageGallery is invoked. This is applicable only for Mobile Web channel. The function must exist in a javascript file under project>module>js folder. 
		 * @property {Event}
		 * @Available Mobile Web (Advanced),SPA (iPhone/Android/BlackBerry/Windows NTH)/Playbook
		 * @access Read and Write
		 */
		this.preOnclickJS = new Event() 
		
		
		/**
		 * This event allows the developer to execute custom javascript function after the onClick callback of the ImageGallery is invoked. This is applicable only for Mobile Web channel.The function must exist in a javascript file under project>module>js folder.
		 * @property {Event}
		 * @Available Mobile Web (Advanced),SPA (iPhone/Android/BlackBerry/Windows NTH)/Playbook
		 * @access Read and Write
		 */
		this.postOnclickJS = new Event() 
		
		/**
		 * An event callback that is invoked by the platform when an Image is selected in ImageGallery.
		 * @property {Event}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.onSelection = new Event() 
		
	
	//Imagegallery2 - Methods Starts here.
	
		/**
		 * This method is used to add new images to the Image Gallery. The new images are appended to the existing images.
		 * @param array_of_data {Array}Array of objects having image property. The image property name must be the one passed as second argument.	.<b>Mandatory</b>
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>
		//creating ImageGallery
		var imgGalBasic = { id: "imgGallery", isVisible: true, skin: "gradroundfocusbtn", focusSkin: "gradroundfocusbtn", imageWhileDownloading: "ApplicationIcon.png", imageWhenFailed: "AppIcon.png", selectedIndex:3, spaceBetweenImages: 50};<br/>
		var imgGalLayout = {containerWeight:100};<br/>
		var imgGalPSP = {itemsPerRow:3, preOnclickJS:preOnclickCallBck};<br/>
		
		//Creating the ImageGallery.<br/>
		var imgGallery = new kony.ui.ImageGallery2(imgGalBasic,imgGalLayout,imgGalPSP);<br/>
		
		//Adding new new images to the Image Gallery by addAll method,We can use external URL images or the images inside resources folder<br/>
		imgGallery.addAll([{ imageurl: "http://chromeactions.com/i/3d-like-box.png" },<br/>
		{ imageurl: "http://www.unlockiphoneinstantly.com/wp-content/themes/unlockiphone/images/check-box.jpg" }],
		"imageurl" );</pre>
		 */
		this.addAll = function (/**Array*/array_of_data){}
	
	    /**
		 * This method Allows you to add/insert a new image at a given index. In case the index is not valid and not falling in range 0 <= index <= N, where N is the total number of records image is added at the end of the ImageGallery.
		 * @param imagedata {Object} Specifies the JSObject having image property. The image property name must be the one set in setData and addAll methods.<b>Mandatory</b>
		 * @param index{Number}Specifies the position in number format.<b>Mandatory</b>
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>
	     */
		this.addDataAt=function (/**Object*/imagedata,/**Number*/index){}
		
		/**
		 * This method is used to set new images to the Image Gallery. The existing images will be replaced with the new images.
		 * @param array_of_data {Array}	Array of objects having image property.<b>Mandatory</b>
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre> 
		//Defining the properties for ImageGallery
        var imgGalBasic = { id: "imgGallery", isVisible: true, skin: "gradroundfocusbtn", focusSkin: "gradroundfocusbtn", imageWhileDownloading: "ApplicationIcon.png", imageWhenFailed: "AppIcon.png", selectedIndex:3, spaceBetweenImages: 50};<br/>
		var imgGalLayout = {containerWeight:100};<br/>
		var imgGalPSP = {itemsPerRow:3, preOnclickJS:preOnclickCallBck};<br/>
		
		//Creating the ImageGallery.<br/>
		var imgGallery = new kony.ui.ImageGallery2(imgGalBasic,imgGalLayout,imgGalPSP);<br/> 
		
		//Replacing existing images with the new images by setData method,We can use external URL images or the images inside resources folder.<br/>
		imgGallery.setData([{ imageurl: "http://chromeactions.com/i/3d-like-box.png" },<br/>
		{ imageurl: "http://chromeactions.com/i/3d-like-box.png1" },;<br/> 
		{ imageurl: "http://www.unlockiphoneinstantly.com/wp-content/themes/unlockiphone/images/check-box.jpg" },;<br/> 
		{ imageurl: "http://chromeactions.com/i/3d-like-box.png1" },;<br/> 
		{ imageurl: "image2.png"}],;<br/> 
		"imageurl"  
		);</pre>
		 */
		this.setData = function (/**Array*/array_of_data){}
	
	    /**
		 * This method is used to set new images to the Image Gallery at a given index. The existing image will be replaced with the new image. In case the index is not valid,the operation is ignored.
		 * @param imagedata {Object} Specifies the JSObject having image property.<b>Mandatory</b>
		 * @param index {Number} Specifies the position in number format.<b>Mandatory</b>
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre> 
		//Defining the properties for ImageGallery <br/>
		var imgGalBasic = { id: "imgGallery", isVisible: true, skin: "gradroundfocusbtn", focusSkin: "gradroundfocusbtn", imageWhileDownloading: "ApplicationIcon.png", imageWhenFailed: "AppIcon.png", selectedIndex:3, spaceBetweenImages: 50};<br/>
		var imgGalLayout = {containerWeight:100};<br/>
		var imgGalPSP = {itemsPerRow:3, preOnclickJS:preOnclickCallBck};<br/>
		
		//Creating the ImageGallery<br/>
		var imgGallery = new kony.ui.ImageGallery2(imgGalBasic,imgGalLayout,imgGalPSP);<br/>
		
		//set a new image at a 1st index by setDataAt method<br/>
		imgGallery.setDataAt({ imageurl: "http://chromeactions.com/i/3d-like-box.png" }, 1);</pre>
		 */
		this.setDataAt = function (/**Object*/imagedata,/**Number*/index){}
	
		/**
		 * This method is used to remove all the images in the Image Gallery.
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre> 
		//Defining the properties for ImageGallery.<br/>
		var imgGalBasic = { id: "imgGallery", isVisible: true, skin: "gradroundfocusbtn", focusSkin: "gradroundfocusbtn", imageWhileDownloading: "ApplicationIcon.png", imageWhenFailed: "AppIcon.png", selectedIndex:3, spaceBetweenImages: 50};<br/>
		var imgGalLayout = {containerWeight:100};<br/>
		var imgGalPSP = {itemsPerRow:3, preOnclickJS:preOnclickCallBck};<br/>
		
		//Creating the ImageGallery.<br/>
		var imgGallery = new kony.ui.ImageGallery2(imgGalBasic,imgGalLayout,imgGalPSP);<br/>
		
		//Removing all the images inside the imageGallery by removeAll method<br/>
		imgGallery.removeAll();</pre>
		 */
		this.removeAll = function ()	{}
	
		/**
		 * This method removes the image at the given index in the Image gallery. In JavaScript, the Index is '0' based and in Lua, it is '1' based.
		 * @param index {Number}Specifies the position in number format.<b>Mandatory</b>
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>	
		//Defining the properties for ImageGallery <br/>
		var imgGalBasic = { id: "imgGallery", isVisible: true,skin: "gradroundfocusbtn", focusSkin: "gradroundfocusbtn", imageWhileDownloading: "ApplicationIcon.png", imageWhenFailed: "AppIcon.png", selectedIndex:3, spaceBetweenImages: 50};<br/>
		var imgGalLayout = {containerWeight:100};<br/>
		var imgGalPSP = {itemsPerRow:3, preOnclickJS:preOnclickCallBck};<br/>
		
		//Creating the ImageGallery2.<br/>
		var imgGallery = new kony.ui.ImageGallery2(imgGalBasic,imgGalLayout,imgGalPSP);<br/>
		
		//Removing the image  at index 1 by removeAt method<br/>
		imgGallery.removeAt(1);</pre>
		 */
		this.removeAt = function (/**Number*/index){}
	
	
	    /**
	     * This method specifies the widget that must be enabled or disabled.
		 * @param enabled{Boolean} Indicates widget whether true or false.<b>Mandatory</b>
		 * @Available All Platforms except on Map widget for SPA platform 
		 * @access Write
		 */
        this.setEnabled = function (/**Boolean*/enabled) {}	
    	
	
	    /**
	     * This method specifies the widget on which there must be focus. 
		 * @param focus{Boolean} Indicates focus is set on a widget.<b>Mandatory</b>
		 * @Available All Platforms 
		 * @access Write
		 */
        this.setFocus = function (/**Boolean*/focus) {}	 
		
		
		/**
	     * Specifies the method to set the visibility of the widget.
		 * @param visible{Boolean} Indicates visibility on a widget.<b>Mandatory</b>
		 * @Available All Platforms except on all Mobile Web platforms
		 * @access Write
		 */
		this.setVisibility = function (/**Boolean*/visible) {}	
	}
	
		
	//ImageGallery Widget Properties are defined here.
	ui.ImageGallery = 
	/**
	 * Creates a new ImageGallery object
	 * @class kony.ui.ImageGallery
	 * @returns {kony.ui.ImageGallery}
	 */
	function ImageGallery(basicProperties, layoutProperties, platformSpecificProperties){
	
	    //ImageGallery - Basic Properties Starts here
		
	 	
        /**
		 * Defines a string of alpha numeric characters that uniquely identifies a widget within an application.
		 * @property {String}
		 * @Mandatory Yes
		 * @Available All Platforms
		 * @access Read
		 */
		this.id = ""		
		
		/**
		 * Specifies custom JS Object with the key,value pairs that a developer can use to store the context with the widget. 
		 * @property {Object}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.info = {}	
		
		/**
		 * Specifies a background skin for ImageGallery widget.
		 * @property {String}
		 * @Available All Platforms except Mobile Web (basic) and Win Mobile6x.
		 * @access Read and Write
		 */
		this.skin = ""	
		
		/**
		 * This is a skin property and it determines the look and feel of the widget when focused.
		 * @property {String}
		 * @Available All Platforms except on all Mobile Web platforms.
		 * @access Read and Write
		 */
		this.focusSkin = ""	
		
		/**
		 * Specifies the visibility of the widget on the form. 
		 * @property {Boolean}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.isVisible = true		


		/**
		 * Indicates the currently selected image in the ImageGallery. The index is with respect to the order in which data is set with data property. 
		 * @property {Number}
		 * @Available All Platforms except Mobile Web (basic) and Win Mobile6x.
		 * @access Read and Write
		 */
		this.selectedIndex = 0		


		/**
		 * Returns the selected data object(input array) corresponding to the selected image.If no image is selected,null/nil is returned.
		 * @property {Object}
		 * @Available All Platforms
		 * @access Read 
		 */
		this.selectedItem = {}	
		
		/**
		 * Specifies the JS Object which represents the images to be rendered in ImageGallery.
		 * @property {Array}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.data = []	
		
	    //ImageGallery - Layout Configuration Properties Starts here

		/**
		 * Specifies percentage of width to be allocated by its parent widget widget. The parent widget space is distributed to its child widgets based on this weight factor. All its child widgets should sum up to 100% of weight except when placed in kony.ui.ScrollBox.
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.containerWeight = 0
		
		/**
		 * Specifies the space around a widget.
		 * @property {Array}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.margin = []	
		
		
		/**
		 * Specifies the reference image height in pixels. These are device independent Pixels specified against 163 dpi.
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.referenceHeight = 1
		
		/**
		 * Specifies the reference image width in pixels. These are device independent Pixels specified against 163 dpi.
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.referenceWidth = 1
		
		//ImageGallery - Platform Specific Properties
		
		
		/**
		 * Specifies the view type of imageGallery should display. 
		 * @property {Number}
		 * @Available Desktop Web
		 * @access Read and Write
		 */
		this.viewType = 1	
		
		/**
		 * Specifies the view configuration for different viewtypes. 
		 * @property {Object}
		 * @Available Desktop Web
		 * @access Read and Write
		 */
		this.viewConfig = {}	
		
		
		
	    //ImageGallery - Events  starts here.	
		
		/**
		 * This event allows the developer to execute custom javascript function when the ImageGallery is invoked. This is applicable only for Mobile Web channel. The function must exist in a javascript file under project>module>js folder.
		 * @property {Event}
		 * @Available Mobile Web (Advanced),SPA (iPhone/Android/BlackBerry/Windows NTH)/Playbook
		 * @access Read and Write
		 */
		this.preOnclickJS = new Event() 
		
		
		/**
		 * This event allows the developer to execute custom javascript function after the onClick callback of the ImageGallery is invoked. This is applicable only for Mobile Web channel.The function must exist in a javascript file under project>module>js folder.
		 * @property {Event}
		 * @Available Mobile Web (Advanced),SPA (iPhone/Android/BlackBerry/Windows NTH)/Playbook
		 * @access Read and Write
		 */
		this.postOnclickJS = new Event() 
		
		/**
		 * An event callback that is invoked by the platform when an Image is selected in ImageGallery.
		 * @property {Event}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.onSelection = new Event() 
		
	
	//ImageGallery - Methods Starts here.
	
		/**
		 * This method is used to add new images to the Image Gallery. The new images are appended to the existing images.
		 * @param array_of_data {Array}	Specifies the list of images. The new images are appended to the existing images. If the ImageGallery has no images, the new images are placed in the ImageGallery.<b>Mandatory</b>
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>
		//creating ImageGallery
		var imgGalBasic = { id: "imgGallery", isVisible: true, skin: "gradroundfocusbtn", focusSkin: "gradroundfocusbtn", imageWhileDownloading: "ApplicationIcon.png", imageWhenFailed: "AppIcon.png", selectedIndex:3, spaceBetweenImages: 50};<br/>
		var imgGalLayout = {containerWeight:100};<br/>
		var imgGalPSP = {itemsPerRow:3, preOnclickJS:preOnclickCallBck};<br/>
		
		//Creating the ImageGallery.<br/>
		var imgGallery = new kony.ui.ImageGallery(imgGalBasic,imgGalLayout,imgGalPSP);<br/>
		
		//Adding new new images to the Image Gallery by addAll method,We can use external URL images or the images inside resources folder<br/>
		imgGallery.addAll([{ imageurl: "http://chromeactions.com/i/3d-like-box.png" },<br/>
		{ imageurl: "http://www.unlockiphoneinstantly.com/wp-content/themes/unlockiphone/images/check-box.jpg" }],
		"imageurl" );</pre>
		 */
		this.addAll = function (/**Array*/array_of_data){}
	
	   
	    /**
		 * This method Allows you to add/insert a new image at a given index. In case the index is not valid and not falling in range 0 <= index <= N, where N is the total number of records image is added at the end of the ImageGallery.
		 * @param imagedata {Object} Specifies the JSObject having image property. The image property name must be the one set in setData and addAll methods.<b>Mandatory</b>
		 * @param index{Number}Specifies the position in number format.<b>Mandatory</b>
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>
	     */
		this.addDataAt=function (/**Object*/imagedata, /**Number*/index){}
	
	
		/**
		 * This method is used to set new images to the Image Gallery. The existing image will be replaced with the new image.
		 * @param array_of_data {Array}	Array of objects having image property.<b>Mandatory</b>
		 * @param image_url_property {String} Specifies the url as an the array passed in the first argument whose value must be considered for the image.<b>Mandatory</b>
		 * @param widgetid(Object)Handle to the widget instance.<b>Mandatory</b>
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre> 
		//Defining the properties for ImageGallery
        var imgGalBasic = { id: "imgGallery", isVisible: true, skin: "gradroundfocusbtn", focusSkin: "gradroundfocusbtn", imageWhileDownloading: "ApplicationIcon.png", imageWhenFailed: "AppIcon.png", selectedIndex:3, spaceBetweenImages: 50};<br/>
		var imgGalLayout = {containerWeight:100};<br/>
		var imgGalPSP = {itemsPerRow:3, preOnclickJS:preOnclickCallBck};<br/>
		
		//Creating the ImageGallery.<br/>
		var imgGallery = new kony.ui.ImageGallery(imgGalBasic,imgGalLayout,imgGalPSP);<br/> 
		
		//Replacing existing images with the new images by setData method,We can use external URL images or the images inside resources folder.<br/>
		imgGallery.setData([{ imageurl: "http://chromeactions.com/i/3d-like-box.png" },<br/>
		{ imageurl: "http://chromeactions.com/i/3d-like-box.png1" },;<br/> 
		{ imageurl: "http://www.unlockiphoneinstantly.com/wp-content/themes/unlockiphone/images/check-box.jpg" },;<br/> 
		{ imageurl: "http://chromeactions.com/i/3d-like-box.png1" },;<br/> 
		{ imageurl: "image2.png"}],;<br/> 
		"imageurl"  
		);</pre>
		 */
		this.setData = function (/**Array*/array_of_data,/**String*/image_url_property,/**Object*/widgetid){}
	
	    /**
		 * This method is used to set new images to the Image Gallery at a given index. The existing image will be replaced with the new image. In case the index is not valid,the operation is ignored.
		 * @param imagedata {Object} Specifies the JSObject having image property.<b>Mandatory</b>
		 * @param index {Number} Specifies the position in number format.<b>Mandatory</b>
		 * @param widgetid{Object} Handle to the widget instance.<b>Mandatory</b>
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre> 
		//Defining the properties for ImageGallery <br/>
		var imgGalBasic = { id: "imgGallery", isVisible: true, skin: "gradroundfocusbtn", focusSkin: "gradroundfocusbtn", imageWhileDownloading: "ApplicationIcon.png", imageWhenFailed: "AppIcon.png", selectedIndex:3, spaceBetweenImages: 50};<br/>
		var imgGalLayout = {containerWeight:100};<br/>
		var imgGalPSP = {itemsPerRow:3, preOnclickJS:preOnclickCallBck};<br/>
		
		//Creating the ImageGallery<br/>
		var imgGallery = new kony.ui.ImageGallery(imgGalBasic,imgGalLayout,imgGalPSP);<br/>
		
		//set a new image at a 1st index by setDataAt method<br/>
		imgGallery.setDataAt({ imageurl: "http://chromeactions.com/i/3d-like-box.png" }, 1);</pre>
		 */
		this.setDataAt = function (/**Object*/imagedata,/**Number*/index,/**Object*/widgetid){}
	
		/**
		 * This method is used to remove all the images in the Image Gallery.
		 * @param widgetid{Object} Handle to the widget instance.<b>Mandatory</b>
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre> 
		//Defining the properties for ImageGallery.<br/>
		var imgGalBasic = { id: "imgGallery", isVisible: true, skin: "gradroundfocusbtn", focusSkin: "gradroundfocusbtn", imageWhileDownloading: "ApplicationIcon.png", imageWhenFailed: "AppIcon.png", selectedIndex:3, spaceBetweenImages: 50};<br/>
		var imgGalLayout = {containerWeight:100};<br/>
		var imgGalPSP = {itemsPerRow:3, preOnclickJS:preOnclickCallBck};<br/>
		
		//Creating the ImageGallery.<br/>
		var imgGallery = new kony.ui.ImageGallery(imgGalBasic,imgGalLayout,imgGalPSP);<br/>
		
		//Removing all the images inside the imageGallery by removeAll method<br/>
		imgGallery.removeAll();</pre>
		 */
		this.removeAll = function (/**Object*/widgetid)	{}
	
		/**
		 * This method removes the image at the given index in the Image gallery.
		 * @param index {Number}Specifies the position in number format.<b>Mandatory</b>
		 * @param widgetid{Object} Handle to the widget instance.<b>Mandatory</b>
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>	
		//Defining the properties for ImageGallery <br/>
		var imgGalBasic = { id: "imgGallery", isVisible: true,skin: "gradroundfocusbtn", focusSkin: "gradroundfocusbtn", imageWhileDownloading: "ApplicationIcon.png", imageWhenFailed: "AppIcon.png", selectedIndex:3, spaceBetweenImages: 50};<br/>
		var imgGalLayout = {containerWeight:100};<br/>
		var imgGalPSP = {itemsPerRow:3, preOnclickJS:preOnclickCallBck};<br/>
		
		//Creating the ImageGallery.<br/>
		var imgGallery = new kony.ui.ImageGallery(imgGalBasic,imgGalLayout,imgGalPSP);<br/>
		
		//Removing the image  at index 1 by removeAt method<br/>
		imgGallery.removeAt(1);</pre>
		 */
		this.removeAt = function (/**Number*/index,/**Object*/widgetid){}
	
	
	    /**
	     * This method specifies the widget that must be enabled or disabled.
		 * @param enabled{Boolean} Indicates widget whether true or false.<b>Mandatory</b>
		 * @Available All Platforms except on Map widget for SPA platform 
		 * @access Write
		 */
        this.setEnabled = function (/**Boolean*/enabled) {}	
    		
	
	    /**
	     * This method specifies the widget on which there must be focus. 
		 * @param focus{Boolean} Indicates focus is set on a widget.<b>Mandatory</b>
		 * @Available All Platforms 
		 * @access Write
		 */
        this.setFocus = function (/**Boolean*/focus) {}	 
		
		
		/**
	     * Specifies the method to set the visibility of the widget.
		 * @param visible{Boolean} Indicates visibility on a widget.<b>Mandatory</b>
		 * @Available All Platforms except on all Mobile Web platforms
		 * @access Write
		 */
		this.setVisibility = function (/**Boolean*/visible) {}	
	}
	
	
	//Line Widget Properties are defined here.
	ui.Line = 
	/**
	 * Creates a new Line object
	 * @class kony.ui.Line
	 * @returns {kony.ui.Line}
	 */
	function Line(basicProperties, layoutProperties, platformSpecificProperties){
	
	    //Line - Basic Properties Starts here
		
	 	/**
		 * Defines a string of alpha numeric characters that uniquely identifies a widget within an application.
		 * @property {String}
		 * @Mandatory Yes
		 * @Available All Platforms
		 * @access Read
		 */
		this.id = ""	
		
		/**
		 * Specifies custom JS Object with the key,value pairs that a developer can use to store the context with the widget. 
		 * @property {Object}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.info = {}	
		
		/**
		 * Specifies the visibility of the widget on the form.
		 * @property {Boolean}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.isVisible = true	
		
		/**
		 * Specifies the look and feel of the Line widget when not in focus.
		 * @property {String}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.skin = ""	
		
		
		//Line - Layout Configuration Properties Starts here
		
		/**
		 * Specifies the space around a widget.
		 * @property {Array}
		 * @Available All Platforms except Mobile Web (basic).
		 * @access Read and Write
		 */
		this.margin = []	
		
		/**
		 * Specifies the thickness of the widget in pixels. The pixel values are scaled to density specific pixels by the respective platforms.
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.thickness = 0		
	
	    //Line - Platform Specific Properties 
		
		/**
		 * Specifies the hint text when the cursor hovers over a widget.
		 * @property {String}
		 * @Available windows 8
		 * @access Read and Write
		 */
		this.toolTip = ""	
		
		 
		 /**
		 * Specifies the layout changes that occur due to the animations applied/removed on other widgets. 
		 * @property {Object}
		 * @Available iOS and Android Platforms
		 * @access Read and Write
		 */
		this.layoutAnimConfig = {}
		
	    // Line - Methods starts here
		
		/**
	     * This method specifies the widget that must be enabled or disabled.
		 * @param enabled{Boolean} Indicates widget whether true or false.<b>Mandatory</b>
		 * @Available All Platforms except on Map widget for SPA platform 
		 * @access Write
		 */
        this.setEnabled = function (/**Boolean*/enabled) {}	
    		
	
	    /**
	     * This method specifies the widget on which there must be focus. 
		 * @param focus{Boolean} Indicates focus is set on a widget.<b>Mandatory</b>
		 * @Available All Platforms 
		 * @access Write
		 */
        this.setFocus = function (/**Boolean*/focus) {}	 
		
		
		/**
	     * Specifies the method to set the visibility of the widget.
		 * @param visible{Boolean} Indicates visibility on a widget.<b>Mandatory</b>
		 * @Available All Platforms except on all Mobile Web platforms
		 * @access Write
		 */
		this.setVisibility = function (/**Boolean*/visible) {}	
	}
	
	
	
	//Map Widget Properties are defined here.
	ui.Map = 
	/**
	 * Creates a new Map object
	 * @class kony.ui.Map
	 * @returns {kony.ui.Map}
	 */
	function Map(basicProperties, layoutProperties, platformSpecificProperties){
	
	    //Map - Basic Properties starts here
	
	 	/**
		 * Defines a string of alpha numeric characters that uniquely identifies a widget within an application.
		 * @property {String}
		 * @Mandatory Yes
		 * @Available All Platforms
		 * @access Read
		 */
		this.id = ""	
		
		/**
		 * Specifies custom JS Object with the key,value pairs that a developer can use to store the context with the widget. 
		 * @property {Object}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.info = {}	
		
		/**
		 * The default map pin image to be used to indicate a location on map.
		 * @property {string}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.defaultPinImage = ""	
		
		
		/**
		 * Accepts reference to a box widget which represents a UI template for a custom callout. If not provided, it should fallback to the platform specific default callout for backward compatibility.
		 * @property {kony.ui.Box}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.calloutTemplate = {}	
		
		
		/**
		 * Specifies the width of the callout on the map. It accepts a number between 1 to 100 in percentage relative to the map widget width. For example, 100% value means, callout width should fill its map widget width. If the
		 value specified is less than 1 or more than 100, it should fallback to 80%.
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.calloutWidth = 0
		
		/**
		 * The location data to be highlighted on the map widget.
		 * @property {Array}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.locationData = []	
		
		/**
		 * Specifies the visibility of the widget on the form.
		 * @property {Boolean}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.isVisible = true	
		
		
		/**
		 * Specifies the mapping between the widget identifiers and data identifiers. The map must contain all widget data map referred across multiple templates, including the dynamic templates for each map location, if any. 
		 * @property {Object}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.widgetDataMapForCallout = {}	
		
		
		//Map - Layout Configuration Properties Starts here
		
		/**
		 * Specifies the percentage of width to be allocated by its parent widget.The parent's widget space is distributed to its child widgets based on this weight factor. All its child widgets should sum up to 100% of weight except when placed in kony.ui.ScrollBox
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.containerWeight = 0		
		
		/**
		 * Specifies the space around a widget.
		 * @property {Array}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.margin = []
		
		
		// Map - Platform Specific Properties Starts here
		
		/**
		 * Sets the zoom level for the current map view. The range varies from platform to platform.
		 * @property {Number}
		 * @Available Android,iPhone,iPad
		 * @access Read and Write
		 */
		this.zoomLevel = 0
		
		/**
		 * Map enables you to navigates to the specified address.
		 * @property {Object}
		 * @Available Android/Android Tablet,Windows Phone/Windows Kiosk ,Mobile Web(Basic),Mobile Web(BJS),Mobile Web(Advanced),SPA(iPhone/Android/BlackBerry/Windows NTH)/Playbook
		 * @access Read and Write
		 */
		this.address = {}
		
		/**
		 * Specifies the map viewing mode.
		 * @property {Number}
		 * @Available Android,iPhone,iPad,SPA (iPhone/Android/BlackBerry/Windows NTH)/Playbook,Mobile Web(Basic),Mobile Web(BJS),Mobile Web(Advanced),Windows 7
		 * @access Read and Write
		 */
		this.mode = 0
		
		/**
		 * Specifies the layout changes that occur due to the animations applied/removed on other widgets. 
		 * @property {Object}
		 * @Available iOS and Android Platforms
		 * @access Read and Write
		 */
		this.layoutAnimConfig = {}
	
	    //Map -Events Starts here


	    
		/**
		 * An event callback invoked by the platform when the user performs a click action on the map and location data with "latitude" and "longitude" are passed to the callback. This event is not raised if the user clicks on map pin and callout.
		 * @property {Event}
		 * @Available All Platforms except Server side Mobile Web
		 * @access Read and Write
		 */
		this.onClick = new Event () 
		
		/**
		 * An event callback invoked by the platform when the user clicks on a callout of the Map.
		 * @property {Event}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.onSelection = new Event () 
		
	    /**
		 * An event callback invoked by the platform when a map pin is clicked,passing the selected location data to the callback.
		 * @property {Event}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.onPinClick = new Event () 
	
		
	    //Map - Methods Starts here
		

		/**
		 * This method is used to add a polyline to the map widget with the given location data. You can add multiple polylines to the map widget using this method.
		 * @param locationData {Object}Specifies the location data for which the polyline is drawn on the map. <b>Mandatory</b>
		 * @Available Available on iOS and Android platforms only.
		 * @access Write
		 */
		this.addPolyline = function (/**Object*/locationData)	{}
		
		
		/**
		 * This method is used to clear all the data associated with map widget which including locationData and polylines.
		 * @Available Available on iOS and Android platforms only.
		 * @access Write
		 */
		this.clear = function ()	{}



		/**
		 * This method This method returns the currently visible map boundaries as an object. The predefined keys for the object are center,northeast,southwest,latspan, and lonspan.
		 * @Available Available on iOS and Android platforms only.
		 * @access Write
		 */
		this.getBounds = function ()	{}

		
		/**
		 * This method is used to remove a polyline from the map.
		 * @param polylineID {String}Specifies the id of the polyline that is used while adding a polyline. This method is ignored if the given id is incorrect or not found. <b>Mandatory</b>
		 * @Available Available on iOS and Android platforms only.
		 * @access Write
		 */
		this.removePolyline = function (/**String*/polylineID)	{}

		
		/**
		 * This method is used to dismiss the custom callout for a given location.If location is an optional argument and if not passed, this method dismisses all the opened callouts in the map. 
		 * @param locationData {Object}Specifies the location data of a single location following the data format of the "locationData" property on the map widget <b>Mandatory</b>
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>
	    //Defining the properties for Map 
        var mapBasicConf = {id: "map1", provider:constants.MAP_PROVIDER_GOOGLE, mapKey:"0z5UtaSPUYj42f5qX0VAwmDGLX39Qxgbtcra0TA", defaultPinImage: "kmpin.png", isVisible:true, locationData:[{lat :"17.445775", lon :"78.3731", name: "Campus 1", desc: "My Office Campus"}]};<br/>
		var mapLayoutConf={margin:[20,40,50,20], containerWeight:100};<br/>
		var mapPSPConf={};<br/>
		
		//Creating the Map.
        var map = new kony.ui.Map(mapBasicConf,mapLayoutConf,mapPSPConf);<br/>
		 */
		this.dismissCallout = function (/**Object*/locationData)	{}
		
		/**
		 * This method helps to navigate programmatically from one index to other index in the given list of locations shown on the map view.
		 * @param index{Number} Specifies the index of the pin to which the map should navigate to.<b>Mandatory</b>
		 * @param showcallout{Boolean} Indicates whether to show the callout on the pinafter navigating to the pin at the given index.
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>
	    //Creating the map 
		var mapBasicConf = {id: "map1", provider:constants.MAP_PROVIDER_GOOGLE,	mapKey:"0z5UtaSPUYj42f5qX0VAwmDGLX39Qxgbtcra0TA", defaultPinImage: "kmpin.png", isVisible:true, locationData:[{lat :"17.445775", lon :"78.3731", name: "Campus 1", desc: "My Office Campus"}]};<br/>
		var mapLayoutConf={margin:[20,40,50,20], containerWeight:100};<br/>
		var mapPSPConf={};<br/>
		
		//Creating the Map
		var map = new kony.ui.Map(mapBasicConf,mapLayoutConf,mapPSPConf);

		//navigateTo method call
		map.navigateTo(2,true);</pre> 
		 */
		this.navigateTo = function (/**Number*/index,/**Boolean*/showcallout)	{}
		
		/**
		 * This method allows you to navigate programmatically to the specified location. Based on the parameters passed it also displays the dropPin and callout. 
		 * @param locationData{Object} Specifies the location data of a single location following the data format of the "locationdata" property on the map widget. <b>Mandatory</b>
		 * @param showcallout{Boolean} Indicates whether to show the callout on the pinafter navigating to the pin at the given index.
		 * @param dropPin{Boolean}Indicates whether to drop the pin at the given location or not. 
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>
	    //Creating the map 
		var mapBasicConf = {id: "map1", provider:constants.MAP_PROVIDER_GOOGLE,mapKey:"0z5UtaSPUYj42f5qX0VAwmDGLX39Qxgbtcra0TA", defaultPinImage: "kmpin.png", isVisible:true};<br/>
	    var mapLayoutConf={margin:[20,40,50,20],containerWeight:100};<br/>
	    var mapPSPConf={};<br/>
	    var map = new kony.ui.Map(mapBasicConf,mapLayoutConf,mapPSPConf);<br/>
		var locationData = {lat :"17.433451",lon :"78.432061",name: "Kids Park",desc: "Kids Park Near My Home in DownTown"};<br/>
		//navigateToLocation method call
	    map.navigateToLocation(locationData,true,true);/pre>
        */		
		this.navigateToLocation = function (/**Object*/locationData,/**Boolean*/showcallout,/**Boolean*/dropPin)	{}
	
	
	    /**
	     * This method specifies the widget that must be enabled or disabled.
		 * @param enabled{Boolean} Indicates widget whether true or false.<b>Mandatory</b>
		 * @Available All Platforms except on Map widget for SPA platform 
		 * @access Write
		 */
        this.setEnabled = function (/**Boolean*/enabled) {}	
    	
	
	    /**
	     * This method specifies the widget on which there must be focus. 
		 * @param focus{Boolean} Indicates focus is set on a widget.<b>Mandatory</b>
		 * @Available All Platforms 
		 * @access Write
		 */
        this.setFocus = function (/**Boolean*/focus) {}	 
		
		
		/**
	     * Specifies the method to set the visibility of the widget.
		 * @param visible{Boolean} Indicates visibility on a widget.<b>Mandatory</b>
		 * @Available All Platforms except on all Mobile Web platforms
		 * @access Write
		 */
		this.setVisibility = function (/**Boolean*/visible) {}	
	}
	
	
	//popup Widget properties are defined here
	ui.Popup = 
	/**
	 * Creates a new Popup object
	 * @class kony.ui.Popup
	 * @returns {kony.ui.Popup}
	 */
	function Popup(basicProperties, layoutProperties, platformSpecificProperties){
	
	    //Popup - Basic Properties Starts here
		
	 	/**
		 * Defines a string of alpha numeric characters that uniquely identifies a widget within an application.
		 * @property {String}
		 * @Mandatory Yes
		 * @Available All Platforms
		 * @access Read
		 */
		this.id = ""	
		
		/**
		 * Specifies custom JS Object with the key,value pairs that a developer can use to store the context with the widget. 
		 * @property {Object}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.info = {}	
		
		/**
		 * Specifies a general or descriptive text that will be shown as the title for the Popup.
		 * @property {String}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.title = ""	
		
		/**
		 * Specifies a background skin for Popup widget.
		 * @property {String}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.skin = ""	
		
		/**
		 * In user interface design, a modal window, which is a child window that requires users to interact with it before they can return to operating the parent application, thus preventing the workflow on the application main window.
		 * @property {Boolean}
		 * @Available All Platforms except Mobile Web platforms.
		 * @access Read and Write
		 */
		this.isModal = true
		
		/**
		 * Indicates the transparency to be used behind the popup, default is 100% transparent.
		 * @property {Number}
		 * @Available All Platforms except Mobile Web platforms.
		 * @access Read and Write
		 */
		this.transparencyBehindThePopup = 0	
		
		/**
		 * A header is a section of the Popup that is docked at the top of the Popup (does not scroll along with the content of the Popup). It accepts an array of kony.ui.Box object references with horizontal orientation that are added as header docked at the top of the Popup. These headers can be reused across Popups.
		 * @property {Array} 
		 * @Available All Platforms
		 * @access Read 
		 */
		this.headers = []	
		
		/**
		 * A footer is a section of the popup that is docked at the bottom of the popup (does not scroll along with the content of the popup). It accepts an array of kony.ui.Box object references with horizontal orientation that are added as footer docked at the bottom of the popup. These footers can be reused across forms.
		 * @property {Array}
		 * @Available All Platforms
		 * @access Read 
		 */
		this.footers = []
		
		/**
		 * Specifies the accessiblity configuration property for the widget.
		 * @property {Object}
		 * @Available iPhone, Android, and SPA-iPhone Platforms
		 * @access Read and Write
		 * @usage <pre>
		 /* accessibilityConfig =  {
				"a11yLabel": "Your text goes here",
			},
		*/
		this.accessibilityConfig = {}
		
		//Popup - Layout Configuration Properties starts here.
		
		/**
		 * Specifies percentage of width to be occupied by the Popup with respect to its parent form width.
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.containerWeight = 0
		
		/**
		 * Specifies the space between the content of the widget and the widget boundaries.
		 * @property {Array}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.padding = []
		
		
		
		//Popup - Platform Specific Properties Starts here
		

		/**
		 * Specifies the whether the scroll view bounces past the edge of the content and back again. When set to true the scroll view bounce is applied.
		 * @property {Boolean}
		 * @Available Available on iOS platform only.
		 * @access Read and Write
		 */
		this.bounces = true
		
		/**
		 * Specifies the configuration properties for title bar for Desktop Web platform.
		 * @property {Object}
		 * @Available Available on Desktop Web Platform.
		 * @access Read and Write
		 */
		this.titleBarConfig = {}

	
		/**
		 * Specifies the configuration to be used when the user arrives on this form. It accepts hash values.
		 * @property {Object}
		 * @Available All Platforms except Mobile Web platforms.
		 * @access Read and Write
		 */
		this.inTransitionConfig = {}
		
		/**
		 * Specifies the type of transition effect to be applied when the Form is going out of view. It accepts hash values.
		 * @property {Object}
		 * @Available All Platforms except Mobile Web platforms.
		 * @access Read and Write
		 */
		this.outTransitionConfig = {}
		
		/**
		 * Specifies the type of view of tabpane
		 * @property {String}
		 * @Available BB,J2ME,SPA and Windows 8
		 * @access Read and Write
		 */
		this.viewType = ""
		
		/**
		 * Specifies the layout changes that occur due to the animations applied/removed on other widgets. 
		 * @property {Object}
		 * @Available iOS and Android Platforms
		 * @access Read and Write
		 */
		this.layoutAnimConfig = {}
	
	
		//Popup - Events Starts here
		
		/**
		 * An event callback invoked by the platform when show method of popup is called for first time after its construction. 
		 * @property {Event}
		 * @Available All Platforms
		 * @access  Write
		 */
		this.addWidgets = new Event() 
		
		/**
		 * This event gets called only once in popup life cycle that is when the popup is ready with its widget hierarchy. 
		 * @property {Event}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.init = new Event() 
		
		/**
		 * Specifies an Event which is triggered when a popup goes out of view. 
		 * @property {Event}
		 * @Available All Platforms except Mobile Web platforms.
		 * @access Read and Write
		 */
		this.onHide = new Event() 
		
		/**
		 * Specifies the name of function to be executed when a popup is loaded. The function must exist in the jsfolder. 
		 * @property {Event}
		 * @Available Mobile Web(BJS),Mobile Web(Advanced),SPA (iPhone/Android/BlackBerry/Windows NTH)/Playbook
		 * @access Read and Write
		 */
		this.onLoadJS = new Event() 
		
		/**
		 * Specifies the name of function to be executed when a popup is unloaded. The function must exist in a javascript file under project>module>js folder.
		 * @property {Event}
		 * @Available Mobile Web(BJS),Mobile Web(Advanced),SPA (iPhone/Android/BlackBerry/Windows NTH)/Playbook
		 * @access Read and Write
		 */
		this.unLoadJS = new Event()
		
		
		/**
		 * Specifies an event which is triggered when the user uses the back button on the device.
		 * @property {Event}
		 * @Available Android,Android Tablet,BlackBerry
		 * @access Read and Write
		 */
		this.onDeviceBack = new Event()
		
		
		
	    //popup - Methods Starts here.


		/**
		 * This method is used to navigate from one popup to other popup. The popup on which this method is called remains displayed while the content of the popup changes from current popup to given popup. This method is applicable only when the popupStyle is set as POPUP_TYPE_NATIVE_STYLE.
		 * @param popupinstance{Object} Specifies a list of all widgets to be added <b>Mandatory</b>.
		 * @param config{Object} Specifies a list of all widgets to be added <b>Optional</b>.
		 * @Available Available on iPad Platform only
		 * @access Write
		 * @usage <pre>
		//Defining properties for a Popup.<br/> 
		var popBasic ={id:"popUp", title:"PopUP",skin:"popSkin",isModal:true, transparencyBehindThePopup:100};<br/> 
		var popLayout ={containerWeight:100, padding:[5,5,5,5]};<br/> 
		var popPSP ={};<br/> 
		
       //Creating the Popup <br/> 
		var popUp=new kony.ui.Popup(popBasic, popLayout, popPSP);<br/>
		
        //NavigateTo method call<br/>   
        popUp.navigateTo(lbl);</pre>
		 */
		this.navigateTo = function (/**Object*/popupinstance,/**Object*/config)	{}
		
		
		/**
		 * This method enables you to set the properties for a left-side button of a titlebar.
		 * @param title{String} Reference string to be displayed on the button.
		 * @param image{String} Reference to the image of the button.
		 * @param handler{Object} An event callback is invoked by the platform when the user Reference string to be displayed on the button.
		 * @Available Available on iOS platform only
		 * @access Write
		 * @usage <pre>
		//Defining properties for a Popup.<br/> 
		var popBasic ={id:"popUp", title:"PopUP",skin:"popSkin",isModal:true, transparencyBehindThePopup:100};<br/> 
		var popLayout ={containerWeight:100, padding:[5,5,5,5]};<br/> 
		var popPSP ={};<br/> 
		
       //Creating the Popup <br/> 
		var popUp=new kony.ui.Popup(popBasic, popLayout, popPSP);<br/>
		
       //setTitleBarLeftSideButton method call<br/>   
        popUp.setTitleBarLeftSideButton(title,image,handler);</pre>
		 */
		this.setTitleBarLeftSideButton = function (/**String*/title,/**String*/image,/**Object*/handler)	{}
		

		/**
		 * This method enables you to set the properties for a right-side button of a titlebar.
		 * @param title{String} Reference string to be displayed on the button.
		 * @param image{String} Reference to the image of the button.
		 * @param handler{Object} An event callback is invoked by the platform when the user Reference string to be displayed on the button.
		 * @Available Available on iOS platform only
		 * @access Write
		 * @usage <pre>
		//Defining properties for a Popup.<br/> 
		var popBasic ={id:"popUp", title:"PopUP",skin:"popSkin",isModal:true, transparencyBehindThePopup:100};<br/> 
		var popLayout ={containerWeight:100, padding:[5,5,5,5]};<br/> 
		var popPSP ={};<br/> 
		
       //Creating the Popup <br/> 
		var popUp=new kony.ui.Popup(popBasic, popLayout, popPSP);<br/>
		
       //setTitleBarRightSideButton method call<br/>   
        popUp.setTitleBarRightSideButton(title,image,handler);</pre>
		 */
		this.setTitleBarRightSideButton = function (/**String*/title,/**String*/image,/**Object*/handler)	{}
		

		/**
		 * This method enables you to set the skin for a titlebar of a popup.
		 * @param skin{String} Reference to the skin.
		 * @Available Available on iOS platform only
		 * @access Write
		 * @usage <pre>
		//Defining properties for a Popup.<br/> 
		var popBasic ={id:"popUp", title:"PopUP",skin:"popSkin",isModal:true, transparencyBehindThePopup:100};<br/> 
		var popLayout ={containerWeight:100, padding:[5,5,5,5]};<br/> 
		var popPSP ={};<br/> 
		
       //Creating the Popup <br/> 
		var popUp=new kony.ui.Popup(popBasic, popLayout, popPSP);<br/>
		
       //setTitleBarSkin method call<br/>   
        popUp.setTitleBarSkin(skin);</pre>
		 */
		this.setTitleBarSkin = function (/**String*/skin)	{}
		

		/**
		 * This method gives you the control to show a titlebar within a popup.
		 * @Available Available on iOS platform only
		 * @access Write
		 * @usage <pre>
		//Defining properties for a Popup.<br/> 
		var popBasic ={id:"popUp", title:"PopUP",skin:"popSkin",isModal:true, transparencyBehindThePopup:100};<br/> 
		var popLayout ={containerWeight:100, padding:[5,5,5,5]};<br/> 
		var popPSP ={};<br/> 
		
       //Creating the Popup <br/> 
		var popUp=new kony.ui.Popup(popBasic, popLayout, popPSP);<br/>
		
       //showTitleBar method call<br/>   
        popUp.showTitleBar();</pre>
		 */
		this.showTitleBar = function ()	{}


		/**
		 * This method gives you the control to hide a titlebar within a popup.
		 * @Available Available on iOS platform only
		 * @access Write
		 * @usage <pre>
		//Defining properties for a Popup.<br/> 
		var popBasic ={id:"popUp", title:"PopUP",skin:"popSkin",isModal:true, transparencyBehindThePopup:100};<br/> 
		var popLayout ={containerWeight:100, padding:[5,5,5,5]};<br/> 
		var popPSP ={};<br/> 
		
       //Creating the Popup <br/> 
		var popUp=new kony.ui.Popup(popBasic, popLayout, popPSP);<br/>
		
       //hideTitleBar method call<br/>   
        popUp.hideTitleBar();</pre>
		 */
		this.hideTitleBar = function ()	{}

		
		/**
		 * This method is used to add widgets to the popup container.
		 * @param widgets{Object} Specifies a list of all widgets to be added.
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>
		//Defining properties for a Popup.<br/> 
		var popBasic ={id:"popUp", title:"PopUP",skin:"popSkin",isModal:true, transparencyBehindThePopup:100};<br/> 
		var popLayout ={containerWeight:100, padding:[5,5,5,5]};<br/> 
		var popPSP ={};<br/> 
		
        //Creating the Popup <br/> 
		var popUp=new kony.ui.Popup(popBasic, popLayout, popPSP);<br/>
		
        //Adding a label and a button widgets to the popUp. Here label and button widgets should be created already and made accessible<br/>   
        popUp.add(lbl,btn);</pre>
		 */
		this.add = function (/**Object*/widgets)	{}
	
		/**
		 * This method is used to add widgets to the popup container at the specified index.
		 * @param widgetref{Object} Reference of the name of the widget.<b>Mandatory</b>
		 * @param index {Number} Index number at which the widget is to be added.<b>Mandatory</b>
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre> 
		//Defining properties for a Popup.<br/>
	    var popBasic ={id:"popUp", title:"PopUP", skin:"popSkin", isModal:true, transparencyBehindThePopup:100};<br/>
		var popLayout ={containerWeight:100, padding:[5,5,5,5]};<br/>
		var popPSP ={};<br/>
		
		//Creating the Popup<br/>
        var popUp=new kony.ui.Popup(popBasic, popLayout, popPSP);<br/>
		
		//Adding label to the popUp at 15th index Position. Here label should be created already and made accessible.<br/>
		popUp.addAt(lbl,15);</pre>
		 */
		this.addAt = function (/**Object*/widgetref,/**Number*/index)	{}
	
		/**
		 * This method is used to display the popup on the screen.
		 * @Available iPhone,iPad
		 * @access Write
		 * @usage <pre>
		//Defining properties for a Popup.<br/>
		var popBasic ={id:"popUp", title:"PopUP", skin:"popSkin", isModal:true, transparencyBehindThePopup:100};<br/>
		var popLayout ={containerWeight:100,padding:[5,5,5,5]};<br/>
		var popPSP ={};<br/>
		
		//Creating the Popup.<br/>
		var popUp=new kony.ui.Popup(popBasic, popLayout, popPSP);<br/>
		
		//show method call
		popUp.show();</pre>
		 */
		this.show = function () {}
	
		/**
		 * This method is used to dismiss the popup on which this method is called.
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>	
		//Defining properties for a Popup<br/>	
		var popBasic ={id:"popUp", title:"PopUP", skin:"popSkin", isModal:true, transparencyBehindThePopup:100};<br/>
		var popLayout ={containerWeight:100,padding:[5,5,5,5]};<br/>
		var popPSP ={};<br/>
		
		//Creating the Popup.<br/>
		var popUp=new kony.ui.Popup(popBasic, popLayout, popPSP);<br/>
		
		//dismiss method call<br/>
		popUp.dismiss();</pre>
		 */
		this.dismiss = function ()	{}
	
	
		/**
		 * This method specifies the popup that must be displayed for the context and also helps you to position the popup on the screen. 
		 * @param setContext {String} Set of key value pairs providing information about the widget and the anchoring used to position the popup on the screen.<b>Mandatory</b>
		 * @Available All Platforms except BlackBerry
		 * @access Write
		 * @usage <pre>
		//Defining properties for a Popup<br/>
		var popBasic ={id:"popUp", title:"PopUP", skin:"popSkin", isModal:true, transparencyBehindThePopup:100};<br/>
		var popLayout ={containerWeight:100,padding:[5,5,5,5]};<br/>
		var popPSP ={};<br/>
		
		//Creating the Popup<br/>
		var popUp=new kony.ui.Popup(popBasic, popLayout, popPSP);<br/>
		
		//Defining the context Object<br/>
		local context1={};<br/>
		context1["widget"] = frm1["lbl1"];<br/>
		context1["anchor"] = "bottom";<br/>
		context1["sizetoanchorwidth"] = false;<br/>
		
		//setContext method call<br/>
		popUp.setContext(context1);</pre>
		 */
		this.setContext = function (/**String*/setContext)	{}
	
		/**
		 * This method is used to destroy any unwanted Popups at any point in time, and allows increasing the application life by reducing the memory usage.
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>
		//Defining properties for a Popup<br/>  
		var popBasic ={id:"popUp", title:"PopUP", skin:"popSkin",isModal:true, transparencyBehindThePopup:100};<br/>
		var popLayout ={containerWeight:100, padding:[5,5,5,5]};<br/>
		var popPSP ={};<br/>
		
        //Creating the Popup<br/>    
		var popUp=new kony.ui.Popup(popBasic, popLayout, popPSP);<br/>
		
		//destroy method call<br/>
		popUp.destroy();</pre>
		 */
		this.destroy = function ()	{}
	
		/**
		 * This method removes a widget from the popup container. If a new widget is removed will reflect immediately from the popup hierarchy model perspective, however the changes are displayed when the popup appears. 
		 * @param widgetref {Object} Reference of the name of the widget.<b>Mandatory</b>
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>	
		//Defining properties for a Popup.<br/>
		var popBasic ={id:"popUp", title:"PopUP", skin:"popSkin", isModal:true, transparencyBehindThePopup:100};<br/>
		var popLayout ={containerWeight:100,padding:[5,5,5,5]};<br/>
		var popPSP ={};<br/>
		
		//Creating the Popup.<br/>
		var popUp=new kony.ui.Popup(popBasic, popLayout, popPSP);<br/>
		
		//Removing label,button widgets to the popUp.Here label and button widgets should be created and added to the popUp.<br/>
		popUp.remove(lbl,btn);</pre>
		 */
		this.remove = function (/**Object*/widgetref)	{}
	

		/**
		 * This method removes a widget at the given index from the popup container. If a new widget is removed will reflect immediately from the popup hierarchy model perspective, however the changes are displayed when the popup appears. 
		 * @param index {Number} Specifies the index of the popup.<b>Mandatory</b>
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>	
		//Defining properties for a Popup.<br/>
		var popBasic ={id:"popUp", type:constants.POPUP_TYPE_NATIVE,title:"PopUP", skin:"popSkin", isModal:true, transparencyBehindThePopup:100};<br/>
		var popLayout ={containerWeight:100,padding:[5,5,5,5]};<br/>
		var popPSP ={};<br/>
		
		//Creating the Popup.<br/>
		var popUp=new kony.ui.Popup(popBasic, popLayout, popPSP);<br/>
		
		//Removing widget from the popUp at 15th index Position.<br/>
		popUp.removeAt(15);</pre>		 
		 */
		this.removeAt = function (/**Number*/index)	{}
	
	
		/**
		 * This method returns an array of the widget references which are direct children of the popup.
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>	
		//Defining properties for a Popup.<br/>
		var popBasic ={id:"popUp", title:"PopUP", skin:"popSkin", isModal:true, transparencyBehindThePopup:100};<br/>
		var popLayout ={containerWeight:100,padding:[5,5,5,5]};<br/>
		var popPSP ={};<br/>
		
		//Creating the Popup.<br/>
		var popUp=new kony.ui.Popup(popBasic, popLayout, popPSP);<br/>
		
		//Collecting all the widgets of the PopUp into array and displaying the references.<br/>
		wigArr = popUp.widgets();<br/>
		alert("Widgets are::"+wigArr);</pre>		 
		 */
		this.widgets = function ()	{}
	
	
		/**
		 * This method gives you the control to scroll the widget in the popup.
		 * @Available All Platforms 
		 * @access Write
		 * @usage <pre>	
		//Defining properties for a Popup.<br/>
		var popBasic ={id:"popUp", title:"PopUP",skin:"popSkin", isModal:true, transparencyBehindThePopup:100};<br/>
		var popLayout ={containerWeight:100, padding:[5,5,5,5]};<br/>
		var popPSP ={};<br/>
		
		//Creating the Popup.<br/>
		var popUp=new kony.ui.Popup(popBasic, popLayout, popPSP);<br/>
		
		//Scrolling the popUp to the Label lbl.
		popUp.scrollToWidget(lbl);</pre>
		 */
		this.scrollToWidget = function ()	{}
	
	
		/**
		 * This method gives you the control to scroll to the beginning of the popup.
		 * @Available All Platforms except Mobile Web
		 * @access Write
		 * @usage <pre>	
		//Defining properties for a Popup.<br/>
		var popBasic ={id:"popUp", title:"PopUP", skin:"popSkin", isModal:true, transparencyBehindThePopup:100};<br/>
		var popLayout ={containerWeight:100,padding:[5,5,5,5]};<br/>
		var popPSP ={};<br/>
		
		//Creating the Popup.<br/>
		var popUp=new kony.ui.Popup(popBasic, popLayout, popPSP);<br/>
		
		//scrollToBegining method call.<br/>
		popUp.scrollToBegining();</pre>
		 */
		this.scrollToBeginning = function ()	{}
	
		/**
		 * This method gives you the control to scroll to the end of the popup.
		 * @Available All Platforms 
		 * @access Write
		 * @usage <pre>	
		//Defining properties for a Popup.<br/>
		var popBasic ={id:"popUp", title:"PopUP", skin:"popSkin", isModal:true, transparencyBehindThePopup:100};<br/>
		var popLayout ={containerWeight:100,padding:[5,5,5,5]};<br/>
		var popPSP ={};<br/>
		
		//Creating the Popup.<br/>
		var popUp=new kony.ui.Popup(popBasic, popLayout, popPSP);<br/>
		
		//scrollToEnd method call.<br/>
		popUp.scrollToEnd();</pre>		 
		 */
		this.scrollToEnd = function ()	{}
	
	    /**
	     * This method specifies the widget that must be enabled or disabled.
		 * @param enabled{Boolean} Indicates widget whether true or false.<b>Mandatory</b>
		 * @Available All Platforms except on Map widget for SPA platform 
		 * @access Write
		 */
        this.setEnabled = function (/**Boolean*/enabled) {}	
    		
	
	    /**
	     * This method specifies the widget on which there must be focus. 
		 * @param focus{Boolean} Indicates focus is set on a widget.<b>Mandatory</b>
		 * @Available All Platforms 
		 * @access Write
		 */
        this.setFocus = function (/**Boolean*/focus) {}	 
	}	
	
	
	
	//ScrollBox Widget Properties are defined here.
	ui.ScrollBox = 
	/**
	 * Creates a new ScrollBox object
	 * @class kony.ui.ScrollBox
	 * @returns {kony.ui.ScrollBox}
	 */
	function ScrollBox (basicProperties, layoutProperties, platformSpecificProperties){
	
	    //ScrollBox - Basic Properties starts here
		
	 	/**
		 * Defines a string of alpha numeric characters that uniquely identifies a widget within an application.
		 * @property {String}
		 * @Mandatory Yes
		 * @Available All Platforms
		 * @access Read
		 */
		this.id = ""	
		
		/**
		 * Specifies custom JS Object with the key,value pairs that a developer can use to store the context with the widget. 
		 * @property {Object}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.info = {}
		
		/**
		 * Specifies a background skin for ScrollBox widget.
		 * @property {String}
		 * @Available All Platforms except on all Mobile Web platforms.
		 * @access Read and Write
		 */
		this.skin = ""
		
		
		/**
		 * Specifies how you can stack the widgets within the ScrollBox. You can set the orientation of the ScrollBox as horizontal or vertical. 
		 * @property {Number}
		 * @Available All Platforms except on all Mobile Web platforms
		 * @access Read 
		 */
		this.orientation = 0	
		
		/**
		 * Specifies the visibility of the widget. 
		 * @property {Boolean}
		 * @Available All Platforms except on all Mobile Web platforms.
		 * @access Read and Write
		 */
		this.isVisible = true
		
		/**
		 * Specifies the accessiblity configuration property for the widget.
		 * @property {Object}
		 * @Available iPhone, Android, SPA-iPhone, and SPA-Android Platforms
		 * @access Read and Write
		 * @usage <pre>
		 * accessibilityConfig =  {
				"a11yHidden": false,
				"a11yValue": "Your text goes here",
				"a11yLabel": "Your text goes here",
				"a11yHint": "Your text goes here"
			},
		*/
		this.accessibilityConfig = {}
		
		
		/**
		 * Property to set i18n key for "pull to refresh" title. Platform gets the value from the current application locale specific i18n resource bundle. This property is available only when the orientation is vertical.
		 * @property {String}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.pullToRefreshI18NKey = ""
		
		
		/**
		 * Property to set i18n key for "release to refresh" title that comes for pull to refresh. Platform gets the value from the current applications locale specific i18n resource bundle. This property is available only when the orientation is vertical.
		 * @property {String}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.releaseToPullRefreshI18NKey = ""
		
		
		/**
		 * Property to set i18n key for "push to refresh" title. Platform gets the value from the current application locale specific i18n resource bundle. This property is available only when the orientation is vertical.
		 * @property {String}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.pushToRefreshI18NKey = ""	
		
		
		/**
		 * Property to set i18n key for "release to refresh" title that comes for push to refresh. Platform gets the value from the current applications locale specific i18n resource bundle. This property is available only when the orientation is vertical.
		 * @property {String}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.pushToRefreshI18NKey = ""
		
		
		/**
		 * Property to set a skin to the pull to refresh title. 
		 * @property {String}
		 * @Available iOS and Android Platforms
		 * @access Read and Write
		 */
		this.pullToRefreshSkin = ""
		
		/**
		 * Property to set a skin to the push to refresh title. 
		 * @property {String}
		 * @Available iOS and Android Platforms
		 * @access Read and Write
		 */
		this.pushToRefreshSkin = ""
		
		
		
		//ScrollBox - Layout Configuration Properties Starts here
		
		/**
		 * Specifies the space between the content of the widget and the widget boundaries.
		 * @property {Array}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.padding = []	
		
		
		/**
		 * Specifies the space around a widget.
		 * @property {Array}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.margin = []
		
		/**
		 * Specifies percentage of width to be allocated by its parent widget widget. The parent widget space is distributed to its child widgets based on this weight factor. All its child widgets should sum up to 100% of weight except when placed in kony.ui.ScrollBox.
		 * @property {Number}
		 * @Available All Platforms except on all Mobile Web platforms.
		 * @access Read and Write
		 */
		this.containerWeight = 0		
		
		/**
		 * Specifies the available height of the container in terms of percentage. The percentage is with reference to the value of containerHeightReference property.
		 * @property {Number}
		 * @Available All Platforms except on all Mobile Web platforms.
		 * @access Read and Write
		 */
		this.containerHeight = 0
		
		/**
		 * This property is enabled when you set the containerHeight. 
		 * @property {Number}
		 * @Available All Platforms except on all Mobile Web platforms.
		 * @access Read and Write
		 */
		this.containerHeightReference = 0		
	
	    //ScrollBox - Platform Specific Properties Starts here

		/**
		 * Shows the list of actions (appropriate to the widget in focus) as menu items.
		 * @property {Object}
		 * @Available Android, Android Tablet,BlackBerry
		 * @access Read and Write
		 */
		this.contextMenu = {}
		
		/**
		 * Specifies whether the scroll view bounces  past the edge of the content and back again.
		 * @property {Boolean}
		 * @Available Available on iOS only
		 * @access Read and Write
		 */
		this.bounces = true		
		
		/**
		 * Specifies the layout changes that occur due to the animations applied/removed on other widgets. 
		 * @property {Object}
		 * @Available iOS and Android Platforms
		 * @access Read and Write
		 */
		this.layoutAnimConfig = {}
		
		
		//ScrollBox - Events Starts here
		
		/**
		 * Specifies the scrolling events which gets called when scrolling reaches beginning of the widget, end of the widget, when the user tries to pull or push the scrolling beyond the vertical boundaries of the widget.
		 * @property {Object}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.scrollingEvents = new Event ()
		
	
	    //ScrollBox - Widget Methods Starts here.
		
		/**
		 * This method is used to add widgets to the ScrollBox.When the widgets are added to the current visible ScrollBox , then the changes will reflect immediately.
		 * @param widgets{Object}Comma separated list of widgets.<b>Mandatory</b>
		 * @Available All Platforms except on all Mobile Web platforms.
		 * @access Write
		 * @usage <pre>
		//Defining properties for a ScrollBox.<br/>
		var scrollBasic = {id :"scrollBox", skin:"scrlSkin", isVisible:true, orientation:constants.BOX_LAYOUT_HORIZONTAL};<br/>
		var scrollLayout = {padding:[2,2,2,2], containerWeight:100, margin:[5,5,5,5], containerHeight:100, percent:true};<br/>
		var scrollPSP  = {};<br/>
		
		//Creating the ScrollBox.
        var scrollBox = new kony.ui.ScrollBox(scrollBasic, scrollLayout, scrollPSP);<br/>
		
		//Adding label and button widgets to the scrollBox. Here label and button widgets should be created already and made accessible.<br/>
		scrollBox.addAt(lbl,btn);</pre>
		 */
		this.add = function (/**Object*/widgets) {}
	
		/**
		 * This method is used to add widgets to the scrollbox container at the specified index. Widget is prepended if index<0 and appended at the end of the container if index >size+1. 
		 * @param widgetref{Object} Reference of the widget that need to be added to the box.<b>Mandatory</b>
		 * @param index {Number} Index number at which the widget is to be added.<b>Mandatory</b>
		 * @Available All Platforms except on all Mobile Web platforms.
		 * @access Write
		 * @usage <pre> 
		//Defining properties for a ScrollBox.<br/>
		var scrollBasic = {id :"scrollBox", skin:"scrlSkin", isVisible:true, orientation:constants.BOX_LAYOUT_HORIZONTAL};<br/>
		var scrollLayout   = {padding:[2,2,2,2], containerWeight:100, margin:[5,5,5,5], containerHeight:100, percent:true};<br/>
		var scrollPSP  = {};<br/>
		
		//Creating the ScrollBox.<br/>
        var scrollBox = new kony.ui.ScrollBox(scrollBasic, scrollLayout, scrollPSP);<br/>
		
		//Adding label to the scrollBox at 15th index Position. Here label should be created already and made accessible.<br/>
		scrollBox.addAt(lbl,15);</pre>
		 */
		this.addAt = function (/**Object*/widgetref,/**Number*/index)	{}
	
		/**
		 * This method removes a widget from the ScrollBox container. 
		 * @param widgetref {Object} Reference of the name of the widget.<b>Mandatory</b>
		 * @return The current Form handle is returned.
		 * @Available All Platforms except on all Mobile Web platforms.
		 * @access Write
		 * @usage <pre>	
		//Defining properties for a ScrollBox.<br/>
		var scrollBasic = {id :"scrollBox",skin:"scrlSkin", isVisible:true, orientation:constants.BOX_LAYOUT_HORIZONTAL};<br/>
		var scrollLayout   = {padding:[2,2,2,2], containerWeight:100,margin:[5,5,5,5], containerHeight:100, percent:true};<br/>
		var scrollPSP  = {};<br/>
		
		//Creating the ScrollBox.<br/>
		var scrollBox = new kony.ui.ScrollBox(scrollBasic, scrollLayout, scrollPSP);<br/>
		
		//Removing label widget from the scrollBox .Here label should be created already and added inside the scrollBox.
		scrollBox.remove(lbl);</pre>
		 */
		this.remove = function (/**Object*/widgetref)	{}
	

		/**
		 * This method removes a widget at the given index from the scrollbox container. If a new widget is removed will reflect immediately from the scrollbox hierarchy model perspective.
		 * @param index {Number}Index number of the widget to be removed.<b>Mandatory</b>
		 * @returns Reference of the removed widget
		 * @Available All Platforms except on all Mobile Web platforms.
		 * @access Write
		 * @usage <pre>	
		//Defining properties for a ScrollBox.<br/>
		var scrollBasic = {id :"scrollBox", skin:"scrlSkin", isVisible:true, orientation:constants.BOX_LAYOUT_HORIZONTAL};<br/>
		var scrollLayout = {padding:[2,2,2,2], containerWeight:100,margin:[5,5,5,5], containerHeight:100, percent:true};<br/>
		var scrollPSP = {};<br/>

		//Creating the ScrollBox.<br/>
		var scrollBox = new kony.ui.ScrollBox(scrollBasic, scrollLayout, scrollPSP);<br/>

		//Removing label from the scrollBox at 15th index Position. Here the label should be created and added at 15th index position of the scrollBox.<br/>
		scrollBox.removeAt(lbl,15);</pre>		 
		 */
		this.removeAt = function (/**Number*/index)	{}
	
		/**
		 * This method returns an array of the widget references which are direct children of ScrollBox.
		 * @return This method returns Read only array of widget references. Modifying the array and changing the position of widgets in this array doesn't reflect in the ScrollBox hierarchy.
		 * @Available All Platforms except on all Mobile Web platforms.
		 * @access Write
		 * @usage <pre>	
		//Defining properties for a ScrollBox.
		var scrollBasic = {id :"scrollBox", skin:"scrlSkin", isVisible:true, orientation:constants.BOX_LAYOUT_HORIZONTAL};<br/>
		var scrollLayout = {padding:[2,2,2,2], containerWeight:100,margin:[5,5,5,5], containerHeight:100, percent:true};<br/>
		var scrollPSP = {};<br/>

		//Creating the ScrollBox.<br/>
		var scrollBox = new kony.ui.ScrollBox(scrollBasic, scrollLayout, scrollPSP);<br/>
		
		//Collecting all the widgets of the scrollBox into array and displaying the references.<br/>
		wigArr = scrollBox.widgets();<br/>
		alert("Widgets are::"+wigArr);</pre>
		 */
		this.widgets = function ()	{}
	
	
			/**
		 * This method gives you the control to scroll the ScrollBox up to the position of selected widget.
		 * @Available iOS
		 * @access Write
		 * @usage <pre>	
		//Defining properties for a ScrollBox.
		var scrollBasic = {id :"scrollBox", skin:"scrlSkin", isVisible:true, orientation:constants.BOX_LAYOUT_HORIZONTAL};<br/>
		var scrollLayout = {padding:[2,2,2,2], containerWeight:100,margin:[5,5,5,5], containerHeight:100, percent:true};<br/>
		var scrollPSP = {};<br/>

		//Creating the ScrollBox.<br/>
		var scrollBox = new kony.ui.ScrollBox(scrollBasic, scrollLayout, scrollPSP);<br/>
		
		//Method to scroll the ScrollBox upto label.<br/>
		scrollBox.scrollToWidget(labelForOk);</pre>
		 */
		this.scrollToWidget = function ()	{}
	
	
		/**
		 * This method gives you the control to scroll to the beginning of the ScrollBox.
		 * @Available iOS, Android, SPA
		 * @access Write
		 * @usage <pre>	
		//Defining properties for a ScrollBox.
		var scrollBasic = {id :"scrollBox", skin:"scrlSkin", isVisible:true, orientation:constants.BOX_LAYOUT_HORIZONTAL};<br/>
		var scrollLayout = {padding:[2,2,2,2], containerWeight:100,margin:[5,5,5,5], containerHeight:100, percent:true};<br/>
		var scrollPSP = {};<br/>

		//Creating the ScrollBox.<br/>
		var scrollBox = new kony.ui.ScrollBox(scrollBasic, scrollLayout, scrollPSP);<br/>
		
		//Method to scroll to the beginning of the ScrollBox.<br/>
		scrollBox.scrollToBeginning(labelForOk);</pre>
		 */
		this.scrollToBeginning = function ()	{}
	
		/**
		 * This method gives you the control to scroll to the end of the ScrollBox.
		 * @Available iOS, Android, SPA
		 * @access Write
		 * @usage <pre>	
		//Defining properties for a ScrollBox.
		var scrollBasic = {id :"scrollBox", skin:"scrlSkin", isVisible:true, orientation:constants.BOX_LAYOUT_HORIZONTAL};<br/>
		var scrollLayout = {padding:[2,2,2,2], containerWeight:100,margin:[5,5,5,5], containerHeight:100, percent:true};<br/>
		var scrollPSP = {};<br/>

		//Creating the ScrollBox.<br/>
		var scrollBox = new kony.ui.ScrollBox(scrollBasic, scrollLayout, scrollPSP);<br/>
		
		//Method to scroll to the end of the ScrollBox.<br/>
		scrollBox.scrollToEnd(labelForOk);</pre>
		 */
		this.scrollToEnd = function ()	{}
	
	
	
	
	    /**
	     * This method specifies the widget that must be enabled or disabled.
		 * @param enabled{Boolean} Indicates widget whether true or false.<b>Mandatory</b>
		 * @Available All Platforms except on Map widget for SPA platform 
		 * @access Write
		 */
        this.setEnabled = function (/**Boolean*/enabled) {}	
    	
	
	    /**
	     * This method specifies the widget on which there must be focus. 
		 * @param focus{Boolean} Indicates focus is set on a widget.<b>Mandatory</b>
		 * @Available All Platforms 
		 * @access Write
		 */
        this.setFocus = function (/**Boolean*/focus) {}	 
		
		
		/**
	     * Specifies the method to set the visibility of the widget.
		 * @param visible{Boolean} Indicates visibility on a widget.<b>Mandatory</b>
		 * @Available All Platforms except on all Mobile Web platforms
		 * @access Write
		 */
		this.setVisibility = function (/**Boolean*/visible) {}	
	
	    /**
	     * This method allows you to set a gesture recognizer for a specified gesture for a specified widget. 
		 * @param gestureType{Number} Indicates the type of gesture that needs to be detected on the widget.<b>Mandatory</b>
		 * @param setupParams {Array}Specifies an object that has the configuration parameters needed to setup a gesture recognizer.<b>Mandatory</b>
		 * @param gestureHandler{Function} Specifies the function that needs to be executed when a gesture is recognized.<b>Mandatory</b>
		 * @Available ios,Android,BlackBerry,Windows phone/Windows Kiosk,J2ME,SPA 
		 * @access Write
		 * @usage <pre>
	    //The below function will get invoked  when a gesture is recognized.
        function myTap(myWidget,gestureInfo)<br/>
       {
		alert(" Tap Gesture detected");
		alert("gestureType :"+gestureInfo.gestureType);
		alert("gesturePosition :"+gestureInfo.gesturePosition);
		//write any further logic here
	    } <br/>

		//Setting Gesture configuration.<br/>
		local setupTblTap = {fingers:1,taps:2};//double tap gesture<br/>

		//To add a TAP gesture recognizer on a hbox with ID hbx1 placed on a form frm1<br/>
		var tapGesture=frm1.hbx1.setGgestureRecognizer(1,setupTblTap,myTap);</pre>
		 */
		this.setGestureRecognizer = function (/**Number*/gestureType,/**Array*/setupParams,/**Function*/gestureHandler) {}

		/**
	     * This method allows you to remove a specified gesture recognizer for a specified widget. 
		 * @param uniqueIdentifier{Widgetref} Indicates the type of gesture added to the form.<b>Mandatory</b>
		 * @Available iPhone,iPad,Android,BlackBerry,Windows phone,SPA 
		 * @access Write
		 * @usage <pre>
		//The below function will get invoked when a gesture is recognized.<br/>
		function myTap(myWidget,gestureInfo)<br/>
	    {
		alert(" Tap Gesture detected");
		alert("gestureType :"+gestureInfo.gestureType);
		alert("gesturePosition :"+gestureInfo.gesturePosition);
		//write any further logic here
		}<br/>

		//Setting Gesture configuration.<br/>
		local setupTblTap = {fingers:1,taps:2};//double tap gesture<br/>

		//To add a TAP gesture recognizer on a hbox with ID hbx1 placed on a form frm1<br/>
		var tapGesture=frm1.hbx1.setGestureRecognizer(1,setupTblTap,myTap)<br/>

		//To remove the TAP gesture recognizer on a hbox with ID hbx1 placed on a form frm1<br/>
		frm1.hbx1.removeGestureRecognizer(tapGesture);</pre>
		 */
		this.removeGestureRecognizer = function (/**Widgetref*/uniqueIdentifier) {}
	}
	
	
	//SegmentedUI2 Widget are defined here
	ui.SegmentedUI2 = 
	/**
	 * Creates a new SegmentedUI2 object
	 * @class kony.ui.SegmentedUI2
	 * @returns {kony.ui.SegmentedUI2}
	 */
	function SegmentedUI2(basicProperties, layoutProperties, platformSpecificProperties){
	
	    //SegmentedUI2 - Basic Properties Starts here
		
	 	/**
		 * Defines a string of alpha numeric characters that uniquely identifies a widget within an application.
		 * @property {String}
		 * @Mandatory Yes
		 * @Available All Platforms 
		 * @access Read
		 */
		this.id = ""	
		
		/**
		 * Specifies custom JS Object with the key,value pairs that a developer can use to store the context with the widget. 
		 * @property {Object}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.info = {}	
		
		/**
		 * Specifies the skin to be applied to the entire SegmentedUI.
		 * @property {String}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.widgetSkin = ""	
		
		/**
		 * Specifies the Skin that must be applied for each row.
		 * @property {String}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.rowSkin = ""	
		
		/**
		 * Specifies the skin that must be applied when user selects the row.
		 * @property {String}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.rowFocusSkin = ""	
		
		/**
		 * Specifies the skin that is applied to every alternate even numbered row in the segment.
		 * @property {String}
		 * @Available All Platforms except Windows Phone/Windows Kiosk.
		 * @access Read and Write
		 */
		this.alternateRowSkin = ""
		
		/**
		 * Specifies the Skin to be applied to the Section Header.
		 * @property {String}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.sectionHeaderSkin = ""
		
		/**
		 * Specifies the mapping information between the widget id's and the keys in the data.
		 * @property {Object}
		 * @Available All Platforms except Mobile Web (basic).
		 * @access Read and Write
		 */
		this.widgetDataMap = {}		 
		
		/**
		 * Specifies the skin to be applied to the entire SegmentedUI.
		 * @property {String}
		 * @Available All Platforms 
		 * @access Read and Write
		 */
		this.widgetSkin = {}		 
		
		
		/**
		 * Indicates the common template to be used for each row while creating the row and filling the data. This can be overridden at the row level when setting the data using the template key.
		 * @property {kony.ui.Box}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.rowTemplate = {}
		
		/**
		 * Indicates the common template to be used for each section while creating the section header and filling the data.
		 * @property {kony.ui.Box}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.sectionHeaderTemplate = {}
		
		/**
		 * Specifies the set of values that must be displayed on each row of the segment. The data is categorized into Sections and Rows.
		 * @property {Array}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.data = []
		
		/**
		 * Specifies the Separator thickness in pixels.
		 * @property {Number}
		 * @Available All Platforms except iPhone and iPad.
		 * @access Read and Write
		 */
		this.separatorThickness = 0 
		
		/**
		 * Specifies the color of the separator between row of segmentedUI. The color property follows hex format (#RRGGBB) which includes even transparency portion.
		 * @property {String}
		 * @Available All Platforms except Symbian.
		 * @access Read and Write
		 */
		this.separatorColor = ""  

		/**
		 * You can use this property to select the view type of a segment.
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.viewType = 0	
		
		/**
		 * This property controls the visibility of a widget on the form.
		 * @property {Boolean}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.isVisible = true 
		
		/**
		 * Specifies if the segment should retain the selection made even when the user navigates out of the form and revisits the form.
		 * @property {Boolean}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.retainSelection = true	  
		
		/**
		 * A Page Indicator is a succession of docs centered below the SegmentedUI2 widget. Each dot corresponds to a row segment with the white dot indicating the currently viewed page.
		 * @property {Boolean}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.needPageIndicator = true  
		
		/**
		 * Specifies the image to indicate that the page is currently being viewed. This property is available only when the viewType is selected as pageview.
		 * @property {String}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.pageOnDotImage = ""	 

		/**
		 * Specifies the image to indicate that the pages that are not been currently viewed. This property is available only when the viewType is selected as pageview.
		 * @property {String}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.pageOffDotImage = ""	
		
		
		/**
		 * Specifies if the segment can support single or multiple selection.
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.selectionBehavior = 1

		/**
		 * This property is enabled if you select either singleselect or multiselect. It specifies the Image widget ID which is used to indicate to the user that the row is selected or deselected.
		 * @property {Object}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.selectionBehaviorConfig = {}
		
		/**
		 * Indicates the currently selected row in the SegmentedUI.
		 * @property {Array}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.selectedIndex = []		
		
		/**
		 * Returns the data in the selected row of the segmentedUI.
		 * @property {Array}
		 * @Available All Platforms
		 * @access Read 
		 */
		this.selectedItems = []
		
		/**
		 * Specifies an array of indexes which indicates the selected rows. In case of MULTI_SELECT there can be more than one selected index and the array represents the same.
		 * @property {Array}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.selectedIndices = []
		
		/**
		 * Specifies the view configuration properties such as projectionAngle, rowItemRotationAngle, spaceBetweenRowItems, rowItemWidth, and isCircular as applicable when the viewType is set as SEGUI_VIEW_TYPE_COVERFLOW.
		 * @property {Object}
		 * @Available Available on Android and Android Tablet only.
		 * @access Read and Write
		 */
		this.viewConfig = {}
		

		/**
		 * Property to set i18n key for "pull to refresh" title. Platform gets the value from the current application locale specific i18n resource bundle. This property is available only when the viewType is selected as tableview.
		 * @property {String}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.pullToRefreshI18NKey = ""
		
		
		/**
		 * Property to set i18n key for "release to refresh" title that comes for pull to refresh. Platform gets the value from the current applications locale specific i18n resource bundle. This property is available only when the viewType is selected as tableview.
		 * @property {String}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.releaseToPullRefreshI18NKey = ""
		
		
		/**
		 * Property to set i18n key for "push to refresh" title. Platform gets the value from the current application locale specific i18n resource bundle. This property is available only when the viewType is selected as tableview.
		 * @property {String}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.pushToRefreshI18NKey = ""	
		
		
		/**
		 * Property to set i18n key for "release to refresh" title that comes for push to refresh. Platform gets the value from the current applications locale specific i18n resource bundle. This property is available only when the viewType is selected as tableview.
		 * @property {String}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.pushToRefreshI18NKey = ""
		
		
		/**
		 * Property to set a skin to the pull to refresh title. This property is available only when the viewType is selected as tableview and screenLevelWidget is true.
		 * @property {String}
		 * @Available iOS and Android Platforms
		 * @access Read and Write
		 */
		this.pullToRefreshSkin = ""
		
		/**
		 * Property to set a skin to the push to refresh title. This property is available only when the viewType is selected as tableview and screenLevelWidget is true.
		 * @property {String}
		 * @Available iOS and Android Platforms
		 * @access Read and Write
		 */
		this.pushToRefreshSkin = ""
		
		
		//SegmentedUI2 - Layout Configuration Properties Starts here
		

		/**
		 * Specifies the height of the SegmentedUI in terms of percentage. The percentage is with reference to the value of containerHeightReference property. This property is applicable only when the viewType is set as SEGUI_VIEW_TYPE_COVERFLOW or SEGUI_VIEW_TYPE_PAGEVIEW.
		 * @property {Number}
		 * @Available Available on Android/Android Tablet platform.
		 * @access Read and Write
		 */
		this.containerHeight = 1

		/**
		 * Specifies the reference for the height of the container based on option that you set for containerHeight. The container height percentage is calculated based on eigher SEGUI_HEIGHT_BY_FORM_REFERENCE or SEGUI_HEIGHT_BY_PARENT_WIDTH.
		 * @property {Number}
		 * @Available Available on Android/Android Tablet platform.
		 * @access Read and Write
		 */
		this.containerHeightReference = 1

		/**
		 * The percentage of width to be allocated by its parent widget.The parent's widget space is distributed to its child widgets based on this weight factor. All its child widgets should sum up to 100% of weight except when placed in kony.ui.ScrollBox.
		 * @property {Number}
		 * @Available All Platforms except Win Mobile 6x.
		 * @access Read and Write
		 */
		this.containerWeight = 1
		
		/**
         * specifies the space between the content of the widget and the widget boundaries.
         * @property {Array}
         * @Available All Platforms except Mobile Web (basic).
         * @access Read and Write
         */
        this.padding = []

		/**
         * Specifies the space around a widget.
         * @property {Array}
         * @Available All Platforms except Mobile Web (basic) and Win Mobile6x.
         * @access Read and Write
         */
        this.margin = []
		
		
		//SegmentedUI2 - Platform Specific Properties Starts here

		
		/**
		 * Specifies the skin that must be used to block the interface until the action in progress (for example, a service call) is completed.
		 * @property {String}
		 * @Available MobileWeb(Advanced),SPA(iPhone/Android/BlackBerry/Windows NTH)/Playbook
		 * @access Read and Write
		 */
		this.blockedUISkin = ""
		
		/**
		 * Specifies the skin to indicate that the row of the Segui is pressed or clicked.
		 * @property {String}
		 * @Available Android/Android Tablet
		 * @access Read and Write
		 */
		this.pressedSkin = ""
		
		/**
		 * Specifies the border to the SegmentedUI.
		 * @property {Number}
		 * @Available Mobile Web(Basic),Mobile Web(BJS),Mobile Web(Advanced),SPA
		 * @access Read and Write
		 */
		this.border = 1		
		
		/**
		 * Specifies if the first clickable element (Image or Label) of the segment is selected by default.
		 * @property {Boolean}
		 * @Available Mobile Web(Basic),Mobile Web(BJS)
		 * @access Read and Write
		 */
		this.defaultSelection = true

		/**
		 * Indicates the identifier of the widget placed inside the row of the SegmentedUI. Search will be performed against the content present inside the widget.
		 * @property {String}
		 * @Available iPhone,iPad
		 * @access Read and Write
		 */
		this.searchBy = ""

		/**
		 * Specifies the search criteria to be applied when searching has been enabled on the SegmentedUI.
		 * @property {Number}
		 * @Available iPhone,iPad
		 * @access Read and Write
		 */
		this.searchCriteria = 1
		
		/**
		 * Specifies the editing style to be applied to the rows in the SegmentedUI.
		 * @property {Number}
		 * @Available iPhone,iPad
		 * @access Read and Write
		 */
		this.editStyle = 1		
		
		/**
		 * A context menu is a menu that appears upon clicking a widget. A context menu typically offers a limited set of choices that are applicable for that widget.
		 * @property {Array}
		 * @Available Android/Android Tablet,BlackBerry,Windows Phone/Windows Kiosk
		 * @access Read and Write
		 */
		this.contextMenu = []
		
		/**
		 * The docking header property enables you to dock or place the section header at the top of the segment while scrolling the section content.
		 * @property {Boolean}
		 * @Available Android/Android Tablet
		 * @access Read and Write
		 */
		this.dockSectionHeaders = true
		
		/**
		 * Specifies the layout changes that occur due to the animations applied/removed on other widgets. 
		 * @property {Object}
		 * @Available iOS and Android Platforms
		 * @access Read and Write
		 */
		this.layoutAnimConfig = {}
		
		
		
		//SegmentedUI2 - Events starts here
		
		/**
		 * This event is triggered when a user indicates his desire to edit the row (delete or insert). This event is only triggered if the eidtStyle is set to SEGUI_EDITING_STYLE_ICON or SEGUI_EDITING_STYLE_SWIPE. 
		 * @property {Event}
		 * @Available iPhone,iPad
		 * @access Read and Write
		 */
		this.onEditing = new Event() 	
		
		/**
		 * This event is triggered when you swipe a row in a segment.
		 * @property {Event}
		 * @Available All Platforms except BlackBerry, Mobile Web (basic), and Mobile Web (BJS) platforms.
		 * @access Read and Write
		 */
		this.onSwipe = new Event() 
		
		/**
		 * This event is triggered when the user click any row of the SegmentedUI. This event is not raised if the clickable property in the metainfo is set to false.
		 * @property {Event}
		 * @Available All Platforms except Mobile Web (basic).
		 * @access Read and Write
		 */
		this.onRowClick = new Event() 
		
		/**
		 * An event callback that is invoked by the platform when scrolling the SegmentedUI widget. 
		 * @property {Object}
		 * @Available All Platforms except BlackBerry and Mobile Web platforms.
		 * @access Read and Write
		 */
		this.scrollingEvents = new Event ()
		
	    
	    /**
		 * This event allows the developer to execute custom javascript function before the onClick callback of the widget is invoked. This is applicable only for Mobile Web channel. The function must exist in a javascript file under project>module>js folder. 
		 * @property {Event}
		 * @Available Mobile Web (Advanced)
		 * @access Read and Write
		 */
		this.preOnClickJS = new Event ()
		
	
	    /**
		 * This event allows the developer to execute custom javascript function after the onClick callback of the widget is invoked. This is applicable only for Mobile Web channel.The function must exist in a javascript file under project>module>js folder. 
		 * @property {Event}
		 * @Available Mobile Web (Advanced)
		 * @access Read and Write
		 */
		this.postOnClickJS = new Event ()
		
		
	
	    //SegmentedUI2 - Methods Starts here
	
	    /**
		 * This method allows you to add new data to the segment. The new data is appended to the existing data.
		 * @param data{Array} Specifies the array to represent data as key value pairs.<b>Mandatory</b>
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>
		//Defining the properties for a Segment.<br/>
		var segBasic ={id:"segId",isVisible:true,widgetSkin:"widSkin",rowSkin:"rowSkn", rowFocusSkin:"rowFSkn", alternateRowSkin:"altSkin",sectionHeaderSkin:"secHSkin", widgetDataMap:{widgetId1:"dataid1", widgetId2:"dataId2", widgetId3:"dataId3", widgetId4:"secDataId1", widgetId5:"secDataId2" }, rowTemplate:box1}, selectedIndex:4, selectedIndicies:[4,5], viewType:constants.SEGUI_VIEW_TYPE_PAGEVIEW, onSwipe:onSwipeCallBck};allows you to add new data to the segment.<br/>
		var segLayout ={padding:[5,5,5,5],margin:[5,5,5,5],containerWeight:100};<br/>
		var segPSP ={onEditing:onEditingCallBck};<br/>
	
		//Creating the Segment<br/>
		var segment = new kony.ui.SegmentedUI2(segBasic, segLayout, segPSP);<br/>

        //addAll method call.<br/>
		segment.addAll([ {dataId1:"data1", dataId2:"data2", dataId3:"data3"}, {dataId1:"datax", dataId2:"datay" dataId3:"dataz", template:box1}]);</pre>
		 */
		this.addAll = function (/**Array*/data)	{}
	    
		/**
		 * This method allows you to add one row of data at a given index or with in a section. The new data is placed before the index. The existing data is pushed to the next row.
		 * @param data{Object} Specifies the JSObject to represent data as key value pairs.<b>Mandatory</b>
		 * @param rowIndex {Number} Specifies the Index of the row within the section if the sectionIndex is mentioned.<b>Mandatory</b>
		 * @param sectionIndex{Number}Specifies the Index of the section. If the index is not mentioned, the rowIndex will be treated in absolute terms.
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>
	    //Defining the properties for a Segment. 
	    var segBasic ={id:"segId",isVisible:true,widgetSkin:"widSkin",rowSkin:"rowSkn",rowFocusSkin:"rowFSkn",alternateRowSkin:"altSkin",sectionHeaderSkin:"secHSkin", widgetDataMap:{widgetId1:"dataid1", widgetId2:"dataId2", widgetId3:"dataId3" ,widgetId4:"secDataId1" ,widgetId5:"secDataId2" },rowTemplate:box1}, selectedIndex:4, selectedIndicies:[4,5], viewType:constants.SEGUI_VIEW_TYPE_PAGEVIEW,onSwipe:onSwipeCallBck};<br/>
        var segLayout ={padding:[5,5,5,5],margin:[5,5,5,5],containerWeight:100};<br/> 
		var segPSP ={onEditing:onEditingCallBck};<br/>
		
		//Creating the Segment.<br/>
		var segment = new kony.ui.SegmentedUI2(segBasic, segLayout, segPSP);<br/>
		
		//Defining a row<br/>
		dataObj1 = {globaDdataId1:"label1", globaDataId2:"label2", globalDataId3:"label3"};<br/>

        //addAt method call ,adding the above row at 15th index position.<br/>
		segment.addDataAt(dataObj1,15);</pre>
		 */
		this.addDataAt = function (/**Object*/data,/**Number*/rowIndex,/**Number*/sectionIndex)	{}
		
		/**
		 * This method allows you to add one or more sections with rows to the segment.
		 * @param data{Array} Specifies the array to represent data as key value pairs.<b>Mandatory</b>
		 * @param sectionIndex {Number} Specifies the Index of the section.
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>
        //Defining the properties for a Segment.<br/> 
        var segBasic ={id:"segId",isVisible:true,widgetSkin:"widSkin",rowSkin:"rowSkn", rowFocusSkin:"rowFSkn", alternateRowSkin:"altSkin", sectionHeaderSkin:"secHSkin", widgetDataMap:{widgetId1:"dataid1", widgetId2:"dataId2", widgetId3:"dataId3", widgetId4:"secDataId1", widgetId5:"secDataId2" },rowTemplate:box1}, selectedIndex:4, selectedIndicies:[4,5], viewType:constants.SEGUI_VIEW_TYPE_PAGEVIEW, onSwipe:onSwipeCallBck};<br/> 
		var segLayout ={padding:[5,5,5,5],margin:[5,5,5,5],containerWeight:100};<br/> 
		var segPSP ={onEditing:onEditingCallBck};<br/> 
		
		//Creating the Segment.<br/> 
		var segment = new kony.ui.SegmentedUI2(segBasic, segLayout, segPSP);<br/> 
		
		//Defining section data.<br/> 
		data =[ [ "section1", [ {dataId1:"aaa"},{dataId1:"bbb"} ]],[ "section2", [{dataId1:"ccc"},  {dataId1:"ddd"} ] ]];<br/>
		
		//addSectionAt method call.<br/>
		segment.addSectionAt(data,2);</pre>
		 */
		this.addSectionAt = function (/**Array*/data,/**Number*/sectionIndex)	{}

        /**
		 * This method is used to remove all the existing rows and sections in a segment.
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>
		//Defining the properties for a Segment.<br/>
        var segBasic ={id:"segId",isVisible:true,widgetSkin:"widSkin",rowSkin:"rowSkn", rowFocusSkin:"rowFSkn", alternateRowSkin:"altSkin",sectionHeaderSkin:"secHSkin", widgetDataMap:{widgetId1:"dataid1", widgetId2:"dataId2", widgetId3:"dataId3" ,widgetId4:"secDataId1" ,widgetId5:"secDataId2" },rowTemplate:box1}, selectedIndex:4, selectedIndicies:[4,5], viewType:constants.SEGUI_VIEW_TYPE_PAGEVIEW,onSwipe:onSwipeCallBck};<br/>
        var segLayout ={padding:[5,5,5,5],margin:[5,5,5,5],containerWeight:100};<br/>
		var segPSP ={onEditing:onEditingCallBck};<br/>
		
		//Creating the Segment.<br/>
		var segment = new kony.ui.SegmentedUI2(segBasic, segLayout, segPSP);<br/>
		
		//removeAll method call.
		segment.removeAll();</pre>
         */
		this.removeAll = function ()	{}
  
        /**
		 * This method is used to remove the row at the given index or a row with in a section.
		 * @param rowIndex{Number} Specifies the Index of the row within the section if the sectionIndex is mentioned.<b>Mandatory</b>
		 * @param sectionIndex {Number} Specifies the Index of the section.
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>
       	//Defining the properties for a Segment.<br/>
		var segBasic ={id:"segId",isVisible:true,widgetSkin:"widSkin",rowSkin:"rowSkn", rowFocusSkin:"rowFSkn", alternateRowSkin:"altSkin",sectionHeaderSkin:"secHSkin", widgetDataMap:{widgetId1:"dataid1", widgetId2:"dataId2", widgetId3:"dataId3" ,widgetId4:"secDataId1" ,widgetId5:"secDataId2" }, rowTemplate:box1}, selectedIndex:4, selectedIndicies:[4,5], viewType:constants.SEGUI_VIEW_TYPE_PAGEVIEW,onSwipe:onSwipeCallBck};<br/>
		var segLayout ={padding:[5,5,5,5],margin:[5,5,5,5],containerWeight:100};<br/>
		var segPSP ={onEditing:onEditingCallBck};<br/>
		
		//Creating the Segment<br/>
		var segment = new kony.ui.SegmentedUI2(segBasic, segLayout, segPSP);<br/>
		
		//removeAt method call,removing the row at 15th index position.
		segment.removeAt(15);</pre>
         */
		this.removeAt = function (/**Number*/rowIndex,/**Number*/sectionIndex)	{}
        
		
		/**
		 * This method allows you to remove a section at the given index within a segment.
		 * @param sectionIndex {Number} Specifies the Index of the section.<b>Mandatory</b>
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>
		//Defining the properties for a Segment.<br/> 
		var segBasic ={id:"segId",isVisible:true,widgetSkin:"widSkin",rowSkin:"rowSkn", rowFocusSkin:"rowFSkn", alternateRowSkin:"altSkin", sectionHeaderSkin:"secHSkin", widgetDataMap:{widgetId1:"dataid1", widgetId2:"dataId2", widgetId3:"dataId3", widgetId4:"secDataId1", widgetId5:"secDataId2" }, rowTemplate:box1}, selectedIndex:4, selectedIndicies:[4,5], viewType:constants.SEGUI_VIEW _TYPE_PAGEVIEW, onSwipe:onSwipeCallBck};<br/> 
		
		var segLayout ={padding:[5,5,5,5], margin:[5,5,5,5], containerWeight:100};<br/> 
		var segPSP ={onEditing:onEditingCallBck};<br/>

		//Creating the Segment.<br/>
		var segment = new kony.ui.SegmentedUI2(segBasic, segLayout, segPSP);<br/>

		//removeSectionAt method call.<br/>
		segment.removeSectionAt(2);</pre>
		 */
		this.removeSectionAt = function (/**Number*/sectionIndex)	{}
		
		/**
		 * This method allows you to set new data to the segment. When you set new data, the existing data will be replaced with the new data. If the segment has no data, the new data is placed in the segment. 
		 * @param data{Array} Specifies the array to represent data as key value pairs.<b>Mandatory</b>
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>
		//Defining the properties for a Segment.<br/>
	    var segBasic ={id:"segId", isVisible:true, widgetSkin:"widSkin", rowSkin:"rowSkn", rowFocusSkin:"rowFSkn", alternateRowSkin:"altSkin", sectionHeaderSkin:"secHSkin", widgetDataMap:{widgetId1:"dataid1", widgetId2:"dataId2", widgetId3:"dataId3" ,widgetId4:"secDataId1" ,widgetId5:"secDataId2" }, rowTemplate:box1}, selectedIndex:4, selectedIndicies:[4,5], viewType:constants.SEGUI_VIEW_TYPE_PAGEVIEW, onSwipe:onSwipeCallBck};<br/>
		var segLayout ={padding:[5,5,5,5], margin:[5,5,5,5], containerWeight:100};<br/>
		var segPSP ={onEditing:onEditingCallBck};<br/>
	 
	    //Creating the Segment.<br/> 
		var segment = new kony.ui.SegmentedUI2(segBasic, segLayout, segPSP);<br/> 
		
		//setData method call.<br/> 
		segment.setData([ {dataId1:"data1", dataId2:"data2", dataId3:"data3"}, {dataId1:"datax", dataId2:"datay" dataId3:"dataz", template:box1}]);</pre>
		 */
		this.setData = function (/**Array*/data)	{}

	    /**
		 * This method allows you to set data or modify an existing data of a row or within a section. 
		 * @param data{Object} Specifies the JSObject to represent data as key value pairs.<b>Mandatory</b>
		 * @param rowIndex{Number} Specifies the Index of the row within the section if the sectionIndex is mentioned.<b>Mandatory</b>
		 * @param sectionIndex{Number} Specifies the Index of the section.
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>
	    //Defining the properties for a Segment.<br/>
		var segBasic ={id:"segId",isVisible:true,widgetSkin:"widSkin",rowSkin:"rowSkn", rowFocusSkin:"rowFSkn", alternateRowSkin:"altSkin",sectionHeaderSkin:"secHSkin", widgetDataMap:{widgetId1:"dataid1", widgetId2:"dataId2", widgetId3:"dataId3", widgetId4:"secDataId1", widgetId5:"secDataId2" }, rowTemplate:box1},selectedIndex:4, selectedIndicies:[4,5], viewType:constants.SEGUI_VIEW_TYPE_PAGEVIEW, onSwipe:onSwipeCallBck};<br/>
		var segLayout ={padding:[5,5,5,5],margin:[5,5,5,5],containerWeight:100};<br/>
		var segPSP ={onEditing:onEditingCallBck};<br/>
		
		//Creating the Segment.<br/>
		var segment = new kony.ui.SegmentedUI2(segBasic, segLayout, segPSP);<br/>
		
		//Defining a row.<br/>
		dataObj1 = {globaDdataId1:"label3", globaDataId2:"label4", globalDataId3:"label5"};<br/>
		
		//setDataAt method call,modifying the data at 15th index position with the above row.<br/>
		segment.setDataAt(dataObj1,15);</pre>
         */
		this.setDataAt = function (/**Object*/data,/**Number*/rowIndex,/**Number*/sectionIndex)	{} 

	 
	    /**
		 * This method allows you to set or modify a section with rows to the segment. When you set new data, the existing data will be replaced with the new data. If the segment has no data, the new data is placed in the segment. 
		 * @param data{Array} Specifies the array to represent data as key value pairs.<b>Mandatory</b>
		 * @param sectionIndex{Number} Specifies the Index of the section.<b>Mandatory</b>
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>
	    //Defining the properties for a Segment.<br/>
	    var segBasic ={id:"segId",isVisible:true, widgetSkin:"widSkin", rowSkin:"rowSkn", rowFocusSkin:"rowFSkn", alternateRowSkin:"altSkin", sectionHeaderSkin:"secHSkin", widgetDataMap:{widgetId1:"dataid1", widgetId2:"dataId2", widgetId3:"dataId3", widgetId4:"secDataId1" , widgetId5:"secDataId2" }, rowTemplate:box1}, selectedIndex:4, selectedIndicies:[4,5], viewType:constants.SEGUI_VIEW_TYPE_PAGEVIEW, onSwipe:onSwipeCallBck};<br/>
		var segLayout ={padding:[5,5,5,5],margin:[5,5,5,5],containerWeight:100};<br/>
		var segPSP ={onEditing:onEditingCallBck};<br/>
		
		//Creating the Segment.<br/>
		var segment = new kony.ui.SegmentedUI2(segBasic, segLayout, segPSP);<br/>
		
		//Defining section data.<br/>
		data =[ [ "section1", [ {dataId1:"aaa"},{dataId1:"bbb"} ] ], [ "section2", [{dataId1:"ccc"},  {dataId1:"ddd"} ] ]];<br/>
		
		//setSectionAt method call,modifying the data at 2nd sectionIndex position.<br/>
		segment.setSectionAt(data,2);</pre>
         */
		this.setSectionAt = function (/**Array*/arrayofdata,/**Number*/sectionIndex)	{} 
	
	
	    /**
	     * This method specifies the widget that must be enabled or disabled.
		 * @param enabled{Boolean} Indicates widget whether true or false.<b>Mandatory</b>
		 * @Available All Platforms except on Map widget for SPA platform 
		 * @access Write
		 */
        this.setEnabled = function (/**Boolean*/enabled) {}	
    	
	
	    /**
	     * This method specifies the widget on which there must be focus. 
		 * @param focus{Boolean} Indicates focus is set on a widget.<b>Mandatory</b>
		 * @Available All Platforms 
		 * @access Write
		 */
        this.setFocus = function (/**Boolean*/focus) {}	 
		
		
		/**
	     * Specifies the method to set the visibility of the widget.
		 * @param visible{Boolean} Indicates visibility on a widget.<b>Mandatory</b>
		 * @param animationConfig {Object} <b>Specifies the animation configuration object.<b> Note: This is OPTIONAL parameter and is supported only on iOS and Android platforms.</b></dd>
			<pre>  &nbsp;&nbsp;  <pre> &nbsp;&nbsp;<b>- animEffect</b> {Object} Specifies the animation effect. Following are the available options of animation effect. <b>Optional </b></pre> </pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_EFFECT_EXPAND:&#160;Specifies the widget must expand gradually by increasing the height of the widget. This option is applicable only when visibility is turned on.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_EFFECT_REVEAL: Specifies the widget must appear gradually by decreasing the transparency of the widget.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_EFFECT_COLLAPSE: This is applicable when the visibility is turned off. Specifies the widget must collapse gradually by decreasing the height of the widget.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_EFFECT_FADE:�This is applicable when the visibility is turned off. Specifies the widget must disappear gradually by increasing the transparency of the widget.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_EFFECT_NONE:&#160;This is the default option. Specifies animation should not be applied to the widget, but layout animations are applied on the Form that may be change the current widgets layout. The animation events are not triggered when this option is set.</pre></li></pre></dd>
		
			<pre>  &nbsp;&nbsp;  <pre> &nbsp;&nbsp;<b>- animDuration - Optional </b> {Number} Specifies the duration of the animation effect in seconds. The default value is 1. <b>Optional </b></pre> </pre></dd>
			
			<pre>  &nbsp;&nbsp;  <pre> &nbsp;&nbsp;<b>- animDelay - Optional </b> {Number} Specifies the delay of the animation effect in seconds. The default value is 0. <b>Optional </b></pre> </pre></dd>
			
			<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp; <b>- animCurve - Optional </b> Specifies the animation curve to be applied while playing the animation. An animation curve defines the speed of the animations at different intervals of the animation duration. Following are the available options of animation curve: </p></dd> </pre> </pre> </dd>
        		<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_CURVE_EASEIN:&#160;Specifies the animation to start slowly and then continues with normal speed.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_CURVE_EASEOUT: Specifies the animation to start with normal speed and slowdown towards the end.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_CURVE_EASEINOUT:&#160;Specifies the animation to start slowly and then continues with normal speed and then again slowdown towards the end.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_CURVE_LINEAR:&#160;This is the default value. Specifies the animation to continue with normal speed.</pre></li></pre></dd>

			<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp; <b>- animCallBacks - Optional </b> It is a JS dictionary containing the events invoked by the platform during the animation life cycle. Following are the available events: </p></dd> </pre> </pre> </dd>
        		<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; animStarted:&#160;Invoked at the end of the animation without any parameters. Following is the signature of the event:</pre></li></pre></dd><b>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp;<b>function animStarted() </b></dd> </p></pre> </pre> </pre> </br> </pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; animEnded: Invoked at the end of the animation without any parameters. Following is the signature of the event:</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp;<b>function animEnded() </b></pre> </pre> </pre>
		 
		 * @Available All Platforms except on all Mobile Web platforms
		 * @access Write
		 */
		this.setVisibility = function (/**Boolean*/visible,/**Object*/animationConfig) {}		
	}
	
	
    //For Backward compatability this code has been added to support 4.1 and below versions.
	//SegmentedUI Widget are defined here
	ui.SegmentedUI = 
	/**
	 * Creates a new SegmentedUI object
	 * @class kony.ui.SegmentedUI
	 * @returns {kony.ui.SegmentedUI}
	 */
	function SegmentedUI(basicProperties, layoutProperties, platformSpecificProperties){
	
	    //SegmentedUI - Basic Properties Starts here
		
	 	/**
		 * Defines a string of alpha numeric characters that uniquely identifies a widget within an application.
		 * @property {String}
		 * @Mandatory Yes
		 * @Available All Platforms 
		 * @access Read
		 */
		this.id = ""	
		
		/**
		 * Specifies custom JS Object with the key,value pairs that a developer can use to store the context with the widget. 
		 * @property {Object}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.info = {}	
		
		/**
		 * Specifies the skin to be applied to the entire SegmentedUI.
		 * @property {String}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.widgetSkin = ""	
		
		/**
		 * Specifies the Skin that must be applied for each row.
		 * @property {String}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.rowSkin = ""	
		
		/**
		 * Specifies the skin that must be applied when user selects the row.
		 * @property {String}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.rowFocusSkin = ""	
		
		/**
		 * Specifies the skin that is applied to every alternate even numbered row in the segment.
		 * @property {String}
		 * @Available All Platforms except Windows Phone/Windows Kiosk.
		 * @access Read and Write
		 */
		this.alternateRowSkin = ""
		
		/**
		 * Specifies the Skin to be applied to the Section Header.
		 * @property {String}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.sectionHeaderSkin = ""
		
		/**
		 * Specifies the mapping information between the widget id's and the keys in the data.
		 * @property {Object}
		 * @Available All Platforms except Mobile Web (basic).
		 * @access Read and Write
		 */
		this.widgetDataMap = {}		 
		
		/**
		 * Specifies the skin to be applied to the entire SegmentedUI.
		 * @property {String}
		 * @Available All Platforms 
		 * @access Read and Write
		 */
		this.widgetSkin = {}		 
		
		
		/**
		 * Indicates the common template to be used for each row while creating the row and filling the data. This can be overridden at the row level when setting the data using the template key.
		 * @property {kony.ui.Box}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.rowTemplate = {}
		
		/**
		 * Indicates the common template to be used for each section while creating the section header and filling the data.
		 * @property {kony.ui.Box}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.sectionHeaderTemplate = {}
		
		/**
		 * Specifies the set of values that must be displayed on each row of the segment. The data is categorized into Sections and Rows.
		 * @property {Array}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.data = []
		
		/**
		 * Specifies the Separator thickness in pixels.
		 * @property {Number}
		 * @Available All Platforms except iPhone and iPad.
		 * @access Read and Write
		 */
		this.separatorThickness = 0 
		
		/**
		 * Specifies the color of the separator between row of segmentedUI. The color property follows hex format (#RRGGBB) which includes even transparency portion.
		 * @property {String}
		 * @Available All Platforms except Symbian.
		 * @access Read and Write
		 */
		this.separatorColor = ""  

		/**
		 * You can use this property to select the view type of a segment.
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.viewType = 0	
		
		/**
		 * This property controls the visibility of a widget on the form.
		 * @property {Boolean}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.isVisible = true 
		
		/**
		 * Specifies if the segment should retain the selection made even when the user navigates out of the form and revisits the form.
		 * @property {Boolean}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.retainSelection = true	  
		
		/**
		 * A Page Indicator is a succession of docs centered below the SegmentedUI widget. Each dot corresponds to a row segment with the white dot indicating the currently viewed page.
		 * @property {Boolean}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.needPageIndicator = true  
		
		/**
		 * Specifies the image to indicate that the page is currently being viewed. This property is available only when the viewType is selected as pageview.
		 * @property {String}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.pageOnDotImage = ""	 

		/**
		 * Specifies the image to indicate that the pages that are not been currently viewed. This property is available only when the viewType is selected as pageview.
		 * @property {String}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.pageOffDotImage = ""	
		
		
		/**
		 * Specifies if the segment can support single or multiple selection.
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.selectionBehavior = 1

		/**
		 * This property is enabled if you select either singleselect or multiselect. It specifies the Image widget ID which is used to indicate to the user that the row is selected or deselected.
		 * @property {Object}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.selectionBehaviorConfig = {}
		
		/**
		 * Indicates the currently selected row in the SegmentedUI.
		 * @property {Array}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.selectedIndex = []		
		
		/**
		 * Returns the data in the selected row of the segmentedUI.
		 * @property {Array}
		 * @Available All Platforms
		 * @access Read 
		 */
		this.selectedItems = []
		
		/**
		 * Specifies an array of indexes which indicates the selected rows. In case of MULTI_SELECT there can be more than one selected index and the array represents the same.
		 * @property {Array}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.selectedIndices = []
		
		
		/**
		 * The percentage of width to be allocated by its parent widget.The parent's widget space is distributed to its child widgets based on this weight factor. All its child widgets should sum up to 100% of weight except when placed in kony.ui.ScrollBox.
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.containerWeight = 1
		
		/**
         * specifies the space between the content of the widget and the widget boundaries.
         * @property {Array}
         * @Available All Platforms
         * @access Read and Write
         */
        this.padding = []

		/**
         * Specifies the space around a widget.
         * @property {Array}
         * @Available All Platforms
         * @access Read and Write
         */
        this.margin = []
		
		//SegmentedUI - Platform Specific Properties Starts here
		
		/**
		 * Specifies the skin for the segui row.
		 * @property {String}
		 * @Available MobileWeb(Advanced),SPA
		 * @access Read and Write
		 */
		this.blockedUISkin = ""
		
		/**
		 * Specifies the skin to indicate that the row of the Segui is pressed or clicked.
		 * @property {String}
		 * @Available Android
		 * @access Read and Write
		 */
		this.pressedSkin = ""
		
		/**
		 * Specifies the possible borders.
		 * @property {Number}
		 * @Available Mobile Web(Basic),Mobile Web(BJS),Mobile Web(Advanced)
		 * @access Read and Write
		 */
		this.border = 1		
		
		/**
		 * Specifies if the first clickable element (Image or Label) of the segment is selected by default.
		 * @property {Boolean}
		 * @Available Mobile Web(Basic),Mobile Web(BJS)
		 * @access Read and Write
		 */
		this.defaultSelection = true

		/**
		 * Indicates the identifier of the widget placed inside the row of the SegmentedUI.Search will be performed against the content present inside the  widget.
		 * @property {String}
		 * @Available iPhone,iPad
		 * @access Read and Write
		 */
		this.searchBy = ""

		/**
		 * Indicates search criteria of segmentedUI.
		 * @property {Number}
		 * @Available iPhone,iPad
		 * @access Read and Write
		 */
		this.searchCriteria = 1
		
		/**
		 * Specifies whether the editing style of the segment is Swipe or Icon.
		 * @property {Number}
		 * @Available iPhone,iPad
		 * @access Read and Write
		 */
		this.editStyle = 1	
		
		/**
		 * The array of menu items that are displayed when the button is selected.
		 * @property {Array}
		 * @Available Android
		 * @access Read and Write
		 */
		this.contextMenu = []
		
		/**
		 * The property to enable/disable the docking of section headers on top of the screen,while scrolling the section content.
		 * @property {Boolean}
		 * @Available Android
		 * @access Read and Write
		 */
		this.dockSectionHeaders = true
		
		//SegmentedUI - Events starts here
		
		/**
		 * Event callback invoked when row is tried to insert through accessory button.
		 * @property {Event}
		 * @Available iPhone,iPad
		 * @access Read and Write
		 */
		this.onEditing = new Event() 	
		
		/**
		 * This event is triggered when you swipe a row in a segment.
		 * @property {Event}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.onSwipe = new Event() 
		
		/**
		 * Event callback invoked when the row is clicked.
		 * @property {Event}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.onRowClick = new Event() 
	
	    /**
		 * An event callback that is invoked by the platform when scrolling the SegmentedUI widget.
		 * @property {Event}
		 * @Available All Platforms except BlackBerry and Mobile Web platforms
		 * @access Read and Write
		 */
		this.scrollingEvents = new Event() 
	
	    /**
		 * This event allows the developer to execute custom javascript function before the onClick callback of the widget is invoked. This is applicable only for Mobile Web channel. The function must exist in a javascript file under project>module>js folder. 
		 * @property {Event}
		 * @Available Mobile Web (advanced),SPA (iPhone/Android/BlackBerry/Windows NTH)/Playbook
		 * @access Read and Write
		 */
		this.preOnClickJS = new Event ()
		
	
	    /**
		 * This event allows the developer to execute custom javascript function after the onClick callback of the widget is invoked. This is applicable only for Mobile Web channel.The function must exist in a javascript file under project>module>js folder. 
		 * @property {Event}
		 * @Available Mobile Web (advanced),SPA (iPhone/Android/BlackBerry/Windows NTH)/Playbook
		 * @access Read and Write
		 */
		this.postOnClickJS = new Event ()
		
	
	    //SegmentedUI - Methods Starts here
	
	    /**
		 * This method allows you to add new data to the segment. The new data is appended to the existing data.
		 * @param arrayofdata{Array} Specifies the array to represent data as key value pairs.<b>Mandatory</b>
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>
		//Defining the properties for a Segment.<br/>
		var segBasic ={id:"segId",isVisible:true,widgetSkin:"widSkin",rowSkin:"rowSkn", rowFocusSkin:"rowFSkn", alternateRowSkin:"altSkin",sectionHeaderSkin:"secHSkin", widgetDataMap:{widgetId1:"dataid1", widgetId2:"dataId2", widgetId3:"dataId3", widgetId4:"secDataId1", widgetId5:"secDataId2" }, rowTemplate:box1}, selectedIndex:4, selectedIndicies:[4,5], viewType:constants.SEGUI_VIEW_TYPE_PAGEVIEW, onSwipe:onSwipeCallBck};allows you to add new data to the segment.<br/>
		var segLayout ={padding:[5,5,5,5],margin:[5,5,5,5],containerWeight:100};<br/>
		var segPSP ={onEditing:onEditingCallBck};<br/>
	
		//Creating the Segment<br/>
		var segment = new kony.ui.SegmentedUI(segBasic, segLayout, segPSP);<br/>

        //addAll method call.<br/>
		segment.addAll([ {dataId1:"data1", dataId2:"data2", dataId3:"data3"}, {dataId1:"datax", dataId2:"datay" dataId3:"dataz", template:box1}]);</pre>
		 */
		this.addAll = function (/**Array*/arrayofdata)	{}
	    
		/**
		 * This method allows you to add one or more rows of data at a given index or with in a section. The new data is placed before the index. The existing data is pushed to the next row.
		 * @param arrayofdata{Object} Specifies the JSObject to represent data as key value pairs.<b>Mandatory</b>
		 * @param rowIndex {Number} Specifies the Index of the row within the section if the sectionIndex is mentioned.<b>Mandatory</b>
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>
	    //Defining the properties for a Segment. 
	    var segBasic ={id:"segId",isVisible:true,widgetSkin:"widSkin",rowSkin:"rowSkn",rowFocusSkin:"rowFSkn",alternateRowSkin:"altSkin",sectionHeaderSkin:"secHSkin", widgetDataMap:{widgetId1:"dataid1", widgetId2:"dataId2", widgetId3:"dataId3" ,widgetId4:"secDataId1" ,widgetId5:"secDataId2" },rowTemplate:box1}, selectedIndex:4, selectedIndicies:[4,5], viewType:constants.SEGUI_VIEW_TYPE_PAGEVIEW,onSwipe:onSwipeCallBck};<br/>
        var segLayout ={padding:[5,5,5,5],margin:[5,5,5,5],containerWeight:100};<br/> 
		var segPSP ={onEditing:onEditingCallBck};<br/>
		
		//Creating the Segment.<br/>
		var segment = new kony.ui.SegmentedUI(segBasic, segLayout, segPSP);<br/>
		
		//Defining a row<br/>
		dataObj1 = {globaDdataId1:"label1", globaDataId2:"label2", globalDataId3:"label3"};<br/>

        //addAt method call ,adding the above row at 15th index position.<br/>
		segment.addDataAt(dataObj1,15);</pre>
		 */
		this.addDataAt = function (/**Object*/arrayofdata,/**Number*/rowIndex)	{}
		
		/**
		 * This method allows you to add one or more sections with rows to the segment.
		 * @param arrayofdata{Array} Specifies the array to represent data as key value pairs.<b>Mandatory</b>
		 * @param sectionIndex {Number} Specifies the Index of the section.
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>
        //Defining the properties for a Segment.<br/> 
        var segBasic ={id:"segId",isVisible:true,widgetSkin:"widSkin",rowSkin:"rowSkn", rowFocusSkin:"rowFSkn", alternateRowSkin:"altSkin", sectionHeaderSkin:"secHSkin", widgetDataMap:{widgetId1:"dataid1", widgetId2:"dataId2", widgetId3:"dataId3", widgetId4:"secDataId1", widgetId5:"secDataId2" },rowTemplate:box1}, selectedIndex:4, selectedIndicies:[4,5], viewType:constants.SEGUI_VIEW_TYPE_PAGEVIEW, onSwipe:onSwipeCallBck};<br/> 
		var segLayout ={padding:[5,5,5,5],margin:[5,5,5,5],containerWeight:100};<br/> 
		var segPSP ={onEditing:onEditingCallBck};<br/> 
		
		//Creating the Segment.<br/> 
		var segment = new kony.ui.SegmentedUI(segBasic, segLayout, segPSP);<br/> 
		
		//Defining section data.<br/> 
		data =[ [ "section1", [ {dataId1:"aaa"},{dataId1:"bbb"} ]],[ "section2", [{dataId1:"ccc"},  {dataId1:"ddd"} ] ]];<br/>
		
		//addSectionAt method call.<br/>
		segment.addSectionAt(data,2);</pre>
		 */
		this.addSectionAt = function (/**Array*/arrayofdata,/**Number*/sectionIndex)	{}

        /**
		 * This method Provides the ability to remove all rows and all sections of the segui widget.
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>
		//Defining the properties for a Segment.<br/>
        var segBasic ={id:"segId",isVisible:true,widgetSkin:"widSkin",rowSkin:"rowSkn", rowFocusSkin:"rowFSkn", alternateRowSkin:"altSkin",sectionHeaderSkin:"secHSkin", widgetDataMap:{widgetId1:"dataid1", widgetId2:"dataId2", widgetId3:"dataId3" ,widgetId4:"secDataId1" ,widgetId5:"secDataId2" },rowTemplate:box1}, selectedIndex:4, selectedIndicies:[4,5], viewType:constants.SEGUI_VIEW_TYPE_PAGEVIEW,onSwipe:onSwipeCallBck};<br/>
        var segLayout ={padding:[5,5,5,5],margin:[5,5,5,5],containerWeight:100};<br/>
		var segPSP ={onEditing:onEditingCallBck};<br/>
		
		//Creating the Segment.<br/>
		var segment = new kony.ui.SegmentedUI(segBasic, segLayout, segPSP);<br/>
		
		//removeAll method call.
		segment.removeAll();</pre>
         */
		this.removeAll = function ()	{}
  
        /**
		 * This method Provides the ability to remove a row in the segui widget or a row with in a section of the segmented ui.
		 * @param rowIndex{Number} Specifies the Index of the row within the section if the sectionIndex is mentioned.<b>Mandatory</b>
		 * @param sectionIndex {Number} Specifies the Index of the section.
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>
       	//Defining the properties for a Segment.<br/>
		var segBasic ={id:"segId",isVisible:true,widgetSkin:"widSkin",rowSkin:"rowSkn", rowFocusSkin:"rowFSkn", alternateRowSkin:"altSkin",sectionHeaderSkin:"secHSkin", widgetDataMap:{widgetId1:"dataid1", widgetId2:"dataId2", widgetId3:"dataId3" ,widgetId4:"secDataId1" ,widgetId5:"secDataId2" }, rowTemplate:box1}, selectedIndex:4, selectedIndicies:[4,5], viewType:constants.SEGUI_VIEW_TYPE_PAGEVIEW,onSwipe:onSwipeCallBck};<br/>
		var segLayout ={padding:[5,5,5,5],margin:[5,5,5,5],containerWeight:100};<br/>
		var segPSP ={onEditing:onEditingCallBck};<br/>
		
		//Creating the Segment<br/>
		var segment = new kony.ui.SegmentedUI(segBasic, segLayout, segPSP);<br/>
		
		//removeAt method call,removing the row at 15th index position.
		segment.removeAt(15);</pre>
         */
		this.removeAt = function (/**Number*/rowIndex,/**Number*/sectionIndex)	{}

		/**
		 * This method allows you to remove a section at the given index within a segment.
		 * @param sectionIndex {Number} Specifies the Index of the section.<b>Mandatory</b>
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>
		//Defining the properties for a Segment.<br/> 
		var segBasic ={id:"segId",isVisible:true,widgetSkin:"widSkin",rowSkin:"rowSkn", rowFocusSkin:"rowFSkn", alternateRowSkin:"altSkin", sectionHeaderSkin:"secHSkin", widgetDataMap:{widgetId1:"dataid1", widgetId2:"dataId2", widgetId3:"dataId3", widgetId4:"secDataId1", widgetId5:"secDataId2" }, rowTemplate:box1}, selectedIndex:4, selectedIndicies:[4,5], viewType:constants.SEGUI_VIEW _TYPE_PAGEVIEW, onSwipe:onSwipeCallBck};<br/> 
		
		var segLayout ={padding:[5,5,5,5], margin:[5,5,5,5], containerWeight:100};<br/> 
		var segPSP ={onEditing:onEditingCallBck};<br/>

		//Creating the Segment.<br/>
		var segment = new kony.ui.SegmentedUI(segBasic, segLayout, segPSP);<br/>

		//removeSectionAt method call.<br/>
		segment.removeSectionAt(2);</pre>
		 */
		this.removeSectionAt = function (/**Number*/sectionIndex)	{}
		
		/**
		 * This method Provides the ability to set the data to the segui widget.
		 * @param arrayofdata{Array} Specifies the array to represent data as key value pairs.<b>Mandatory</b>
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>
		//Defining the properties for a Segment.<br/>
	    var segBasic ={id:"segId", isVisible:true, widgetSkin:"widSkin", rowSkin:"rowSkn", rowFocusSkin:"rowFSkn", alternateRowSkin:"altSkin", sectionHeaderSkin:"secHSkin", widgetDataMap:{widgetId1:"dataid1", widgetId2:"dataId2", widgetId3:"dataId3" ,widgetId4:"secDataId1" ,widgetId5:"secDataId2" }, rowTemplate:box1}, selectedIndex:4, selectedIndicies:[4,5], viewType:constants.SEGUI_VIEW_TYPE_PAGEVIEW, onSwipe:onSwipeCallBck};<br/>
		var segLayout ={padding:[5,5,5,5], margin:[5,5,5,5], containerWeight:100};<br/>
		var segPSP ={onEditing:onEditingCallBck};<br/>
	 
	    //Creating the Segment.<br/> 
		var segment = new kony.ui.SegmentedUI(segBasic, segLayout, segPSP);<br/> 
		
		//setData method call.<br/> 
		segment.setData([ {dataId1:"data1", dataId2:"data2", dataId3:"data3"}, {dataId1:"datax", dataId2:"datay" dataId3:"dataz", template:box1}]);</pre>
		 */
		this.setData = function (/**Array*/arrayofdata)	{}

	    /**
		 * This method Provides the ability to set/modify the data of row in the segui widget or a row with in a section of the segmented ui. 
		 * @param arrayofdata{Object} Specifies the JSObject to represent data as key value pairs.<b>Mandatory</b>
		 * @param rowIndex{Number} Specifies the Index of the row within the section if the sectionIndex is mentioned.<b>Mandatory</b>
		 * @param sectionIndex{Number} Specifies the Index of the section
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>
	    //Defining the properties for a Segment.<br/>
		var segBasic ={id:"segId",isVisible:true,widgetSkin:"widSkin",rowSkin:"rowSkn", rowFocusSkin:"rowFSkn", alternateRowSkin:"altSkin",sectionHeaderSkin:"secHSkin", widgetDataMap:{widgetId1:"dataid1", widgetId2:"dataId2", widgetId3:"dataId3", widgetId4:"secDataId1", widgetId5:"secDataId2" }, rowTemplate:box1},selectedIndex:4, selectedIndicies:[4,5], viewType:constants.SEGUI_VIEW_TYPE_PAGEVIEW, onSwipe:onSwipeCallBck};<br/>
		var segLayout ={padding:[5,5,5,5],margin:[5,5,5,5],containerWeight:100};<br/>
		var segPSP ={onEditing:onEditingCallBck};<br/>
		
		//Creating the Segment.<br/>
		var segment = new kony.ui.SegmentedUI(segBasic, segLayout, segPSP);<br/>
		
		//Defining a row.<br/>
		dataObj1 = {globaDdataId1:"label3", globaDataId2:"label4", globalDataId3:"label5"};<br/>
		
		//setDataAt method call,modifying the data at 15th index position with the above row.<br/>
		segment.setDataAt(dataObj1,15);</pre>
         */
		this.setDataAt = function (/**Object*/arrayofdata,/**Number*/rowIndex,/**Number*/sectionIndex)	{} 

	 
	    /**
		 * This method Provides the ability to replace a section with in the segui widget with a new section and rows. 
		 * @param arrayofdata{Array} Specifies the array to represent data as key value pairs.<b>Mandatory</b>
		 * @param sectionIndex{Number} Specifies the Index of the section.<b>Mandatory</b>
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>
	    //Defining the properties for a Segment.<br/>
	    var segBasic ={id:"segId",isVisible:true, widgetSkin:"widSkin", rowSkin:"rowSkn", rowFocusSkin:"rowFSkn", alternateRowSkin:"altSkin", sectionHeaderSkin:"secHSkin", widgetDataMap:{widgetId1:"dataid1", widgetId2:"dataId2", widgetId3:"dataId3", widgetId4:"secDataId1" , widgetId5:"secDataId2" }, rowTemplate:box1}, selectedIndex:4, selectedIndicies:[4,5], viewType:constants.SEGUI_VIEW_TYPE_PAGEVIEW, onSwipe:onSwipeCallBck};<br/>
		var segLayout ={padding:[5,5,5,5],margin:[5,5,5,5],containerWeight:100};<br/>
		var segPSP ={onEditing:onEditingCallBck};<br/>
		
		//Creating the Segment.<br/>
		var segment = new kony.ui.SegmentedUI(segBasic, segLayout, segPSP);<br/>
		
		//Defining section data.<br/>
		data =[ [ "section1", [ {dataId1:"aaa"},{dataId1:"bbb"} ] ], [ "section2", [{dataId1:"ccc"},  {dataId1:"ddd"} ] ]];<br/>
		
		//setSectionAt method call,modifying the data at 2nd sectionIndex position.<br/>
		segment.setSectionAt(data,2);</pre>
         */
		this.setSectionAt = function (/**Array*/arrayofdata,/**Number*/sectionIndex)	{} 
	
	    /**
	     * This method specifies the widget that must be enabled or disabled.
		 * @param enabled{Boolean} Indicates widget whether true or false.<b>Mandatory</b>
		 * @Available All Platforms except on Map widget for SPA platform 
		 * @access Write
		 */
        this.setEnabled = function (/**Boolean*/enabled) {}	
    		
	
	    /**
	     * This method specifies the widget on which there must be focus. 
		 * @param focus{Boolean} Indicates focus is set on a widget.<b>Mandatory</b>
		 * @Available All Platforms 
		 * @access Write
		 */
        this.setFocus = function (/**Boolean*/focus) {}	 
		
		
		/**
	     * Specifies the method to set the visibility of the widget.
		 * @param visible{Boolean} Indicates visibility on a widget.<b>Mandatory</b>
		 * @Available All Platforms except on all Mobile Web platforms
		 * @access Write
		 */
		this.setVisibility = function (/**Boolean*/visible) {}	
	}
	
	//For Backward compatability this code has been added to support 4.1 and below versions.
	
	//TextArea widget starts here
	ui.TextArea = 
	/**
	 * Creates a new TextArea object
	 * @class kony.ui.TextArea
	 * @returns {kony.ui.TextArea}
	 */
	function TextArea(basicProperties, layoutProperties, platformSpecificProperties){
	
	    //TextArea - Basic Properties Starts here
		
	 	/**
		 * Defines a string of alpha numeric characters that uniquely identifies a widget within an application.
		 * @property {String}
		 * @Mandatory Yes
		 * @Available All Platforms
		 * @access Read
		 */
		this.id = ""			
		
		/**
		 * Specifies custom JS Object with the key,value pairs that a developer can use to store the context with the widget. 
		 * @property {Object}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.info = {}	
		
		/**
		 * Specifies the look and feel of the widget when not in focus.
		 * @property {String}
		 * @Available All Platforms except Mobile Web (basic) and Win Mobile6x.
		 * @access Read and Write
		 */
		this.skin = ""	
		
		/**
		 * This is a skin property and it determines the look and feel of the widget when in focus.
		 * @property {String}
		 * @Available All Platforms except Mobile Web and SPA (Android) platforms.
		 * @access Read and Write
		 */
		this.focusSkin = ""	
		
		/**
		 * Specify a general or descriptive text for the TextArea widget.
		 * @property {String}
		 * @Available All Platforms except Mobile Web (basic) and Win Mobile6x.
		 * @access Read and Write
		 */
		this.text = ""
		
		/**
		 * Specifies whether the text entered by the user will be secured using a mask character, such as asterisk or dot. This is typically set to true for a password field.
		 * @property {Boolean}
		 * @Available All Platforms except Win Mobile6x and on all Mobile Web platforms.
		 * @access Read and Write
		 */
		this.secureTextEntry = true
		
		/**
		 * Specifies the maximum number of characters that the text field can accept.
		 * @property {Number}
		 * @Available All Platforms except on all Mobile Web platforms.
		 * @access Read and Write
		 */
		this.maxTextLength = 1		
		
		/**
		 * Specifies the type of input characters that a user can enter into the TextArea widget.
		 * @property {Number}
		 * @Available All Platforms except SPA, BlackBerry, and on all Mobile Web platforms.
		 * @access Read and Write
		 */
		this.textInputMode = 1		
		
		/**
		 * When you interact with a TextBox widget, a keyboard is displayed. You can use this property to select the type of keyboard that you want to display. 
		 * @property {Number}
		 * @Available All Platforms except on all Mobile Web platforms.
		 * @access Read and Write
		 */
		this.keyBoardStyle = 1	
		
		/**
		 * Specifies the visibility of the widget. 
		 * @property {Boolean}
		 * @Available All Platforms except Mobile Web (basic) and Win Mobile6x.
		 * @access Read and Write
		 */
		this.isVisible = true	
		
		/**
		 * Specifies the character capitalization behavior.
		 * @property {Number}
		 * @Available All Platforms except SPA and on all Mobile Web platforms
		 * @access Read and Write
		 */
		this.autoCapitalize = 1		
		
		/**
		 * Number of lines to be displayed at a given time in the view port of the TextArea. This essentially decides the height of the text area.
		 * @property {Number}
		 * @Available All Platforms except Mobile Web (basic)
		 * @access Read and Write
		 */
		this.numberOfVisibleLines = 1		
		
		/**
		 * The placeholder attribute specifies a short hint that describes the expected value of an input field (example, a sample value or a short description of the expected format).  
		 * @property {String}
		 * @Available All Platforms except Windows Phone (Mango) and on all Mobile Web platforms.
		 * @access Read and Write
		 */
		this.placeholder = ""		
		
		//TextArea - Layout Configuration Properties Starts here
		
		/**
		 * Specifies percentage of width to be allocated by its parent widget widget. The parent widget space is distributed to its child widgets based on this weight factor. All its child widgets should sum up to 100% of weight except when placed in kony.ui.ScrollBox.
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.containerWeight = 1		
		
		/**
		 * Specifies the space between the content of the widget and the widget boundaries.
		 * @property {Array}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.padding = []	
		
		/**
		 * Specifies the space around a widget.
		 * @property {Array}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.margin = []
		
		
		//TextArea - Platform Specific Properties Starts here
		
		/**
		 * This property enables an application to share data within the application or with another application using system-wide or application-specific pasteboards.
		 * @property {Number}
		 * @Available iPhone,iPad
		 * @access Read and Write
		 */
		this.pasteboardType = 1		
		
		/**
		 * Specifies if the text to be displayed in action key of the keyboard.
		 * @property {Number}
		 * @Available iPhone,iPad
		 * @access Read and Write
		 */
		this.keyboardActionLabel = 1		
		
		/**
		 * Specifies the skin that must be used to block the interface until the action in progress (for example, a service call) is completed.
		 * @property {String}
		 * @Available MobileWeb(Advanced),SPA (iPhone/Android/BlackBerry/Windows NTH)/Playbook
		 * @access Read and Write
		 */
		this.blockedUISkin = ""	
		
		/**
		 * Specifies the hint text when the cursor hovers over a widget.
		 * @property {String}
		 * @Available windows 8
		 * @access Read and Write
		 */
		this.toolTip = ""	
		
		/**
		 * Specifies the look and feel of a widget when the cursor hovers on the widget.
		 * @property {String}
		 * @Available windows 8,Desktop Web
		 * @access Read and Write
		 */
		this.hoverSkin = ""	
		
		//TextArea - Events Starts here

		/**
		 * This event is triggered when user is done with entering text in TextArea and click or touch the Go or Enter option. 
		 * @property {Event}
		 * @Available All Platforms except SPA and on all Mobile Web platforms.
		 * @access Read and Write
		 */
		this.onDone = new Event() 		
		
		/**
		 * This event callback triggered when text in the TextArea changes. This event is not fired when the text is changed programmatically.
		 * @property {Event}
		 * @Available All Platforms except on all Mobile Web platforms.
		 * @access Read and Write
		 */
		this.onTextChange = new Event() 
		
		/**
		 * This is an event callback that is invoked by the platform when the user clicks within the TextArea and is about to start editing.
		 * @property {Event}
		 * @Available iPhone,iPad
		 * @access Read and Write
		 */
		this.onBeginEditing = new Event() 
		
		/**
		 * Property to listen for events when user ends entering the text.
		 * @property {Event}
		 * @Available iPhone,iPad
		 * @access Read and Write
		 */
		this.onEndEditing = new Event() 
		
		/**
		 * This is an event that is invoked when the key is pressed down.
		 * @property {Event}
		 * @Available Desktop Web
		 * @access Read and Write
		 */
		this.onKeyDown = new Event() 
	
	
	    /**
		 * This is an event that is invoked when the key is up.
		 * @property {Event}
		 * @Available Desktop Web
		 * @access Read and Write
		 */
		this.onKeyUp = new Event()
	
	
	    // TextArea - Methods starts here
		
		/**
	     * This method specifies the widget that must be enabled or disabled.
		 * @param enabled{Boolean} Indicates widget whether true or false.<b>Mandatory</b>
		 * @Available All Platforms except on Map widget for SPA platform 
		 * @access Write
		 */
        this.setEnabled = function (/**Boolean*/enabled) {}	
    		
	
	    /**
	     * This method specifies the widget on which there must be focus. 
		 * @param focus{Boolean} Indicates focus is set on a widget.<b>Mandatory</b>
		 * @Available All Platforms 
		 * @access Write
		 */
        this.setFocus = function (/**Boolean*/focus) {}	 
		 
		 
		/**
	     * Specifies the method to set the visibility of the widget.
		 * @param visible{Boolean} Indicates visibility on a widget.<b>Mandatory</b>
		 * @Available All Platforms except on all Mobile Web platforms
		 * @access Write
		 */
		this.setVisibility = function (/**Boolean*/visible) {}	
	
	    /**
	     * This method enables you to set the badge value to the given widget at the upper, right corner of the widget.
		 * @param badgeText{String} Specifies the Text value that appears within the badge.<b>Mandatory</b>
		 * @param skin{String}Specifies the background color for the badge.
		 * @Available iPhone,iPad 
		 * @access Write
		 * @usage <pre> 
	    //To set a badge value with skin "badgeSkin" on a box with ID hbx1 placed on a form frm1, use the following code:<br/>
		frm1.hbx1.setBadge("2","badgeSkin");</pre>
		 */
		this.setBadge = function (/**String*/badgeText,/**String*/skin) {}

        /**
	     * This method enables you to read the badge value (if any) attached to the given widget. 
		 * @returns {String} - Reference to the gesture is returned.
		 * @Available iPhone,iPad 
		 * @access Write
		 * @usage <pre> 
	    //To get a badge value on a box with ID hbx1 placed on a form frm1, use the following code:<br/>
		var badgeVal =frm1.hbx1.getBadge();<br/>
		alert("badge value is::"+badgeVal);</pre>
		 */
		this.getBadge = function () {}
	}
	
	
	//TextArea2 widget starts here
	ui.TextArea2 = 
	/**
	 * Creates a new TextArea2 object
	 * @class kony.ui.TextArea2
	 * @returns {kony.ui.TextArea2}
	 */
	function TextArea2(basicProperties, layoutProperties, platformSpecificProperties){
	
	    //TextArea2 - Basic Properties Starts here
		
	 	/**
		 * Defines a string of alpha numeric characters that uniquely identifies a widget within an application.
		 * @property {String}
		 * @Mandatory Yes
		 * @Available All Platforms
		 * @access Read
		 */
		this.id = ""			
		
		/**
		 * Specifies custom JS Object with the key,value pairs that a developer can use to store the context with the widget. 
		 * @property {Object}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.info = {}	
		
		/**
		 * Specifies the look and feel of the widget when not in focus.
		 * @property {String}
		 * @Available All Platforms except Mobile Web (basic) and Win Mobile6x.
		 * @access Read and Write
		 */
		this.skin = ""	
		
		/**
		 * This is a skin property and it determines the look and feel of the widget when in focus.
		 * @property {String}
		 * @Available All Platforms except Mobile Web and SPA (Android) platforms.
		 * @access Read and Write
		 */
		this.focusSkin = ""	
		
		/**
		 * Specify a general or descriptive text for the TextArea widget.
		 * @property {String}
		 * @Available All Platforms except Mobile Web (basic) and Win Mobile6x.
		 * @access Read and Write
		 */
		this.text = ""
		
		/**
		 * Specifies the maximum number of characters that the text field can accept.
		 * @property {Number}
		 * @Available All Platforms except on all Mobile Web platforms.
		 * @access Read and Write
		 */
		this.maxTextLength = 1		
		
		/**
		 * Specifies the type of input characters that a user can enter into the TextArea widget.
		 * @property {Number}
		 * @Available All Platforms except SPA, BlackBerry, and on all Mobile Web platforms.
		 * @access Read and Write
		 */
		this.textInputMode = 1		
		
		/** 
		 * When you interact with a TextArea widget, a keyboard is displayed. You can use this property to select the type of keyboard that you want to display.
		 * @property {Number}
		 * @Available All Platforms except on all Mobile Web platforms.
		 * @access Read and Write
		 */
		this.keyBoardStyle = 1	
		
		/**
		 * Specifies the visibility of a widget on the form. 
		 * @property {Boolean}
		 * @Available All Platforms except Mobile Web (basic) and Win Mobile6x.
		 * @access Read and Write
		 */
		this.isVisible = true	
		
		/**
		 * Specifies the character capitalization behavior.
		 * @property {Number}
		 * @Available All Platforms except SPA and on all Mobile Web platforms
		 * @access Read and Write
		 */
		this.autoCapitalize = 1		
		
		/**
		 * Number of lines to be displayed with in the view port of the TextArea. This essentially decides the height of the TextArea2.
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.numberOfVisibleLines = 1		
		
		/**
		 * The placeholder attribute specifies a short hint that describes the expected value of an input field (example, a sample value or a short description of the expected format). 
		 * @property {String}
		 * @Available All Platforms except Windows Phone (Mango) and on all Mobile Web platforms
		 * @access Read and Write
		 */
		this.placeholder = ""	

		/**
		 * Specifies the accessiblity configuration property for the widget.
		 * @property {Object}
		 * @Available iPhone, Android, SPA-iPhone, and SPA-Android Platforms
		 * @access Read and Write
		 * @usage <pre>
		 /* accessibilityConfig =  {
				"a11yHidden": false,
				"a11yValue": "Your text goes here",
				"a11yLabel": "Your text goes here",
				"a11yHint": "Your text goes here"
			},
		*/
		this.accessibilityConfig = {}
		
		//TextArea2 - Layout Configuration Properties Starts here
		
		/**
		 * Specifies percentage of width to be allocated by its parent widget widget. The parent widget space is distributed to its child widgets based on this weight factor. All its child widgets should sum up to 100% of weight except when placed in kony.ui.ScrollBox.
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.containerWeight = 1		
		
		/**
		 * Specifies the space between the content of the widget and the widget boundaries.
		 * @property {Array}
		 * @Available All Platforms except Mobile Web (basic).
		 * @access Read and Write
		 */
		this.padding = []	
		
		/**
		 * Specifies the space around a widget.
		 * @property {Array}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.margin = []
		
		
		//TextArea2 - Platform Specific Properties Starts here
		
		/**
		 * This property enables an application to share data within the application or with another application using system-wide or application-specific pasteboards.
		 * @property {Number}
		 * @Available iPhone,iPad
		 * @access Read and Write
		 */
		this.pasteboardType = 1		
		
		/**
		 * Specifies if the text to be displayed in action key of the keyboard.
		 * @property {Number}
		 * @Available iPhone,iPad
		 * @access Read and Write
		 */
		this.keyboardActionLabel = 1		
		
		/**
		 * Specifies the skin that must be used to block the interface until the action in progress (for example, a service call) is completed.
		 * @property {String}
		 * @Available MobileWeb(Advanced),SPA (iPhone/Android/BlackBerry/Windows NTH)/Playbook
		 * @access Read and Write
		 */
		this.blockedUISkin = ""	
		
		/**
		 * Specifies the hint text when the cursor hovers over a widget.
		 * @property {String}
		 * @Available windows 8
		 * @access Read and Write
		 */
		this.toolTip = ""	
		
		/**
		 * Specifies the look and feel of a widget when the cursor hovers on the widget.
		 * @property {String}
		 * @Available windows 8,Desktop Web
		 * @access Read and Write
		 */
		this.hoverSkin = ""	
		
		/**
		 * Specifies the layout changes that occur due to the animations applied/removed on other widgets. 
		 * @property {Object}
		 * @Available iOS and Android Platforms
		 * @access Read and Write
		 */
		this.layoutAnimConfig = {}
		
		
		//TextArea2 - Events Starts here

		/**
		 * This event is triggered when user is done with entering text in textarea and click or touch the Go or Enter option.
		 * @property {Event}
		 * @Available All Platforms except SPA and on all Mobile Web platforms.
		 * @access Read and Write
		 */
		this.onDone = new Event() 		
		
		/**
		 * This is an event callback triggered when text in the TextArea changes. This event is not fired when the text is changed programmatically.
		 * @property {Event}
		 * @Available All Platforms except on all Mobile Web platforms.
		 * @access Read and Write
		 */
		this.onTextChange = new Event() 
		
		/**
		 * This is an event callback that is invoked by the platform when the user clicks within the TextArea and is about to start editing.
		 * @property {Event}
		 * @Available iPhone,iPad
		 * @access Read and Write
		 */
		this.onBeginEditing = new Event() 
		
		/**
		 * Property to listen for events when user ends entering the text.
		 * @property {Event}
		 * @Available iPhone,iPad
		 * @access Read and Write
		 */
		this.onEndEditing = new Event() 
		
		
		/**
		 * This is an event that is invoked when the key is pressed down.
		 * @property {Event}
		 * @Available Desktop Web
		 * @access Read and Write
		 */
		this.onKeyDown = new Event() 
	
	
	    /**
		 * This is an event that is invoked when the key is up.
		 * @property {Event}
		 * @Available Desktop Web
		 * @access Read and Write
		 */
		this.onKeyUp = new Event()
	
	
	    // TextArea2 - Methods starts here

        /**
	     * This method specifies the widget that must be enabled or disabled.
		 * @param enabled{Boolean} Indicates widget whether true or false.<b>Mandatory</b>
		 * @Available All Platforms except on Map widget for SPA platform 
		 * @access Write
		 */
        this.setEnabled = function (/**Boolean*/enabled) {}	
    		
	
	    /**
	     * This method specifies the widget on which there must be focus. 
		 * @param focus{Boolean} Indicates focus is set on a widget.<b>Mandatory</b>
		 * @Available All Platforms 
		 * @access Write
		 */
        this.setFocus = function (/**Boolean*/focus) {}	 
		
		
		/**
	     * Specifies the method to set the visibility of the widget.
		 * @param visible{Boolean} Indicates visibility on a widget.<b>Mandatory</b>
		 * @Available All Platforms except on all Mobile Web platforms
		 * @access Write
		 */
		this.setVisibility = function (/**Boolean*/visible) {}	
	
	    /**
	     * This method enables you to set the badge value to the given widget at the upper, right corner of the widget.
		 * @param badgeText{String} Specifies the Text value that appears within the badge.<b>Mandatory</b>
		 * @param skin{String}Specifies the background color for the badge.
		 * @Available iPhone,iPad 
		 * @access Write
		 * @usage <pre> 
	    //To set a badge value with skin "badgeSkin" on a box with ID hbx1 placed on a form frm1, use the following code:<br/>
		frm1.hbx1.setBadge("2","badgeSkin");</pre>
		 */
		this.setBadge = function (/**String*/badgeText,/**String*/skin) {}

        /**
	     * This method enables you to read the badge value (if any) attached to the given widget.
		 * @returns String - Reference to the gesture is returned.
		 * @Available iPhone,iPad 
		 * @access Write
		 * @usage <pre> 
	    //To get a badge value on a box with ID hbx1 placed on a form frm1, use the following code:<br/>
		var badgeVal =frm1.hbx1.getBadge();<br/>
		alert("badge value is::"+badgeVal);</pre>
		 */
		this.getBadge = function () {}
	}
	
	//For Backward compatability this code has been added to support 4.1 and below versions.
	
	//TextBox Widget Properties are defined here 
	ui.TextBox = 
	/**
	 * Creates a new TextBox object
	 * @class kony.ui.TextBox
	 * @returns {kony.ui.TextBox}
	 */
	function TextBox(basicProperties, layoutProperties, platformSpecificProperties){
	
	    //TextBox - Basic Properties starts here
		
	 	/**
		 * Defines a string of alpha numeric characters that uniquely identifies a widget within an application.
		 * @property {String}
		 * @Mandatory Yes
		 * @Available All Platforms
		 * @access Read
		 */
		this.id = ""	
		
		/**
		 * Specifies custom JS Object with the key,value pairs that a developer can use to store the context with the widget. 
		 * @property {Object}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.info = {}
		
		/**
		 * Specifies the look and feel of the widget when not in focus.
		 * @property {String}
		 * @Available All Platfroms
		 * @access Read and Write
		 */
		this.skin = ""	
		
		
		/**
		 * This is a skin property and it determines the look and feel of the widget when in focus .
		 * @property {String}
		 * @Available All Platforms except on all Mobile Web platforms.
		 * @access Read and Write
		 */
		this.focusSkin = ""	
		
		
		/**
		 * Specifies a general or descriptive text for the TextBox widget.
		 * @property {String}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.text = ""	
		
		
		/**
		 * Specifies the maximum number of characters that the text field can accept.
		 * @property {Number}
		 * @Available All Platforms except Mobile Web(basic)
		 * @access Read and Write
		 */
		this.maxTextLength = 1
		
		
		/**
		 * Specifies the type of input characters that a user can enter into the TextBox widget.
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.textInputMode = 1
		
		
		/**
		 * When you interact with a TextBox widget, a keyboard is displayed. You can use this property to select the type of keyboard that you want to display.
		 * @property {Number}
		 * @Available All Platforms except on all Mobile Web (basic), Mobile Web (BJS) and it is device specific on Mobile Web (Advanced) platform.
		 * @access Read and Write
		 */
		this.keyBoardStyle = 1	
		
		
		/**
		 * Specifies the visibility of the widget.
		 * @property {Boolean}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.isVisible = true	
		
		/**
		 * Specifies the character capitalization behavior.
		 * @property {Number}
		 * @Available All Platforms except on all Mobile Web (basic), Mobile Web (BJS) and it is browser specific on Mobile Web (Advanced) platform.
		 * @access Read and Write
		 */
		this.autoCapitalize = 1
		
		/**
		 * The placeholder attribute specifies a short hint that describes the expected value of an input field (example, a sample value or a short description of the expected format). 
		 * @property {String}
		 * @Available All Platforms except Mango and Mobile Web (basic/BJS)
		 * @access Read and Write
		 */
		this.placeholder = ""				
		
		//TextBox - Layout Configuration Properties starts here
		
		/**
		 * Specifies percentage of width to be allocated by its parent widget widget. The parent widget space is distributed to its child widgets based on this weight factor. All its child widgets should sum up to 100% of weight except when placed in kony.ui.ScrollBox.
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.containerWeight = 1
		
		/**
		 * Specifies the space between the content of the widget and the widget boundaries.
		 * @property {Array}
		 * @Available All Platforms except Mobile Web(basic).
		 * @access Read and Write
		 */
		this.padding = []	
		
		/**
		 * Specifies the space around a widget.
		 * @property {Array}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.margin = []
		
		/**
		 * Specifies the alignment of the text for a TextBox with respect to its boundaries.
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.contentAlignment = 1
		
		//TextBox - Platform Specific Properties Starts here
		
		/**
		 * Specifies the property to manage copy and paste of text in the textbox.
		 * @property {Number}
		 * @Available iPhone,iPad
		 * @access Read and Write
		 */
		this.pasteboardType = 1	
		
		/**
		 * Specifies if the text to be displayed in action key of the keyboard.
		 * @property {Number}
		 * @Available iPhone,iPad
		 * @access Read and Write
		 */
		this.keyboardActionLabel = 1
		
		/**
		 * The values you enter in the TextBox are matched against this list and possible matches are displayed.
		 * @property {Array}
		 * @Available BlackBerry,Android,Windows Mobile 
		 * @access write
		 */
		this.filterlist = []
		
		/**
		 * Specifies the appearance of the Textbox as Search view or a textbox to accept text input. 
		 * @property {Number}
		 * @Available iPhone,iPad,Mobile Web (Advanced),Andriod
		 * @access Read and Write
		 */
		this.viewType = 1	
		
		/**
		 * Specifies the skin that must be used to block the interface until the action in progress (for example,a service call) is completed.
		 * @property {String}
		 * @Available Mobile Web (Advanced),SPA (iPhone/Android/BlackBerry/Windows NTH)/Playbook
		 * @access Read and Write
		 */
		this.blockedUISkin = ""	
		
		/**
		 * Specifies the skin that is applied to each item in the native popup (the list of items are displayed and a pop up appears just below the text field) that appears when you enter a value in the TextBox.
		 * @property {String}
		 * @Available BlackBerry 
		 * @access Read and Write
		 */
		this.nativeListFieldSkin = ""

		/**
		 * Specifies the skin that is applied to a focused item in the native popup (the list of items are displayed and a pop up appears just below the textfield) that appears when you enter a value in the TextBox.
		 * @property {String}
		 * @Available BlackBerry 
		 * @access Read and Write
		 */
		this.nativeListFieldFocusSkin = ""
		
				
		/**
		 * Specifies the look and feel of a widget when the cursor hovers on the widget.
		 * @property {String}
		 * @Available windows 8,Desktop Web
		 * @access Read and Write
		 */
		this.hoverSkin = ""	
		
	
     	//TextBox - Events starts here.
	
		/**
		 * This event is a callback that is invoked by the platform then the user performs a click action on the  Cancel button. This event is triggered only when the viewType is set as TEXTBOX_VIEW_TYPE_SEARCH_VIEW.
		 * @property {Event}
		 * @Available iOS platform only
		 * @access Read and Write
		 */
		this.onCancel = new Event()
		
		/**
		 * This event is a callback that is invoked by the platform then the user performs a click action on the Go or Enter button.
		 * @property {Event}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.onDone = new Event() 
		
		/**
		 * This is an event callback that is invoked by the platform when the user clicks within the TextBox and is about to start editing.
		 * @property {Event}
		 * @Available iPhone,iPad
		 * @access Read and Write
		 */
		this.onBeginEditing = new Event() 
		
		/**
		 * This is an event callback that is invoked by the platform when the user performs one of the actions.
		 * @property {Event}
		 * @Available iPhone,iPad
		 * @access Read and Write
		 */
		this.onEndEditing = new Event()
	
	
	    /**
		 * This is an event callback triggered when text in the text box changes. This event is not fired when the text is changed programmatically.
		 * @property {Event}
		 * @Available All Platforms except Mobile Web(basic/BJS) and J2ME.
		 * @access Read and Write
		 */
		this.onTextChange = new Event()
	
	    /**
		 * This event allows the developer to execute custom javascript function before the onClick callback of the widget is invoked. This is applicable only for Mobile Web channel. The function must exist in a javascript file under project>module>js folder.
		 * @property {Event}
		 * @Available Mobile Web(Advanced) and SPA (iPhone/Android/BlackBerry/Windows NTH)/Playbook
		 * @access Read and Write
		 */
		this.preOnclickJS = new Event()
	
	    /**
		 * This event allows the developer to execute custom javascript function after the onClick callback of the widget is invoked. This is applicable only for Mobile Web channel.The function must exist in a javascript file under project>module>js folder.
		 * @property {Event}
		 * @Available Mobile Web(Advanced) and SPA (iPhone/Android/BlackBerry/Windows NTH)/Playbook
		 * @access Read and Write
		 */
		this.postOnclickJS = new Event()
		
		/**
		 * This is an event that is invoked when the key is pressed down.
		 * @property {Event}
		 * @Available Desktop Web
		 * @access Read and Write
		 */
		this.onKeyDown = new Event() 
	
	
	    /**
		 * This is an event that is invoked when the key is up.
		 * @property {Event}
		 * @Available Desktop Web
		 * @access Read and Write
		 */
		this.onKeyUp = new Event()
	
		
	
	    // Textbox - Methods Starts here

        /**
	     * This method specifies the widget that must be enabled or disabled.
		 * @param enabled{Boolean} Indicates widget whether true or false.<b>Mandatory</b>
		 * @Available All Platforms except on Map widget for SPA platform 
		 * @access Write
		 */
        this.setEnabled = function (/**Boolean*/enabled) {}	
    	
	
	    /**
	     * This method specifies the widget on which there must be focus. 
		 * @param focus{Boolean} Indicates focus is set on a widget.<b>Mandatory</b>
		 * @Available All Platforms 
		 * @access Write
		 */
        this.setFocus = function (/**Boolean*/focus) {}	 
		
		
		/**
	     * Specifies the method to set the visibility of the widget.
		 * @param visible{Boolean} Indicates visibility on a widget.<b>Mandatory</b>
		 * @Available All Platforms except on all Mobile Web platforms
		 * @access Write
		 */
		this.setVisibility = function (/**Boolean*/visible) {}	
	
	    /**
	     * This method enables you to set the badge value to the given widget at the upper, right corner of the widget.
		 * @param badgeText{String} Specifies the Text value that appears within the badge.<b>Mandatory</b>
		 * @param skin{String}Specifies the background color for the badge.
		 * @Available iPhone,iPad 
		 * @access Write
		 * @usage <pre> 
	    //To set a badge value with skin "badgeSkin" on a box with ID hbx1 placed on a form frm1, use the following code:<br/>
		frm1.hbx1.setBadge("2","badgeSkin");</pre>
		 */
		this.setBadge = function (/**String*/badgeText,/**String*/skin) {}

        /**
	     * This method enables you to read the badge value (if any) attached to the given widget.
		 * @return {String} Reference to the gesture is returned
		 * @Available iPhone,iPad 
		 * @access Write
		 * @usage <pre> 
	    //To get a badge value on a box with ID hbx1 placed on a form frm1, use the following code:<br/>
		var badgeVal =frm1.hbx1.getBadge();<br/>
		alert("badge value is::"+badgeVal);</pre>
		 */
		this.getBadge = function () {}
	}
	
	//TextBox2 Widget Properties are defined here 
	ui.TextBox2 = 
	/**
	 * Creates a new TextBox2 object
	 * @class kony.ui.TextBox2
	 * @returns {kony.ui.TextBox2}
	 */
	function TextBox2(basicProperties, layoutProperties, platformSpecificProperties){
	
	    //TextBox2 - Basic Properties starts here
		
	 	/**
		 * Defines a string of alpha numeric characters that uniquely identifies a widget within an application.
		 * @property {String}
		 * @Mandatory Yes
		 * @Available All Platforms
		 * @access Read
		 */
		this.id = ""	
		
		/**
		 * Specifies custom JS Object with the key,value pairs that a developer can use to store the context with the widget. 
		 * @property {Object}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.info = {}
		
		/**
		 * Specifies the look and feel of the widget when not in focus.
		 * @property {String}
		 * @Available All Platfroms
		 * @access Read and Write
		 */
		this.skin = ""	
		
		
		/**
		 * This is a skin property and it determines the look and feel of the widget when in focus .
		 * @property {String}
		 * @Available All Platforms except on all Mobile Web platforms.
		 * @access Read and Write
		 */
		this.focusSkin = ""	
		
		
		/**
		 * Specifies a general or descriptive text for the TextBox widget.
		 * @property {String}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.text = ""	
		
		
		/**
		 * Specifies the maximum number of characters that the text field can accept.
		 * @property {Number}
		 * @Available All Platforms except Mobile Web(basic)
		 * @access Read and Write
		 */
		this.maxTextLength = 1
		
		
		/**
		 * Specifies the type of input characters that a user can enter into the TextBox widget.
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.textInputMode = 1
		
		
		/**
		 * When you interact with a TextBox widget, a keyboard is displayed. You can use this property to select the type of keyboard that you want to display.
		 * @property {Number}
		 * @Available All Platforms except on all Mobile Web (basic), Mobile Web (BJS) and it is device specific on Mobile Web (Advanced) platform.
		 * @access Read and Write
		 */
		this.keyBoardStyle = 1	
		
		
		/**
		 * Specifies the visibility of the widget.
		 * @property {Boolean}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.isVisible = true	
		
		/**
		 * Specifies the character capitalization behavior.
		 * @property {Number}
		 * @Available All Platforms except on all Mobile Web (basic), Mobile Web (BJS) and it is browser specific on Mobile Web (Advanced) platform.
		 * @access Read and Write
		 */
		this.autoCapitalize = 1
		
		/**
		 * The placeholder attribute specifies a short hint that describes the expected value of an input field (example, a sample value or a short description of the expected format). 
		 * @property {String}
		 * @Available All Platforms except Mango and Mobile Web (basic/BJS)
		 * @access Read and Write
		 */
		this.placeholder = ""
		
		/**
		 * Specifies the accessiblity configuration property for the widget.
		 * @property {Object}
		 * @Available iPhone, Android, SPA-iPhone, and SPA-Android Platforms
		 * @access Read and Write
		 * @usage <pre>
		 /* accessibilityConfig =  {
				"a11yHidden": false,
				"a11yValue": "Your text goes here",
				"a11yLabel": "Your text goes here",
				"a11yHint": "Your text goes here"
			},
		*/
		this.accessibilityConfig = {}

		//TextBox2 - Layout Configuration Properties starts here
		

		/**
		 * Specifies the height of the textbox in terms of percentage. The percentage is with reference to the value of containerHeightReference property.
		 * @property {Number}
		 * @Available All Platforms except Server side Mobile Web platform
		 * @access Read and Write
		 */
		this.containerHeight = 0
	
		/**
		 * Specifies the reference of the height of the container based on option that you set for containerHeight.
		 * @property {Number}
		 * @Available All Platforms except Server side Mobile Web platform
		 * @access Read and Write
		 */
		this.containerHeightReference = 0	
		
		
		/**
		 * Specifies the height of the container based on the TEXTBOX_DEFAULT_PLATFORM_HEIGHT or TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT or TEXTBOX_CUSTOM_HEIGHT.
		 * @property {Number}
		 * @Available All Platforms except Server side Mobile Web
		 * @access Read and Write
		 */
		this.containerHeightMode = 0


		/**
		 * Specifies percentage of width to be allocated by its parent widget widget. The parent widget space is distributed to its child widgets based on this weight factor. All its child widgets should sum up to 100% of weight except when placed in kony.ui.ScrollBox.
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.containerWeight = 0
		
		/**
		 * Specifies the space between the content of the widget and the widget boundaries.
		 * @property {Array}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.padding = []	
		
		/**
		 * Specifies the space around a widget.
		 * @property {Array}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.margin = []
		
		/**
		 * Specifies the alignment of the text for a TextBox with respect to its boundaries.
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.contentAlignment = 1
		
		
		//TextBox2 - Platform Specific Properties Starts here
		
		/**
		 * This property enables an application to share data within the application or with another application using system-wide or application-specific pasteboards.
		 * @property {Number}
		 * @Available iPhone,iPad
		 * @access Read and Write
		 */
		this.pasteboardType = 0	
		
		/**
		 * Specifies if the text to be displayed in action key of the keyboard.
		 * @property {Number}
		 * @Available iPhone,iPad
		 * @access Read and Write
		 */
		this.keyboardActionLabel = 0
		
		/**
		 * The values you enter in the TextBox are matched against this list and possible matches are displayed.
		 * @property {Array}
		 * @Available BlackBerry,Android,Windows Mobile 
		 * @access write
		 */
		this.filterList = []
		
		
		/**
		 * Specifies the appearance of the Textbox as Search view or a textbox to accept text input. 
		 * @property {Number}
		 * @Available iPhone,iPad,Mobile Web (Advanced),Andriod
		 * @access Read and Write
		 */
		this.viewType = 0	
		
		/**
		 * Specifies the skin that must be used to block the interface until the action in progress (for example,a service call) is completed.
		 * @property {String}
		 * @Available Mobile Web (Advanced),SPA(iPhone/Android/BlackBerry/Windows NTH)/Playbook
		 * @access Read and Write
		 */
		this.blockedUISkin = ""	
		
		/**
		 * Specifies the skin that is applied to each item in the native popup (the list of items are displayed and a pop up appears just below the text field) that appears when you enter a value in the TextBox.
		 * @property {String}
		 * @Available BlackBerry 
		 * @access Read and Write
		 */
		this.nativeListFieldSkin = ""

		/**
		 * Specifies the skin that is applied to a focused item in the native popup (the list of items are displayed and a pop up appears just below the textfield) that appears when you enter a value in the TextBox.
		 * @property {String}
		 * @Available BlackBerry 
		 * @access Read and Write
		 */
		this.nativeListFieldFocusSkin = ""
		
		
		
		/**
		 * Specifies the look and feel of a widget when the cursor hovers on the widget.
		 * @property {String}
		 * @Available windows 8,Desktop Web
		 * @access Read and Write
		 */
		this.hoverSkin = ""	
	
		/**
		 * Specifies the layout changes that occur due to the animations applied/removed on other widgets. 
		 * @property {Object}
		 * @Available iOS and Android Platforms
		 * @access Read and Write
		 */
		this.layoutAnimConfig = {}
	
     	//TextBox2 - Events starts here.
	
		/**
		 * This event is a callback that is invoked by the platform then the user performs a click action on the Go or Enter button.
		 * @property {Event}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.onDone = new Event() 
		
		/**
		 * This is an event callback that is invoked by the platform when the user clicks within the TextBox and is about to start editing.
		 * @property {Event}
		 * @Available iPhone,iPad
		 * @access Read and Write
		 */
		this.onBeginEditing = new Event() 
		
		/**
		 * This is an event callback that is invoked by the platform when the user performs one of the actions 
		 * @property {Event}
		 * @Available iPhone,iPad
		 * @access Read and Write
		 */
		this.onEndEditing = new Event()
	
	    /**
		 * This is an event callback triggered when text in the text box changes. This event is not fired when the text is changed programmatically.
		 * @property {Event}
		 * @Available All Platforms except Mobile Web(basic/BJS) and J2ME.
		 * @access Read and Write
		 */
		this.onTextChange = new Event()
	
	    /**
		 * This event allows the developer to execute custom javascript function before the onClick callback of the widget is invoked. This is applicable only for Mobile Web channel. The function must exist in a javascript file under project>module>js folder.
		 * @property {Event}
		 * @Available Mobile Web(Advanced) and SPA (iPhone/Android/BlackBerry/Windows NTH)/Playbook
		 * @access Read and Write
		 */
		this.preOnclickJS = new Event()
	
	    /**
		 * This event allows the developer to execute custom javascript function after the onClick callback of the widget is invoked. This is applicable only for Mobile Web channel.The function must exist in a javascript file under project>module>js folder.
		 * @property {Event}
		 * @Available Mobile Web(Advanced) and SPA (iPhone/Android/BlackBerry/Windows NTH)/Playbook
		 * @access Read and Write
		 */
		this.postOnclickJS = new Event()
		
		
		/**
		 * This is an event that is invoked when the key is pressed down.
		 * @property {Event}
		 * @Available Desktop Web
		 * @access Read and Write
		 */
		this.onKeyDown = new Event() 
	
	
	    /**
		 * This is an event that is invoked when the key is up.
		 * @property {Event}
		 * @Available Desktop Web
		 * @access Read and Write
		 */
		this.onKeyUp = new Event()
	
		
	    //TextBox2 - Methods Starts here
		
		/**
	     * This method specifies the widget that must be enabled or disabled.
		 * @param enabled{Boolean} Indicates widget whether true or false.<b>Mandatory</b>
		 * @Available All Platforms except on Map widget for SPA platform 
		 * @access Write
		 */
        this.setEnabled = function (/**Boolean*/enabled) {}	
    		
	
	    /**
	     * This method specifies the widget on which there must be focus. 
		 * @param focus{Boolean} Indicates focus is set on a widget.<b>Mandatory</b>
		 * @Available All Platforms 
		 * @access Write
		 */
        this.setFocus = function (/**Boolean*/focus) {}	 
		
		
		/**
	     * Specifies the method to set the visibility of the widget.
		 * @param visible{Boolean} Indicates visibility on a widget.<b>Mandatory</b>
		 * @Available All Platforms except on all Mobile Web platforms
		 * @access Write
		 */
		this.setVisibility = function (/**Boolean*/visible) {}	
	
	    /**
	     * This method enables you to set the badge value to the given widget at the upper, right corner of the widget.
		 * @param badgeText{String} Specifies the Text value that appears within the badge.<b>Mandatory</b>
		 * @param skin{String}Specifies the background color for the badge.
		 * @Available iPhone,iPad 
		 * @access Write
		 * @usage <pre> 
	    //To set a badge value with skin "badgeSkin" on a box with ID hbx1 placed on a form frm1, use the following code:<br/>
		frm1.hbx1.setBadge("2","badgeSkin");</pre>
		 */
		this.setBadge = function (/**String*/badgeText,/**String*/skin) {}

        /**
	     * This method enables you to read the badge value (if any) attached to the given widget.
         * @return {String}	Reference to the gesture is returned.	 
		 * @Available iPhone,iPad 
		 * @access Write
		 * @usage <pre> 
	    //To get a badge value on a box with ID hbx1 placed on a form frm1, use the following code:<br/>
		var badgeVal =frm1.hbx1.getBadge();<br/>
		alert("badge value is::"+badgeVal);</pre>
		 */
		this.getBadge = function () {}
	}
	
		
    //Link Widget properties are defined here
    ui.Link =
     /**
     * Creates a new Link object
     * @class kony.ui.Link
     * @returns {kony.ui.Link}
     */
    function Link ( basicProperties,layoutProperties,platformSpecificProperties){
        
		//Link - Basic Properties Starts here
		
		/**
         * Defines a string of alpha numeric characters that uniquely identifies a widget within an application.
         * @property {String}
         * @Mandatory Yes
         * @Available All Platforms
         * @access Read
         */
        this.id = ""
	    
		/**
		 * Specifies custom JS Object with the key,value pairs that a developer can use to store the context with the widget. 
		 * @property {Object}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.info = {}	
		
		/**
         * Specifies the look and feel of the Link when not in focus. 
         * @property {String}
         * @Available All Platforms
         * @access Read and Write
         */
        this.skin = ""
		
		/**
         * Specifies the look and feel of the Link when in focus. 
		 * @property {String}
		 * @Available All Platforms except on all Mobile Web platforms.
		 * @access Read and Write
		 */
		this.focusSkin = ""

        /**
		 * Specifies a general or descriptive Link for the widget.   
		 * @property {String}
		 * @Available All Platforms 
		 * @access Read and Write
		 */
        this.text = ""

        /**
    	 * specifies the property to set widget visibility.  
		 * @property {Boolean}
		 * @Available All Platforms
		 * @access Read and Write
		 */
        this.isVisible = true
		
		/**
		 * Specifies the accessiblity configuration property for the widget.
		 * @property {Object}
		 * @Available iPhone, Android, SPA-iPhone, and SPA-Android Platforms
		 * @access Read and Write
		 * @usage <pre>
		 /* accessibilityConfig =  {
				"a11yHidden": false,
				"a11yValue": "Your text goes here",
				"a11yLabel": "Your text goes here",
				"a11yHint": "Your text goes here"
			},
		*/
		this.accessibilityConfig = {}

        // Link-Layout configuration properties starts here.
	
        /**
         * Specifies percentage of width to be allocated by its parent widget widget. The parent widget space is distributed to its child widgets based on this weight factor. All its child widgets should sum up to 100% of weight except when placed in kony.ui.ScrollBox. 
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read and Write
		 */
        this.containerWeight = 0

        /**
         * specifies the space between the content of the widget and the widget boundaries. 
		 * @property {Array}
		 * @Available All Platforms except Mobile Web (basic).
		 * @access Read and Write 
		 */
		this.padding = []

        /**
         * Specifies the space around a widget.
		 * @property {Array} 
		 * @Available All Platforms except Mobile Web (basic) and Win Mobile6x
		 * @access Read and Write
		 */
     	this.margin = []
        
		
        // Link-Platform Specific properties start here.
		
        /**
         * A context menu is a menu that appears upon clicking a widget. A context menu typically offers a limited set of choices that are applicable for that widget.
		 * @property {Array}
		 * @Available Android,Android Tablet,BlackBerry,Windows Phone/Windows Kiosk 
		 * @access Read and Write
         */
        this.contextMenu = []

        /**
         * Specifies the skin that must be used to block the interface until the action in progress (for example, a service call) is completed. 
		 * @property {String}
		 * @Available Mobile Web(Advanced),SPA(iPhone/Android/BlackBerry/Windows NTH)/Playbook 
		 * @access Read and Write
		 */
    	this.blockedUISkin = ""
		
		/**
		 * Specifies the hint text when the cursor hovers over a widget.
		 * @property {String}
		 * @Available windows 8, Desktop Web
		 * @access Read and Write
		 */
		this.toolTip = ""	
		
		/**
		 * Specifies the look and feel of a widget when the cursor hovers on the widget.
		 * @property {String}
		 * @Available windows 8, Desktop Web
		 * @access Read and Write
		 */
		this.hoverSkin = ""	

		/**
		 * Specifies the layout changes that occur due to the animations applied/removed on other widgets. 
		 * @property {Object}
		 * @Available iOS and Android Platforms
		 * @access Read and Write
		 */
		this.layoutAnimConfig = {}
		
		// Link -Events Starts here
		
		/**
		 * An event callback is invoked by the platform when the user performs a click action on the widget.
		 * @property {Event}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.onClick = new Event() 
		
        /**
         * This event allows the developer to execute custom javascript function before the onClick callback of the Link is invoked. This is applicable only for Mobile Web channel. The function must exist in a javascript file under project>module>js folder.
		 * @property {Event}
		 * @Available Mobile Web(Advanced),SPA (iPhone/Android/BlackBerry/Windows NTH)/Playbook 
		 * @access Read and Write
		 */
        this.preOnclickJS = new Event()

        /**
         * This event allows the developer to execute custom javascript function after the onClick callback of the Link is invoked. This is applicable only for Mobile Web channel.The function must exist in a javascript file under project>module>js folder.
		 * @property {Event}
		 * @Available Mobile Web(Advanced), SPA (iPhone/Android/BlackBerry/Windows NTH)/Playbook 
		 * @access Read and Write
		 */
		this.postOnclickJS = new Event()
    

        //Link - Methods Starts here

        /**
	     * This method specifies the widget that must be enabled or disabled.
		 * @param enabled{Boolean} Indicates widget whether true or false.<b>Mandatory</b>
		 * @Available All Platforms except on Map widget for SPA platform 
		 * @access Write
		 */
        this.setEnabled = function (/**Boolean*/enabled) {}	
    	
	
	    /**
	     * This method specifies the widget on which there must be focus. 
		 * @param focus{Boolean} Indicates focus is set on a widget.<b>Mandatory</b>
		 * @Available All Platforms 
		 * @access Write
		 */
        this.setFocus = function (/**Boolean*/focus) {}	 
		
		
		/**
	     * Specifies the method to set the visibility of the widget.
		 * @param visible{Boolean} Indicates visibility on a widget.<b>Mandatory</b>
		 * @Available All Platforms except on all Mobile Web platforms
		 * @access Write
		 */
		this.setVisibility = function (/**Boolean*/visible) {}	
	}
		
	
	//Browser Widget properties are defined here
	ui.Browser = 
	/**
	 * Creates a new Browser object
	 * @class kony.ui.Browser
	 * @returns {kony.ui.Browser}
	 */
	function Browser (basicProperties,layoutProperties,platformSpecificProperties){
	
	    //Browser-Basic Properties starts here
	
	 	/**
		 * Defines a string of alpha numeric characters that uniquely identifies a widget within an application.
		 * @property {String}
		 * @Mandatory Yes
		 * @Available All Platforms
		 * @access Read
		 */
		this.id = ""
		
		/**
		 * Specifies custom JS Object with the key,value pairs that a developer can use to store the context with the widget. 
		 * @property {Object}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.info = {}
		
		/**
		 * Specifies the Property to set widget visibility.   
		 * @property {Boolean}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.isVisible = true
		
		/**
		 * Specifies the  configurations for the requested URL in key-value pairs as a JavaScript object or Lua table. 
		 * @property {Object}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.requestURLConfig = {}
		
		/**
		 * Specifies the html content for the Browser widget. 
		 * @property {String}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.htmlString= ""
		
		/**
		 * Specifies if Zoom (ability to change the scale of the view area) must be enabled. 
		 * @property {Boolean}
		 * @Available All Platforms except BlackBerry.
		 * @access Read and Write
		 */
		this.enableZoom = true	

		/**
		 * Specifies if the Browser widget must support the detection of phone numbers in the web page and display the phone numbers as clickable Phone links. 
		 * @property {Boolean}
		 * @Available All Platforms On BlackBerry platform, the default value is set based on the device constraints.
		 * @access Read and Write
		 */
		this.detectTelNumber = true

		//Browser-Layout Configuration Properties starts here
		
		/**
		 * Specifies percentage of width to be allocated by its parent widget widget.The parent's widget space is distributed to its child widgets based on this weight factor.All its child widgets should sum up to 100% of weight except when placed in kony.ui.ScrollBox. 
		 * @property {Number}
		 * @Available All Platforms except Win Mobile 6x.
		 * @access Read and Write
		 */
		this.containerWeight = 0
		
		/**
		 * Specifies the space around a widget.
		 * @property {Array}
		 * @Available All Platforms except Mobile Web (basic).
		 * @access Read and Write
		 */
		this.margin = []
		
		/**
		 * Specifies the layout changes that occur due to the animations applied/removed on other widgets. 
		 * @property {Object}
		 * @Available iOS and Android Platforms
		 * @access Read and Write
		 */
		this.layoutAnimConfig = {}
	
	    //Browser - Events Starts here
	
	    /**
		 * An event callback which gets invoked by the platform when the given request URL is successful in loading the data. This event is called only for the given request URL, but not for the subsequent web navigation requests.
		 * @property {Event}
		 * @Available All Platforms except Windows Phone/Windows Kiosk.
		 * @access Read and Write
		 */
		this.onSuccess= new Event()

		
		/**
		 * An event callback which gets invoked by the platform when the given request URL is failed to load the data. This event is called only for the given request URL, but not for the subsequent web navigation request failures.
		 * @property {Event}
		 * @Available All Platforms except Windows Phone/Windows Kiosk.
		 * @access Read and Write
		 */
		this.onFailure= new Event()
		
		/**
		 * An event callback which gets invoked by the platform before browser widget navigates to a new URL. This is useful in scenarios where the developer wants to keep track of the URLs that the browser field navigates to. For example, in a payment flow (that is been executed inside a browser widget) on successful redirection to a payment confirmation page the developer would like to take the user to a new native form. The return value from this function determines how the browser widget handles the original request. If a false value is returned then the browser widget assumes that the developer has handled the request. If a true value is returned it continues navigation to the original URL.
		 * @property {Event}
		 * @param eventobject{widgetid} A unique id that identifies the browser widget.<b>Mandatory</b>
		 * @param params{Object} An object that identifies the url params as key-values that contains - originalurl, requestmethod, and header as the supported keys.<b>Mandatory</b>
		 * @Available Available on iOS and Android/Android Tablet.
		 * @access Read and Write
		 */
		this.handleRequest= new Event()
		
    	
	    //Browser - Methods starts here
	
	    /**
		 * This method specifies whether the browser can navigate back into history. If the browser cache is empty then this method returns false and the goBack method has no effect.
		 * @return {Boolean} status
		 * @Available All Platforms except SPA
		 * @access Write
		 * @usage <pre>
		//Defining the properties for a Browser widget with requestURLConfig:requestUrlConf.</br>
		var requestUrlConf = {URL: "https://www.google.co.in/", requestMethod:constants.BROWSER_REQUEST_METHOD_GET};</br>
		var webBasic = {id : "browserID", isVisible:true, screenLevelWidget: false, requestURLConfig:requestUrlConf};</br>
		var webLayout = {containerWeight:100};</br>

        //Creating the Browser.</br>
		var browser = new kony.ui.Browser(webBasic, webLayout, {});</br>
		
		//calling canGoBack method</br>
		var canGoBck = webWidget.canGoBack();</br>
		alert("canGoBack?::"+canGoBck);</pre>
		 */
		this.canGoBack = function (){} 		
		
		/**
		 * This method specifies whether the browser can navigate forward into history. If the browser cache is empty then this method returns false and  goForward method has no effect.
		 * @return {Boolean} status
		 * @Available All Platforms except SPA
		 * @access Write
		 * @usage <pre>
		//Defining the properties for a Browser widget with requestURLConfig:requestUrlConf.</br> 
		var requestUrlConf = {URL: "https://www.google.co.in/", requestMethod:constants.BROWSER_REQUEST_METHOD_GET};</br> 
		var webBasic = {id : "browserID", isVisible:true, screenLevelWidget: false, requestURLConfig:requestUrlConf};</br> 
		var webLayout = {containerWeight:100};</br> 
		
		//Creating the Browser.</br>
		var browser = new kony.ui.Browser(webBasic, webLayout, {});</br>

	    //calling canGoForward method</br>
		var canGoForwrd = webWidget.canGoForward();</br>
		alert("canGoBack?::"+canGoForwrd);</pre>
		 */
		this.canGoForward = function (){} 
		
		/**
		 * This method clears the page history of the specified Browser.
		 * @Available All Platforms except SPA and iPhone
		 * @access Write
		 * @usage <pre>
		//Defining the properties for a Browser widget with requestURLConfig:requestUrlConf.</br> 
		var requestUrlConf = {URL: "https://www.google.co.in/", requestMethod:constants.BROWSER_REQUEST_METHOD_GET};</br>
		var webBasic = {id : "browserID", isVisible:true, screenLevelWidget: false, requestURLConfig:requestUrlConf};</br>
		var webLayout = {containerWeight:100};</br>
		
		//Creating the Browser.</br>
		var browser = new kony.ui.Browser(webBasic, webLayout, {});</br>
		
		//Calling clearHistory method to clear the browser history of a browser brws1 which is in Form frm1.</br>
		webwidget.clearHistory(frm1.brws1);</pre>
         */
		this.clearHistory = function (){} 

		/**
		 * This method provides you with the ability to navigate one step back in the browser history.
		 * @Available All Platforms except SPA 
		 * @access Write
		 * @usage <pre>
		//Defining the properties for a Browser widget with requestURLConfig:requestUrlConf which is JS object defined below.</br>
		var requestUrlConf = {URL: "https://www.google.co.in/", requestMethod:constants.BROWSER_REQUEST_METHOD_GET};</br>
		var webBasic = {id : "browserID", isVisible:true, screenLevelWidget: false, requestURLConfig:requestUrlConf};</br>
		var webLayout = {containerWeight:100};</br>
		
		//Creating the Browser.</br>
		var browser = new kony.ui.Browser(webBasic, webLayout, {});</br>
		
		//calling goBack method.</br>
		webWidget.goBack(); </pre> 
         */
		this.goBack = function (){} 
		
		/**
		 * This method provides you with the ability to navigate one step forward in the browser history.
		 * @Available All Platforms except SPA 
		 * @access Write
		 * @usage <pre>
		//Defining the properties for a Browser widget with requestURLConfig:requestUrlConf which is JS object defined below.</br>
        var requestUrlConf = {URL: "https://www.google.co.in/", requestMethod:constants.BROWSER_REQUEST_METHOD_GET};</br>
		var webBasic = {id : "browserID", isVisible:true, screenLevelWidget: false, requestURLConfig:requestUrlConf};</br>
		var webLayout = {containerWeight:100};</br>
		
		//Creating the Browser.</br>
		var browser = new kony.ui.Browser(webBasic, webLayout,{});</br>
		
		//calling goForward method.</br>
        webWidget.goForward(); </pre>
         */
		this.goForward = function(){}  
		
		/**
		 * This method provides you with the ability to reload the current web page.
		 * @Available All Platforms except SPA 
		 * @access Write
		 * @usage <pre>
		//Defining the properties for a Browser widget with requestURLConfig:requestUrlConf which is JS object defined below.</br>
		var requestUrlConf = {URL: "https://www.google.co.in/", requestMethod:constants.BROWSER_REQUEST_METHOD_GET};</br>
		var webBasic = {id : "browserID", isVisible:true, screenLevelWidget: false, requestURLConfig:requestUrlConf};</br>
		var webLayout = {containerWeight:100};</br>
		
		//Creating the Browser.</br>
		var browser = new kony.ui.Browser(webBasic, webLayout, {});</br>
		
		//calling reload method</br>
		webWidget.reload(); </pre>
		 */
		this.reload = function(){} 
	
        /**
	     * This method specifies the widget that must be enabled or disabled.
		 * @param enabled{Boolean} Indicates widget whether true or false.<b>Mandatory</b>
		 * @Available All Platforms except on Map widget for SPA platform 
		 * @access Write
		 */
        this.setEnabled = function (/**Boolean*/enabled) {}	
    	
	
	    /**
	     * This method specifies the widget on which there must be focus. 
		 * @param focus{Boolean} Indicates focus is set on a widget.<b>Mandatory</b>
		 * @Available All Platforms 
		 * @access Write
		 */
        this.setFocus = function (/**Boolean*/focus) {}	 
		
		
		/**
	     * Specifies the method to set the visibility of the widget.
		 * @param visible{Boolean} Indicates visibility on a widget.<b>Mandatory</b>
		 * @Available All Platforms except on all Mobile Web platforms
		 * @access Write
		 */
		this.setVisibility = function (/**Boolean*/visible) {}	
	}


	//Camera Widget properties are defined here
	ui.Camera = 
	/**
	 * Creates a new Camera object
	 * @class kony.ui.Camera
	 * @returns {kony.ui.Camera}
	 */
	function Camera(basicProperties,layoutProperties,platformSpecificProperties){
	
	    //Camera-Basic Properties starts here
	
	 	/**
		 * Defines a string of alpha numeric characters that uniquely identifies a widget within an application.
		 * @property {String}
		 * @Mandatory Yes
		 * @Available All Platforms
		 * @access Read 
		 */
		this.id = ""
		
		/**
		 * Specifies custom JS Object with the key,value pairs that a developer can use to store the context with the widget. 
		 * @property {Object}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.info = {}
		
		/**
		 * Specifies the look and feel of the Camera when not in focus.
		 * @property {String}
		 * @Available All Platforms except on all Mobile Web platforms.
		 * @access Read and Write
		 */
		this.skin = ""
		
		/**
		 * This is a skin property and it determines the look and feel of the widget when in focus.
		 * @property {String}
		 * @Available All Platforms except on all Mobile Web platforms.
		 * @access Read and Write
		 */
		this.focusSkin = ""	
		
		/**
		 * Specifies a general or descriptive text for the Camera widget.
		 * @property {String}
		 * @Available All Platforms except on all Mobile Web platforms.
		 * @access Read and Write
		 */
		this.text = ""
		
		/**
		 * Specifies the Property to set widget visibility.   
		 * @property {Boolean}
		 * @Available All Platforms except on all Mobile Web platforms.
		 * @access Read and Write
		 */
		this.isVisible = true
		
		/**
		 * Specifies the compression level or picture quality with which the captured image must be stored. You can specify the compression level value between 0 (best picture quality) and 100 (low picture quality).
		 * @property {Number}
		 * @Available All Platforms except on all Mobile Web platforms.
		 * @access Read and Write
		 */
		this.compressionLevel = 0
		
		/**
		 * Specifies the ratio by which the captured image is reduced. You can set the scale factor between 10 and 100. If you set the scale factor as 100, no reduction takes place and the actual image is returned.
		 * @property {Number}
		 * @Available All Platforms except on all Mobile Web platforms.
		 * @access Read and Write
		 */
		this.scaleFactor = 0
		
		/**
		 * Indicates the length of the max side of the image to which the actual image should be scaled before returning the captured image to camera handler. 
		 * @property {Number}
		 * @Available All Platforms except on all Mobile Web platforms.
		 * @access Read and Write
		 */
		this.maxSideOfTheImage = 0
		
		/**
		 * Returns the base64 encoded string of the image raw bytes. 
		 * @property {String}
		 * @Available All Platforms except on all Mobile Web platforms.
		 * @access Read 
		 */
		this.base64 = ""
		
		/**
		 * Specifies the rawbytes representing an Image (usually the image captured from the camera) that can be used as a background for the Camera.  
		 * @property {Object}
		 * @Available All Platforms except on all Mobile Web platforms.
		 * @access Read 
		 */
		this.rawBytes = {}
		
		/**
		 * Specifies the accessiblity configuration property for the widget.
		 * @property {Object}
		 * @Available iPhone, Android, SPA-iPhone, and SPA-Android Platforms
		 * @access Read and Write
		 * @usage <pre>
		 /* accessibilityConfig =  {
				"a11yHidden": false,
				"a11yValue": "Your text goes here",
				"a11yLabel": "Your text goes here",
				"a11yHint": "Your text goes here"
			},
		*/
		this.accessibilityConfig = {}
		
	    // Camera- Layout Configuration Properties starts here
		
		/**
		 * Specifies percentage of width to be allocated by its parent widget widget.The parent widget space is distributed to its child widgets based on this weight factor.All its child widgets should sum up to 100% of weight except when placed in kony.ui.ScrollBox. 
		 * @property {Number}
		 * @Available All Platforms except on all Mobile Web platforms.
		 * @access Read and Write
		 */
		this.containerWeight = 0
		
		/**
		 * specifies the space between the content of the widget and the widget boundaries.
		 * @property {Array}
		 * @Available All Platforms except on all Mobile Web platforms.
		 * @access Read and Write
		 */
		this.padding = []
		
		/**
		 * Specifies the space around a widget.
		 * @property {Array}
		 * @Available All Platforms except Mobile Web (basic) and Win Mobile6x.
		 * @access Read and Write
		 */
		this.margin = []
        
		/**
		 * Specifies the alignment of the text on the camera with respect to its boundaries.
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.contentAlignment = 1
		
	    //Camera - Platform Specific Properties start here

		/**
		 * Specifies how the captured image must be stored. 
		 * @property {Number}
		 * @Available Android,iPhone,iPad,Windows7
		 * @access Read and Write
		 */
		this.accessMode = 0

		/**
		 * Specifies if the image must be stored as a PNG (Portable Network Graphics) or a JPEG (Joint Photographic Experts Group) image. 
		 * @property {Number}
		 * @Available iPhone and iPad
		 * @access Read and Write
		 */
		this.imageFormat = 0
		
		/**
		 * Specifies the captured image orientation. 
		 * @property {Number}
		 * @Available iPhone,iPad
		 * @access Read and Write
		 */
		this.captureOrientation = 0
		
		/**
		 * Specifies the Property to enable the photo crop capability,so that user should be able to crop the captured manually.  
		 * @property {Boolean}
		 * @Available Windows Phone (Mango) and Android/Android Tablet
		 * @access Read and Write
		 */
		this.enablePhotoCropFeature = true
		
		/**
		 * Specifies if the camera must have the native interface on camera view (an interface with the default platform controls for camera) or the user interface with custom options.
		 * @property {Boolean}
		 * @Available iPhone and iPad
		 * @access Read and Write
		 */
		this.nativeUserInterface = true
		
		/**
		 * Specifies the hint text when the cursor hovers over a widget.
		 * @property {String}
		 * @Available windows 8
		 * @access Read and Write
		 */
		this.toolTip = ""	
		
		/**
		 * Specifies the camera options that can be used on a form.
		 * @property {Object}
		 * @Available iPhone, iPad, Android/Android Tablet, Windows (Mango), Windows 8
		 * @access Read and Write
		 */
		this.cameraOptions = {}
		
		/**
		 * Specifies the overlay configuration parameters for overlaying a form.
		 * @property {Object}
		 * @Available iPhone, iPad, Android/Android Tablet, Windows (Mango), Windows 8
		 * @access Read and Write
		 */
		this.overlayConfig = {}
		
		/**
		 * Specifies the layout changes that occur due to the animations applied/removed on other widgets. 
		 * @property {Object}
		 * @Available iOS and Android Platforms
		 * @access Read and Write
		 */
		this.layoutAnimConfig = {}
		
		
		//Camera - Events Starts here
		/**
		 * Event callback invoked when a picture is captured.  
		 * @property {Event}
		 * @Available All Platforms except on all Mobile Web platforms.
		 * @access Write
		 */
		this.onCapture = new Event ()
	
	
	    //Camera - Methods Starts here
		
		/**
	     * This method specifies the widget that must be enabled or disabled.
		 * @param enabled{Boolean} Indicates widget whether true or false.<b>Mandatory</b>
		 * @Available All Platforms except on Map widget for SPA platform 
		 * @access Write
		 */
        this.setEnabled = function (/**Boolean*/enabled) {}	
    		
		/**
	     * This method allows you to close camera on all platforms. But on Andoid platform, this method is applicable only when an overlay form is enabled. 
		 * @Available All Platforms except on iPhone, iPad, Android, and Windows (mango) platform 
		 * @access Write
		 */
        this.closeCamera = function () {}	
		
		/**
	     * This method allows you to capture the picture when the camera is in preview mode. But in Android platform, this method is applicable only when an overlay form is enabled. 
		 * @Available All Platforms except on iPhone, iPad, Android, and Windows (mango) platform 
		 * @access Write
		 */
        this.takePicture = function () {}
	
		/**
	     * This method allows you to delete the rawbytes for the image captured from the camera.
		 * @param rawbytes{Number} Indicates the rawbytes for the image captured from the camera.<b>Mandatory</b>
		 * @Available Available on iPhone, iPad, Android, Android Tablet, and Windows Phone platforms 
		 * @access Write
		 */
        this.releaseRawBytes = function (/**Number*/rawbytes) {}	
	
	    /**
	     * This method specifies the widget on which there must be focus. 
		 * @param focus{Boolean} Indicates focus is set on a widget.<b>Mandatory</b>
		 * @Available All Platforms 
		 * @access Write
		 */
        this.setFocus = function (/**Boolean*/focus) {}	 
		
		
		/**
	     * Specifies the method to set the visibility of the widget.
		 * @param visible{Boolean} Indicates visibility on a widget.<b>Mandatory</b>
		 * @Available All Platforms except on all Mobile Web platforms
		 * @access Write
		 */
		this.setVisibility = function (/**Boolean*/visible) {}	
	}
	
	//Switch Widget properties are defined here
	ui.Switch = 
	/**
	 * Creates a new Switch object
	 * @class kony.ui.Switch
	 * @returns {kony.ui.Switch}
	 */
	function Switch(basicProperties,layoutProperties,platformSpecificProperties){
	
	    //Switch-Basic Properties starts here
	
	 	/**
		 * Defines a string of alpha numeric characters that uniquely identifies a widget within an application.
		 * @property {String}
		 * @Mandatory Yes
		 * @Available All Platforms
		 * @access Read
		 */
		this.id = ""
		
		/**
		 * Specifies custom JS Object with the key,value pairs that a developer can use to store the context with the widget. 
		 * @property {Object}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.info = {}
		
		/**
		 * Specifies a background skin for switch widget.
		 * @property {String}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.skin = ""
		
		/**
		 * This property is accessible only from code and it specifies the option of the Switch that must be shown as selected when rendered.
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.selectedIndex = 0
		
		/**
		 * specifies the Property to set widget visibility.   
		 * @property {Boolean}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.isVisible = true
		
		/**
		 * Specifies the accessiblity configuration property for the widget.
		 * @property {Object}
		 * @Available iPhone, Android, SPA-iPhone, and SPA-Android Platforms
		 * @access Read and Write
		 * @usage <pre>
		 /* accessibilityConfig =  {
				"a11yHidden": false,
				"a11yValue": "Your text goes here",
				"a11yLabel": "Your text goes here",
				"a11yHint": "Your text goes here"
			},
		*/
		this.accessibilityConfig = {}
		
		
	    //Switch-Layout Configuration Properties Starts here
		
		/**
		 * Specifies the space around a widget.
		 * @property {Array}
		 * @Available All Platforms except Mobile Web (basic).
		 * @access Read and Write
		 */
		this.margin = []

		/**
		 * The percentage of width to be allocated by its parent widget.The parent's widget space is distributed to its child widgets based on this weight factor. All its child widgets should sum up to 100% of weight except when placed in kony.ui.ScrollBox
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.containerWeight = 0	
		
		/**
		 * Specifies the layout changes that occur due to the animations applied/removed on other widgets. 
		 * @property {Object}
		 * @Available iOS and Android Platforms
		 * @access Read and Write
		 */
		this.layoutAnimConfig = {}
		
		
		//Switch - Events starts here
		
		/**
		 * An event callback that is invoked by the platform when there is a change in the default selected value.  
		 * @property {Event}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.onSlide = new Event ()
	
	    /**
         * This event allows the developer to execute custom javascript function before the onClick callback of the Link is invoked. This is applicable only for Mobile Web channel. The function must exist in a javascript file under project>module>js folder.
		 * @property {Event}
		 * @Available Mobile Web(Advanced),SPA (iPhone/Android/BlackBerry/Windows NTH)/Playbook 
		 * @access Read and Write
		 */
        this.preOnclickJS = new Event()

        /**
         * This event allows the developer to execute custom javascript function after the onClick callback of the Link is invoked. This is applicable only for Mobile Web channel.The function must exist in a javascript file under project>module>js folder.
		 * @property {Event}
		 * @Available Mobile Web(Advanced), SPA (iPhone/Android/BlackBerry/Windows NTH)/Playbook 
		 * @access Read and Write
		 */
		this.postOnclickJS = new Event()
    
	   
		//Switch - Methods Starts here
		
	    /**
	     * This method specifies the widget that must be enabled or disabled.
		 * @param enabled{Boolean} Indicates widget whether true or false.<b>Mandatory</b>
		 * @Available All Platforms except on Map widget for SPA platform 
		 * @access Write
		 */
        this.setEnabled = function (/**Boolean*/enabled) {}	
    	
	
	    /**
	     * This method specifies the widget on which there must be focus. 
		 * @param focus{Boolean} Indicates focus is set on a widget.<b>Mandatory</b>
		 * @Available All Platforms 
		 * @access Write
		 */
        this.setFocus = function (/**Boolean*/focus) {}	 
		
		
		/**
	     * Specifies the method to set the visibility of the widget.
		 * @param visible{Boolean} Indicates visibility on a widget.<b>Mandatory</b>
		 * @Available All Platforms except on all Mobile Web platforms
		 * @access Write
		 */
		this.setVisibility = function (/**Boolean*/visible) {}	
	}
	
	
	//PickerView Widget properties are defined here
	ui.PickerView = 
	/**
	 * Creates a new PickerView object
	 * @class kony.ui.PickerView
	 * @returns {kony.ui.PickerView}
	 */
	function PickerView(basicProperties,layoutProperties,platformSpecificProperties){
	
	    //PickerView-Basic Properties starts here
	
	 	/**
		 * Defines a string of alpha numeric characters that uniquely identifies a widget within an application.
		 * @property {String}
		 * @Mandatory Yes
		 * @Available All Platforms except on all Server side Mobile Web, Windows, SPA, and Desktop Web platforms
		 * @access Read
		 */
		this.id = ""
		
		/**
		 * Specifies custom JS Object with the key,value pairs that a developer can use to store the context with the widget. 
		 * @property {Object}
		 * @Available All Platforms except on all Server side Mobile Web, Windows, SPA, and Desktop Web platforms
		 * @access Read and Write
		 */
		this.info = {}
		
		/**
		 * Specifies the look and feel of the skin which is applied at the widget level.
		 * @property {String}
		 * @Available All Platforms except on all Server side Mobile Web, Windows, SPA, and Desktop Web platforms
		 * @access Read and Write
		 */
		this.skin = ""
		
		/**
		 * Specifies the look and feel of the PickerView widget when it is in focus.   
		 * @property {String}
		 * @Available All Platforms except iOS, Desktop Web, Windows, SPA, and on all Server side Mobile Web platforms.
		 * @access Read and Write
		 */
		this.focusSkin = ""
		
		/**
		 * Specifies the set of values that must be displayed for the user to make a selection from the available choices.
		 * @property {Array}
		 * @Available All Platforms except on all Server side Mobile Web, Windows, SPA, and Desktop Web platforms
		 * @access Read and Write
		 */
		this.masterData = []	
		
		/**
		 * Specifies the set of values from which you can make one or more selections. You must set the values from the code.
		 * @property {Array}
		 * @Available All Platforms except on all Server side Mobile Web, Windows, SPA, and Desktop Web platforms
		 * @access Read and Write
		 */
		this.masterDataMap = []
		
		/**
		 * Specifies a property to set widget visibility. 
		 * @property {Boolean}
		 * @Available All Platforms except on all Server side Mobile Web, Windows, SPA, and Desktop Web platforms
		 * @access Read and Write
		 */
		this.isVisible = true	
		
		/**
		 * Returns the array of selected key-value pairs selected from the masterdata representing the selected key value.
		 * @property {Array}
		 * @Available All Platforms except on all Server side Mobile Web, Windows, SPA, and Desktop Web platforms
		 * @access Read 
		 */
		this.selectedKeyValues = []
		
		/**
		 * If you create a PickerView with multiple values, you can choose to show specific values as selected when the PickerView is rendered. This returns the array of selected keys from the masterdata representing the selected key. 
		 * @property {Array}
		 * @Available All Platforms except on all Server side Mobile Web, Windows, SPA, and Desktop Web platforms
		 * @access Read and Write
		 */
		this.selectedKeys = []
		
		/**
		 * Specifies the accessiblity configuration property for the widget.
		 * @property {Object}
		 * @Available iPhone, Android, SPA-iPhone, and SPA-Android Platforms
		 * @access Read and Write
		 * @usage <pre>
		 /* accessibilityConfig =  {
				"a11yHidden": false,
				"a11yValue": "Your text goes here",
				"a11yLabel": "Your text goes here",
				"a11yHint": "Your text goes here"
			},
		*/
		this.accessibilityConfig = {}
		
		
	    //PickerView- Layout Configuration Properties Starts here
		
	    /**
		 * Specifies the space around a widget.
		 * @property {Array}
		 * @Available All Platforms except on all Server side Mobile Web, Windows, SPA, and Desktop Web platforms
		 * @access Read and Write
		 */
		this.margin = []

		/**
		 * Specifies percentage of width to be allocated by its parent widget widget.The parent widget space is distributed to its child widgets based on this weight factor.All its child widgets should sum up to 100% of weight except when placed in kony.ui.ScrollBox. 
		 * @property {Number}
		 * @Available All Platforms except on all Server side Mobile Web, Windows, SPA, and Desktop Web platforms
		 * @access Read and Write
		 */
		this.containerWeight = 0
		
		/**
		 * Specifies the layout changes that occur due to the animations applied/removed on other widgets. 
		 * @property {Object}
		 * @Available iOS and Android Platforms
		 * @access Read and Write
		 */
		this.layoutAnimConfig = {}
		
		
	    //PickerView - Event Starts here
		
		/**
		 * An event callback that is invoked by the platform when the component selection changes.
		 * @property {Event}
		 * @Available All Platforms except on all Server side Mobile Web, Windows, SPA, and Desktop Web platforms
		 * @access Read and Write
		 */
		this.onSelection = new Event ()	
		
	
	    //PickerView - Methods Starts here
		
	    /**
		 * This method Provides the ability to set the data for a given component with in the pickerview. 
		 * @param componentIndex{Number} Specifies the component data to be set to the pickerview.<b>Mandatory</b>
		 * @param ArrayofRows{Array} Specifies the data in array format.<b>Mandatory</b>
		 * @Available All Platforms except on all Server side Mobile Web, Windows, SPA, and Desktop Web platforms
		 * @access Write
		 * @usage <pre>
		//Defining the properties for a PickerView with id:"picker"</br>
		var pickerBasic = {id:"picker",info:{key:"PickerView"}, skin:"pickerSkin", focusSkin:"pickerFSkin", masterData:[[["y1","2009"], ["y2","2010"],["y3","2011"], 40],[["m1","Jan"], ["m2", "Feb"],["m3","Mar"], ["m4","Apr"], ["m5","May"],["m6","Jun"], ["m7","Jul"], 60]], isVisible:true, selectedKeys:["y2","m1"] };</br>
		var pickerLayout = {margin:[5,5,5,5], marginInPixel:true, widgetAlignment:constants.WIDGET_ALIGN_CENTER, hExpand:true, containerWeight:99};</br>
		
		//Creating the PickerView.</br>
		var picker = new kony.ui.PickerView(pickerBasic, pickerLayout, {});</br>
		
		//setComponentData method call
		picker.setComponentData(2,[["1","2008"] , ["2","2009"] , ["3","2010"], ["4", "2011"],["5", "2012"]]);</pre>
         */
		this.setComponentData = function (/**Number*/componentIndex,/**Array*/Arrayofrows)	{}

        /**
		 * This method allows you to set a particular value in the component data of a PickerView widget as selected.  
		 * @param key{String} Specifies the key of the component.<b>Mandatory</b>
		 * @param componentIndex{Number} Specifies the component data to be set to the pickerview.<b>Mandatory</b>
		 * @Available All Platforms except on all Server side Mobile Web, Windows, SPA, and Desktop Web platforms
		 * @access Write
		 * @usage <pre>
		//Defining the properties for a PickerView with id:"picker".</br>
		var pickerBasic = {id:"picker",info:{key:"PickerView"}, skin:"pickerSkin", focusSkin:"pickerFSkin", masterData:[[["y1","2009"],["y2","2010"], ["y3","2011"], 40],[["m1","Jan"], ["m2", "Feb"],["m3","Mar"], ["m4","Apr"], ["m5","May"],["m6","Jun"], ["m7","Jul"], 60]], isVisible:true, selectedKeys:["y2","m1"] };</br>
        var pickerLayout = {margin:[5,5,5,5], marginInPixel:true, widgetAlignment:constants.WIDGET_ALIGN_CENTER, hExpand:true, containerWeight:70};</br>
		
		//Creating the PickerView.</br>
		var picker = new kony.ui.PickerView(pickerBasic, pickerLayout, {});</br>

        //setSelectedKeyInComponent method call</br>
		picker.setSelectedKeyInComponent ("m2", 2);</pre>
         */
		this.setSelectedKeyInComponent = function (/**String*/key,/**Number*/componentIndex){}
	
	
	    /**
	     * This method specifies the widget that must be enabled or disabled.
		 * @param enabled{Boolean} Indicates widget whether true or false.<b>Mandatory</b>
		 * @Available All Platforms except on all Server side Mobile Web, Windows, SPA, and Desktop Web platforms
		 * @access Write
		 */
        this.setEnabled = function (/**Boolean*/enabled) {}	
    	
	
	    /**
	     * This method specifies the widget on which there must be focus. 
		 * @param focus{Boolean} Indicates focus is set on a widget.<b>Mandatory</b>
		 * @Available All Platforms except on all Server side Mobile Web, Windows, SPA, and Desktop Web platforms
		 * @access Write
		 */
        this.setFocus = function (/**Boolean*/focus) {}	 
		
		
		/**
	     * Specifies the method to set the visibility of the widget.
		 * @param visible{Boolean} Indicates visibility on a widget.<b>Mandatory</b>
		 * @Available All Platforms except on all Server side Mobile Web, Windows, SPA, and Desktop Web platforms
		 * @access Write
		 */
		this.setVisibility = function (/**Boolean*/visible) {}	
	}
	
	  
    //Slider Widget properties are defined here
	ui.Slider = 
	/**
	 * Creates a new Slider object
	 * @class kony.ui.Slider
	 * @returns {kony.ui.Slider}
	 */
	function Slider(basicProperties, layoutProperties, platformSpecificProperties){
	
	    //Slider-Basic Properties starts here
	 	/**
		 * Defines a string of alpha numeric characters that uniquely identifies a widget within an application.
		 * @property {String}
		 * @Mandatory Yes
		 * @Available All Platforms
		 * @access Read
		 */
		this.id = ""
 
        /**
		 * Specifies custom JS Object with the key,value pairs that a developer can use to store the context with the widget. 
		 * @property {Object}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.info = {}
		
		/**
		 * Specifies the Property to set widget visibility.   
		 * @property {Boolean}
		 * @Available All Platforms except SPA,Desktop Web and on all Mobile Web platforms
		 * @access Read and Write
		 */
		this.isVisible = true
		
		/**
		 * Specifies the skin to be applied to the background of the slider on left side of the thumb image.  
		 * @property {String}
		 * @Available All Platforms except SPA,Desktop Web and on all Mobile Web platforms.
		 * @access Read and Write
		 */
		this.leftSkin = ""
		
		/**
		 * Specifies the Skin to be applied to the background of the slider on right side of the thumb image.  
		 * @property {String}
		 * @Available All Platforms except SPA,Desktop Web and on all Mobile Web platforms
		 * @access Read and Write
		 */
		this.rightSkin = ""
		
		/**
		 * Specifies the image to indicate the thumb. You can select the image from the resources folder. 
		 * @property {String}
		 * @Available All Platforms except SPA,Desktop Web and on all Mobile Web platforms.
		 * @access Read and Write
		 */
		this.thumbImage = ""
		
		/**
		 * Specifies the image to indicate that there is focus on the thumb. You can select the image from the resources folder. 
		 * @property {String}
		 * @Available All Platforms except SPA, Desktop Web and on all Mobile Web platforms.
		 * @access Read and Write
		 */
		this.focusThumbImage = ""
		
		/**
		 * Specifies the value that must be displayed as selected when rendered.
		 * @property {Number}
		 * @Available All Platforms except SPA, Desktop Web and on all Mobile Web platforms.
		 * @access Read and Write
		 */
		this.selectedValue = 0
		
		/**
		 * Specifies the accessiblity configuration property for the widget.
		 * @property {Object}
		 * @Available iPhone, Android, SPA-iPhone, and SPA-Android Platforms
		 * @access Read and Write
		 * @usage <pre>
		 /* accessibilityConfig =  {
				"a11yHidden": false,
				"a11yValue": "Your text goes here",
				"a11yLabel": "Your text goes here",
				"a11yHint": "Your text goes here"
			},
		*/
		this.accessibilityConfig = {}
		
		//Slider-Layout Configuration Properties starts here
		
		/**
		 * Specifies the space around a widget.
		 * @property {Array}
		 * @Available All Platforms except SPA, Desktop Web and on all Mobile Web platforms
		 * @access Read and Write
		 */
		this.margin = []	
		
		/**
		 * The percentage of width to be allocated by its parent widget widget.The parent's widget space is distributed to its child widgets based on this weight factor. All its child widgets should sum up to 100% of weight except when placed in kony.ui.ScrollBox
		 * @property {Number}
		 * @Available All Platforms except SPA, Desktop Web and on all Mobile Web platforms.
		 * @access Read and Write
		 */
		this.containerWeight = 0	
		
        //Slider-PSP Properties starts here
                                
        /**
         * Specifies the view type of the Slider widget. The default option is SLIDER_VIEW_TYPE_DEFAULT. When you select this option an indicator is displayed on the slider widget. The other option is SLIDER_VIEW_TYPE_PROGRESS. When you select this option the indicator is not displayed. It represents the progress of an activity that is being completed in percentage. 
         * @property {Number}
         * @Available Desktop Web 
         * @access Read and Write
         */
        this.viewType = 0
                                
        /**
         * Specifies the orientation of the slider widget. You can select the orientation as horizontal or vertical. The options are SLIDER_HORIZONTAL_ORIENTATION and SLIDER_VERTICAL_ORIENTATION. 
         * @property {Number}
         * @Available Desktop Web 
         * @access Read 
        */
        this.orientation = 0

		
		/**
		 * Specifies the layout changes that occur due to the animations applied/removed on other widgets. 
		 * @property {Object}
		 * @Available iOS and Android Platforms
		 * @access Read and Write
		 */
		this.layoutAnimConfig = {}
		
		//Slider-Events Starts here
		
		/**
		 * An event callback that is invoked by the platform when there is a change in the default selected value.
		 * @property {Event}
		 * @Available All Platforms except SPA, Desktop Web and on all Mobile Web platforms.
		 * @access Read and Write
		 */
		this.onSlide = new Event ()
		
		/**
		 * An event callback that is invoked by the platform when the user makes a selection.
		 * @property {Event}
		 * @Available All Platforms except SPA, Desktop Web and on all Mobile Web platforms.
		 * @access Read and Write
		 */
		this.onSelection = new Event ()
	

        //Slider - Methods Starts here

        /**
	     * This method specifies the widget that must be enabled or disabled.
		 * @param enabled{Boolean} Indicates widget whether true or false.<b>Mandatory</b>
		 * @Available All Platforms except on Map widget for SPA platform 
		 * @access Write
		 */
        this.setEnabled = function (/**Boolean*/enabled) {}	
    		
	
	    /**
	     * This method specifies the widget on which there must be focus. 
		 * @param focus{Boolean} Indicates focus is set on a widget.<b>Mandatory</b>
		 * @Available All Platforms 
		 * @access Write
		 */
        this.setFocus = function (/**Boolean*/focus) {}	 
		 
		 
		/**
	     * Specifies the method to set the visibility of the widget.
		 * @param visible{Boolean} Indicates visibility on a widget.<b>Mandatory</b>
		 * @Available All Platforms except on all Mobile Web platforms
		 * @access Write
		 */
		this.setVisibility = function (/**Boolean*/visible) {}	
	}
	
		
	//DataGrid Widget properties are defined here
	ui.DataGrid = 
	/**
	 * Creates a new DataGrid object
	 * @class kony.ui.DataGrid
	 * @returns {kony.ui.DataGrid}
	 */
	function DataGrid (basicProperties,layoutProperties,platformSpecificProperties){
	
	    //DataGrid-Basic Properties starts here
	
	 	/**
		 * Defines a string of alpha numeric characters that uniquely identifies a widget within an application.
		 * @property {String,Construct only For review}
		 * @Mandatory Yes
		 * @Available All Platforms
		 * @access Read
		 */
		this.id = ""
	
	    /**
		 * Specifies custom JS Object with the key,value pairs that a developer can use to store the context with the widget. 
		 * @property {Object}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.info = {}
		
		/**
		 * Specifies the Property to set widget visibility on the form.   
		 * @property {Boolean}
		 * @Available All Platforms
		 * @access Read and Write
		 */
	    this.isVisible = true
	 
		/**
		 * This is a skin property. This property specifies the skin that must be applied to the Header row.   
		 * @property {String}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.headerSkin = ""
	    
		/**
		 * This is a skin property. This property specifies the skin that must be applied when the row is not in focus.  
		 * @property {String}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.rowNormalSkin = ""
		
		/**
		 * This is a skin property. This property specifies the skin that must be applied when the row is in focus.
		 * @property {String}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.rowFocusSkin = ""	
		
		/**
		 * Specifies the skin applied to the alternate rows.   
		 * @property {String}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.rowAlternateSkin = ""
		
		/**
		 * This property controls the visibility of the column headers of the DataGrid.   
		 * @property {Boolean}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.showColumnHeaders = true
		
		
		/**
		 * Specifies an option to make the datagrid as multi selectable row. The selected rows are indicated by highlighting the rows by focus skin.    
		 * @property {Boolean}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.isMultiSelect = true
		
		/**
		 * This property returns the data in the selected row of the Datagrid.
		 * @property {Object}
		 * @Available All Platforms
		 * @access Read 
		 */
		this.selectedItem = {}
		
		/**
		 * This property returns the user selected row index. 
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read 
		 */
		this.selectedIndex = 0

		/**
		 * Returns the list of user selected row objects.If "isMultiSelect" is set to false,the list will contain only one entry.  
		 * @property {Object}
		 * @Available All Platforms
		 * @access Read 
		 */
		this.selectedItems = {}
		
		/**
		 * Returns the list of user selected row object indexes.If "isMultiSelect" is set to false,the list will contain only one entry.  
		 * @property {Array}
		 * @Available All Platforms
		 * @access Read 
		 */
		this.selectedIndices = []	
		
		/**
		 * Returns the number of rows in the datagrid.  
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read 
		 */
		this.rowCount = 0
		
		/**
		 * Specifies the array of JS Objects which represents the actual data to be rendered in each row.Each element in array represents one row data. 
		 * @property {Array}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.data = []	
		
		/**
		 * When this property is set to false, the widget will be shown, the developer can set a different skin to show it is disabled, no action defined on this disable widget will be raised.   
		 * @property {Boolean}
		 * @Available Desktop Web Platform
		 * @access Read and Write
		 */
		this.enable = true
		
		
		
	    //DataGrid-Layout Configuration Properties starts here
		
		/**
		 * Specifies percentage of width to be allocated by its parent widget widget.The parent's widget space is distributed to its child widgets based on this weight factor. All its child widgets should sum up to 100% of weight except when placed in kony.ui.ScrollBox.
		 * @property {Number}
		 * @Available All Platforms except WinMobile 6x.
		 * @access Read and Write
		 */
		this.containerWeight = 0
		
		/**
		 * specifies the space between the content of the widget and the widget boundaries.
		 * @property {Array}
		 * @Available All Platforms except Mobile Web (basic).
		 * @access Read and Write
		 */
		this.padding = []
		
		/**
		 * Specifies the space around a widget.
		 * @property {Array}
		 * @Available All Platforms except Mobile Web (basic) and Win Mobile6x.
		 * @access Read and Write
		 */
		this.margin = []
		
		//DataGrid-Platform Specific Properties starts here
		
		/**
		 * Specifies the color of the grid line of the DataGrid. The color should be specified in the format of "RGBA" in hex. For example "FF224400".
		 * @property {String}
		 * @Available BlackBerry,Android
		 * @access Write
		 */
		this.gridlineColor = ""
		
		/**
		 * Returns the dataobject associated with the user selected row and column ID.
		 * @property {Object}
		 * @Available Desktop Web
		 * @access Read 
		 */
		this.selectedCellItem = {}
		
		/**
		 * Returns the user selected row index and the associated column id as specified by the developer while defining the columns. 
		 * @property {Array}
		 * @Available Desktop Web
		 * @access Read 
		 */
		this.selectedCellIndex = []
		
		/**
		 * Specifies the layout changes that occur due to the animations applied/removed on other widgets. 
		 * @property {Object}
		 * @Available iOS and Android Platforms
		 * @access Read and Write
		 */
		this.layoutAnimConfig = {}
		
		//DataGrid - Events Starts here
		
		/**
		 * Event callback invoked by the pllatform when a row is selected.   
		 * @property {Event}
		 * @Available All Platforms
		 * @access Write
		 */
		this.onRowSelected = new Event ()
		
	    //DataGrid-Methods starts here

	    /**
		 * This method allows you to add new data to the DataGrid. The new data is appended to the existing data. 
		 * @param data{Array}Specifies the JSObject that represents the row data as key value pairs.<b>Mandatory</b>
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>
		//Defining the properties for dataGrid.<br/>
		var dgridBasic = {id:"dgrid", info:{key:"This is datagrid"}, isVisible:true, headerSkin:"hSkin", rowNormalSkin:"rNSkin", rowFocusSkin:"rFSkin", rowAlternateSkin:"rASkin", showColumnHeaders:true, columnHeadersConfig:[{columnID:"col1", columnType:constants.DATAGRID_COLUMN_TYPE_TEXT, columnHeaderText:"Account Type", columnWidthInPercentage:40}, {columnID:"col2", columnType:constants.DATAGRID_COLUMN_TYPE_TEXT, columnHeaderText:"Account Number", columnWidthInPercentage:30}, {columnID:"col3", columnType:constants.DATAGRID_COLUMN_TYPE_TEXT, columnHeaderText:"Balance", columnWidthInPercentage:30}], isMultiSelect:true, data:[{col1:"Checking", col2:"490",col3:"$400", metainfo:{skin:"rowskin1", col1_skin:"colskin1"}}, {col1:"Checking",col2:"494", col3:"$2000.34"}, {col1:"Savings",col2:"567",col3:"$4000"}], onRowSelected:onRowSelectedCalBck};<br/>
		
		//Creating the dataGrid.<br/>    
        var dgrid = new kony.ui.DataGrid(dgridBasic, dgridLayout, dgridPSP);<br/>
		
		//addAll method call.<br/>
        dgrid.addAll([{col1:"Savings",col2:"568",col3:"$3000"}]);</pre>
		 */
		this.addAll = function(/**Array*/data){}  
		
		
		/**
		 * This method allows you to set a row of data at a given index. The new data is placed before the index. The existing data is pushed to the next row.
		 * @param data{Array} Specifies the JS Object that represents the row data as key value pairs. <b>Mandatory</b>
		 * @param rowIndex {Number} Specifies The row index <b>Mandatory</b>
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>
		//Defining the properties for dataGrid.<br/> 
		var dgridBasic = {id:"dgrid", info:{key:"This is datagrid"}, isVisible:true, headerSkin:"hSkin", rowNormalSkin:"rNSkin", rowFocusSkin:"rFSkin", rowAlternateSkin:"rASkin", showColumnHeaders:true, columnHeadersConfig:[{columnID:"col1", columnType:constants.DATAGRID_COLUMN_TYPE_TEXT, columnHeaderText:"Account Type", columnWidthInPercentage:40}, {columnID:"col2", columnType:constants.DATAGRID_COLUMN_TYPE_TEXT, columnHeaderText:"Account Number", columnWidthInPercentage:30}, {columnID:"col3", columnType:constants.DATAGRID_COLUMN_TYPE_TEXT, columnHeaderText:"Balance", columnWidthInPercentage:30}], isMultiSelect:true, data:[{col1:"Checking", col2:"490",col3:"$400", metainfo:{skin:"rowskin1", col1_skin:"colskin1"}}, {col1:"Checking",col2:"494", col3:"$2000.34"}, {col1:"Savings",col2:"567",col3:"$4000"}], onRowSelected:onRowSelectedCalBck};<br/> 
		var dgridLayout = {widgetAlignment:constants.WIDGET_ALIGN_TOP_LEFT, contentAlignment:constants.CONTENT_ALIGN_CENTER, containerWeight:99, padding:[5,5,5,5], margin:[5,5,5,5]};<br/>
		var dgridPSP = {gridlineColor:"FF224400"};<br/>
		
		//Creating the dataGrid.<br/>
		var dgrid = new kony.ui.DataGrid(dgridBasic, dgridLayout, dgridPSP);<br/>
		
		//addDataAt method call.<br/>
		dgrid.addDataAt({col1:"Savings",col2:"569",col3:"$32000"},2);</pre>
         */
		this.addDataAt = function(/**Array*/data,/**Number*/rowIndex){}  

	
	    /**
		 * This method allows you to set new data to the DataGrid. When you set new data, the existing data will be replaced with the new data.
		 * @param data{Array}Specifies the JSObject that represents the row data as key value pairs.<b>Mandatory</b>
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre> 
		//Defining the properties for dataGrid.<br/>
		var dgridBasic = {id:"dgrid", info:{key:"This is datagrid"}, isVisible:true, headerSkin:"hSkin", rowNormalSkin:"rNSkin", rowFocusSkin:"rFSkin", rowAlternateSkin:"rASkin", showColumnHeaders:true, columnHeadersConfig:[{columnID:"col1", columnType:constants.DATAGRID_COLUMN_TYPE_TEXT, columnHeaderText:"Account Type", columnWidthInPercentage:40}, {columnID:"col2", columnType:constants.DATAGRID_COLUMN_TYPE_TEXT, columnHeaderText:"Account Number", columnWidthInPercentage:30}, {columnID:"col3", columnType:constants.DATAGRID_COLUMN_TYPE_TEXT, columnHeaderText:"Balance", columnWidthInPercentage:30}], isMultiSelect:true, data:[{col1:"Checking", col2:"490",col3:"$400", metainfo:{skin:"rowskin1", col1_skin:"colskin1"}}, {col1:"Checking",col2:"494", col3:"$2000.34"}, {col1:"Savings",col2:"567",col3:"$4000"}], onRowSelected:onRowSelectedCalBck};<br/>
		var dgridLayout = {widgetAlignment:constants.WIDGET_ALIGN_TOP_LEFT, contentAlignment:constants.CONTENT_ALIGN_CENTER, containerWeight:99, padding:[5,5,5,5], margin:[5,5,5,5]};<br/>
        var dgridPSP = {gridlineColor:"FF224400"};<br/>

		//Creating the dataGrid.<br/>
		var dgrid = new kony.ui.DataGrid(dgridBasic, dgridLayout, dgridPSP);<br/>
		
		//setData method call.<br/>
		dgrid.setData([{col1:"Checking", col2:"490", col3:"$400", metainfo:{skin:"rowskin1",col1_skin:"colskin1"}}, {col1:"Checking",col2:"494", col3:"$2000.34"}, {col1:"Savings", col2:"567",col3:"$4000"}]);</pre>
		 */
		this.setData = function(/**Array*/data){} 
		
		/**
		 * This method allows you to set data in a specific row and column.
		 * @param rowIndex {Number}The the row index: 1 <= index <= n; Where n is the number of rows.<b>Mandatory</b>
		 * @param columnid {Number|String} The column identifier.<b>Mandatory</b>
		 * @param datavalue{Object}Based on the column type, the value is expected to be either string type or object type for template column.<b>Mandatory</b>
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre> 
		//Defining the properties for dataGrid.<br/>
		var dgridBasic = {id:"dgrid", info:{key:"This is datagrid"}, isVisible:true, headerSkin:"hSkin", rowNormalSkin:"rNSkin", rowFocusSkin:"rFSkin", rowAlternateSkin:"rASkin", showColumnHeaders:true, columnHeadersConfig:[{columnID:"col1", columnType:constants.DATAGRID_COLUMN_TYPE_TEXT, columnHeaderText:"Account Type", columnWidthInPercentage:40}, {columnID:"col2", columnType:constants.DATAGRID_COLUMN_TYPE_TEXT, columnHeaderText:"Account Number", columnWidthInPercentage:30}, {columnID:"col3", columnType:constants.DATAGRID_COLUMN_TYPE_TEXT, columnHeaderText:"Balance", columnWidthInPercentage:30}], isMultiSelect:true, data:[{col1:"Checking", col2:"490",col3:"$400", metainfo:{skin:"rowskin1", col1_skin:"colskin1"}}, {col1:"Checking",col2:"494", col3:"$2000.34"}, {col1:"Savings",col2:"567",col3:"$4000"}], onRowSelected:onRowSelectedCalBck};<br/>
		var dgridLayout = {widgetAlignment:constants.WIDGET_ALIGN_TOP_LEFT, contentAlignment:constants.CONTENT_ALIGN_CENTER, containerWeight:99, padding:[5,5,5,5], margin:[5,5,5,5]};<br/>
        var dgridPSP = {gridlineColor:"FF224400"};<br/>

		//Creating the dataGrid.<br/>
		var dgrid = new kony.ui.DataGrid(dgridBasic, dgridLayout, dgridPSP);<br/>
		
		//setCellDataAt method call<br/>
		dgrid.setCellDataAt(1,"col2","444");</pre>
		 */
		this.setCellDataAt = function (/**Number*/rowIndex,/**Number*//**String*/columnid,/**Object*/datavalue)	{}	
		
		/**
		 * This method allows you to set a row of data at a given index. The existing data of the row will be replaced with the new set.
		 * @param data {Array} Specifies the JS Object that represents the row data as key value pairs. <b>Mandatory</b>
		 * @param rowIndex {Number}The the row index: 1 <= index <= n; Where n is the number of rows.<b>Mandatory</b>
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre> 
		//Defining the properties for dataGrid.<br/>
		var dgridBasic = {id:"dgrid", info:{key:"This is datagrid"}, isVisible:true, headerSkin:"hSkin", rowNormalSkin:"rNSkin", rowFocusSkin:"rFSkin", rowAlternateSkin:"rASkin", showColumnHeaders:true, columnHeadersConfig:[{columnID:"col1", columnType:constants.DATAGRID_COLUMN_TYPE_TEXT, columnHeaderText:"Account Type", columnWidthInPercentage:40}, {columnID:"col2", columnType:constants.DATAGRID_COLUMN_TYPE_TEXT, columnHeaderText:"Account Number", columnWidthInPercentage:30}, {columnID:"col3", columnType:constants.DATAGRID_COLUMN_TYPE_TEXT, columnHeaderText:"Balance", columnWidthInPercentage:30}], isMultiSelect:true, data:[{col1:"Checking", col2:"490",col3:"$400", metainfo:{skin:"rowskin1", col1_skin:"colskin1"}}, {col1:"Checking",col2:"494", col3:"$2000.34"}, {col1:"Savings",col2:"567",col3:"$4000"}], onRowSelected:onRowSelectedCalBck};<br/>
		var dgridLayout = {widgetAlignment:constants.WIDGET_ALIGN_TOP_LEFT, contentAlignment:constants.CONTENT_ALIGN_CENTER, containerWeight:99, padding:[5,5,5,5], margin:[5,5,5,5]};<br/>
        var dgridPSP = {gridlineColor:"FF224400"};<br/>

		//Creating the dataGrid.<br/>
		var dgrid = new kony.ui.DataGrid(dgridBasic, dgridLayout, dgridPSP);<br/>
		
		//setDataAt method call.<br/>
		dgrid.setDataAt({col1:"Savings",col2:"563",col3:"$34000"},2);</pre> 
		 */
		this.setDataAt = function (/**Array*/data,/**Number*/rowIndex)	{}	
		
		/**
		 * This method provides the ability to remove all the existing rows in DataGrid.
		 * @param rowIndex {Number}The the row index: 1 <= index <= n; Where n is the number of rows.<b>Mandatory</b> 
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>	
		//Defining the properties for dataGrid.<br/>
		var dgridBasic = {id:"dgrid", info:{key:"This is datagrid"}, isVisible:true, headerSkin:"hSkin", rowNormalSkin:"rNSkin", rowFocusSkin:"rFSkin", rowAlternateSkin:"rASkin", showColumnHeaders:true, columnHeadersConfig:[{columnID:"col1", columnType:constants.DATAGRID_COLUMN_TYPE_TEXT, columnHeaderText:"Account Type", columnWidthInPercentage:40}, {columnID:"col2", columnType:constants.DATAGRID_COLUMN_TYPE_TEXT, columnHeaderText:"Account Number", columnWidthInPercentage:30}, {columnID:"col3", columnType:constants.DATAGRID_COLUMN_TYPE_TEXT, columnHeaderText:"Balance", columnWidthInPercentage:30}], isMultiSelect:true, data:[{col1:"Checking", col2:"490",col3:"$400", metainfo:{skin:"rowskin1", col1_skin:"colskin1"}}, {col1:"Checking",col2:"494", col3:"$2000.34"}, {col1:"Savings",col2:"567",col3:"$4000"}], onRowSelected:onRowSelectedCalBck};<br/>
		var dgridLayout = {widgetAlignment:constants.WIDGET_ALIGN_TOP_LEFT, contentAlignment:constants.CONTENT_ALIGN_CENTER, containerWeight:99, padding:[5,5,5,5], margin:[5,5,5,5]};<br/>
        var dgridPSP = {gridlineColor:"FF224400"};<br/>

		//Creating the dataGrid.<br/>
		var dgrid = new kony.ui.DataGrid(dgridBasic, dgridLayout, dgridPSP);<br/>
		
		//removeAt method call.<br/>
		dgrid.removeAt(2);</pre>
		 */
		this.removeAt = function (/**Number*/rowIndex) {}	

		/**
		 * This method is used to remove all the existing rows in the DataGrid. If you use this method, the data in the DataGrid will not be visible.
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre> 
		//Defining the properties for dataGrid.<br/>
		var dgridBasic = {id:"dgrid", info:{key:"This is datagrid"}, isVisible:true, headerSkin:"hSkin", rowNormalSkin:"rNSkin", rowFocusSkin:"rFSkin", rowAlternateSkin:"rASkin", showColumnHeaders:true, columnHeadersConfig:[{columnID:"col1", columnType:constants.DATAGRID_COLUMN_TYPE_TEXT, columnHeaderText:"Account Type", columnWidthInPercentage:40}, {columnID:"col2", columnType:constants.DATAGRID_COLUMN_TYPE_TEXT, columnHeaderText:"Account Number", columnWidthInPercentage:30}, {columnID:"col3", columnType:constants.DATAGRID_COLUMN_TYPE_TEXT, columnHeaderText:"Balance", columnWidthInPercentage:30}], isMultiSelect:true, data:[{col1:"Checking", col2:"490",col3:"$400", metainfo:{skin:"rowskin1", col1_skin:"colskin1"}}, {col1:"Checking",col2:"494", col3:"$2000.34"}, {col1:"Savings",col2:"567",col3:"$4000"}], onRowSelected:onRowSelectedCalBck};<br/>
		var dgridLayout = {widgetAlignment:constants.WIDGET_ALIGN_TOP_LEFT, contentAlignment:constants.CONTENT_ALIGN_CENTER, containerWeight:99, padding:[5,5,5,5], margin:[5,5,5,5]};<br/>
        var dgridPSP = {gridlineColor:"FF224400"};<br/>

		//Creating the dataGrid.<br/>
		var dgrid = new kony.ui.DataGrid(dgridBasic, dgridLayout, dgridPSP);<br/>
		
		//removeAll method call.<br/>
		dgrid.removeAll();</pre>
		 */
		this.removeAll = function ()	{}
		
		/**
		 * This method specifies the skin (background color) to be applied to a cell. 
		 * @param rowIndex{Number}The the row index: 1 <= index <= n; Where n is the number of rows.<b>Mandatory</b>
		 * @param columnid {String} The column identifier.<b>Mandatory</b>
		 * @param skinid(Object) The skin identifier.<b>Mandatory</b> 
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre> 
		//Defining the properties for dataGrid.<br/>
		var dgridBasic = {id:"dgrid", info:{key:"This is datagrid"}, isVisible:true, headerSkin:"hSkin", rowNormalSkin:"rNSkin", rowFocusSkin:"rFSkin", rowAlternateSkin:"rASkin", showColumnHeaders:true, columnHeadersConfig:[{columnID:"col1", columnType:constants.DATAGRID_COLUMN_TYPE_TEXT, columnHeaderText:"Account Type", columnWidthInPercentage:40}, {columnID:"col2", columnType:constants.DATAGRID_COLUMN_TYPE_TEXT, columnHeaderText:"Account Number", columnWidthInPercentage:30}, {columnID:"col3", columnType:constants.DATAGRID_COLUMN_TYPE_TEXT, columnHeaderText:"Balance", columnWidthInPercentage:30}], isMultiSelect:true, data:[{col1:"Checking", col2:"490",col3:"$400", metainfo:{skin:"rowskin1", col1_skin:"colskin1"}}, {col1:"Checking",col2:"494", col3:"$2000.34"}, {col1:"Savings",col2:"567",col3:"$4000"}], onRowSelected:onRowSelectedCalBck};<br/>
		var dgridLayout = {widgetAlignment:constants.WIDGET_ALIGN_TOP_LEFT, contentAlignment:constants.CONTENT_ALIGN_CENTER, containerWeight:99, padding:[5,5,5,5], margin:[5,5,5,5]};<br/>
        var dgridPSP = {gridlineColor:"FF224400"};<br/>

		//Creating the dataGrid.<br/>
		var dgrid = new kony.ui.DataGrid(dgridBasic, dgridLayout, dgridPSP);<br/>
		
        //applyCellSkin method call.<br/>
		dgrid.applyCellSkin(3,"col2");</pre>
		 */
		this.applyCellSkin = function (/**Number*/rowIndex,/**String*/columnid,/**Object*/skinid){}
		
		/**
		 * This method provides the ability to selects or clears the row selection in a multi-selectable DataGrid.
		 * @param select {Boolean}To select all the rows, set the value to true and to clear all the row selections, set the value to false .<b>Mandatory</b>
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre> 
		//Defining the properties for dataGrid.<br/>
		var dgridBasic = {id:"dgrid", info:{key:"This is datagrid"}, isVisible:true, headerSkin:"hSkin", rowNormalSkin:"rNSkin", rowFocusSkin:"rFSkin", rowAlternateSkin:"rASkin", showColumnHeaders:true, columnHeadersConfig:[{columnID:"col1", columnType:constants.DATAGRID_COLUMN_TYPE_TEXT, columnHeaderText:"Account Type", columnWidthInPercentage:40}, {columnID:"col2", columnType:constants.DATAGRID_COLUMN_TYPE_TEXT, columnHeaderText:"Account Number", columnWidthInPercentage:30}, {columnID:"col3", columnType:constants.DATAGRID_COLUMN_TYPE_TEXT, columnHeaderText:"Balance", columnWidthInPercentage:30}], isMultiSelect:true, data:[{col1:"Checking", col2:"490",col3:"$400", metainfo:{skin:"rowskin1", col1_skin:"colskin1"}}, {col1:"Checking",col2:"494", col3:"$2000.34"}, {col1:"Savings",col2:"567",col3:"$4000"}], onRowSelected:onRowSelectedCalBck};<br/>
		var dgridLayout = {widgetAlignment:constants.WIDGET_ALIGN_TOP_LEFT, contentAlignment:constants.CONTENT_ALIGN_CENTER, containerWeight:99, padding:[5,5,5,5], margin:[5,5,5,5]};<br/>
        var dgridPSP = {gridlineColor:"FF224400"};<br/>

		//Creating the dataGrid.<br/>
		var dgrid = new kony.ui.](dgridBasic, dgridLayout, dgridPSP);<br/>
		
		//selectAllRows method call<br/>
		dgrid.selectAllRows(true);</pre>
		 */
		this.selectAllRows = function (/**Boolean*/select){}
	    

         /**
	     * This method specifies the widget that must be enabled or disabled.
		 * @param enabled{Boolean} Indicates widget whether true or false.<b>Mandatory</b>
		 * @Available All Platforms except on Map widget for SPA platform 
		 * @access Write
		 */
        this.setEnabled = function (/**Boolean*/enabled) {}	
    	
	
	    /**
	     * This method specifies the widget on which there must be focus. 
		 * @param focus{Boolean} Indicates focus is set on a widget.<b>Mandatory</b>
		 * @Available All Platforms 
		 * @access Write
		 */
        this.setFocus = function (/**Boolean*/focus) {}	 
		
		
		/**
	     * Specifies the method to set the visibility of the widget.
		 * @param visible{Boolean} Indicates visibility on a widget.<b>Mandatory</b>
		 * @Available All Platforms except on all Mobile Web platforms
		 * @access Write
		 */
		this.setVisibility = function(/**Boolean*/visible) {}	
	}		
	
	
	//RichText Widget properties are defined here
	ui.RichText = 
	/**
	 * Creates a new RichText object
	 * @class kony.ui.RichText
	 * @returns {kony.ui.RichText}
	 */
	function RichText(basicProperties,layoutProperties,platformSpecificProperties){
	
	    //RichText-Basic Properties starts here
	
	 	/**
		 * Defines a string of alpha numeric characters that uniquely identifies a widget within an application.
		 * @property {String}
		 * @Mandatory Yes
		 * @Available All Platforms
		 * @access Read
		 */
		this.id = ""
		
		/**
		 * Specifies custom JS Object with the key,value pairs that a developer can use to store the context with the widget. 
		 * @property {Object}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.info = {}
		
		/**
		 * Specifies the look and feel of the RichText when not in focus.
		 * @property {String}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.skin = ""	
	
		/**
		 * Specifies the skin that must be applied to the link in the RichText widget.
		 * @property {String}
		 * @Available All Platforms except Mobile Web platforms.
		 * @access Read and Write
		 */
		this.linkSkin = ""	
		
		/**
		 * Specifies a general or descriptive text for the RichText widget.
		 * @property {String}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.text = ""
		
		/**
		 * Specifies the Property to set widget visibility on the form.   
		 * @property {Boolean}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.isVisible = true
		
		/**
		 * Specifies the accessiblity configuration property for the widget.
		 * @property {Object}
		 * @Available iPhone, Android, SPA-iPhone, and SPA-Android Platforms
		 * @access Read and Write
		 * @usage <pre>
		 /* accessibilityConfig =  {
				"a11yHidden": false,
				"a11yValue": "Your text goes here",
				"a11yLabel": "Your text goes here",
				"a11yHint": "Your text goes here"
			},
		*/
		this.accessibilityConfig = {}
	
	    // RichText - Layout Configuration Properties Starts here
		
		/**
		 * The percentage of width to be allocated by its parent widget.The parent's widget space is distributed to its child widgets based on this weight factor.All its child widgets should sum up to 100% of weight except when placed in kony.ui.ScrollBox
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.containerWeight = 0
		
		/**
		 * specifies the space between the content of the widget and the widget boundaries.
		 * @property {Array}
		 * @Available All Platforms except Mobile Web (basic).
		 * @access Read and Write
		 */
		this.padding = []
		
		/**
		 * Specifies the space around a widget.
		 * @property {Array}
		 * @Available All Platforms except Mobile Web (basic) and Win Mobile6x.
		 * @access Read and Write
		 */
		this.margin = []	
		
		/**
		 * Specifies the alignment of the text on the RichText with respect to its boundaries.
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.contentAlignment = 1
		
		//RichText - Platform Specific Properties Starts here
		
		/**
		 * Specifies the skin that must be applied to the link when focused.
		 * @property {String}
		 * @Available BlackBerry,J2ME
		 * @access Read and Write
		 */
		this.linkFocusSkin = ""	
		
		/**
		 * Specifies the skin to be applied to superscripts in the RichText widget.
		 * @property {String}
		 * @Available BlackBerry,J2ME,Windows Phone/Windows Kiosk,Windows6.x
		 * @access Read and Write
		 */
		this.superScriptSkin = ""
		
		/**
		 * Specifies the skin to be applied to the telephone links in the RichText widget.
		 * @property {String}
		 * @Available Windows Phone7
		 * @access Read and Write
		 */
		this.telephoneLinkSkin = ""
		
		/**
		 * Specifies the hint text when the cursor hovers over a widget.
		 * @property {String}
		 * @Available windows 8
		 * @access Read and Write
		 */
		this.toolTip = ""	
		
		/**
		 * Specifies the layout changes that occur due to the animations applied/removed on other widgets. 
		 * @property {Object}
		 * @Available iOS and Android Platforms
		 * @access Read and Write
		 */
		this.layoutAnimConfig = {}
				
		//RichText - Events Starts here
		
		/**
		 * An event callback is invoked by the platform when the user performs a click action on the RichText.
		 * @property {Event}
		 * @Available All Platforms except Mobile Web (basic) and Win Mobile6x.
		 * @access Read and Write
		 */
		this.onClick = new Event() 
		
		/**
		 * This event allows the developer to execute custom javascript function before the onClick callback of the widget is invoked. This is applicable only for Mobile Web channel. The function must exist in a javascript file under project>module>js folder.
		 * @property {Event}
		 * @Available Mobile Web (Advanced),SPA (iPhone/Android/BlackBerry/Windows NTH)/Playbook 
		 * @access Read and Write
		 */
		this.preOnclickJS = new Event() 
		
		/**
		 * This event allows the developer to execute custom javascript function after the onClick callback of the widget is invoked. This is applicable only for Mobile Web channel.The function must exist in a javascript file under project>module>js folder.
		 * @property {Event}
		 * @Available Mobile Web (Advanced),SPA (iPhone/Android/BlackBerry/Windows NTH)/Playbook 
		 * @access Read and Write
		 */
		this.postOnclickJS = new Event()
		
		

        // RichText	- Methods Starts here
		
		 /**
	     * This method specifies the widget that must be enabled or disabled.
		 * @param enabled{Boolean} Indicates widget whether true or false.<b>Mandatory</b>
		 * @Available All Platforms except on Map widget for SPA platform 
		 * @access Write
		 */
        this.setEnabled = function (/**Boolean*/enabled) {}	
    	
	
	    /**
	     * This method specifies the widget on which there must be focus. 
		 * @param focus{Boolean} Indicates focus is set on a widget.<b>Mandatory</b>
		 * @Available All Platforms 
		 * @access Write
		 */
        this.setFocus = function (/**Boolean*/focus) {}	 
		
		
		/**
	     * Specifies the method to set the visibility of the widget.
		 * @param visible{Boolean} Indicates visibility on a widget.<b>Mandatory</b>
		 * @Available All Platforms except on all Mobile Web platforms
		 * @access Write
		 */
		this.setVisibility = function (/**Boolean*/visible) {}	
	}
	
	//Calendar Widget Properties are defined here.
	ui.Calendar =  
	/**
	 * Creates a new Calendar object
	 * @class kony.ui.Calendar
	 * @returns {kony.ui.Calendar}
	 */
	function Calendar(basicProperties, layoutProperties, platformSpecificProperties){
	    //Calendar - Basic Properties Starts here
		
	 	/**
		 * Defines a string of alpha numeric characters that uniquely identifies a widget within an application.
		 * @property {String}
		 * @Mandatory Yes
		 * @Available All Platforms
		 * @access Read
		 */
		this.id = ""
		
		/**
		 * Specifies custom JS Object with the key,value pairs that a developer can use to store the context with the widget. 
		 * @property {Object}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.info = {}
		
		/**
		 * Specifies a background skin for Calendar widget.
		 * @property {String}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.skin = ""	
		
		/**
		 * This is a skin property and it determines the look and feel of the widget when focused.
		 * @property {String}
		 * @Available All Platforms except on all Mobile Web platforms.
		 * @access Read and Write
		 */
		this.focusSkin = ""	
		
		/**
		 * Specifies the visibility of the widget on the form. 
		 * @property {Boolean}
		 * @Available All Platforms except Mobile Web (basic) and Win Mobile6x.
		 * @access Read and Write
		 */
		this.isVisible = true
		
		/**
		 * Reads the day portion of the currently selected date. 
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read 
		 */
		this.day = 0
		
		/**
		 * Reads the month portion of the currently selected date. 
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read 
		 */
		this.month = 0	
		
		/**
		 * Reads the year portion of the currently selected date. 
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read 
		 */
		this.year = 0	
		
		/**
		 * Reads the hour portion of the currently selected date. 
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read 
		 */
		this.hour = 0
		
		/**
		 * Reads the minutes portion of the currently selected date. 
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read 
		 */
		this.minutes = 0
		
		/**
		 * Reads the seconds portion of the currently selected date. 
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read 
		 */
		this.seconds = 0
		
		/**
		 * Specifies the date that appears as default in the date field. The value should be an array object with six elements in [dd, mm, yyyy,hh, mm, ss] format.
		 * @property {Array}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.dateComponents = []
		
		/**
		 * Specifies the date format in which the selected date must appear on the display and when accessed programmatically the "date" property. 
		 * @property {String}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.dateFormat = ""
		
		/**
		 * Specifies the Currently selected data as string the format that is set through "dateFormat" property.
		 * @property {String}
		 * @Available All Platforms
		 * @access Read 
		 */
		this.formattedDate = ""
		
		/**
		 * Specifies the array representing the day,month and year portions of the date in the same order.
		 * @property {Array}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.validStartDate = []
		
		/**
		 * Specifies the array representing the day,month and year portions of the date in the same order.
		 * @property {Array}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.validEndDate = []
		
		/**
		 * Specifies the view types of the Calendar.
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.viewType = 0
		
		/**
		 * Specifies the view configuration for different viewtypes.Each view will have a key representing the view name and the value being the hash of key,value configurations.
		 * @property {Object}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.viewConfig = {}
		
		/**
		 * Replaces the system default calendar Icon. 
		 * @property {String}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.calendarIcon = ""
		
		/**
		 * Specifies the temporary or substitute text that must be displayed until a date is selected.
		 * @property {String}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.placeholder = ""
		
		/**
		 * Specifies the accessiblity configuration property for the widget.
		 * @property {Object}
		 * @Available iPhone, Android, SPA-iPhone, and SPA-Android Platforms
		 * @access Read and Write
		 * @usage <pre>
		 /* accessibilityConfig =  {
				"a11yHidden": false,
				"a11yValue": "Your text goes here",
				"a11yLabel": "Your text goes here",
				"a11yHint": "Your text goes here"
			},
		*/
		this.accessibilityConfig = {}
		
		
	    //Calendar - Layout Configuration Properties Starts here.
	
	    /**
		 * Specifies percentage of width to be allocated by its parent widget widget. The parent widget space is distributed to its child widgets based on this weight factor. All its child widgets should sum up to 100% of weight except when placed in kony.ui.ScrollBox.
		 * @property {Number}
		 * @Available All Platforms except Win Mobile 6x.
		 * @access Read and Write
		 */
		this.containerWeight = 0
		
		/**
         * specifies the space between the content of the widget and the widget boundaries.
         * @property {Array}
         * @Available All Platforms except Mobile Web (basic).
         * @access Read and Write
         */
        this.padding = []
		
		/**
		 * Specifies the space around a widget. 
		 * @property {Array}
		 * @Available All Platforms except Mobile Web (basic) and Win Mobile6x.
		 * @access Read and Write
		 */
		this.margin = []
		
		/**
		 * Specifies the alignment of the text on the Calendar with respect to its boundaries.
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.contentAlignment = 1
		
		//Calendar - Platform Specific Properties Starts here
	

		/**
		 * Specifies the common template to be used for a Calendar Day cell. A template can be used only when the data is present for a Calendar Day cell set through data property or setData method. If the data is not set to a cell, the cell is displayed with a default look without any template. This property is applicable only when you set viewType as CALENDAR_VIEW_TYPE_GRID_POPUP or CALENDAR_VIEW_TYPE_GRID_ONSCREEN
		 * @property {Object}
		 * @Available Available on iOS platform only
		 * @access Read and Write
		 */
		this.cellTemplate = {}
		
	
		/**
		 * Specifies the height of the container in terms of percentage. The percentage is with reference to the value of containerHeightReference property. This property is applicable only when you set viewType as CALENDAR_VIEW_TYPE_GRID_POPUP or CALENDAR_VIEW_TYPE_GRID_ONSCREEN
		 * @property {Number}
		 * @Available Available on iOS platform only
		 * @access Read and Write
		 */
		this.containerHeight = 0
	
		
	 	/**
		 * Specifies the reference for the height of the container based on option that you set for containerHeight. The container height percentage is calculated based on eigher HEIGHT_BY_FORM_REFERENCE or HEIGHT_BY_PARENT_WIDTH. This property is applicable only when you set viewType as CALENDAR_VIEW_TYPE_GRID_POPUP or CALENDAR_VIEW_TYPE_GRID_ONSCREEN
		 * @property {number}
		 * @Available Available on iOS platform only
		 * @access Read and Write
		 */
		this.containerHeightReference = 0


	 	/**
		 * A JSObjects that represents the actual data to be rendered in each cell.
		 * @property {Object}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.data = {}

	 	/**
		 * Specifies the alignment of the text for a calendar day cell with respect to its boundaries. The default option is CONTENT_ALIGN_CENTER. This property is applicable only when you set viewType as CALENDAR_VIEW_TYPE_GRID_POPUP or CALENDAR_VIEW_TYPE_GRID_ONSCREEN.
		 * @property {Number}
		 * @Available Available on iOS platform only
		 * @access Read and Write
		 */
		this.dayTextAlignmentInCell = 0

	 	/**
		 * Sets or gets the current displayed month and year of the calendar. Using this property you can change the current month and year. This property is applicable only when you set viewType as CALENDAR_VIEW_TYPE_GRID_POPUP or CALENDAR_VIEW_TYPE_GRID_ONSCREEN.
		 * @property {Array}
		 * @Available Available on iOS platform only
		 * @access Read and Write
		 */
		this.displayedMonth = []

	 	/**
		 * Indicates if the weekdays are hidden on the header of the grid calendar. This property is applicable only when you set viewType as CALENDAR_VIEW_TYPE_GRID_POPUP or CALENDAR_VIEW_TYPE_GRID_ONSCREEN.
		 * @property {Boolean}
		 * @Available Available on iOS platform only
		 * @access Read and Write
		 */
		this.hideDaysCalendar = true

	 	/**
		 * Indicates if the months header is hidden on the header of the grid calendar including navigation buttons. This property is applicable only when you set viewType as CALENDAR_VIEW_TYPE_GRID_POPUP or CALENDAR_VIEW_TYPE_GRID_ONSCREEN.
		 * @property {Boolean}
		 * @Available Available on iOS platform only
		 * @access Read and Write
		 */
		this.hideMonthsHeader = true
		
		
	 	/**
		 * Specifies the mapping information between the widget id's and the keys in the data.It is the developer responsibility to ensure that widget data map to accomodate all the widget ids required including the widgets referred in dynamic templates.
		 * @property {Array}
		 * @Available Available on iOS platform only
		 * @access Read and Write
		 */
		this.widgetDataMapForCell = []		


		/**
		 * Specifies the title text to be displayed on the calendar popup.
		 * @property {String}
		 * @Available SPA,Mobile Web(BJS),Mobile Web (Advanced)
		 * @access Read and Write
		 */
		this.titleOnPopup = ""
		
		/**
		 * Specifies the mode in which the calendar is used. 
		 * @property {String}
		 * @Available iPhone,iPad
		 * @access Read and Write
		 */
		this.mode = ""
		
		/**
		 * Specifies the number between 1 and 12 which indicates the number of months to be displayed when the calendar is selected. It is supported only on Desktop Web platform.
		 * @property {Number}
		 * @Available Available on Desktop Web platform only
		 * @access Read and Write
		 */
		this.noOfMonths = 0
		
		
		/**
		 * Specifies the hint text when the cursor hovers over a widget.
		 * @property {String}
		 * @Available windows 8
		 * @access Read and Write
		 */
		this.toolTip = ""	
		
		/**
		 * Specifies the look and feel of a widget when the cursor hovers on the widget.
		 * @property {String}
		 * @Available windows 8
		 * @access Read and Write
		 */
		//this.hoverSkin = ""	
		
		/**
		 * Specifies the layout changes that occur due to the animations applied/removed on other widgets. 
		 * @property {Object}
		 * @Available iOS and Android Platforms
		 * @access Read and Write
		 */
		this.layoutAnimConfig = {}
		
		
		//Calendar - Events Starts here
		
		/**
		 * This event is triggered when an item is selected or deselected. 
		 * @property {Event}
		 * @Available All Platforms except Server side Mobile Web platform.
		 * @access Read and Write
		 */
		this.onSelection = new Event ()
		
		
		
	    //Calendar - Methods Starts here


		/**
		 * This method allows you to remove the data that is set through setData method.
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>
       //Defining the properties for Calendar<br/>
        var calBasicConf = {id : "calID", isVisible:true, dateComponents:[31,12,2012,04,30,55], skin:"konytextar", focusSkin:"calFocus", dateFormat:"dd/MM/yyyy", viewType:constants.CALENDAR_VIEW_TYPE_GRID_POPUP, validStartDate:[01,01,2012], validEndDate:[31,12,2012], date:[31,12,2012], placeholder:"JSCalendar", calendarIcon:"cal.png"};<br/>
		var calLayoutConf = {containerWeight:100};<br/>
		var calPSPConf = {};<br/>
		
		//Creating the Calendar.<br/>
		var Calendar = new kony.ui.Calendar(calBasicConf, calLayoutConf, calPSPConf);<br/>
		
		//Calendar clearData Method call
		Calendar.clearData();</pre>
		 */
		this.clearData = function ()	{}		
		

		/**
		 * This method allows you to navigate to previous month of the calendar widget.
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>
       //Defining the properties for Calendar<br/>
        var calBasicConf = {id : "calID", isVisible:true, dateComponents:[31,12,2012,04,30,55], skin:"konytextar", focusSkin:"calFocus", dateFormat:"dd/MM/yyyy", viewType:constants.CALENDAR_VIEW_TYPE_GRID_POPUP, validStartDate:[01,01,2012], validEndDate:[31,12,2012], date:[31,12,2012], placeholder:"JSCalendar", calendarIcon:"cal.png"};<br/>
		var calLayoutConf = {containerWeight:100};<br/>
		var calPSPConf = {};<br/>
		
		//Creating the Calendar.<br/>
		var Calendar = new kony.ui.Calendar(calBasicConf, calLayoutConf, calPSPConf);<br/>
		
		//navigateToPreviousMonth Method call
		Calendar.navigateToPreviousMonth();</pre>
		 */
		this.navigateToPreviousMonth = function ()	{}	
		
		
		
		/**
		 * This method allows you to navigate to next month of the calendar widget.
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>
       //Defining the properties for Calendar<br/>
        var calBasicConf = {id : "calID", isVisible:true, dateComponents:[31,12,2012,04,30,55], skin:"konytextar", focusSkin:"calFocus", dateFormat:"dd/MM/yyyy", viewType:constants.CALENDAR_VIEW_TYPE_GRID_POPUP, validStartDate:[01,01,2012], validEndDate:[31,12,2012], date:[31,12,2012], placeholder:"JSCalendar", calendarIcon:"cal.png"};<br/>
		var calLayoutConf = {containerWeight:100};<br/>
		var calPSPConf = {};<br/>
		
		//Creating the Calendar.<br/>
		var Calendar = new kony.ui.Calendar(calBasicConf, calLayoutConf, calPSPConf);<br/>
		
		//navigateToNextMonth Method call
		Calendar.navigateToNextMonth();</pre>
		 */
		this.navigateToNextMonth = function ()	{}	

		
		/**
		 * This method allows you to remove data set in a specific argument.
		 * @param date{String} Specifies the date in a tabular format which follows{dd,mm,yyyy} convention.
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>
       //Defining the properties for Calendar<br/>
        var calBasicConf = {id : "calID", isVisible:true, dateComponents:[31,12,2012,04,30,55], skin:"konytextar", focusSkin:"calFocus", dateFormat:"dd/MM/yyyy", viewType:constants.CALENDAR_VIEW_TYPE_GRID_POPUP, validStartDate:[01,01,2012], validEndDate:[31,12,2012], date:[31,12,2012], placeholder:"JSCalendar", calendarIcon:"cal.png"};<br/>
		var calLayoutConf = {containerWeight:100};<br/>
		var calPSPConf = {};<br/>
		
		//Creating the Calendar.<br/>
		var Calendar = new kony.ui.Calendar(calBasicConf, calLayoutConf, calPSPConf);<br/>
		
		//removeDataAt Method call
		Calendar.removeDataAt("31,12,2013");</pre>
		 */
		this.removeDataAt = function (/**String*/date)	{}			
		
		
		/**
		 * This method allows you to set new data to the widgets as specified in the widgetDataMap. The dictionary is of format {"dd/mm/yyyy":{widget data confirming to widgetDataMapForCell}}
		 * @param dictionary{Object} Specifies the date in a tabular format which follows{dd,mm,yyyy} convention.
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>
       //Defining the properties for Calendar<br/>
        var calBasicConf = {id : "calID", isVisible:true, dateComponents:[31,12,2012,04,30,55], skin:"konytextar", focusSkin:"calFocus", dateFormat:"dd/MM/yyyy", viewType:constants.CALENDAR_VIEW_TYPE_GRID_POPUP, validStartDate:[01,01,2012], validEndDate:[31,12,2012], date:[31,12,2012], placeholder:"JSCalendar", calendarIcon:"cal.png"};<br/>
		var calLayoutConf = {containerWeight:100};<br/>
		var calPSPConf = {};<br/>
		
		//Creating the Calendar.<br/>
		var Calendar = new kony.ui.Calendar(calBasicConf, calLayoutConf, calPSPConf);<br/>
		
		//setData Method call
		Calendar.setData(data1);</pre>
		 */
		this.setData = function (/**Object*/dictionary)	{}			
		
		
		/**
		 * This method allows you to set new data to the calendar widgets. When you set new data, the existing data will be replaced with the new data. If the calendar has no data, the new data is placed in the calendar.
		 * @param date{String} Specifies the date in a tabular format which follows{dd,mm,yyyy} convention.
		 * @param data{Object} Specifies the data that confirms to widgetDataMapForCell.
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>
       //Defining the properties for Calendar<br/>
        var calBasicConf = {id : "calID", isVisible:true, dateComponents:[31,12,2012,04,30,55], skin:"konytextar", focusSkin:"calFocus", dateFormat:"dd/MM/yyyy", viewType:constants.CALENDAR_VIEW_TYPE_GRID_POPUP, validStartDate:[01,01,2012], validEndDate:[31,12,2012], date:[31,12,2012], placeholder:"JSCalendar", calendarIcon:"cal.png"};<br/>
		var calLayoutConf = {containerWeight:100};<br/>
		var calPSPConf = {};<br/>
		
		//Creating the Calendar.<br/>
		var Calendar = new kony.ui.Calendar(calBasicConf, calLayoutConf, calPSPConf);<br/>
		
		//setDataAt Method call
		Calendar.setDataAt("31,12,2013",{template:newBox,lblAppointments:"4",lblTasks:"2"});</pre>
		 */
		this.setDataAt = function (/**String*/date,/**Object*/data)	{}	
		
		
		/**
		 * This method allows you to enables you to clear the date in the calendar and the date format is shown. But when you use a placeholder, then placeholder text is shown instead of date format.
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>
        //Defining the properties for Calendar<br/>
        var calBasicConf = {id : "calID", isVisible:true, dateComponents:[31,12,2012,04,30,55], skin:"konytextar", focusSkin:"calFocus", dateFormat:"dd/MM/yyyy", viewType:constants.CALENDAR_VIEW_TYPE_GRID_POPUP, validStartDate:[01,01,2012], validEndDate:[31,12,2012], date:[31,12,2012], placeholder:"JSCalendar", calendarIcon:"cal.png"};<br/>
		var calLayoutConf = {containerWeight:100};<br/>
		var calPSPConf = {};<br/>
		
		//Creating the Calendar.<br/>
		var Calendar = new kony.ui.Calendar(calBasicConf, calLayoutConf, calPSPConf);<br/>
		
		//Calendar clear Method call
		Calendar.clear();</pre>
		 */
		this.clear = function ()	{}
		
		
		
		/**
		 * This method allows you to enable/disable a list of dates that fall between the startdate and enddate in the calendar widget which can be set through code or IDE.
		 * @param dates{Object} Specifies the dates in a table format which follows {dd,mm,yyyy} convention .<b>Mandatory</b>
		 * @param skin{String} Specifies the skin to be used to represent the enabled or disabled dates.<b>Mandatory</b>
		 * @param enable {Boolean} Specifies the boolean value that indicates if the dates listed must be enabled or disabled.<b>Mandatory</b>
		 * @Available iPhone,iPad,Android,BlackBerry,Windows,Mobile Web(Advanced),SPA (iPhone/Android/BlackBerry/Windows NTH)/Playbook
		 * @access Write
		 * @usage <pre>
        //Defining the properties for Calendar<br/>
        var calBasicConf = {id : "calID", isVisible:true, dateComponents:[31,12,2012,04,30,55], skin:"konytextar", focusSkin:"calFocus", dateFormat:"dd/MM/yyyy", viewType:constants.CALENDAR_VIEW_TYPE_GRID_POPUP, validStartDate:[01,01,2012], validEndDate:[31,12,2012], date:[31,12,2012], placeholder:"JSCalendar", calendarIcon:"cal.png"};<br/>
		var calLayoutConf = {containerWeight:100};<br/>
		var calPSPConf = {};<br/>
		
		//Creating the Calendar.<br/>
		var Calendar = new kony.ui.Calendar(calBasicConf, calLayoutConf, calPSPConf);<br/>
		
		//setEnabled Method call
		Calendar.setEnabled([[07,04,2012],  [27,04,2012],[1,04,2012],[15,04,2012],[18,04,2012],[21,04,2012]], skin:"konytextar", true);</pre>
		 */
		this.setEnabled = function (/**Object*/dates,/**String*/skin,/**Boolean*/enable)	{}
		
		
		/**
		 * This method allows you to enable/disable the range of dates that fall between the startdate and enddate and disables/enables the rest of the dates that fall in between startdate and enddate which are set through code or IDE.
		 * @param startDate{Object} Specifies the start date in a tabular format which follows {dd,mm,yyyy} convention .<b>Mandatory</b>
		 * @param endDate{Object} Specifies the end date in a tabular format which follows {dd,mm,yyyy} convention.<b>Mandatory</b>
		 * @param skin{String} Specifies the skin to be used to represent the enabled or disabled dates.<b>Mandatory</b>
		 * @param enable{Boolean} Specifies the boolean value that indicates if the dates listed must be enabled or disabled.<b>Mandatory</b>
		 * @Available iPhone,iPad,Android,BlackBerry,Windows,Mobile Web(Advanced),SPA
		 * @access Write
		 * @usage <pre>
		//Defining the properties for Calendar<br/>
		var calBasicConf = {id : "calID", isVisible:true, dateComponents:[31,12,2012,04,30,55], skin:"konytextar", focusSkin:"calFocus", dateFormat:"dd/MM/yyyy", viewType:constants.CALENDAR_VIEW_TYPE_GRID_POPUP, validStartDate:[01,01,2012], validEndDate:[31,12,2012], date:[31,12,2012], placeholder:"JSCalendar", calendarIcon:"cal.png"};<br/>
		var calLayoutConf = {containerWeight:100};<br/>
		var calPSPConf = {};<br/>
		
		//Creating the Calendar.<br/>
		var Calendar = new kony.ui.Calendar(calBasicConf, calLayoutConf, calPSPConf);<br/>
		
		//EnableRangeOfDates Method call<br/>
		Calendar.enableRangeOfDates([07,04,2012], [21,04,2012], skin:"konytextar", true);</pre>
		 */
		this.enableRangeOfDates = function (/**Object*/startDate,/**Object*/endDate,/**String*/skin,/**Boolean*/enable)	{}
		
		/**
		 * This method allows you to enable all the dates that fall between the startdate and enddate.		 
		 * @Available iPhone,iPad,Android,BlackBerry,Windows,Mobile Web(Advanced),SPA
		 * @access Write
		 * @usage <pre>
		//Defining the properties for Calendar<br/>
		var calBasicConf = {id : "calID", isVisible:true, dateComponents:[31,12,2012,04,30,55], skin:"konytextar", focusSkin:"calFocus", dateFormat:"dd/MM/yyyy", viewType:constants.CALENDAR_VIEW_TYPE_GRID_POPUP, validStartDate:[01,01,2012], validEndDate:[31,12,2012], date:[31,12,2012], placeholder:"JSCalendar", calendarIcon:"cal.png"};<br/>
		var calLayoutConf = {containerWeight:100};<br/>
		var calPSPConf = {};<br/>
		
		//Creating the Calendar.<br/>
		var Calendar = new kony.ui.Calendar(calBasicConf, calLayoutConf, calPSPConf);<br/>
		
		//setEnableAll Method call<br/>
		Calendar.setEnableAll();</pre>
		 */
		this.setEnableAll = function() {}
		
		/**
		 * This method allows you to set the skin and control the look and feel of each cell in the calendar.
		 * @param dates{Object} Specifies the dates in a table format which follows {dd,mm,yyyy} convention .<b>Mandatory</b>
		 * @param skin{String} Specifies the skin to be used to represent the enabled or disabled dates.<b>Mandatory</b>
		 * @Available iPhone,iPad,Android,BlackBerry,Windows,Mobile Web(Advanced),SPA
		 * @access Write
		 * @usage <pre>
		//Defining the properties for Calendar<br/>
		var calBasicConf = {id : "calID", isVisible:true, dateComponents:[31,12,2012,04,30,55],skin:"konytextar", focusSkin:"calFocus", dateFormat:"dd/MM/yyyy", viewType:constants.CALENDAR_VIEW_TYPE_GRID_POPUP, validStartDate:[01,01,2012], validEndDate:[31,12,2012], date:[31,12,2012], placeholder:"JSCalendar", calendarIcon:"cal.png"};<br/>
		var calLayoutConf = {containerWeight:100};<br/>
		var calPSPConf = {};<br/>
		
		//Creating the Calendar<br/>
		var Calendar = new kony.ui.Calendar(calBasicConf, calLayoutConf, calPSPConf);<br/>
		
		//setDatesSkin Method call<br/>
		Calendar.setDatesSkin([[27,04,2012],[30,04,2012],[01,04,2012]], skin:"konytextar");</pre>
		 */
		this.setDatesSkin = function(/**Object*/dates,/**String*/skin) {}
	
	    /**
	     * This method specifies the widget that must be enabled or disabled.
		 * @param enabled{Boolean} Indicates widget whether true or false.<b>Mandatory</b>
		 * @Available All Platforms except on Map widget for SPA platform 
		 * @access Write
		 */
        this.setEnabled = function (/**Boolean*/enabled) {}	
    	
	
	    /**
	     * This method specifies the widget on which there must be focus. 
		 * @param focus{Boolean} Indicates focus is set on a widget.<b>Mandatory</b>
		 * @Available All Platforms 
		 * @access Write
		 */
        this.setFocus = function (/**Boolean*/focus) {}	 
		
		
		/**
	     * Specifies the method to set the visibility of the widget.
		 * @param visible{Boolean} Indicates visibility on a widget.<b>Mandatory</b>
		 * @param animationConfig {Object} <b>Specifies the animation configuration object.<b> Note: This is OPTIONAL parameter and is supported only on iOS and Android platforms.</b></dd>
			<pre>  &nbsp;&nbsp;  <pre> &nbsp;&nbsp;<b>- animEffect</b> {Object} Specifies the animation effect. Following are the available options of animation effect. <b>Optional </b></pre> </pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_EFFECT_EXPAND:&#160;Specifies the widget must expand gradually by increasing the height of the widget. This option is applicable only when visibility is turned on.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_EFFECT_REVEAL: Specifies the widget must appear gradually by decreasing the transparency of the widget.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_EFFECT_COLLAPSE: This is applicable when the visibility is turned off. Specifies the widget must collapse gradually by decreasing the height of the widget.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_EFFECT_FADE:�This is applicable when the visibility is turned off. Specifies the widget must disappear gradually by increasing the transparency of the widget.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_EFFECT_NONE:&#160;This is the default option. Specifies animation should not be applied to the widget, but layout animations are applied on the Form that may be change the current widgets layout. The animation events are not triggered when this option is set.</pre></li></pre></dd>
		
			<pre>  &nbsp;&nbsp;  <pre> &nbsp;&nbsp;<b>- animDuration - Optional </b> {Number} Specifies the duration of the animation effect in seconds. The default value is 1. <b>Optional </b></pre> </pre></dd>
			
			<pre>  &nbsp;&nbsp;  <pre> &nbsp;&nbsp;<b>- animDelay - Optional </b> {Number} Specifies the delay of the animation effect in seconds. The default value is 0. <b>Optional </b></pre> </pre></dd>
			
			<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp; <b>- animCurve - Optional </b> Specifies the animation curve to be applied while playing the animation. An animation curve defines the speed of the animations at different intervals of the animation duration. Following are the available options of animation curve: </p></dd> </pre> </pre> </dd>
        		<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_CURVE_EASEIN:&#160;Specifies the animation to start slowly and then continues with normal speed.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_CURVE_EASEOUT: Specifies the animation to start with normal speed and slowdown towards the end.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_CURVE_EASEINOUT:&#160;Specifies the animation to start slowly and then continues with normal speed and then again slowdown towards the end.</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; constants.ANIMATION_CURVE_LINEAR:&#160;This is the default value. Specifies the animation to continue with normal speed.</pre></li></pre></dd>

			<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp; <b>- animCallBacks - Optional </b> It is a JS dictionary containing the events invoked by the platform during the animation life cycle. Following are the available events: </p></dd> </pre> </pre> </dd>
        		<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; animStarted:&#160;Invoked at the end of the animation without any parameters. Following is the signature of the event:</pre></li></pre></dd><b>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp;<b>function animStarted() </b></dd> </p></pre> </pre> </pre> </br> </pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp; animEnded: Invoked at the end of the animation without any parameters. Following is the signature of the event:</pre></li></pre></dd>
				<pre> &nbsp;&nbsp;  <pre> &nbsp;&nbsp;&nbsp;&nbsp;<li><pre>&nbsp;&nbsp;&nbsp;&nbsp;<b>function animEnded() </b></pre> </pre> </pre>
		 
		 * @Available All Platforms except on all Mobile Web platforms
		 * @access Write
		 */
		this.setVisibility = function (/**Boolean*/visible,/**Object*/animationConfig) {}	
		
	
	}
	
	
	//HorizontalImageStrip2 widget properties are defined here
	ui.HorizontalImageStrip2 =  
	/**
	 * Creates a new HorizontalImageStrip2 object
	 * @class kony.ui.HorizontalImageStrip2
	 * @returns {kony.ui.HorizontalImageStrip2}
	 */
	function HorizontalImageStrip2(basicProperties, layoutProperties, platformSpecificProperties){
	
	    //HorizontalImageStrip2 - Basic Configuration Properties Starts here
	
	 	/**
		 * Defines a string of alpha numeric characters that uniquely identifies a widget within an application.
		 * @property {String}
		 * @Mandatory Yes
		 * @Available All Platforms
		 * @access Read
		 */
		this.id = ""
	
	    /**
		 * Specifies custom JS Object with the key,value pairs that a developer can use to store the context with the widget. 
		 * @property {Object}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.info = {}	
	
	    /**
		 * Specifies the look and feel of the HorizontalImageStrip when not in focus.
		 * @property {String}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.skin = ""

		/**
		 * Specifies the look and feel of the HorizontalImageStrip widget when in focus.   
		 * @property {String}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.focusSkin = ""
	
	    /**
		 * Specifies the Property to set widget visibility on the form.   
		 * @property {Boolean}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.isVisible = true
	
	    /**
		 * Indicates the currently selected row in the HorizontalImageStrip. The index is with respect to the order in which data is set with data property.  
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.selectedIndex = 0
	
	    /**
		 * Returns the selected data object (input array) corresponding to the selected image of the HorizontalImageStrip.   
		 * @property {Object}
		 * @Available All Platforms
		 * @access Read 
		 */
		this.selectedItem = {}
	
	    /**
		 * Specifies the JS Object which represents the images to be rendered in HorizontalImageStrip.    
		 * @property {Array}
		 * @Available All Platforms
		 * @access Read and write 
		 */
		this.data = []
		
		/**
		 * Specifies the view type of HorizontalImageStrip.    
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read and write 
		 */
		this.viewType = 0
		
	
		/**
		 * Specifies the view configuration properties such as projectionAngle, imageItemRotationAngle, and isCircular as applicable when the viewType is set as HORIZONTAL_IMAGESTRIP_VIEW_TYPE_COVERFLOW. The properties Fling Velocity, Flip Interval, and Scroll Distance are configurable properties when the viewType is set as HORIZONTAL_IMAGESTRIP_VIEW_TYPE_SLOTVIEW. The property enableScrollBounce is applicable when viewType is set as HORIZONTAL_IMAGESTRIP_VIEW_TYPE_STRIPVIEW
		 * @property {Object}
		 * @Available Available on All platforms except Server side Mobile Web platform.
		 * @access Read and Write
		 */
		this.viewConfig = {}
		
		/**
		 * Specifies the accessiblity configuration property for the widget.
		 * @property {Object}
		 * @Available iPhone, Android, SPA-iPhone, and SPA-Android Platforms
		 * @access Read and Write
		 * @usage <pre>
		 /* accessibilityConfig =  {
				"a11yHidden": false,
				"a11yValue": "Your text goes here",
				"a11yLabel": "Your text goes here",
				"a11yHint": "Your text goes here"
			},
		*/
		this.accessibilityConfig = {}
		
		
		//HorizontalImageStrip2 - Layout Configuration Properties Starts here
		
		/**
		 * The percentage of width to be allocated by its parent widget.The parent's widget space is distributed to its child widgets based on this weight factor. All its child widgets should sum up to 100% of weight except when placed in kony.ui.ScrollBox
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.containerWeight = 0
		
		/**
		 * Specifies the space around a widget.
		 * @property {Array}
		 * @Available All Platforms except Mobile Web (basic).
		 * @access Read and Write
		 */
		this.margin = []	
		
		/**
		 * specifies the space between the content of the widget and the widget boundaries.
		 * @property {Array}
		 * @Available All Platforms except Mobile Web (basic).
		 * @access Read and Write
		 */
		this.padding = []
		
		/**
		 * Specifies the reference image height in pixels. These are device independent Pixels specified against 163 dpi.
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.referenceHeight = 1
		
		/**
		 * Specifies the reference image width in pixels. These are device independent Pixels specified against 163 dpi.
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.referenceWidth = 1
		
		//HorizontalImageStrip2- Platform Specific Properties

		/**
		 * Specifies the hint text when the cursor hovers over a widget.
		 * @property {String}
		 * @Available windows 8
		 * @access Read and Write
		 */
		this.toolTip = ""	
		
		/**
		 * Specifies the look and feel of a widget when the cursor hovers on the widget.
		 * @property {String}
		 * @Available windows 8,Desktop Web
		 * @access Read and Write
		 */
		this.hoverSkin = ""	
		
		//This should be moved under basic list		
		/**
		 * Specifies the type of view of HorizontalImageStrip
		 * @property {String}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.viewType = ""
		
		
		/**
		 * Specifies the layout changes that occur due to the animations applied/removed on other widgets. 
		 * @property {Object}
		 * @Available iOS and Android Platforms
		 * @access Read and Write
		 */
		this.layoutAnimConfig = {}
		
		
		//HorizontalImageStrip2- Events starts here
		
		/**
		 * An event callback that is invoked by the platform when an Image is selected in HorizontalImageStrip. 
		 * @property {Event}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.onselection = new Event ()
		
		
		/**
		 * This event allows the developer to execute custom javascript function when the HorizontalImageStrip is invoked. This is applicable only for Mobile Web channel. The function must exist in a javascript file under project>module>js folder.
		 * @property {Event}
		 * @Available Mobile Web (advanced),SPA (iPhone/Android/BlackBerry/Windows NTH)/Playbook 
		 * @access Read and Write
		 */
		this.preOnclickJS = new Event ()
		
		/**
		 * This event allows the developer to execute custom javascript function after the onClick callback of the HorizontalImageStrip2 is invoked. This is applicable only for Mobile Web channel.The function must exist in a javascript file under project>module>js folder. 
		 * @property {Event}
		 * @Available Mobile Web (advanced),SPA (iPhone/Android/BlackBerry/Windows NTH)/Playbook 
		 * @access Read and Write
		 */
		this.postOnclickJS = new Event ()
		
		
		//HorizontalImageStrip2- Methods starts here
		
		/**
		 * This method allows you to add new images to the HorizontalImageStrip2. The new images are appended to the existing images. 
		 * @param arrayofdata{Array} Specifies array of objects having image property.<b>Mandatory</b>
		 * @param imageurlproperty{String} Specifies the url in the JSObject passed in the first argument whose value must be considered for the image.<b>Mandatory</b>
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>
		//Defining the properties for HorizontalImagestrip <br/>
		var hISBasic={id:"hIS",skin:"hISkn", focusSkin:"hISknFocus", isVisible:true, selectedIndex:1, imageWhileDownloading:"img.png", imageWhenFailed:"img3.png", spaceBetweenImages:20,data:[[{"imagekey":"image1.png"}, {"imagekey":"image2.png"}, "imagekey"]],viewType:constants.HORIZONTAL_IMAGESTRIP_VIEW_TYPE_COVERFLOW};<br/>
		var hISLayout={padding:[5,5,5,5], margin:[5,5,5,5], paddingInPixel:true, marginInPixel:true, referenceWidth:100, referenceHeight:100, containerWeight:100};<br/>
        var hISPSP={};<br/>
		
		//Creating the Horizontal Image strip.<br/>
		var hIS=new kony.ui.HorizontalImageStrip2(hISBasic, hISLayout, hISPSP);<br/>
		
		//Adding new new images to the HorizontalImagestrip by addAll method, We can use external URL images or the images inside resources folder.<br/>
        hIS.addAll( [{ imageurl: "http://chromeactions.com/i/3d-like-box.png" },{ imageurl: "http://www.unlockiphoneinstantly.com/wp-content/themes/unlockiphone/images/check-box.jpg" }],"imageurl");</pre>
		 */
		this.addAll = function(/**Array*/arrayofdata,/**String*/imageurlproperty) {}
		
		
		/**
		 * This method allows you to add/insert a new image at a given index. 
		 * @param imagedata{Object} Specifies the JSobject having image property.<b>Mandatory</b>
		 * @param index{Number} Specifies the position in number format.<b>Mandatory</b>
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>
		//Defining the properties for HorizontalImagestrip2.<br/>
		var hISBasic={id:"hIS",skin:"hISkn", focusSkin:"hISknFocus", isVisible:true, selectedIndex:1, imageWhileDownloading:"img.png", imageWhenFailed:"img3.png", spaceBetweenImages:20,data:[[{"imagekey":"image1.png"}, {"imagekey":"image2.png"}, "imagekey"]],viewType:constants.HORIZONTAL_IMAGESTRIP_VIEW_TYPE_COVERFLOW};<br/>
        var hISLayout={padding:[5,5,5,5], margin:[5,5,5,5], paddingInPixel:true, marginInPixel:true, referenceWidth:100, referenceHeight:100, containerWeight:100};<br/>
		var hISPSP={};<br/>
		
		//Creating the HorizontalImagestrip2.<br/>
		var hIS=new kony.ui.HorizontalImageStrip2(hISBasic, hISLayout, hISPSP);<br/>
		
		//Adding new new image at a 1st index by addDataAt method.<br/>
		hIS.addDataAt({ imageurl: "http://chromeactions.com/i/3d-like-box.png" }, 1);</pre>
		 */
		this.addDataAt = function(/**Object*/imagedata,/**Number*/index) {}
		
		
		/**
		 * This method is used to remove all the images in the HorizontalImageStrip2. 
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>
		//Defining the properties for HorizontalImageStrip2.<br/>
		var hISBasic={id:"hIS",skin:"hISkn", focusSkin:"hISknFocus", isVisible:true, selectedIndex:1, imageWhileDownloading:"img.png", imageWhenFailed:"img3.png", spaceBetweenImages:20,data:[[{"imagekey":"image1.png"}, {"imagekey":"image2.png"}, "imagekey"]],viewType:constants.HORIZONTAL_IMAGESTRIP_VIEW_TYPE_COVERFLOW};<br/>
        var hISLayout={padding:[5,5,5,5], margin:[5,5,5,5], paddingInPixel:true, marginInPixel:true, referenceWidth:100, referenceHeight:100, containerWeight:100};<br/>
		var hISPSP={};<br/>
		
		//Creating the HorizontalImageStrip2.<br/>
		var hIS=new kony.ui.HorizontalImageStrip2(hISBasic, hISLayout, hISPSP);<br/>
		
		//Removing all the images inside the Horizontal Image strip using removeAll method.<br/>
        hIS.removeAll();</pre>
         */
		this.removeAll = function() {}
		
		/**
		 * This method removes the images at the given index in the HorizontalImageStrip2. 
		 * @param index {Number} Specifies the position in number format.<b>Mandatory</b> 
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>
        //Defining the properties for HorizontalImagestrip2.<br/>   
        var hISBasic={id:"hIS",skin:"hISkn", focusSkin:"hISknFocus", isVisible:true, selectedIndex:1, imageWhileDownloading:"img.png", imageWhenFailed:"img3.png", spaceBetweenImages:20,data:[[{"imagekey":"image1.png"}, {"imagekey":"image2.png"}, "imagekey"]],viewType:constants.HORIZONTAL_IMAGESTRIP_VIEW_TYPE_COVERFLOW};<br/>
        var hISLayout={padding:[5,5,5,5], margin:[5,5,5,5], paddingInPixel:true, marginInPixel:true, referenceWidth:100, referenceHeight:100, containerWeight:100};<br/>
        var hISPSP={};<br/> 
		
		//Creating the HorizontalImageStrip2.<br/>
		var hIS=new kony.ui.HorizontalImageStrip2(hISBasic, hISLayout, hISPSP);<br/>
		
		//Removing the image  at index 1 using removeAt method.<br/>
		hIS.removeAt(1);</pre>
         */
		this.removeAt = function(/**Number*/index) {}
		
		/**
		 * This method allows you to set new images to the HorizontalImageStrip2. 
		 * @param arrayofdata{Array} Specifies array of objects having image property.<b>Mandatory</b>
		 * @param imageurlproperty{String} Specifies the url in the JSObject passed in the first argument whose value must be considered for the image.<b>Mandatory</b>
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>
        //Defining the properties for HorizontalImageStrip2.<br/>
        var hISBasic={id:"hIS",skin:"hISkn",focusSkin:"hISknFocus", isVisible:true, selectedIndex:1, imageWhileDownloading:"img.png", imageWhenFailed:"img3.png", spaceBetweenImages:20, data:[[{"imagekey":"image1.png"}, {"imagekey":"image2.png"}, "imagekey"]], viewType:constants.HORIZONTAL_IMAGESTRIP_VIEW_TYPE_COVERFLOW};<br/>
        var hISLayout={padding:[5,5,5,5], margin:[5,5,5,5], paddingInPixel:true, marginInPixel:true, referenceWidth:100, referenceHeight:100, containerWeight:100};<br/>
        var hISPSP={};<br/>

        //Creating the HorizontalImageStrip.<br/>  
        var hIS=new kony.ui.HorizontalImageStrip2(hISBasic, hISLayout, hISPSP);<br/>
		
		//Replacing existing images with the new images using setData method,We can use external URL images or the images inside resources folder.<br/>
		hIS.setData([{ imageurl: "http://chromeactions.com/i/3d-like-box.png" },
	    { imageurl: "http://chromeactions.com/i/3d-like-box.png1" },
	    { imageurl: "http://www.unlockiphoneinstantly.com/wp-content/themes/unlockiphone/images/check-box.jpg" },
	    { imageurl: "http://chromeactions.com/i/3d-like-box.png1" },
	    { imageurl: "image2.png"}],"imageurl" 
	    );</pre>
         */
		this.setData = function(/**Array*/arrayofdata,/**String*/imageurlproperty) {}


        /**
		 * This method allows you to set a new image at a given index. 
		 * @param imagedata{Object} Specifies JSObject having image property.<b>Mandatory</b>
		 * @param index{Number} Specifies the position in number format.<b>Mandatory</b>
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>
		//Defining the properties for HorizontalImagestrip2.<br/>
		var hISBasic={id:"hIS", skin:"hISkn", focusSkin:"hISknFocus", isVisible:true, selectedIndex:1, imageWhileDownloading:"img.png", imageWhenFailed:"img3.png", spaceBetweenImages:20, data:[[{"imagekey":"image1.png"}, {"imagekey":"image2.png"}, "imagekey"]], viewType:constants.HORIZONTAL_IMAGESTRIP_VIEW_TYPE_COVERFLOW};<br/>
		var hISLayout={padding:[5,5,5,5], margin:[5,5,5,5], paddingInPixel:true, marginInPixel:true, referenceWidth:100, referenceHeight:100, containerWeight:100};<br/>
		var hISPSP={};<br/>
		
		//Creating the HorizontalImageStrip.<br/>
		var hIS=new kony.ui.HorizontalImageStrip2(hISBasic, hISLayout, hISPSP);<br/>
		
		//set a new image at a 1st index by setDataAt method<br/>
		hIS.setDataAt({ imageurl: "http://chromeactions.com/i/3d-like-box.png" }, 1);</pre>
	     */
		this.setDataAt = function(/**Object*/imagedata,/**Number*/index) {}
	
	
	    /**
	     * This method specifies the widget that must be enabled or disabled.
		 * @param enabled{Boolean} Indicates widget whether true or false.<b>Mandatory</b>
		 * @Available All Platforms except on Map widget for SPA platform 
		 * @access Write
		 */
        this.setEnabled = function (/**Boolean*/enabled) {}	
    		
	
	    /**
	     * This method specifies the widget on which there must be focus. 
		 * @param focus{Boolean} Indicates focus is set on a widget.<b>Mandatory</b>
		 * @Available All Platforms 
		 * @access Write
		 */
        this.setFocus = function (/**Boolean*/focus) {}	 
		
		
		/**
	     * Specifies the method to set the visibility of the widget.
		 * @param visible{Boolean} Indicates visibility on a widget.<b>Mandatory</b>
		 * @Available All Platforms except on all Mobile Web platforms.
		 * @access Write
		 */
		this.setVisibility = function (/**Boolean*/visible) {}	
	}
		

	//For Backward compatability this code has been added to support 4.1 and below versions. 
	
	//HorizontalImageStrip widget properties are defined here
	ui.HorizontalImageStrip =  
	/**
	 * Creates a new HorizontalImageStrip object
	 * @class kony.ui.HorizontalImageStrip
	 * @returns {kony.ui.HorizontalImageStrip}
	 */
	function HorizontalImageStrip(basicProperties, layoutProperties, platformSpecificProperties){
	
	    //HorizontalImageStrip - Basic Configuration Properties Starts here
	
	 	/**
		 * Defines a string of alpha numeric characters that uniquely identifies a widget within an application.
		 * @property {String}
		 * @Mandatory Yes
		 * @Available All Platforms
		 * @access Read
		 */
		this.id = ""
	
	    /**
		 * Specifies custom JS Object with the key,value pairs that a developer can use to store the context with the widget. 
		 * @property {Object}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.info = {}	
	
	    /**
		 * Specifies the look and feel of the HorizontalImageStrip when not in focus.
		 * @property {String}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.skin = ""

		/**
		 * Specifies the look and feel of the HorizontalImageStrip widget when in focus.   
		 * @property {String}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.focusSkin = ""
	
	    /**
		 * Specifies the Property to set widget visibility on the form.   
		 * @property {Boolean}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.isVisible = true
	
	    /**
		 * Indicates the currently selected row in the HorizontalImageStrip. The index is with respect to the order in which data is set with data property.  
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.selectedIndex = 0
	
	    /**
		 * Returns the selected data object (input array) corresponding to the selected image of the HorizontalImageStrip.   
		 * @property {Object}
		 * @Available All Platforms
		 * @access Read 
		 */
		this.selectedItem = {}
	
	    /**
		 * Specifies the JS Object which represents the images to be rendered in HorizontalImageStrip.    
		 * @property {Array}
		 * @Available All Platforms
		 * @access Read and write 
		 */
		this.data = []
		
		/**
		 * Specifies the view type of HorizontalImageStrip.    
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read and write 
		 */
		this.viewType = 0
		
		/**
		 * Specifies the view configuration for different viewtypes in the HorizontalImagestrip.    
		 * @property {Object}
		 * @Available All Platforms except Mobile Web platforms.
		 * @access Read and write 
		 */
		this.viewConfig = {}
		
		
		
		//HorizontalImageStrip - Layout Configuration Properties Starts here
		
		/**
		 * The percentage of width to be allocated by its parent widget.The parent's widget space is distributed to its child widgets based on this weight factor. All  its child widgets should sum up to 100% of weight except when placed in kony.ui.ScrollBox
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.containerWeight = 0
		
		/**
		 * Specifies the space around a widget.
		 * @property {Array}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.margin = []	
		
		/**
		 * specifies the space between the content of the widget and the widget boundaries.
		 * @property {Array}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.padding = []
		
		/**
		 * Specifies the reference image height in pixels. These are device independent Pixels specified against 163 dpi.
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.referenceHeight = 1
		
		/**
		 * Specifies the reference image width in pixels. These are device independent Pixels specified against 163 dpi.
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.referenceWidth = 1
		
		//HorizontalImageStrip- Platform Specific Properties

		/**
		 * Specifies the hint text when the cursor hovers over a widget.
		 * @property {String}
		 * @Available windows 8
		 * @access Read and Write
		 */
		this.toolTip = ""	
		
				
		/**
		 * Specifies the type of view of HorizontalImageStrip
		 * @property {String}
		 * @Available BB,J2ME,SPA and Windows 8
		 * @access Read and Write
		 */
		this.viewType = ""
		
		
		/**
		 * Specifies the look and feel of a widget when the cursor hovers on the widget.
		 * @property {String}
		 * @Available windows 8,Desktop Web
		 * @access Read and Write
		 */
		this.hoverSkin = ""	
		
		//HorizontalImageStrip- Events starts here
		
		/**
		 * An event callback that is invoked by the platform when an Image is selected in HorizontalImageStrip. 
		 * @property {Event}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.onselection = new Event ()
		
		
		/**
		 * This event allows the developer to execute custom javascript function when the HorizontalImageStrip is invoked. This is applicable only for Mobile Web channel. The function must exist in a javascript file under project>module>js folder.
		 * @property {Event}
		 * @Available Mobile Web (advanced),SPA (iPhone/Android/BlackBerry/Windows NTH)/Playbook 
		 * @access Read and Write
		 */
		this.preOnclickJS = new Event ()
		
		/**
		 * This event allows the developer to execute custom javascript function after the onClick callback of the HorizontalImageStrip is invoked. This is applicable only for Mobile Web channel.The function must exist in a javascript file under project>module>js folder. 
		 * @property {Event}
		 * @Available Mobile Web (advanced),SPA (iPhone/Android/BlackBerry/Windows NTH)/Playbook 
		 * @access Read and Write
		 */
		this.postOnclickJS = new Event ()
		
		//HorizontalImageStrip- Methods starts here
		
		/**
		 * This method allows you to add new images to the HorizontalImageStrip. The new images are appended to the existing images. 
		 * @param arrayofdata{Array} Specifies array of objects having image property.<b>Mandatory</b>
		 * @param imageurlproperty{String} Specifies the url in the JSObject passed in the first argument whose value must be considered for the image.<b>Mandatory</b>
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>
		//Defining the properties for HorizontalImagestrip <br/>
		var hISBasic={id:"hIS",skin:"hISkn", focusSkin:"hISknFocus", isVisible:true, selectedIndex:1, imageWhileDownloading:"img.png", imageWhenFailed:"img3.png", spaceBetweenImages:20,data:[[{"imagekey":"image1.png"}, {"imagekey":"image2.png"}, "imagekey"]],viewType:constants.HORIZONTAL_IMAGESTRIP_VIEW_TYPE_COVERFLOW};<br/>
		var hISLayout={padding:[5,5,5,5], margin:[5,5,5,5], paddingInPixel:true, marginInPixel:true, referenceWidth:100, referenceHeight:100, containerWeight:100};<br/>
        var hISPSP={};<br/>
		
		//Creating the Horizontal Image strip.<br/>
		var hIS=new kony.ui.HorizontalImageStrip(hISBasic, hISLayout, hISPSP);<br/>
		
		//Adding new new images to the HorizontalImagestrip by addAll method, We can use external URL images or the images inside resources folder.<br/>
        hIS.addAll( [{ imageurl: "http://chromeactions.com/i/3d-like-box.png" },{ imageurl: "http://www.unlockiphoneinstantly.com/wp-content/themes/unlockiphone/images/check-box.jpg" }],"imageurl");</pre>
		 */
		this.addAll = function(/**Array*/arrayofdata,/**String*/imageurlproperty) {}
		
		
		/**
		 * This method allows you to add/insert a new image at a given index. 
		 * @param imagedata{Object} Specifies the JSobject having image property.<b>Mandatory</b>
		 * @param index{Number} Specifies the position in number format.<b>Mandatory</b>
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>
		//Defining the properties for HorizontalImagestrip.<br/>
		var hISBasic={id:"hIS",skin:"hISkn", focusSkin:"hISknFocus", isVisible:true, selectedIndex:1, imageWhileDownloading:"img.png", imageWhenFailed:"img3.png", spaceBetweenImages:20,data:[[{"imagekey":"image1.png"}, {"imagekey":"image2.png"}, "imagekey"]],viewType:constants.HORIZONTAL_IMAGESTRIP_VIEW_TYPE_COVERFLOW};<br/>
        var hISLayout={padding:[5,5,5,5], margin:[5,5,5,5], paddingInPixel:true, marginInPixel:true, referenceWidth:100, referenceHeight:100, containerWeight:100};<br/>
		var hISPSP={};<br/>
		
		//Creating the HorizontalImagestrip.<br/>
		var hIS=new kony.ui.HorizontalImageStrip(hISBasic, hISLayout, hISPSP);<br/>
		
		//Adding new new image at a 1st index by addDataAt method.<br/>
		hIS.addDataAt({ imageurl: "http://chromeactions.com/i/3d-like-box.png" }, 1);</pre>
		 */
		this.addDataAt = function(/**Object*/imagedata,/**Number*/index) {}
		
		
		/**
		 * This method is used to remove all the images in the HorizontalImageStrip2. 
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>
		//Defining the properties for HorizontalImageStrip.<br/>
		var hISBasic={id:"hIS",skin:"hISkn", focusSkin:"hISknFocus", isVisible:true, selectedIndex:1, imageWhileDownloading:"img.png", imageWhenFailed:"img3.png", spaceBetweenImages:20,data:[[{"imagekey":"image1.png"}, {"imagekey":"image2.png"}, "imagekey"]],viewType:constants.HORIZONTAL_IMAGESTRIP_VIEW_TYPE_COVERFLOW};<br/>
        var hISLayout={padding:[5,5,5,5], margin:[5,5,5,5], paddingInPixel:true, marginInPixel:true, referenceWidth:100, referenceHeight:100, containerWeight:100};<br/>
		var hISPSP={};<br/>
		
		//Creating the HorizontalImageStrip2.<br/>
		var hIS=new kony.ui.HorizontalImageStrip(hISBasic, hISLayout, hISPSP);<br/>
		
		//Removing all the images inside the Horizontal Image strip using removeAll method.<br/>
        hIS.removeAll();</pre>
         */
		this.removeAll = function() {}
		
		/**
		 * This method removes the images at the given index in the HorizontalImageStrip. 
		 * @param index {Number} Specifies the position in number format.<b>Mandatory</b> 
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>
        //Defining the properties for HorizontalImagestrip.<br/>   
        var hISBasic={id:"hIS",skin:"hISkn", focusSkin:"hISknFocus", isVisible:true, selectedIndex:1, imageWhileDownloading:"img.png", imageWhenFailed:"img3.png", spaceBetweenImages:20,data:[[{"imagekey":"image1.png"}, {"imagekey":"image2.png"}, "imagekey"]],viewType:constants.HORIZONTAL_IMAGESTRIP_VIEW_TYPE_COVERFLOW};<br/>
        var hISLayout={padding:[5,5,5,5], margin:[5,5,5,5], paddingInPixel:true, marginInPixel:true, referenceWidth:100, referenceHeight:100, containerWeight:100};<br/>
        var hISPSP={};<br/> 
		
		//Creating the HorizontalImageStrip.<br/>
		var hIS=new kony.ui.HorizontalImageStrip(hISBasic, hISLayout, hISPSP);<br/>
		
		//Removing the image  at index 1 using removeAt method.<br/>
		hIS.removeAt(1);</pre>
         */
		this.removeAt = function(/**Number*/index) {}
		
		/**
		 * This method allows you to set new images to the HorizontalImageStrip. 
		 * @param arrayofdata{Array} Specifies array of objects having image property.<b>Mandatory</b>
		 * @param imageurlproperty{String} Specifies the url in the JSObject passed in the first argument whose value must be considered for the image.<b>Mandatory</b>
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>
        //Defining the properties for HorizontalImageStrip.<br/>
        var hISBasic={id:"hIS",skin:"hISkn",focusSkin:"hISknFocus", isVisible:true, selectedIndex:1, imageWhileDownloading:"img.png", imageWhenFailed:"img3.png", spaceBetweenImages:20, data:[[{"imagekey":"image1.png"}, {"imagekey":"image2.png"}, "imagekey"]], viewType:constants.HORIZONTAL_IMAGESTRIP_VIEW_TYPE_COVERFLOW};<br/>
        var hISLayout={padding:[5,5,5,5], margin:[5,5,5,5], paddingInPixel:true, marginInPixel:true, referenceWidth:100, referenceHeight:100, containerWeight:100};<br/>
        var hISPSP={};<br/>

        //Creating the HorizontalImageStrip.<br/>  
        var hIS=new kony.ui.HorizontalImageStrip(hISBasic, hISLayout, hISPSP);<br/>
		
		//Replacing existing images with the new images using setData method,We can use external URL images or the images inside resources folder.<br/>
		hIS.setData([{ imageurl: "http://chromeactions.com/i/3d-like-box.png" },
	    { imageurl: "http://chromeactions.com/i/3d-like-box.png1" },
	    { imageurl: "http://www.unlockiphoneinstantly.com/wp-content/themes/unlockiphone/images/check-box.jpg" },
	    { imageurl: "http://chromeactions.com/i/3d-like-box.png1" },
	    { imageurl: "image2.png"}],"imageurl" 
	    );</pre>
         */
		this.setData = function(/**Array*/arrayofdata,/**String*/imageurlproperty) {}


        /**
		 * This method allows you to set a new image at a given index. 
		 * @param imagedata{Object} Specifies JSObject having image property.<b>Mandatory</b>
		 * @param index{Number} Specifies the position in number format.<b>Mandatory</b>
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>
		//Defining the properties for HorizontalImagestrip.<br/>
		var hISBasic={id:"hIS", skin:"hISkn", focusSkin:"hISknFocus", isVisible:true, selectedIndex:1, imageWhileDownloading:"img.png", imageWhenFailed:"img3.png", spaceBetweenImages:20, data:[[{"imagekey":"image1.png"}, {"imagekey":"image2.png"}, "imagekey"]], viewType:constants.HORIZONTAL_IMAGESTRIP_VIEW_TYPE_COVERFLOW};<br/>
		var hISLayout={padding:[5,5,5,5], margin:[5,5,5,5], paddingInPixel:true, marginInPixel:true, referenceWidth:100, referenceHeight:100, containerWeight:100};<br/>
		var hISPSP={};<br/>
		
		//Creating the HorizontalImageStrip.<br/>
		var hIS=new kony.ui.HorizontalImageStrip(hISBasic, hISLayout, hISPSP);<br/>
		
		//set a new image at a 1st index by setDataAt method<br/>
		hIS.setDataAt({ imageurl: "http://chromeactions.com/i/3d-like-box.png" }, 1);</pre>
	     */
		this.setDataAt = function(/**Object*/imagedata,/**Number*/index) {}
	
	    /**
	     * This method specifies the widget that must be enabled or disabled.
		 * @param enabled{Boolean} Indicates widget whether true or false.<b>Mandatory</b>
		 * @Available All Platforms except on Map widget for SPA platform 
		 * @access Write
		 */
        this.setEnabled = function (/**Boolean*/enabled) {}	
    		
	
	    /**
	     * This method specifies the widget on which there must be focus. 
		 * @param focus{Boolean} Indicates focus is set on a widget.<b>Mandatory</b>
		 * @Available All Platforms 
		 * @access Write
		 */
        this.setFocus = function (/**Boolean*/focus) {}	 
		
		
		/**
	     * Specifies the method to set the visibility of the widget.
		 * @param visible{Boolean} Indicates visibility on a widget.<b>Mandatory</b>
		 * @Available All Platforms except on all Mobile Web platforms.
		 * @access Write
		 */
		this.setVisibility = function (/**Boolean*/visible) {}	
	}
	
	
	//signatureCapture widget properties are defined here.
	
	ui.signatureCapture = 
	/**
	 * Creates a new signatureCapture object
	 * @class kony.ui.signatureCapture
	 * @returns {kony.ui.signatureCapture}
	 */
	function signatureCapture(basicProperties, layoutProperties, platformSpecificProperties){
	
	    //signatureCapture - Basic Properties starts here
		
	 	/**
		 * Defines a string of alpha numeric characters that uniquely identifies a widget within an application.
		 * @property {String}
		 * @Mandatory Yes
		 * @Available Available on Windows 8 platform
		 * @access Read
		 */
		this.id = ""	
		
		/**
		 * Specifies custom JS Object with the key,value pairs that a developer can use to store the context with the widget. 
		 * @property {Object}
		 * @Available Available on Windows 8 platform
		 * @access Read and Write
		 */
		this.info = {}
		
		/**
		 * Specifies the look and feel of the widget when not in focus.
		 * @property {String}
		 * @Available Available on Windows 8 platform
		 * @access Read and Write
		 */
		this.skin = ""	
		
		
		/**
		 * Specifies the width of the stroke lines of a signature. You can enter a value between 1-10 inclusive.
		 * @property {Number}
		 * @Available Available on Windows 8 platform
		 * @access Read and Write
		 */
		this.penWidth = 0	
		
		
		/**
		 * Specifies the visibility of the widget.
		 * @property {Boolean}
		 * @Available Available on Windows 8 platform
		 * @access Read and Write
		 */
		this.isVisible = true	
	
	
		/**
		 * Returns the base64 encoded string of the image raw bytes. 
		 * @property {String}
		 * @Available Available on Windows 8 platform.
		 * @access Read 
		 */
		this.base64 = ""
		
		/**
		 * Specifies the rawbytes representing an Image (usually the image captured from the camera) that can be used as a background for the Camera.  
		 * @property {Object}
		 * @Available Available on Windows 8 platform.
		 * @access Read and Write
		 */
		this.rawBytes = {}
	
		//signatureCapture - Layout Configuration Properties starts here
		
						
		/**
		 * Specifies percentage of width to be allocated by its parent widget widget. The parent widget space is distributed to its child widgets based on this weight factor. All its child widgets should sum up to 100% of weight except when placed in kony.ui.ScrollBox.
		 * @property {Number}
		 * @Available Available on Windows 8 platform
		 * @access Read and Write
		 */
		this.containerWeight = 0
		

		/**
		 * Specifies the space around a widget.
		 * @property {Array}
		 * @Available Available on Windows 8 platform
		 * @access Read and Write
		 */
		this.margin = []	
		
		/**
		 * specifies the space between the content of the widget and the widget boundaries.
		 * @property {Array}
		 * @Available Available on Windows 8 platform
		 * @access Read and Write
		 */
		this.padding = []
	
		//signatureCapture - Platform Specific Properties start here

		/**
		 * Specifies how the captured image must be stored. 
		 * @property {Number}
		 * @Available Available on Windows 8 platform
		 * @access Read and Write
		 */
		this.accessMode = 0
		
		//signatureCapture - Events Starts here
		
		/**
		 * Event callback invoked when a picture is captured.  
		 * @property {Event}
		 * @Available Available on Windows 8 platform
		 * @access Write
		 */
		this.onCapture = new Event ()
				
		//signatureCapture - Methods starts here.
		
		/**
	     * This method specifies the widget that must be enabled or disabled.
		 * @param enabled{Boolean} Indicates widget whether true or false.<b>Mandatory</b>
		 * @Available Available on Windows 8 platform
		 * @access Write
		 */
        this.setEnabled = function (/**Boolean*/enabled) {}	
    		
	
	    /**
	     * This method specifies the widget on which there must be focus. 
		 * @param focus{Boolean} Indicates focus is set on a widget.<b>Mandatory</b>
		 * @Available Available on Windows 8 platform
		 * @access Write
		 */
        this.setFocus = function (/**Boolean*/focus) {}	 
		
		
		/**
	     * Specifies the method to set the visibility of the widget.
		 * @param visible{Boolean} Indicates visibility on a widget.<b>Mandatory</b>
		 * @Available Available on Windows 8 platform
		 * @access Write
		 */
		this.setVisibility = function (/**Boolean*/visible) {}	
		
		/**
		 * This method enables you to clear the area where a signature is captured. If signature is already set to widget, canvas will show that signature. If an image is not loaded, the area where the signature widget is placed is cleared.
		 * @Available Available on Windows 8 platform
		 * @access Write
		 * @usage <pre>
        //Defining the properties for signatureCapture<br/>
        var signatureBasic = {id:"signature", info:{key:"signature"}, skin:"signatureSkin", isVisible:true, penWidth: 3};<br/>
		var signatureLayout = {containerWeight:100};<br/>
		var signaturePSPConf = {};<br/>
				
		//Creating the signatureCapture.<br/>
		var signature = new kony.ui.signatureCapture(signatureBasic, signatureLayout, signaturePSPConf);<br/>
		
		//SignatureCapture clear Method call
		signature.clear();</pre>
		 */
		this.clear = function ()	{}
		
		
		/**
		 * This method enables you to clear the area where a signature is captured. If signature is already set to widget, canvas will show that signature. If an image is not loaded, the area where the signature widget is placed is cleared.
		 * @param filename{String} Specifies the name of the file.<b>Mandatory</b>
		 * @param  imageformat{String} Specifies the image format. The supported file formats are png, or jpg.<b>Mandatory</b>
		 * @Available Available on Windows 8 platform
		 * @access Write
		 * @usage <pre>
        //Defining the properties for signatureCapture<br/>
        var signatureBasic = {id:"signature", info:{key:"signature"}, skin:"signatureSkin", isVisible:true, penWidth: 3};<br/>
		var signatureLayout = {containerWeight:100};<br/>
		var signaturePSPConf = {};<br/>
				
		//Creating the signatureCapture.<br/>
		var signature = new kony.ui.signatureCapture(signatureBasic, signatureLayout, signaturePSPConf);<br/>
		
		//SignatureCapture save Method call
		signature.save("mysignature", "png");</pre>
		 */
		this.save = function (/**String*/filename, /**String*/imageformat)	{}
		

		/**
		 * This method enables you to return the signature that is saved as an image as rawbytes. These rawbytes can be used to assign the signature image to another widget getasrawbytes() returns rawbytes which can be assigned to a variable and later can be assigned only to an image.
		 * @param  imageformat{String} Specifies the image format. The supported file formats are png, or jpg.<b>Mandatory</b>
		 * @Available Available on Windows 8 platform
		 * @access Write
		 * @usage <pre>
		 */
		this.getAsRawBytes = function (/**String*/imageformat)	{}
	
	
	}
		
    //ObjectSelector3D Widget Properties are defined here.
	ui.ObjectSelector3D = 
	/**
	 * Creates a new ObjectSelector3D object
	 * @class kony.ui.ObjectSelector3D
	 * @returns {kony.ui.ObjectSelector3D}
	 */
	function ObjectSelector3D(basicProperties, layoutProperties, platformSpecificProperties){
	
	    //ObjectSelector3D - Basic Configuration Properties Starts here
	
	 	/**
		 * Defines a string of alpha numeric characters that uniquely identifies a widget within an application.
		 * @property {String}
		 * @Mandatory Yes
		 * @Available Windows Phone (Mango)
		 * @access Read
		 */
		this.id = ""
		
		/**
		 * Specifies custom JS Object with the key,value pairs that a developer can use to store the context with the widget. 
		 * @property {Object}
		 * @Available Windows Phone (Mango)
		 * @access Read and Write
		 */
		this.info = {}	
		
		/**
		 * Specifies a background skin for ObjectSelector3D widget.
		 * @property {String}
		 * @Available Windows Phone (Mango)
		 * @access Read and Write
		 */
		this.skin = ""

		/**
		 * Specifies the look and feel of the ObjectSelector3D when in focus.   
		 * @property {String}
		 * @Available Windows Phone (Mango)
		 * @access Read and Write
		 */
		this.focusSkin = ""

		/**
		 * Specifies a general or descriptive text for the ObjectSelector3D widget.   
		 * @property {String}
		 * @Available Windows Phone (Mango)
		 * @access Read and Write
		 */
		this.text = ""

		/**
		 * This property controls the visibility of a widget on the form.   
		 * @property {Boolean}
		 * @Available Windows Phone (Mango)
		 * @access Read and Write
		 */
		this.isVisible = true
		
		
	    //ObjectSelector3D - Layout Configuration Properties Starts here
	
		/**
		 * The percentage of width to be allocated by its parent widget.The parent's widget space is distributed to its child widgets based on this weight factor. All its child widgets should sum up to 100% of weight except when placed in kony.ui.ScrollBox
		 * @property {Number}
		 * @Available Windows Phone (Mango)
		 * @access Read and Write
		 */
		this.containerWeight = 0
		
		/**
		 * Specifies the space around a widget.
		 * @property {Array}
		 * @Available Windows Phone (Mango)
		 * @access Read and Write
		 */
		this.margin = []	
		
		/**
		 * specifies the space between the content of the widget and the widget boundaries.
		 * @property {Array}
		 * @Available Windows Phone (Mango)
		 * @access Read and Write
		 */
		this.padding = []
		
		
	    //ObjectSelector3D - Events Starts here
		
		/**
		 * An event callback that is invoked by the platform when an Image is selected in ObjectSelector3D.  
		 * @property {Event}
		 * @Available Windows Phone (Mango)
		 * @access  Read and Write
		 */
		this.onSelectionDone = new Event ()	
    

        //ObjectSelector3D - Methods Starts here

        /**
		 * This method allows you to add a new model to the widget's working set of models. 
		 * @param modelId{Number}User defined identifier which can be used to refer to this model.<b>Mandatory</b>
		 * @param resourceName{String} Specifies the name of the resource to load model data.<b>Mandatory</b>
		 * @param scale{Number}Specifies the scale factor to reduce/increase the size of the loaded model.<b>Mandatory</b>
		 * @Available Windows Phone (Mango)
		 * @access Write
		 * @usage <pre>
        //Defining the properties for ObjectSelector3D.<br/>
        var objBasic = {id:"objThreeD",skin:"ObjSkin",focusSkin:"ObjFSkin",text:"Seat reservation",isVisible:true};<br/>
		var objLayout = {widgetAlignment:constants.WIDGET_ALIGN_CENTER, padding:[5,5,5,5], margin:[5,5,5,5], contentAlignment:constants.CONTENT_ALIGN_CENTER, containerWeight:99, paddingInPixel:true, marginInPixel:true, hExpand:false, vExpand:false};<br/>

        //Creating the ObjectSelector3D.<br/>
        var objThreeD =new kony.ui.ObjectSelector3D(objBasic, objLayout, {}) ;<br/>
		
		//addModel method call.<br/>
		objThreeD.addModel(1, "Flight_Down_Up_01", 0.371);</pre>
		 */
		this.addModel = function(/**Number*/modelID,/**String*/resourceName,/**Number*/scale) {}

	    /**
		 * This method allows you to clear all the data set on the widget.
         * @Available Windows Phone (Mango)
		 * @access Write
		 * @usage <pre>
        //Defining the properties for ObjectSelector3D<br/>
		var objBasic = {id:"objThreeD", skin:"ObjSkin", focusSkin:"ObjFSkin", text:"Seat reservation", isVisible:true};<br/>
        var objLayout = {widgetAlignment:constants.WIDGET_ALIGN_CENTER, padding:[5,5,5,5], margin:[5,5,5,5], contentAlignment:constants.CONTENT_ALIGN_CENTER, containerWeight:99, paddingInPixel:true, marginInPixel:true, hExpand:false, vExpand:false};<br/>
		
		//Creating the ObjectSelector3D.<br/>
		var objThreeD =new kony.ui.ObjectSelector3D(objBasic, objLayout, {}) ;<br/>
		
		//clearAllData method call.<br/>
		objThreeD.clearAllData();</pre>
         */
		this.clearAllData = function() {}   

	    
	    /**
		 * This method allows you to define the models to the widget. 
		 * @param unselectedModelId{Number}Specifies the model which represents unselected items.<b>Mandatory</b>
		 * @param selectedModelId {Number} Specifies the name of the resource to load model data.<b>Mandatory</b>
		 * @Available Windows Phone (Mango)
		 * @access Write
		 * @usage <pre>
	    //Defining the properties for ObjectSelector3D<br/>
        var objBasic = {id:"objThreeD", skin:"ObjSkin", focusSkin:"ObjFSkin", text:"Seat reservation", isVisible:true};<br/>
        var objLayout = {widgetAlignment:constants.WIDGET_ALIGN_CENTER, padding:[5,5,5,5], margin:[5,5,5,5], contentAlignment:constants.CONTENT_ALIGN_CENTER, containerWeight:99, paddingInPixel:true, marginInPixel:true, hExpand:false, vExpand:false};<br/>
        
		//Creating the ObjectSelector3D.<br/>
		var objThreeD =new kony.ui.ObjectSelector3D(objBasic, objLayout, {}) ;<br/>
		
		//DefineSpecialModels method call<br/>
		objThreeD.defineSpecialModels(3, 4);</pre>
         */
		this.defineSpecialModels = function(/**Number*/unselectedModelID,/**Number*/selectedModelId) {}
    	
		/**
		 * This method allows you to retrieve the cells that are currently selected in the widget.
         * @Available Windows Phone (Mango)
		 * @access Write
		 * @usage <pre>
	    //Defining the properties for ObjectSelector3D.<br/>  
	    var objBasic = {id:"objThreeD", skin:"ObjSkin", focusSkin:"ObjFSkin", text:"Seat reservation", isVisible:true};<br/> 
		var objLayout = {widgetAlignment:constants.WIDGET_ALIGN_CENTER, padding:[5,5,5,5], margin:[5,5,5,5], contentAlignment:constants.CONTENT_ALIGN_CENTER, containerWeight:99, paddingInPixel:true, marginInPixel:true, hExpand:false, vExpand:false};<br/> 

	    //Creating the ObjectSelector3D.<br/> 
		var objThreeD =new kony.ui.ObjectSelector3D(objBasic, objLayout, {}) ;<br/>
		
		//getSelectedCells method call<br/>
		var result=objThreeD.getSelectedCells();</pre>
         */
		this.getSelectedCells = function() {}   


	    /**
		 * This method allows you to set the properties of the camera while in walk-through mode. 
		 * @param movementSpeed{Number}Specifies the speed at which the camera should move(in seconds).<b>Mandatory</b>
		 * @param height{Number} Specifies the height at which the camera will be placed above the XZ plane.<b>Mandatory</b>
		 * @param entryLocations {Object}Specifies the list of cell locations in the format (row, column).<b>Mandatory</b> 
		 * @Available Windows Phone (Mango)
		 * @access Write
		 * @usage <pre>
	    //Defining the properties for ObjectSelector3D.<br/>
		var objBasic = {id:"objThreeD", skin:"ObjSkin", focusSkin:"ObjFSkin", text:"Seat reservation", isVisible:true};<br/>
		var objLayout = {widgetAlignment:constants.WIDGET_ALIGN_CENTER, padding:[5,5,5,5], margin:[5,5,5,5], contentAlignment:constants.CONTENT_ALIGN_CENTER, containerWeight:99, paddingInPixel:true, marginInPixel:true, hExpand:false, vExpand:false};<br/>
		
		//Creating the ObjectSelector3D.<br/>
		var objThreeD =new kony.ui.ObjectSelector3D(objBasic, objLayout, {}) ;<br/>
		
		//setCameraProperties method call
		objThreeD.setCameraProperties(1.5, 2.5, [ [1,4] ]);</pre>
         */
		this.setCameraProperties = function(/**Number*/movementSpeed,/**Number*/height,/**Object*/entryLocations) {}

        
        /**
		 * This method allows you to define the map of objects which will be presented to the user for selecting the items. 
		 * @param rows{Number}Specifies the number of rows of the map.<b>Mandatory</b>
		 * @param columns{Number} Specifies the number of columns of the map.<b>Mandatory</b>
		 * @param cellWidth{Number}Specifies the the width (in world units) for each object.<b>Mandatory</b> 
		 * @param cellDepth{Number}Specifies the depth (in world units) for each object.<b>Mandatory</b> 
		 * @param data{Object}Specifies a two-dimensional array which specifies which model is present in each cell of the map.<b>Mandatory</b>
		 * @Available Windows Phone (Mango)
		 * @access Write
		 * @usage <pre>
	    //Defining the properties for ObjectSelector3D.<br/>
	    var objBasic = {id:"objThreeD", skin:"ObjSkin", focusSkin:"ObjFSkin", text:"Seat reservation", isVisible:true};<br/>
		var objLayout = {widgetAlignment:constants.WIDGET_ALIGN_CENTER, padding:[5,5,5,5], margin:[5,5,5,5], contentAlignment:constants.CONTENT_ALIGN_CENTER, containerWeight:99, paddingInPixel:true, marginInPixel:true, hExpand:false, vExpand:false};<br/>
		
		//Creating the ObjectSelector3D.<br/>
		var objThreeD =new kony.ui.ObjectSelector3D(objBasic, objLayout, {}) ;<br/>
		
		//setMapData method call<br/>
		objThreeD.setMapData(12, 7, 1, 1.774,[
		0, 6, 6, 7, 6, 6, 0,
		5, 3, 2, 1, 2, 3, 5,
		5, 3, 3, 1, 3, 3, 5,
		5, 3, 3, 1, 3, 3, 5,
		5, 3, 3, 1, 3, 3, 5,
		5, 3, 3, 1, 3, 3, 5,
		5, 3, 3, 1, 3, 3, 5,
		5, 3, 3, 1, 3, 3, 5,
		5, 3, 3, 1, 3, 3, 5,
		5, 3, 3, 1, 3, 3, 5,
		5, 3, 3, 1, 3, 3, 5,
		5, 2, 2, 1, 2, 2, 5,]);</pre>
         */
		this.setMapData = function(/**Number*/rows,/**Number*/columns,/**Number*/cellWidth,/**Number*/cellDepth,/**Object*/data) {}


	    /**
		 * This method allows you to define the number of objects the user must select for the selection process to be considered complete.
		 * @param count{Number}Specifies the number of objects the user must select.<b>Mandatory</b>	
         * @Available Windows Phone (Mango)
		 * @access Write
		 * @usage <pre>
	    //Defining the properties for ObjectSelector3D.<br/>
		var objBasic = {id:"objThreeD", skin:"ObjSkin", focusSkin:"ObjFSkin", text:"Seat reservation", isVisible:true};<br/>
		var objLayout = {widgetAlignment:constants.WIDGET_ALIGN_CENTER, padding:[5,5,5,5], margin:[5,5,5,5], contentAlignment:constants.CONTENT_ALIGN_CENTER, containerWeight:99, paddingInPixel:true, marginInPixel:true, hExpand:false, vExpand:false};<br/>
		
		//Creating the ObjectSelector3D.<br/>
		var objThreeD =new kony.ui.ObjectSelector3D(objBasic, objLayout, {}) ;<br/>
		
		//setRequiredSelectionsCount method call.<br/>
		objThreeD.setRequiredSelectionsCount(3);</pre>
         */
		this.setRequiredSelectionsCount = function(/**Number*/count) {}

        /**
		 * This method allows you to identify the cells that are initially selected in the map.
		 * @param array{Object}Contains a list of cell locations with the format{ row, column}.<b>Mandatory</b>	
         * @Available Windows Phone (Mango)
		 * @access Write
		 * @usage <pre>
	    //Defining the properties for ObjectSelector3D.<br/>
		var objBasic = {id:"objThreeD", skin:"ObjSkin", focusSkin:"ObjFSkin", text:"Seat reservation", isVisible:true};<br/>
		var objLayout = {widgetAlignment:constants.WIDGET_ALIGN_CENTER, padding:[5,5,5,5], margin:[5,5,5,5], contentAlignment:constants.CONTENT_ALIGN_CENTER, containerWeight:99, paddingInPixel:true, marginInPixel:true, hExpand:false, vExpand:false};<br/>
		
		//Creating the ObjectSelector3D.<br/>
		var objThreeD =new kony.ui.ObjectSelector3D(objBasic, objLayout, {}) ;<br/>
		
	    //setSelectedCells method call<br/>
		objThreeD.setSelectedCells([ [4, 3], [5, 5] ] );</pre>
	     */
		this.setSelectedCells = function(/**Object*/array) {}
	
	
	    /**
	     * This method specifies the widget that must be enabled or disabled.
		 * @param enabled{Boolean} Indicates widget whether true or false.<b>Mandatory</b>
		 * @Available Windows Phone (Mango)
		 * @access Write
		 */
        this.setEnabled = function (/**Boolean*/enabled) {}	
    		
	
	    /**
	     * This method specifies the widget on which there must be focus. 
		 * @param focus{Boolean} Indicates focus is set on a widget.<b>Mandatory</b>
		 * @Available Windows Phone (Mango)
		 * @access Write
		 */
        this.setFocus = function (/**Boolean*/focus) {}	 
		
		
		/**
	     * Specifies the method to set the visibility of the widget.
		 * @param visible{Boolean} Indicates visibility on a widget.<b>Mandatory</b>
		 * @Available Windows Phone (Mango)
		 * @access Write
		 */
		this.setVisibility = function(/**Boolean*/visible) {}	
	}
	
	//TabPane Widget Properties are defined here.
	ui.TabPane = 
	/**
	 * Creates a new TabPane object
	 * @class kony.ui.TabPane
	 * @returns {kony.ui.TabPane}
	 */
	function TabPane(basicProperties, layoutProperties, platformSpecificProperties){
	
        //TabPane - Basic Properties Starts here
		
	 	/**
		 * Defines a string of alpha numeric characters that uniquely identifies a widget within an application.
		 * @property {String}
		 * @Mandatory Yes
		 * @Available All Platforms
		 * @access Read
		 */
		this.id = ""
		
		/**
		 * Specifies custom JS Object with the key,value pairs that a developer can use to store the context with the widget. 
		 * @property {Object}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.info = {}	
		
		/**
		 * This is a skin property.Skin to be applied when a Tabpane is active. 
		 * @property {String}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.activeSkin = ""
		
		/**
		 * Indicates the selected Tabs indices. Index starts from 0. Specifies the Tab that must be displayed as the default open Tab. 
		 * @property {Array}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.activeTabs = []
		
		/**
		 * This is a skin property. This property specifies the skin that is to be applied when a TabPane is active and focused.
		 * @property {String}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.activeFocusSkin = ""
		
		/**
		 * Skin to be applied for all inactive tabs. 
		 * @property {String}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.inactiveSkin = ""
		
		/**
		 * Specifies the View type of the TabPane. 
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.viewType = 0
		
		/**
		 * Specifies the view configuration for different viewtypes of TabPane.
		 * @property {Object}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.viewConfig = {}
		
		/**
		 * Specifies the visibility of the widget on the form. 
		 * @property {Boolean}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.isVisible = true
		
		/**
		 * Indicates whether each individual tab should retain its scroll position when the Tabpanes are switched over. 
		 * @property {Boolean}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.retainPositionInTab = true	
		
		
		//TabPane - Layout Configuration Properties Starts here
		
		/**
		 * Specifies percentage of width to be allocated by its parent widget widget.The parent widget space is distributed to its child widgets based on this weight factor. All its child widgets should sum up to 100% of weight except when placed in kony.ui.ScrollBox.
		 * @property {Number}
		 * @Available All Platforms except Win Mobile 6x.
		 * @access Read and Write
		 */
		this.containerWeight = 0	
		
		/**
		 * Specifies the space between the content of the widget and the widget boundaries.
		 * @property {Array}
		 * @Available All Platforms except Mobile Web (basic).
		 * @access Read and Write
		 */
		this.padding = []	
		
		/**
		 * Specifies the space around a widget.
		 * @property {Array}
		 * @Available All Platforms except Mobile Web (basic) and Win Mobile6x.
		 * @access Read and Write
		 */
		this.margin = []	
		
		
		//TabPane - Platform Specific Properties Starts here

		/**
		 * Specifies the skin for page indicator. This property is applicable only when viewType is set as TABPANE_VIEW_TYPE_PAGEVIEW and images are selected for pageOnDotImage and pageOffDotImage.
		 * @property {String}
		 * @Available Available on Desktop Web platform only.
		 * @access Read and Write
		 */
		this.pageSkin = ""
		
		/**
		 * Accepts reference to a box widget which represents a UI template for a custom tab header. The box template is allowed to have only Label, Link, Richtext, Button, and Image widgets.
		 * @property {Object}
		 * @Available Available on Desktop Web platform only.
		 * @access Read and Write
		 */
		this.tabHeaderTemplate = {}


		/**
		 * Specifies the height of the Tab header in pixels. Default is 64 pixels. This property is applicable only when the viewType is set as TABPANE_VIEW_TYPE_TABPANE.
		 * @property {number}
		 * @Available Available on Android/Android Tablet platform only.
		 * @access Read and Write
		 */
		this.tabHeaderHeight = 0
		
		/**
		 * Specifies the layout changes that occur due to the animations applied/removed on other widgets. 
		 * @property {Object}
		 * @Available iOS and Android Platforms
		 * @access Read and Write
		 */
		this.layoutAnimConfig = {}
		
		//TabPane - Events Starts here
		
		/**
		 * Event callback invoked when the tab is clicked. This event is available only when the viewType is set to Collapsible View and is triggered when you expand or collapse any Tab. It accepts 2 input parameters as tabpane and tabindex.
		 * @property {Event}
		 * @Available Available on all platforms 
		 * @access Read and Write
		 */
		this.onTabClick = new Event ()		
		
		
		/**
		 * This event allows the developer to execute custom javascript function when the HorizontalImageStrip is invoked. This is applicable only for Mobile Web channel. The function must exist in a javascript file under project>module>js folder.
		 * @property {Event}
		 * @Available Mobile Web (BJS and Advanced) 
		 * @access Read and Write
		 */
		this.preOnclickJS = new Event ()
		
		/**
		 * This event allows the developer to execute custom javascript function after the onClick callback of the HorizontalImageStrip is invoked. This is applicable only for Mobile Web channel.The function must exist in a javascript file under project>module>js folder. 
		 * @property {Event}
		 * @Available Mobile Web (Advanced) 
		 * @access Read and Write
		 */
		this.postOnclickJS = new Event ()
		
		//TabPane - Methods Starts here
		
	    /**
		 * This method Provides the ability to add a tab to the TabPane widget.
		 * @param tabId{String}Specifies the id of the tab.<b>Mandatory</b>	
		 * @param tabName{String}Specifies the name of the tab.<b>Mandatory</b>
		 * @param tabImage{String}Specifies the image of the tab.<b>Mandatory</b>
         * @param tabpaneid{Object}Handle to the widget instance.<b>Mandatory</b>		 
         * @Available All Platforms
		 * @access Write
		 * @usage <pre>
        //Defining the properties for TabPane.<br/>
		var tabBasic = {id:"tPane", activeSkin:"aSkin", activeFocusSkin:"aFSkin", inactiveSkin:"inActiveSkin", viewType:constants.TABPANE_VIEW_TYPE_TABVIEW , screenLevelWidget:true, isVisible:true, retainPositionInTab:true, needPageIndicator:true, selectedTabIndex:0};<br/>
		var tabLayout ={padding:[5,5,5,5], margin:[5,5,5,5], paddingInPixel:true, marginInPixel:true, widgetAlignment:constants.WIDGET_ALIGN_TOP_LEFT, containerWeight:99};<br/>
        var tabPSP={};<br/>
		
		//Creating the TabPane.<br/>
		var tabPane = new kony.ui.TabPane(tabBasic, tabLayout, tabPSP);<br/>

        //addTab method call<br/>
		tabPane.addTab("tPane","LocTAB","app.png", box1, masterDataLoad:{}); //image should already be made available.</pre>
		 */
		this.addtab = function(/**String*/tabId,/**String*/tabName,/**String*/tabImage,/**Object*/tabpaneid) {}
		
		
		/**
		 * This method Provides the ability to add a tab at the specified index to the TabPane.
		 * @param index{Number} Index number at which the widget is to be added.<b>Mandatory</b>	
		 * @param tabName{String}Specifies the name of the tab.<b>Mandatory</b>
		 * @param tabImage{String}Specifies the image of the tab.<b>Mandatory</b>
         * @Available All Platforms
		 * @access Write
		 * @usage <pre>
        //Defining the properties for TabPane.<br/>
		var tabBasic = {id:"tPane", activeSkin:"aSkin", activeFocusSkin:"aFSkin", inactiveSkin:"inActiveSkin", viewType:constants.TABPANE_VIEW_TYPE_TABVIEW , screenLevelWidget:true, isVisible:true, retainPositionInTab:true, needPageIndicator:true, selectedTabIndex:0};<br/>
		var tabLayout ={padding:[5,5,5,5], margin:[5,5,5,5], paddingInPixel:true, marginInPixel:true, widgetAlignment:constants.WIDGET_ALIGN_TOP_LEFT, containerWeight:99};<br/>
        var tabPSP={};<br/>
		
		//Creating the TabPane.<br/>
		var tabPane = new kony.ui.TabPane(tabBasic, tabLayout, tabPSP);<br/>
		
		//addTabAt method call<br/>
		tabPane.addTabAt("LocTAB","app.png",2); //image should already be made available.</pre>
		 */
		this.addtabAt = function(/**Number*/index,/**String*/tabName,/**String*/tabImage) {}
		
        
		/**
		 * This method Provides the ability to remove a tab at the specified index on the TabPane.
		 * @param index{Number} Index represents the tabindex in the order in which the tab originally was added.<b>Mandatory</b>	
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>
        //Defining the properties for TabPane.<br/>
		var tabBasic = {id:"tPane", activeSkin:"aSkin", activeFocusSkin:"aFSkin", inactiveSkin:"inActiveSkin", viewType:constants.TABPANE_VIEW_TYPE_TABVIEW , screenLevelWidget:true, isVisible:true, retainPositionInTab:true, needPageIndicator:true, selectedTabIndex:0};<br/>
		var tabLayout ={padding:[5,5,5,5], margin:[5,5,5,5], paddingInPixel:true, marginInPixel:true, widgetAlignment:constants.WIDGET_ALIGN_TOP_LEFT, containerWeight:99};<br/>
        var tabPSP={};<br/>
		
		//Creating the TabPane.<br/>
		var tabPane = new kony.ui.TabPane(tabBasic, tabLayout, tabPSP);<br/>
		
		//removeTabAt method call.<br/>
		tabPane.removeTabAt(2);</pre>
		 */
		this.removeTabAt = function(/**Number*/index) {}
		
		
		/**
		 * This method Provides the ability to remove a tab based on the tabid on the TabPane.
		 * @param tabId{String} Specifies the id of the tab.<b>Mandatory</b>	
		 * @Available All Platforms
		 * @access Write
		 * @usage <pre>
        //Defining the properties for TabPane.<br/>
		var tabBasic = {id:"tPane", activeSkin:"aSkin", activeFocusSkin:"aFSkin", inactiveSkin:"inActiveSkin", viewType:constants.TABPANE_VIEW_TYPE_TABVIEW , screenLevelWidget:true, isVisible:true, retainPositionInTab:true, needPageIndicator:true, selectedTabIndex:0};<br/>
		var tabLayout ={padding:[5,5,5,5], margin:[5,5,5,5], paddingInPixel:true, marginInPixel:true, widgetAlignment:constants.WIDGET_ALIGN_TOP_LEFT, containerWeight:99};<br/>
        var tabPSP={};<br/>
		
		//Creating the TabPane.<br/>
		var tabPane = new kony.ui.TabPane(tabBasic, tabLayout, tabPSP);<br/>
		
		//removeTabById method call.<br/>
		tabPane.removeTabById("tPane")</pre>
		 */
		this.removeTabById = function(/**String*/tabId) {}
	
	    /**
	     * This method specifies the widget that must be enabled or disabled.
		 * @param enabled{Boolean} Indicates widget whether true or false.<b>Mandatory</b>
		 * @Available All Platforms except on Map widget for SPA platform 
		 * @access Write
		 */
        this.setEnabled = function (/**Boolean*/enabled) {}	
    		
	
	    /**
	     * This method specifies the widget on which there must be focus. 
		 * @param focus{Boolean} Indicates focus is set on a widget.<b>Mandatory</b>
		 * @Available All Platforms 
		 * @access Write
		 */
        this.setFocus = function (/**Boolean*/focus) {}	 
		
		
		/**
	     * Specifies the method to set the visibility of the widget.
		 * @param visible{Boolean} Indicates visibility on a widget.<b>Mandatory</b>
		 * @Available All Platforms except on all Mobile Web platforms
		 * @access Write
		 */
		this.setVisibility = function (/**Boolean*/visible) {}	
	}
	
	// Video Widget Properties are defined here.
	ui.Video =
	/**
	 * Creates a new Video object
	 * @class kony.ui.Video
	 * @returns {kony.ui.Video}
	 */
	function Video(basicProperties, layoutProperties, platformSpecificProperties){

        //Video - Basic Properties Starts here
		
	 	/**
		 * Defines a string of alpha numeric characters that uniquely identifies a widget within an application.
		 * @property {String}
		 * @Mandatory Yes
		 * @Available All Platforms
		 * @access Read
		 */
		this.id = ""
		
        /**
		 * Specifies the look and feel of the video when not in focus.
		 * @property {String}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.skin = ""
    
        /**
		 * Specifies the URLs of the video which are to be streamed.
		 * @property {Object}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.source = {}

		/**
		 * Specifies the visibility of the widget on the form. 
		 * @property {Boolean}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.isVisible = true	

        // Video - Layout Configuration Properties starts here 

        /**
		 * Specifies percentage of width to be allocated by its parent widget widget.The parent widget space is distributed to its child widgets based on this weight factor. All its child widgets should sum up to 100% of weight except when placed in kony.ui.ScrollBox.
		 * @property {Number}
		 * @Available All Platforms except Win Mobile 6x.
		 * @access Read and Write
		 */
		this.containerWeight = 0	
		
		/**
		 * Specifies the space between the content of the widget and the widget boundaries.
		 * @property {Array}
		 * @Available All Platforms except Mobile Web (basic).
		 * @access Read and Write
		 */
		this.padding = []	
		
		/**
		 * Specifies the space around a widget.
		 * @property {Array}
		 * @Available All Platforms except Mobile Web (basic) and Win Mobile6x.
		 * @access Read and Write
		 */
		this.margin = []	
		
		/**
		 * Specifies the layout changes that occur due to the animations applied/removed on other widgets. 
		 * @property {Object}
		 * @Available iOS and Android Platforms
		 * @access Read and Write
		 */
		this.layoutAnimConfig = {}
		
		// Video - Methods Starts here
		
		/**
	     * This method specifies the widget that must be enabled or disabled.
		 * @param enabled{Boolean} Indicates widget whether true or false.<b>Mandatory</b>
		 * @Available All Platforms except on Map widget for SPA platform 
		 * @access Write
		 */
        this.setEnabled = function (/**Boolean*/enabled) {}	
    		
	
	    /**
	     * This method specifies the widget on which there must be focus. 
		 * @param focus{Boolean} Indicates focus is set on a widget.<b>Mandatory</b>
		 * @Available All Platforms 
		 * @access Write
		 */
        this.setFocus = function (/**Boolean*/focus) {}	 
		
		
		/**
	     * specifies the method to set the visibility of the widget.
		 * @param visible{Boolean} Indicates visibility on a widget.<b>Mandatory</b>
		 * @Available All Platforms except on all Mobile Web platforms
		 * @access Write
		 */
		this.setVisibility = function (/**Boolean*/visible) {}	
	}
	
	
	
	// Phone Widget Properties are defined here.
	ui.Phone =
	/**
	 * Creates a new Phone object
	 * @class kony.ui.Phone
	 * @returns {kony.ui.Phone}
	 */
	function Phone(basicProperties, layoutProperties, platformSpecificProperties){

        //Phone - Basic Properties Starts here
		
	 	/**
		 * Defines a string of alpha numeric characters that uniquely identifies a widget within an application.
		 * @property {String}
		 * @Mandatory Yes
		 * @Available All Platforms
		 * @access Read
		 */
		this.id = ""

        /**
		 * Specifies the look and feel of the Phone when in focus.   
		 * @property {String}
		 * @Available All Platforms except on all Mobile Web platforms.
		 * @access Read and Write
		 */
		this.focusSkin = ""

        /**
		 * Specifies the visibility of the widget on the form. 
		 * @property {Boolean}
		 * @Available All Platforms except on all Mobile Web platforms.
		 * @access Read and Write
		 */
		this.isVisible = true

        /**
		 * Specifies the rawbytes representing an Image (usually the image captured from the camera) that can be used as a background for the Call. 
		 * @property {Object}
		 * @Available All Platforms except on all Mobile Web platforms
		 * @access Read and write 
		 */
		this.rawBytes = {}

        /**
		 * Specifies the look and feel of the Phone when not in focus.
		 * @property {String}
		 * @Available All Platforms except on all Mobile Web platforms
		 * @access Read and Write
		 */
		this.skin = ""

        /**
		 * Specifies a general or descriptive text for the Phone widget.
		 * @property {String}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.text = ""


        //Phone- Layout properties starts here 

        /**
		 * Specifies percentage of width to be allocated by its parent widget.The parent widget space is distributed to its child widgets based on this weight factor. All its child widgets should sum up to 100% of weight except when placed in kony.ui.ScrollBox.
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.containerWeight = 0
		
		/**
		 * Specifies the space between the content of the widget and the widget boundaries.
		 * @property {Array}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.padding = []	
		
		/**
		 * Specifies the space around a widget.
		 * @property {Array}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.margin = []

		/**
		 * Specifies the alignment of the text on the Phone with respect to its boundaries.
		 * @property {Number}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.contentAlignment = 1
		
	
	    //Phone - Methods Starts here
	
	    /**
	     * This method specifies the widget that must be enabled or disabled.
		 * @param enabled{Boolean} Indicates widget whether true or false.<b>Mandatory</b>
		 * @Available All Platforms except on Map widget for SPA platform 
		 * @access Write
		 */
        this.setEnabled = function (/**Boolean*/enabled) {}	
    	
	
	    /**
	     * This method specifies the widget on which there must be focus. 
		 * @param focus{Boolean} Indicates focus is set on a widget.<b>Mandatory</b>
		 * @Available All Platforms 
		 * @access Write
		 */
        this.setFocus = function (/**Boolean*/focus) {}	 
		
		
		/**
	     * specifies the method to set the visibility of the widget.
		 * @param visible{Boolean} Indicates visibility on a widget.<b>Mandatory</b>
		 * @Available All Platforms except on all Mobile Web platforms
		 * @access Write
		 */
		this.setVisibility = function(/**Boolean*/visible) {}
    }	
	
    
	
	    //MenuContainer Properties are defined here
	ui.MenuContainer =
	/**
	 * Creates a new MenuContainer object
	 * @class kony.ui.MenuContainer
	 * @returns {kony.ui.MenuContainer}
	 */
	function MenuContainer (basicProperties,layoutProperties,platformSpecificProperties){
	
	    //MenuContainer - Basic Properties starts here
	
	    /**
		 * Defines a string of alpha numeric characters that uniquely identifies a widget within an application.
		 * @property {String}
		 * @Mandatory Yes
		 * @Available All Platforms
		 * @access Read
		 */
		this.id = ""
		
		/**
		 * Specifies custom JS Object with the key,value pairs that a developer can use to store the context with the widget. 
		 * @property {Object}
		 * @Available All Platforms
		 * @access Read and Write
		 */
		this.info = {}
	
	    /**
	     * Specifies the skin for the menuContainer widget. 
		 * @property {String}
		 * @Available Desktop Web
		 * @access Read and Write
		 */
		this.skin = ""	
	
	    /**
	     * Returns the selected menu item present at the selectedMenuIndex. 
		 * @property {Array}
		 * @Available Desktop Web
		 * @access Read 
		 */
		this.selectedMenuItem = []	
		
		/**
	     * Specifies the viewType of the menuContainer should display. 
		 * @property {Number}
		 * @Available Desktop Web
		 * @access Read and Write
		 */
		this.viewType = ""	
	
	    /**
	     * Indicates the common template to be used for each menu item while creating the menu items and filling the data. 
		 * @property {Object}
		 * @Available Desktop Web
		 * @access Read and Write
		 */
		this.menuItemTemplate = {}	
		
		
	    /**
	     * JS object which indicates the mapping between widget identifiers and data identifiers. 
		 * @property {Object}
		 * @Available Desktop Web
		 * @access Read and Write
		 */
		this.widgetDataMap = {}	
		
		
		/**
	     * JS object which represents the actual menu item to be rendered in each row. 
		 * @property {Object}
		 * @Available Desktop Web
		 * @access Read and Write
		 */
		this.data = {}	
	
	    /**
	     * specifies the property to set menuContainer's visibility. 
		 * @property {Boolean}
		 * @Available Desktop Web
		 * @access Read and Write
		 */
		this.isVisible = true	
	
	    /**
	     * Indicates the selected Menu Item.Index start from 0. 
		 * @property {Array}
		 * @Available Desktop Web
		 * @access Read and Write
		 */
		this.selectedMenuIndex = []

		//MenuContainer-Layout Configuration Properties starts here
	
	    /**
		 * Specifies percentage of width to be allocated by its parent widget widget.The parent's widget space is distributed to its child widgets based on this weight factor.All its child widgets should sum up to 100% of weight except when placed in kony.ui.ScrollBox. 
		 * @property {Number}
		 * @Available All Platforms except Win Mobile 6x.
		 * @access Read and Write
		 */
		this.containerWeight = 0
		
		/**
		 * Specifies the space around a widget.
		 * @property {Array}
		 * @Available All Platforms except Mobile Web (basic).
		 * @access Read and Write
		 */
		this.margin = []
		
		/**
		 * specifies the space between the content of the widget and the widget boundaries.
		 * @property {Array}
		 * @Available All Platforms except on all Mobile Web platforms.
		 * @access Read and Write
		 */
		this.padding = []
		
		//MenuContainer - Events Starts here
		
		/**
		 * An event callback which gets invoked when a menuitem is clicked.
		 * @property {Event}
		 * @Available Desktop Web
		 * @access Read and Write
		 */
		this.onClick= new Event()
		
	
	
        //MenuContainer - Methods Starts here		
		
		/**
		 * This method allows you to add new data to the menu container widget. The new data is appended to the existing data.
		 * @param data{Array}Specifies an array to represent data as key value pairs.<b>Mandatory</b>	
		 * @access write
		 * @Available Desktop Web Platform
		 * @usage <pre>
        //Defining the properties for a MenuContainer.
var mnuBasic = {id:"menu1", hoverSkin:"mnuhovSkin", activeSkin: "mnuactSkin", 
data:[{template: hbox2,
         label2: {text: "News", isVisble: false},
         image2: "btn.png",
         children: []
      },
      {template: hbox2,
         label2: {text: "Science"},
         image2: "btn.png",
         children: []
      },
      {template: hbox2,
         label2: {text: "Sports"},
         image2: "btn.png",
         children: [
	         {template: hbox2,
                   label2: {text: "Football"},
                   image2: "btn.png" 
	         },
	         {template: hbox2,
                   label2: {text: "Cricket"},
                   image2: "btn.png",
                   children: [
		         {template: hbox2,
                            label2: {text: "India"},
                            image2: "btn.png",
                            children: [
			          {template: hbox2,
                                    label2: {text: "Test Match"},
                                    image2: "btn.png"
			          },
			          {template: hbox2,
                                    label2: {text: "One Day Match"},
                                    image2: "btn.png"
			          }
				       ]
		         },
	                 {template: hbox2,
                            label2: {text: "England"},
                            image2: "btn.png"
	                 },
		         {template: hbox2,
                            label2: {text: "Australia"},
                            image2: "btn.png"
		         }	    
	         }	      ]
       }
], isVisible:true, menuItemTemplate: hbox2, skin: "mnuSkin", viewType: constants.MENU_CONTAINER_VIEW_DROPDOWNVIEW, isVisible: true, widgetDataMap: {label2: "label2", image2: "image2"} };
var mnuLayout = {padding:[5,5,5,5], margin:[5,5,5,5], containerWeight:100, paddingInPixel:true, marginInPixel:true, widgetAlignment:constants.WIDGET_ALIGN_TOP_LEFT};
var mnuPSP ={};

//Creating the MenuContainer.
var menu1 = new kony.ui.MenuContainer(mnuBasic, mnuLayout, mnuPSP);

//addAll method call.
menu1.addAll ([ {template: hbox2,
	           label2:{text: "Politics"},
                  image2: "btn.png",
                  children: []
              }]);</pre>
            */
	        this.addAll = function(/**Array*/data) {}
	
	    /**
		 * This method allows you to add an array of menu items at a given index. The new data is placed before the index.
		 * @param data{Object} Specifies the JSObject to represent data as key value pairs.<b>Mandatory</b>
		 * @param index {Array} Specifies an array representing the index at which the menu item data needs to be added.<b>Mandatory</b>
		 * @access write
		 * @Available Desktop Web Platform
		 * @usage <pre>
		//Defining the properties for a MenuContainer.
var mnuBasic = {id:"menu1", hoverSkin:"mnuhovSkin", activeSkin: "mnuactSkin", 
data:[{template: hbox2,
         label2: {text: "News", isVisble: false},
         image2: "btn.png",
         children: []
      },
      {template: hbox2,
         label2: {text: "Science"},
         image2: "btn.png",
         children: []
      },
      {template: hbox2,
         label2: {text: "Sports"},
         image2: "btn.png",
         children: [
	         {template: hbox2,
                   label2: {text: "Football"},
                   image2: "btn.png" 
	         },
	         {template: hbox2,
                   label2: {text: "Cricket"},
                   image2: "btn.png",
                   children: [
		         {template: hbox2,
                            label2: {text: "India"},
                            image2: "btn.png",
                            children: [
			          {template: hbox2,
                                    label2: {text: "Test Match"},
                                    image2: "btn.png"
			          },
			          {template: hbox2,
                                    label2: {text: "One Day Match"},
                                    image2: "btn.png"
			          }
				       ]
		         },
	                 {template: hbox2,
                            label2: {text: "England"},
                            image2: "btn.png"
	                 },
		         {template: hbox2,
                            label2: {text: "Australia"},
                            image2: "btn.png"
		         }	    
	         }	      ]
       }
], isVisible:true, menuItemTemplate: hbox2, skin: "mnuSkin", viewType: constants.MENU_CONTAINER_VIEW_DROPDOWNVIEW, isVisible: true, widgetDataMap: {label2: "label2", image2: "image2"} };
var mnuLayout = {padding:[5,5,5,5], margin:[5,5,5,5], containerWeight:100, paddingInPixel:true, marginInPixel:true, widgetAlignment:constants.WIDGET_ALIGN_TOP_LEFT};
var mnuPSP ={};

//Creating the MenuContainer.
var menu1 = new kony.ui.MenuContainer(mnuBasic, mnuLayout, mnuPSP);

//addDataAt method call.
menu1.addDataAt ( {template: hbox2,
	              label2: {text: "Politics"},
                     image2: "btn.png",
                     children: []
                 }, 3);</pre>
	            */
	            this.addDataAt = function(/**Object*/data,/**Array*/Index) {}

	    /**
		 * This method is used to remove all the menu items and sub menus from the menu container.
		 * @access write
		 * @Available Desktop Web Platform
		 * @usage <pre>
				 
		//Defining the properties for a MenuContainer.
var mnuBasic = {id:"menu1", hoverSkin:"mnuhovSkin", activeSkin: "mnuactSkin", 
data:[{template: hbox2,
         label2: {text: "News", isVisble: false},
         image2: "btn.png",
         children: []
      },
      {template: hbox2,
         label2: {text: "Science"},
         image2: "btn.png",
         children: []
      },
      {template: hbox2,
         label2: {text: "Sports"},
         image2: "btn.png",
      }	      
], isVisible:true, menuItemTemplate: hbox2, skin: "mnuSkin", viewType: constants.MENU_CONTAINER_VIEW_DROPDOWNVIEW, isVisible: true, widgetDataMap: {label2: "label2", image2: "image2"} };
var mnuLayout = {padding:[5,5,5,5], margin:[5,5,5,5], containerWeight:100, paddingInPixel:true, marginInPixel:true, widgetAlignment:constants.WIDGET_ALIGN_TOP_LEFT};
var mnuPSP ={};

//Creating the MenuContainer.
var menu1 = new kony.ui.MenuContainer(mnuBasic, mnuLayout, mnuPSP);

//removeAll method call.
menu1.removeAll ();</pre>
        */
         this.removeAll = function() {}		 

        /**
		 * This method is used to remove the menu item from hierarchy based on the index provided.
		 *@param rowIndex{Number} Specifies an array representing the Index at which the menu item data needs to be removed.<b>Mandatory</b>
		 * @access write
		 * @Available Desktop Web Platform
		 * @usage <pre> 
		//Defining the properties for a MenuContainer.
var mnuBasic = {id:"menu1", hoverSkin:"mnuhovSkin", activeSkin: "mnuactSkin", 
data:[{template: hbox2,
         label2: {text: "News", isVisble: false},
         image2: "btn.png",
         children: []
      },
      {template: hbox2,
         label2: {text: "Science"},
         image2: "btn.png",
         children: []
      },
      {template: hbox2,
         label2: {text: "Sports"},
         image2: "btn.png",
         children: [
	         {template: hbox2,
                   label2: {text: "Football"},
                   image2: "btn.png" 
	         },
	         {template: hbox2,
                   label2: {text: "Cricket"},
                   image2: "btn.png"
                }
	}	    ]
  
], isVisible:true, menuItemTemplate: hbox2, skin: "mnuSkin", viewType: constants.MENU_CONTAINER_VIEW_DROPDOWNVIEW, isVisible: true, widgetDataMap: {label2: "label2", image2: "image2"} };
var mnuLayout = {padding:[5,5,5,5], margin:[5,5,5,5], containerWeight:100, paddingInPixel:true, marginInPixel:true, widgetAlignment:constants.WIDGET_ALIGN_TOP_LEFT};
var mnuPSP ={};

//Creating the MenuContainer.
var menu1 = new kony.ui.MenuContainer(mnuBasic, mnuLayout, mnuPSP);

//removeAt method call.
menu1.removeAt ([0,1]);</pre>
           */
            this.removeAt = function(/**Number*/rowIndex) {}	 
				 
				 
	 
   	    /**
		 * This method allows you to set new data to the menuContainer widget. When you set new data, the existing data will be replaced with the new data.
		 *@param menubarRef{Array} Specifies an array of menu items.<b>Mandatory</b>
		 * @access write
		 * @Available Desktop Web Platform
		 * @usage <pre> 
		//Defining the properties for a MenuContainer.
var mnuBasic = {id:"menu1", hoverSkin:"mnuhovSkin", activeSkin: "mnuactSkin", 
data:[{template: hbox2,
         label2: {text: "Weather"},
         image2: "btn.png",
         children: []
      }
], isVisible:true, menuItemTemplate: hbox2, skin: "mnuSkin", viewType: constants.MENU_CONTAINER_VIEW_DROPDOWNVIEW, widgetDataMap: {label2: "label2", image2: "image2"}  };
var mnuLayout = {padding:[5,5,5,5], margin:[5,5,5,5], containerWeight:100, paddingInPixel:true, marginInPixel:true, widgetAlignment:constants.WIDGET_ALIGN_TOP_LEFT};
var mnuPSP ={};

//Creating the MenuContainer.
var menu1 = new kony.ui.MenuContainer(mnuBasic, mnuLayout, mnuPSP);

//setData method call.
menu1.setData [ 
      {template: hbox2,
         label2: {text: "News", isVisble: false},
         image2: "btn.png",
         children: []
      },
      {template: hbox2,
         label2: {text: "Science"},
         image2: "btn.png",
         children: []
      },
      {template: hbox2,
         label2: {text: "Sports"},
         image2: "btn.png",
         children: [
	         {template: hbox2,
                   label2: {text: "Football"},
                   image2: "btn.png" 
	         },
	         {template: hbox2,
                   label2: {text: "Cricket"},
                   image2: "btn.png",
                   children: [
		         {template: hbox2,
                            label2: {text: "India"},
                            image2: "btn.png",
                            children: [
			          {template: hbox2,
                                    label2: {text: "Test Match"},
                                    image2: "btn.png"
			          },
			          {template: hbox2,
                                    label2: {text: "One Day Match"},
                                    image2: "btn.png"
			          }
				       ]
		         },
	                 {template: hbox2,
                            label2: {text: "England"},
                            image2: "btn.png"
	                 },
		         {template: hbox2,
                            label2: {text: "Australia"},
                            image2: "btn.png"
		         }	    
	         }	      ]
       }
]; 	</pre>	 
	*/
    this.setData = function(/**Array*/menubarRef) {}	
				 
		/**
		 * This method allows you to set/modify the menu item at a particular index in the hierarchy with in the menuContainer.
		 * @param data{Object} Specifies the JSObject to represent data as key value pairs.<b>Mandatory</b>
		 * @param index{Array} Specifies an array representing the index at which the menu item data needs to be added.<b>Mandatory</b>
		 * @access write
		 * @Available Desktop Web Platform
		 * @usage <pre> 		 
		//Defining the properties for a MenuContainer.
var mnuBasic = {id:"menu1", hoverSkin:"mnuhovSkin", activeSkin: "mnuactSkin", 
data:[{template: hbox2,
         label2: {text: "News", isVisble: false},
         image2: "btn.png",
         children: []
      },
      {template: hbox2,
         label2: {text: "Science"},
         image2: "btn.png",
         children: []
      },
      {template: hbox2,
         label2: {text: "Sports"},
         image2: "btn.png",
         children: [
	         {template: hbox2,
                   label2: {text: "Football"},
                   image2: "btn.png" 
	         },
	         {template: hbox2,
                   label2: {text: "Cricket"},
                   image2: "btn.png",
                   children: [
		         {template: hbox2,
                            label2: {text: "India"},
                            image2: "btn.png",
                            children: [
			          {template: hbox2,
                                    label2: {text: "Test Match"},
                                    image2: "btn.png"
			          },
			          {template: hbox2,
                                    label2: {text: "One Day Match"},
                                    image2: "btn.png"
			          }
				       ]
		         },
	                 {template: hbox2,
                            label2: {text: "England"},
                            image2: "btn.png"
	                 },
		         {template: hbox2,
                            label2: {text: "Australia"},
                            image2: "btn.png"
		         }	    
	         }	      ]
       }
], isVisible:true, menuItemTemplate: hbox2, skin: "mnuSkin", viewType: constants.MENU_CONTAINER_VIEW_DROPDOWNVIEW, widgetDataMap: {label2: "label2", image2: "image2"} };
var mnuLayout = {padding:[5,5,5,5], margin:[5,5,5,5], containerWeight:100, paddingInPixel:true, marginInPixel:true, widgetAlignment:constants.WIDGET_ALIGN_TOP_LEFT};
var mnuPSP ={};

//Creating the MenuContainer.
var menu1 = new kony.ui.MenuContainer(mnuBasic, mnuLayout, mnuPSP);

//addDataAt method call.
menu1.setDataAt ( {template: hbox2,
	              label2: {text: "Politics"},
                     image2: "btn.png" ,
                     children: []
                 }, [0,3);</pre>
	*/
    this.setDataAt = function(/**Object*/data,/**Array*/index) {}	
	}
}

	
			
	//This is how geoloc APIs are defined
	kony.location.
	/**This API takes one, two, or three arguments. When invoked, it must immediately return and then asynchronously attempt to obtain the current location of the device. 
	 * @param successcallback{Function}	Specifies the callback function that must be executed when the API call is successful. The signature of
				the callback function is successcallback(position) where position contains the coordinates of the
				geolocation that are created and returned by the API. <b>Mandatory</b>
	 * @param errorcallback{Function} Specifies the callback function that must be executed when the API call fails. <b>Optional</b>
	 * @param positionoptions{Object} Using this parameter, the user can customize the retrieval of the geolocation. <b>Optional</b>
	 * @Available All platforms	
	 * @usage 
        <pre>function successcallback1(position)<br/>
{
	lblTest.text = "working with watchPosition successfull call back";<br/>
	var geoPosition = "Latitude: " + position.coords.latitude;<br/>
	geoPosition = geoPosition + " Longitude: " + position.coords.longitude;<br/>
	geoPosition = geoPosition + " Altitude: " + position.coords.altitude;<br/>
	geoPosition = geoPosition + " Accuracy: " + position.coords.accuracy;<br/>
	geoPosition = geoPosition + " Altitude Accuracy: " + position.coords.altitudeAccuracy;<br/>
	geoPosition = geoPosition + " Heading: " + position.coords.heading;<br/>
	geoPosition = geoPosition + " Speed: " + position.coords.speed;<br/>
	geoPosition = geoPosition + " Timestamp: " + position.timestamp;<br/>
	alert(geoPosition);<br/>
}
function errorcallback1(positionerror)<br/>
{
	lblTest.text = "working with watchPosition err call back";<br/>
	var errorMesg = "Error code: " + positionerror.code;<br/>
	errorMesg = errorMesg  + " message: " + positionerror.message<br/>
	alert(errorMesg);<br/>
}

var positionoptions = {maximumage: 3000};<br/>
// Options: retrieve the location every 3 seconds<br/>
watchID = kony.location.watchPosition (successcallback1, errorcallback1, positionoptions)<br/>

</pre>
	 */
	getCurrentPosition = function(/**Function*/successcallback,/**Function*/errorcallback,/**Object*/positionoptions){
	
	}
	
	
	//This is how geoloc APIs are defined
	kony.location.
	/**This API takes one, two, or three arguments. When invoked, it must immediately return a number that uniquely identifies a watch operation and then asynchronously start the watch operation.
	 * @param successcallback{Function}	Specifies the callback function that must be executed when the API call is successful. The signature of
				the callback function is successcallback(position) where position contains the coordinates of the
				geolocation that are created and returned by the API. <b>Mandatory</b>
	 * @param errorcallback{Function} 	Specifies the callback function that must be executed when the API call fails. <b>Optional</b>
	 * @param positionoptions{Object} 	Using this parameter, the user can customize the retrieval of the geolocation. <b>Optional</b>
	 * @Available All platforms.
	 * @usage <pre>function successcallback1(position)<br/>
{
	lblTest.text = "working with watchPosition success full call back";<br/>
	var geoPosition = "Latitude: " + position.coords.latitude;<br/>
	geoPosition = geoPosition + " Longitude: " + position.coords.longitude;<br/>
	geoPosition = geoPosition + " Altitude: " + position.coords.altitude;<br/>
	geoPosition = geoPosition + " Accuracy: " + position.coords.accuracy;<br/>
	geoPosition = geoPosition + " Altitude Accuracy: " + position.coords.altitudeAccuracy;<br/>
	geoPosition = geoPosition + " Heading: " + position.coords.heading;<br/>
	geoPosition = geoPosition + " Speed: " + position.coords.speed;<br/>
	geoPosition = geoPosition + " Timestamp: " + position.timestamp;<br/>
	alert(geoPosition);<br/>
}
function errorcallback1(positionerror)<br/>
{
	lblTest.text = "working with watchPosition err call back";<br/>
	var errorMesg = "Error code: " + positionerror.code;<br/>
	errorMesg = errorMesg  + " message: " + positionerror.message<br/>
	alert(errorMesg);<br/>
}

var positionoptions = {maximumage: 3000};<br/>
// Options: retrieve the location every 3 seconds<br/>
watchID = kony.location.watchPosition (successcallback1, errorcallback1, positionoptions)</pre>
*/
	
	watchPosition= function(/**Function*/successcallback,/**Function*/errorcallback, /**Object*/positionoptions){}
	

//This is how geoloc APIs are defined
		kony.location.
/**This API takes one argument. When invoked, it must first check the value of the given watchID argument.
  * @param watchID{Number}	Specifies number that uniquely identifies the watch. <b>Mandatory</b>
  * @Available All platforms.
  * @usage kony.location.clearWatch(watchID);*/

	clearWatch= function(/**Number*/watchID){}

	
//This is how timer APIs are defined
		kony.timer.
/**This API executes the given function after a specified interval of time.
  * @param timerid{String} 	Specifies number that uniquely identifies the watch. <b>Mandatory</b>
  * @param functionobj{Function}  Specifies the function that needs to be executed. <b>Mandatory</b>
  * @param interval{Number}  Specifies the time in seconds after which the function needs to be executed. <b>Mandatory</b>
  * @param repeat{Boolean}  Specifies a flag that indicates if the function needs to executed once or repeated. <b>Mandatory</b>  
  * @Available All platforms
  * @usage <pre> function timerFunc() //nested function<br/>
{
	i=i+5;<br/>
	lbl1.text = i+" secs ";<br/>
}
kony.timer.schedule("mytimer12",timerFunc, 5, true);<br/>
//The function timerFunc will be executed after every 5 seconds.</pre>*/

		schedule= function (/**String*/timerid,/**Function*/functionobj,/**Number*/interval,/**Boolean*/repeat){}	
		
		
//This is how timer APIs are defined
		kony.timer.
/**This API cancels the timer that has already been scheduled for execution.
	* @param timerid{String}  Specifies the unique ID that identifies the timer that needs to be canceled. <b>Mandatory</b>
	* @usage <pre>function buttoncallback2()<br/>
{
	
	try<br/>
	{
		kony.timer.cancel("mytimer");<br/>
	} 
	catch(err)<br/>
	{
		alert("error in second button onclick and err is:: "+err);<br/>
	}
}</pre>*/

		cancel= function (/**String*/timerid){}	
		
//This is how timer APIs are defined
		kony.timer.
/**This API specifies the callback function that needs to be executed for a scheduled timer. The callback function handles the logic that needs to be executed after a scheduled timer was run successfully or the scheduled timer failed to execute.
	* @param timerid{String}  Specifies the unique ID that identifies the timer that needs to be canceled. <b>Mandatory</b>
	* @param callbackfunction{Function}  Specifies the callback function that needs to be executed. <b>Mandatory</b>
	* @Availability All platforms.
	* @usage <pre>//nested function<br/>

function timerFunc1()<br/> 
{
	alert("Timer invoked");<br/> 
}
kony.timer.setCallBack("mytimer",timerFunc1);</pre>*/

		setCallback= function (/**String*/timerid,/**Function*/callbackfunction){}	


//This is how string APIs are defined
		kony.string.
/**This API returns a boolean value indicating if the source string ends with the specified string.
	* @param sourcestring{String}  Specifies the source string. <b>Mandatory</b>
	* @param comparestring{String}  Specifies the string to be compared with the source string. <b>Mandatory</b>
	* @param ignorecase{Boolean}  If you do not specify the ignorecase parameter, the comparison of the string will be case insensitive (ignorecase parameter value is taken as true).If you want the comparison to be case sensitive, you must specify the value as false. <b>Optional</b>
	* @returns {Boolean} Returns true if the source string ends with the compared string.
	* @Availability All platforms.
	* @usage <pre>var endsWith = kony.string.endsWith ("Hello World", "world");<br/>

kony.print (endsWith);<br/>

//In the above example, true is the value returned.</pre>*/

		endsWith= function (/**String*/sourcestring,/** String*/comparestring,/**Boolean*/ignorecase){}	

		kony.string.
/**This API returns a boolean value indicating if the source string begins with the specified string.
	* @param sourcestring{String}  Specifies the source string. <b>Mandatory</b>
	* @param comparestring{String}  Specifies the string to be compared with the source string. <b>Mandatory</b>
	* @param ignorecase{Boolean}  If you do not specify the ignorecase parameter, the comparison of the string will be case insensitive (ignorecase parameter value is taken as true).If you want the comparison to be case sensitive, you must specify the value as false. <b>Optional</b>
	* @returns {Boolean} Returns true if the source string begins with the compared string.
	* @Availability All platforms.
	* @usage <pre>var startswith = kony.string.startsWith("Hello World", "hello");<br/>

kony.print (startswith);</pre>*/

		startsWith= function (/**String*/sourcestring,/**String*/comparestring,/**Boolean*/ignorecase){}	
		
kony.string.		
/**This API generates a string which is n copies of the source string concatenated together.
	* @param sourcestring{String}  Specifies the source string. <b>Mandatory</b>
	* @param no{Number}  Specifies the number of times the source string must be repeated. <b>Mandatory</b>
	* @returns {String} A string containing n copies of the source string concatenated together is returned.
	* @Availability All platforms.
	* @usage <pre>var rep = kony.string.rep("Hello",3);<br/>

kony.print(rep);<br/>

//In the above example, "HelloHelloHello" is the value returned.</pre>*/

		rep= function (/**String*/sourcestring, no){}	

kony.string.
/**This API reverses the characters in the source string.
	* @param string{String}  Specifies the source string. <b>Mandatory</b>
	* @returns {String} A string containing the characters of the source string in reverse is returned.
	* @Availability All platforms.
	* @usage <pre>var reverse = kony.string.reverse("Hello");<br/>

kony.print (reverse);<br/>

//In the above example, "olleH" is the value returned</pre>*/

		reverse= function (/**String*/string){}		
		
kony.string.		
/**This API removes the leading and ending spaces from the source string.
	* @param string{String}  Specifies the source string. <b>Mandatory</b>
	* @returns {String}  A string without the leading and ending spaces is returned.
	* @Availability All platforms.
	* @usage <pre>var trim = kony.string.trim(" Hello World ");<br/>

kony.print (trim);
</pre>*/

		trim= function (/**String*/string){}	

kony.string.
/**This API compares the contents of two strings without case sensitivity and returns a Boolean indicating if they are a match. 
	* @param string1{String}  Specifies the content of the first string. <b>Mandatory</b>
	* @param string2{String}  Specifies the content of the second string. <b>Mandatory</b>
	* @returns {Boolean} Returns true if both the strings match.
	* @Availability All platforms.
	* @usage <pre>var ignorecase = kony.string.equalsIgnoreCase("Hello","HEllo");<br/>

kony.print (ignorecase);
</pre>*/

		equalsIgnoreCase= function (/**String*/string1,/**String*/string2){}	
		
kony.string.		
/**This API verifies if the input string contains only ASCII alphabet characters and returns a boolean value.
	* @param inputstring{String}  Specifies the input string that needs to be verified. <b>Mandatory</b>
	* @returns {Boolean}  Returns whether the input string contains only alphabetic characters.
	* @Availability All platforms.
	* @usage <pre>var inputstring = "abdcdADV";<br/>

kony.print(kony.string.isAsciiAlpha(inputstring));<br/>

//prints true<br/>

inputstring = "123ab3dcdADV";<br/>

kony.print(kony.string.isAsciiAlpha(inputstring));<br/>

//prints false
</pre>*/

		isAsciiAlpha= function (/**String*/inputstring){}	
		
		kony.string.
		/**This API verifies if the input string contains only ASCII alphabet characters and numbers, and returns a boolean value.
	* @param inputstring{String}  Specifies the input string that needs to be verified. <b>Mandatory</b>
	* @returns {Boolean}  Returns whether the input string contains only alphanumeric characters.
	* @Availability All platforms.
	* @usage <pre>var inputstring = "abdcdADV";<br/>

kony.print(kony.string.isAsciiAlphaNumeric(inputstring));<br/>

//prints false because the string is not a combination of alphanumeric characters<br/>

inputstring ="abcd1234"<br/>

kony.print(kony.string.isAsciiAlphaNumeric (inputstring));<br/>

//prints true because the string is a combination of alphanumeric characters
</pre>*/

		isAsciiAphaNumeric= function (/**String*/inputstring){}
kony.string.
/**This API verifies if the input string contains only numeric characters, and returns a boolean value.
	* @param inputstring{String}  Specifies the input string that needs to be verified. <b>Mandatory</b>
	* @returns {Boolean}  Returns whether the input string contains only numeric characters.
	* @Availability All platforms.
	* @usage <pre>kony.print(kony.string.isNumeric("123ab3dcdADV")) ;<br/>

// prints false<br/>

kony.print(kony.string.isNumeric("12344")) ;<br/>

// prints true
</pre>*/

		isNumeric= function (/**String*/inputstring){}
kony.string.		
/**This API verifies if any one of the specified set of characters is available in the given string and returns a boolean value.
	* @param inputstring{String}  Specifies the input string that needs to be verified. <b>Mandatory</b>
	* @param characterArray{Object}  Specifies the set of characters that need to be searched within the input string. <b>Mandatory</b>
	* @returns {Boolean}  Returns whether the given input string contains any one of the characters in the specified list.
	* @Availability All platforms.
	* @usage <pre>var inputstring = "abdcdADV";<br/>

var charsArr = ["|","-"];<br/>

kony.print(kony.string.containsChars(inputstring, charsArr));<br/>

// prints false as | and - are NOT contained in the input<br/>

inputstring = "abdcd|ADV"<br/>

kony.print(kony.string.containsChars(inputstring, charsArr));<br/>

// prints true as | is contained in the input<br/>
</pre>*/

		containsChars= function (/**String*/inputstring,/**Object*/characterArray){}
kony.string.
/**This API verifies if only (and only) the specified set of characters is available in the given string and returns a boolean value.
	* @param inputstring{String}  Specifies the input string that needs to be verified. <b>Mandatory</b>
	* @param characterArray{Object}  Specifies the set of characters that need to be searched within the input string. <b>Mandatory</b>
	* @returns {Boolean}  Returns whether the given input string contains only the characters in the specified list.
	* @Availability All platforms.
	* @usage <pre>var inputstring = "abdcdADV";<br/>

var charsArr = ["a","b", "d", "c", "A", "D", "V"];<br/>

kony.print(kony.string.containsOnlyGivenChars(inputstring,charsArr));<br/>

// prints true as string contains only given chars<br/>

inputstring = "abdcdADVH";<br/>

kony.print(kony.string.containsOnlyGivenChars(inputstring,charsArr));<br/>

// prints false as string contains character 'H' which is not in given chars<br/>
</pre>*/

		containsOnlyGivenChars= function (/**String*/inputstring,/**Object*/characterArray){}
		
kony.string.		
/**This API verifies that the input string does not contain any of the specified characters and returns a boolean value.
	* @param inputstring{String}  Specifies the input string that needs to be verified. <b>Mandatory</b>
	* @param charsArray{Object}  Specifies the set of characters that need to be searched within the input string. <b>Mandatory</b>
	* @returns {Boolean}  Returns whether the given input string contains none of the characters in the specified list.
	* @Availability All platforms.
	* @usage <pre>var inputstring = "abdcdADV";<br/>

var charsArr = ["|","-"];<br/>

kony.print(kony.string.containsNoGivenChars(inputstring, charsArr));<br/>

//prints true as string does not contain the given characters (| and - are NOT contained in the input)<br/>

inputstring = "abdcd|ADV";<br/>

charsArr = ["|","-", "a" ];<br/>

kony.print(kony.string.containsNoGivenChars(inputstring, charsArr));<br/>

//prints false as string contains the given character "a".<br/>
</pre>*/

		containsNoGivenchars= function (/**String*/inputstring,/**Object*/charsArray){}
		
kony.string.		
/**This API verifies that the input string does not contain any of the specified characters and returns a boolean value.
	* @param inputstring{String}  Specifies the input string that needs to be verified. <b>Mandatory</b>
	* @returns {Boolean}  Returns whether the given input string satisfies the email rules and is a valid email address.
	* @Availability All platforms.
	* @usage <pre>var inputstring = "abcd@";<br/>

kony.print(kony.string.IsValidEmail(inputstring));<br/>

//prints false as there are no chars after @<br/>

inputstring = "abcd@tccc";<br/>

kony.print(kony.string.IsValidEmail(inputstring));<br/>

//prints false as the chars after @ does not have . followed by at least 2 chars<br/>
</pre>*/

		isValidEmail= function (/**String*/inputstring){}

		kony.io.
/**This API provides the ability to browse and select files from your local system.
	* @param browseConfig{String}  Configuration params which is a simple JSON object of key value pairs, that drive the possible options during the browse. <b>Mandatory</b>
	* @param browseCallBack{Object}  The callback is executed once the user closes the browse dialog. As part of call back, the platform provides the list of files that have been selected as an array of kony.io.FileSystem objects. The call back signature is as follows: browseCallBack (event, FileList[]). <b>Mandatory</b>
	* @returns {Null} 
	* @Availability Desktop Web
	* @usage <pre>function selectBtn_onClick_seq0() { // Event on button click
   var config = {
        selectMultipleFiles: true,        
        filter: ["image/png", "image/jpeg"]
    };
   kony.io.FileSystem.browse(config, selectedFileCallback);
};</pre>*/

		FileSystem.browse= function (/**String*/browseConfig,/**Object*/browseCallBack){}	
		

		kony.io.
/**When the developer invokes this API with the list of files, the  internally iterates through the fileList and makes the network call to the URL mentioned and uploads the files. The  assumes that the application using this API has the necessary server side infrastructure to handle the upload. 
	* @param URL{String} Provide target location to upload the file. <b>Mandatory</b>
	* @param fileList{Object} Specifies the list of files to be uploaded. This is as an array of kony.io.FileSystem.file objects. <b>Mandatory</b>
	* @param uploadConfig{Object} Configuration parameters, which is a simple JSON object of key value pairs, that provides the possible options during the upload. Currently there are no keys. <b>Mandatory</b>
	* @param uploadCallBack{Object} The callback is invoked each time when the file is getting uploaded. The signature of the call back is expected to be as follows: uploadCallBack(URL, upLoadStates). <b>Mandatory</b>
	* @returns {Null} 
	* @Availability Desktop Web
	* @usage <pre>function UploadBtn_onClick_seq0() { // Event on upload button click
    var uploadURL = �http://10.10.4.17:8080/fileupload/upload�;
    var filesQueue = [{File object},{File Object}]; //Array of File objects got in browseCallBack()
   kony.io.FileSystem.uploadFiles(uploadURL, filesQueue, upLoadCallBack);
 };
</pre>*/

		FileSystem.uploadFiles= function (/**String*/URL,/**Object*/fileList,/**Object*/uploadCallBack,/**Object*/uploadConfig){}	
		
		kony.os.
/**This API converts the argument to a number. If the argument is already a number or a string convertible to a number, then the API returns this number; otherwise, it returns null.
	* @param argument{String|Number}  The argument that must be converted to a number. <b>Mandatory</b>
	* @returns {Number|Null} 
	* <ul><li>The input string or number has been converted to a number and returned.</li>
	* <li> The argument cannot be converted to a number.</li></ul>
	* @Availability All platforms.
	* @usage <pre>kony.os.toNumber (ms34rd);<br/>
//returns null as the string passed cannot be converted to a number<br/>
kony.os.toNumber ("58");<br/>
//returns 58 as the string could be converted to a number<br/>
</pre>*/

		toNumber= function (/**String|Number*/argument){}

kony.os.
/**This API can be invoked on an event of a widget. When this API is invoked it makes all the data and subsequent transactions of the application secure. For example, the login page of an application has the following: user name field, password field, and a button. On the onclick event of the button, the user is verified and navigated to pages with sensitive information. If you want to prevent cross site request forgery or double submissions, you can invoke this API ensuring that all the subsequent transactions are secure.
	* @param callback {Function}  The callback function to be executed when kony.os.startSecureTransaction API is invoked successfully. If there are instances where cross site request forgery is attempted, this parameter should comprise a session/request expiry function. <b>Mandatory</b>
	* @param scope {Number}  Specifies whether this API will be valid per request or per session of the application. <b>Mandatory</b>
	* @Availability Mobile Web
	* @usage <pre>function callback()<br/>
{<br/>
}
kony.os.startSecureTransaction(callback, 1)<br/>
</pre>*/

		startSecureTransaction= function (/**Function*/callback,/**Number*/scope ){}	
		
		
		kony.os.
/**This API can be invoked on an event of a widget. This API should be invoked on forms of the application where user validation is not required or cross site request forgery is not a concern.
	* @Availability Mobile Web
	* @usage <pre>kony.os.endSecureTransaction();
</pre>*/

		endSecureTransaction= function (){}		

		
		
kony.os.
/**This API allows you to convert the given number to represent currency. At present, only USA currency is supported.
	* @param number{Number}  Specifies the number that must be converted to represent currency. <b>Mandatory</b>
	* @returns {String} A string with the number formatted as currency.If the input string has decimal points, the return value is truncated till two decimal points.
	* @Availability All platforms.
	* @usage <pre>var tocurrency = kony.os.toCurrency(10000);<br/>
kony.print(tocurrency);<br/>
//prints $ 10,000<br/>
</pre>*/

		toCurrency= function (/**Number*/number){}	
kony.os.
/**This API provides the ability to query and fetch the system-wide memory available on the mobile device for allocation.
	* @returns {Number} The available memory for allocation is returned. The returned memory always indicates the number of bytes available.
	* @Availability All platforms* except Windows 7 / Kiosk. *Dummy implementation on Server Side Mobile Web and returns a dummy value. 
	* @usage <pre>var freememory = kony.os.freeMemory();<br/>
kony.print(freememory);<br/>
//After the kony.os.freeMemory operation, the memory available for allocation is printed. <br/>
//For example, 1070404 (indicates that 1046 KB of memory is available for allocation)<br/>
</pre>*/

		freeMemory= function (){}		

kony.os.
/**This API returns a unique identifier of the mobile device that is extracted from the useragent. This unique ID represents the device model and the manufacturer.
	* @returns {String} The unique string that represents the device model, OS version, Browser version, Java capabilities, and manufacturer.
	* @Availability All platforms.
	* @usage <pre>var devID =kony.os.userAgent();<br/>
alert("User Agent return value is::"+devID);<br/>
</pre>*/

		userAgent= function (){}		

kony.os.
/**This API helps the developers to pass dynamic values when the form needs to be submitted to external sites.
	* @param key{String} 	Specifies the key of the hidden field that you would like to add. <b>Mandatory</b>
	* @param value{String} 	Specifies the value that corresponds to the specified key in the hidden field. <b>Mandatory</b>
	* @param pvt{String} 	Specifies if the hidden field can be read using the kony.os.readHiddenField API. <b>Optional</b>
	* @Availability Mobile Web and SPA
	*/
		addHiddenField= function(/**String*/key,/**String*/value,/**String*/pvt){}	

kony.os.
/**This API allows the developers to read the hidden fields added by the os.addHiddenField API.
	* @param key{String}  Specifies the key of the hidden field that you would like to read. <b>Mandatory</b>
	* @returns {String|Null}
	* <ul><li> Returns the value that corresponds to the specified key.</li>
	* <li>null is returned if there is no value assigned to the corresponding key.</li></ul>
	* @Availability Mobile Web and SPA
	*/

		readHiddenField= function (/**String*/key){}		
		
		
kony.os.
/**This API allows the developers to get information about the mode in which the application is launched.
	* @returns {Object} Returns a JS object with key-value pairs:launchmode=0 indicates that the application is launched in normal mode.launchmode=1 indicates that the application is launched in full screen mode.
	* @Availability ThinClient
	*/

		getAppContext= function (){}		


kony.os.
/**This API returns whether accelerometer is supported on a device.
	* @returns {Boolean} Returns whether accelerometer is supported on a device.
	* @Availability iPhone, Android, BlackBerry, Windows.
	* @usage <pre>kony.print(kony.os.hasAccelerometerSupport());<br/>
//prints true if device has accelerometer support</pre>*/

		hasAccelerometerSupport= function (){}		
kony.os.		
/**This API allows the developers to get information about the device in which the application is launched.
	* @returns {Object} Returns a hash table with key-value pairs about device information.
	* @Availability All Platforms
	* @usage <pre>var deviceInfo=kony.os.deviceInfo();<br/>
		alert(deviceInfo);<br/>
		
		for (var key in deviceInfo) <br/>
		{
			if (deviceInfo.hasOwnProperty(key))<br/>
			{
				alert(key+":"+deviceInfo[key]);<br/>
			}
		}</pre>*/

		deviceInfo= function (){}			

kony.os.
/**This API returns whether GPS is supported on a device.
	* @returns {Boolean} Returns whether the platform supports GPS.
	* @Availability All platforms except Mobile Web and Windows 7 / Kiosk.
	* @usage <pre>kony.print(kony.os.hasGPSSupport());<br/>

//prints true if device has GPS support</pre>*/

		hasGPSSupport= function (){}	


kony.os.
/**This API adds a meta tag in html header. This API result will effect only on header reload.
	* @param key{String} Adds a meta tag in html header
	* @param value{Object} Adds meta tag attributes in the html header as key value pairs.
	* @Availability  MobileWeb.
	* @usage <pre>kony.os.addMetaTag("test2", { "http-equiv":"refresh","content":"30" })</pre>*/

		addMetaTag= function (/**String*/key,/**Object*/value){}	
		
		kony.os.
/**This API removes a specific meta tag from a html header. This API result will effect only on header reload.
	* @param key{String} Removes a meta tag in html header
	* @Availability  MobileWeb.
	* @usage <pre>kony.os.removeMetaTag("test1")</pre>*/

		removeMetaTag= function (/**String*/key){}	
		
		kony.os.
/**This API removes all the user defined meta tags from a html header. This API result will effect only on header reload.
	* @Availability  MobileWeb.
	* @usage <pre>kony.os.removeAllMetaTags()</pre>*/

		removeAllMetaTags= function (/**String*/key){}	

		kony.os.
/**This API returns whether Orientation is supported on a device.
	* @returns {Boolean} Returns whether the platform supports Orientation.
	* @Availability All platforms except Mobile Web.
	* @usage <pre>kony.print(kony.os.hasOrientationSupport());<br/>
//prints true if device  has Orientation Support</pre>*/

		hasOrientationSupport= function (){}	
		
		kony.os.
/**This API returns whether Camera is supported on a device.
	* @returns {Boolean} Returns whether the platform supports Camera.
	* @Availability All platforms except Mobile Web and Windows 7 / Kiosk. *Dummy implementation for SPA  and Desktop Web that always returns False.
	* @usage <pre>kony.print(kony.os.hasCameraSupport());<br/>
//prints true if device has  camera support</pre>*/

		hasCameraSupport= function (){}	

		kony.os.
/**This API returns whether Touch is supported on a device.
	* @returns {Boolean} Returns whether the platform supports touch.
	* @Availability All platforms except MobileWeb.
	* @usage <pre>kony.print(kony.os.hasTouchSupport());<br/>
//prints true if device is a touch device</pre>*/

		hasTouchSupport= function (){}	
		
		kony.os.
/**This API returns the http headers configured in the HTTP request object.
	* @returns {Object} Returns a hash table of the http headers and their corresponding values.
	* @Availability SPA
	* @usage <pre><pre>kony.print(kony.os.deviceInfo().httpheaders());
	//prints the array of http headers
	</pre>*/

		deviceInfo.httpheaders = function (){}

		kony.os.
/**This API when invoked without any parameter, it prints the entire form that is currently in view.
	* @param containerID {Number} The containerID can be a widget ID of any container widget which can be directly referenced from a form. <b>Optional</b>
	* @Availability Desktop Web
	* @usage <pre><pre>kony.os.print()
	</pre>*/

		print = function (){}

		kony.os.
/**This API returns the current orientation of the device. The possible values are portrait or landscape.
	* @returns {String} Returns the current orientation of the device.
	* <ul><li>DEVICE_ORIENTATION_PORTRAIT</li>
	* <li>DEVICE_ORIENTATION_LANDSCAPE</li></ul>
	* @Availability iPhone, iPad, Windows 8, Android, BlackBerry, BlackBerry 10, Windows 7 / Kiosk, and Desktop Web
	* @usage <pre>kony.os.getDeviceCurrentOrientation();  Returns the device orientation</pre>*/

		getDeviceCurrentOrientation= function (){}		
		
		kony.net.
/**This API allows you to invoke a service asynchronously with the specified parameters.
	* @param URL{String}  The URL containing the remote location from where the content is to be retrieved. <b>Mandatory</b>
	* @param inputParamTable{Object}  It is the list of parameters that need to be passed to the remote service. <b>Mandatory</b>
	* @param callback{Function}  The callback function that is called to handle the return values of the Asynchronous Network Call (in case of success) and error messages (in case of failure). <b>Mandatory</b>
	* @param 	info{Object}	A JavaScript object consisting of key value pairs. If info parameter is specified, it is is passed to the callback function as a last parameter. If the info parameter is not specified, the callback function receives the info as null. "Info" is basically a user data where in the application developers will pass it to the async API's and the platform returns this info object to the corresponding async callback. <b>Optional</b>
	* @returns {Object|handle|null} 
	* <ul><li>This represents the Object returned by the service. This Object contains three values:opstatus,errcode,errmsg.</li>
	* <li>A handle to the service. call</li>
	* <li>If the input parameters are invalid</li></ul>
	* @Availability All Platforms
	* @usage <pre>function callbackfunction(status, resulttable)<br/>
{
 if(status == 400)<br/>
 {
	if(resulttable["opstatus"] == 0)<br/>
	  {
		alert("opstatus is zero");<br/>
	  }
  }
}

function startup()<br/>
{
    try<br/>
	{
		var myhttpheaders={authkey:"myauthkey", authtoken:"myauthtoken"};<br/>
		var inputParamTable={appID:"SampleApp", serviceID:"accountLogin", httpheaders:myhttpheaders};<br/>
		connHandle = kony.net.invokeServiceAsync("http://www.test.konylabs.com", inputParamTable, callbackfunction);<br/>
		
	}
	catch(err)<br/>
	{
	  alert("Error"+err);<br/>
	}
	
}</pre>*/

		invokeServiceAsync = function (/**String*/url, /**Object*/inputParamTable, /**Function*/callback, /**Object*/ info){}	

		
kony.net.
/**This API is used to cancel only async network calls. Synchronous calls will have platform specific cancellation provided by platform (platform to platform - it may vary).
	* @param connHandle{String}  The handle to the asynchronous service.Invalid parameters to this API will be ignored. <b>Mandatory</b>
	* @Availability Available on all platforms except Server Side Mobile Web.
	* @usage <pre>function cancelService()<br/>
{
kony.net.cancel(connHandle);<br/>
}</pre>*/

		cancel= function (/**String*/connHandle){}	
		
	kony.net.
/**The isNetworkAvailable API enables you to check whether  a network is available for data transport on a device.
	* @param networkType {Integer}  Specifies the network type on the device for data transport. <b>Mandatory</b>
	* @returns {Boolean} True indicates that the specified data network is available.
	* @Availability Available on all platforms. Except BlackBerry 6.0.0.141, all other BlackBerry 6.0 versions give Null pointer exception when a wrong parameter is provided.
	* @usage <pre>function checkIfNetworkIsAvailable()
{
return kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY);
}
</pre>*/

		isNetworkAvailable= function (){}		

	kony.net.
/**The setNetworkCallbacks API allows to register for  network status changes. You can then change the user experience according to the network availability.
	* @param callbackconfig {Object} This callback indicates if the device was online or offline when this callback was invoked. <b>Mandatory</b>
	* @Availability Available on all platforms.
	* @usage <pre>var config = {};
config.statusChange = function (isOnLine)
{
	if(isOnLine)
		{
			alert(�Device is online�);
		}
	else
		{
			alert(�Device is offline�);
		}
}
kony.net.setNetworkCallbacks(config);
</pre>*/

		setNetworkCallbacks= function (){}	

	kony.net.
/**The getActiveNetworkType API returns the currently active network type. If the device is offline, it will return null, else it will return the appropriate connection type. 
	* @returns {String} Specifies the network type on the device for data transport.
	* @Availability Available on all platforms. 
	* @usage <pre>function checkActiveNetwork()
{
return kony.net.getActiveNetworkType() ;
}

</pre>*/

		getActiveNetworkType= function (){}			
		
	kony.net.
/**The HttpRequest object supports an HTTP or HTTPS request to any resource on the network and fetches the response.
	* @Availability All Native Platforms except SPA and Windows
	* @usage <pre>var httpclient1 = new kony.net.HttpRequest()</pre>*/

		HttpRequest= function (){}
		
		
	kony.net.
/**The FormData object represents an ordered collection of entries with name-value pairs. 
	* @Availability All Platforms except Windows and SPA
	* @usage <pre>var httpclient1 = new kony.net.FormData()</pre>*/

		FormData= function (){}

		
		
		kony.i18n.
		/**This API returns the locale (string) that is currently being used by the application to populate the localized data. This locale might be different than the system locale. The locale follows the format language_Country.For example, en_US. Country is not mandatory.
		* @returns {String}  The current locale that is being used by the application is returned.
		* @Availability All Platforms
		* @usage <pre>// Method for getting current locale --> 
function getCurrentLocale()
{
	try{<br/>
	var currentLocales = kony.i18n.getCurrentLocale();<br/>
	alert("CurrentLocale :"+currentLocales); <br/>
	}
	catch(i18nError)<br/>
	{
	alert("Exception While getting currentLocale  : "+i18nError );<br/>
	}
}</pre>*/

		getCurrentLocale= function (){}			
		kony.i18n.	
		/**This API provides you the ability to fetch the current locale of the device.
		* @returns {Object}  A table with the following key-value pairs is returned:language,country,name
		* @Availability Android, Windows/Mango
		* @usage <pre>function getCurrentDeviceLocale()<br/>
{
	try<br/>
	{
		var locale =kony.i18n.getCurrentDeviceLocale();<br/>
		alert("current device locale is "+locale[0]);<br/>
	}
	catch(err)<br/>
	{
		alert("Exception in getCurrentDeviceLocale  : "+err );<br/>
	}
}</pre>*/

		getCurrentDeviceLocale= function (){}	
		
		kony.i18n.
		/**This API provides you the ability to retrieve a list of all the supported locales of the device.
		* @returns {Object}  A table with the following key-value pairs is returned:language,country,name
		* @Availability All Platforms
		* @usage <pre>function getSupportedLocales()<br/>
 {
	try<br/>
	{
		var locales =kony.i18n.getSupportedLocales();<br/>
		for(var i=1;i<locales.length;i++)<br/>
		{
		   alert("locale is "+locales[i].name);<br/>
		}
					
         }
	catch(err)<br/>
	{
		alert("Exception in getSupportedLocales  : "+err );<br/>
	}
 }</pre>*/

		getSupportedLocales= function (){}		
		
		
		
		
		kony.i18n.
		/**This API provides you the ability to retrieve a list of all the supported locales of the device.
		* @param	inputtable{Object}  Specifies the resource bundle that needs to be set for the given locale. <b>Mandatory</b>
		* @param	locale{String}	Specifies the locale for which the resource bundle needs to be set. <b>Mandatory</b>
		* @Availability All Platforms
		* @usage <pre>function setResourceBundle()<br/>
{
   try{<br/>
         kony.i18n.setResourceBundle({btn1:"First Name",btn2:"Last Name"}, "en_US")<br/>
             alert(" Set ");<br/>
                 }
                 catch(i18nError)<br/>
                 {
                    alert("Exception While getting setResourceBundle  : "+i18nError );<br/>
                 }
}</pre>*/

		setResourceBundle= function (/**Object*/inputtable, /**String*/locale){}	
		
		
		kony.i18n.
		/**This API allows you to append new key value pairs to the given resource bundle for a specified locale. The key-value pairs you provide will be appended at the end of the resource bundle.If no resource bundle exists for the specified locale, a new resource bundle is created.
		* @param	inputtable{Object}  Specifies the resource bundle that needs to be set for the given locale. <b>Mandatory</b>
		* @param	locale{String}	Specifies the locale for which the resource bundle needs to be updated with the given values. <b>Mandatory</b>
		* @Availability All Platforms
		* @usage <pre>function updateResourceBundle()<br/>
{
	try{<br/>
	kony.i18n.updateResourceBundle({1:"John",2:"Jack",3:"Tom"}, "en_US")<br/>
	alert(" Updated ");<br/>
	}
	catch(i18nError)<br/>
	{
	alert("Exception While getting updateResourceBundle  : "+i18nError );<br/>
	}<br/>
}</pre>*/

		updateResourceBundle= function (/**Object*/inputtable, /**String*/
locale){}
		
		kony.i18n.
		/**This API allows you to append new key value pairs to the given resource bundle for a specified locale. The key-value pairs you provide will be appended at the end of the resource bundle.If no resource bundle exists for the specified locale, a new resource bundle is created.
		* @param	locale{String}	Specifies the locale for which the resource bundle is checked. <b>Mandatory</b>
		* @returns	{Boolean}	Specifies whether a resource bundle exists for a given locale.
		* @Availability All Platforms
		* @usage <pre>// Method for checking the resources bundle present or not--><br/>
function isResourceBundlePresent()<br/>
{
	try{<br/>
	var exists = kony.i18n.isResourceBundlePresent("en_US");<br/>
	alert("isResourceBundlePresent :"+exists);<br/>
	}
	catch(i18nError)<br/>
	{
	alert("Exception While getting isResourceBundlePresent  : "+i18nError );<br/>
	}
}</pre>*/

		isResourceBundlePresent= function (/**String*/ locale){}
		
		kony.i18n.
		/**This API enables you to verify whether a locale is supported by a device.
		* @param	locale{String}	Specifies the locale that must be verified if it is supported by the device.Locale must be in one of the following formats:language_countryCode, language. <b>Mandatory</b>
		* @returns	{Boolean}	Specifies whether a resource bundle exists for a given locale.
		* @Availability All Platforms
		* @usage <pre>// Method for checking the resources bundle present or not--><br/>
function isResourceBundlePresent()<br/>
{
	try{<br/>
	var exists = kony.i18n.isResourceBundlePresent("en_US");<br/>
	alert("isResourceBundlePresent :"+exists);<br/>
	}
	catch(i18nError)<br/>
	{
	alert("Exception While getting isResourceBundlePresent  : "+i18nError );<br/>
	}
}</pre>*/

		isLocaleSupportedByDevice= function (/**String*/locale){}	
		
		kony.i18n.
		/**This API returns the localized string that corresponds to the specified i18n Key.
		* @param	i18nkey{String}	Specifies the internationalization key for which the localized string needs to be returned. <b>Mandatory</b>
		* @returns	{String}	Returns the localized string that corresponds to the specified i18n Key.
		* @Availability All Platforms
		* @usage <pre>// Method for getLocalizedString --><br/> 
function getLocalizedString()<br/> 
{
	try{<br/> 
	var currentLocales = kony.i18n.getLocalizedString("1");<br/> 
	var currentLocales1 = kony.i18n.getLocalizedString("2");<br/> 
	alert(" LocalizedString Method called :"+currentLocales+" "+currentLocales1); <br/> 
	}
	catch(i18nError)<br/> 
	{
	alert("Exception While getting localizedString  : "+i18nError );<br/> 
	}
}</pre>*/

		getLocalizedString= function (/**String*/locale){}	
		
		kony.i18n.
		/**This API allows you to delete an existing resource bundle. If a resource bundle does not exist, the API will return without performing any operation.
		* @param	locale{String}	Specifies the locale for which the resource bundle needs to be deleted. <b>Mandatory</b>
		* @Availability All Platforms
		* @usage <pre>// Method for delete the resource bundle --><br/>
function deleteResourceBundle()<br/>
{
	try{<br/>
	kony.i18n.deleteResourceBundle("en_US");<br/>
	alert(" Resources bundle has been deleted.");<br/>
	}
	catch(i18nError)<br/>
	{
	alert("Exception While getting deleteResourceBundle  : "+i18nError );<br/>
	}
}</pre>*/

		deleteResourceBundle= function (/**String*/locale){}
		
		
		
		kony.i18n.
		/**This API allows you to set the specified locale as the default locale for the application. You can also set the default locale from the IDE. However, this API allows you to perform that task programmatically.
		* @param	localename{String}	Specifies the locale that must be set as the default locale of the application. <b>Mandatory</b>
		* @param	onsuccesscallback{Function}	onsuccess callback will be called by the platform after successfully setting the specified locale as default. <b>Mandatory</b>
		* @param	onfailurecallback{Function}	onfailure callback will be called by the platform if the locale is not set successfully. <b>Mandatory</b>
		* @param 	info{Object}	A JavaScript object consisting of key value pairs. If info parameter is specified, it is is passed to the callback function as a last parameter. If the info parameter is not specified, the callback function receives the info as null. "Info" is basically a user data where in the application developers will pass it to the async API's and the platform returns this info object to the corresponding async callback. <b>Optional</b>
		* @Availability All Platforms
		* @usage <pre>function setDefaultLocaleAsync()<br/>
{
	try<br/>
	{
		kony.i18n.setDefaultLocaleAsync("en_US", onsuccesscallback, onfailurecallback);<br/>
		alert("current locale is set to "+kony.i18n.getCurrentLocale());<br/>
						
	}
	catch(err)<br/>
	{
		alert("Exception in setDefaultLocaleAsync  : "+err );<br/>
	}
 }</pre>*/

		setDefaultLocaleAsync= function (/**String*/localename, /**Function*/onsuccesscallback, /**Function*/onfailurecallback, /**Object*/ info){}
		kony.i18n.
		/**This API allows you to set the specified locale as the default locale for the application. You can also set the default locale from the IDE. However, this API allows you to perform that task programmatically.
		* @param	localename{String}	Specifies the locale that must be set as the current locale of the application. <b>Mandatory</b>
		* @param	onsuccesscallback{Function}	onsuccess callback will be called by the platform after a locale is set successfully as the current locale. <b>Mandatory</b>
		* @param	onfailurecallback{Function}	onfailure callback will be called by the platform if the locale is not set successfully. <b>Mandatory</b>
		* @param 	info{Object}	A JavaScript object consisting of key value pairs. If info parameter is specified, it is is passed to the callback function as a last parameter. If the info parameter is not specified, the callback function receives the info as null. "Info" is basically a user data where in the application developers will pass it to the async API's and the platform returns this info object to the corresponding async callback. <b>Optional</b>
		* @Availability All Platforms
		* @usage <pre>function setCurrentLocaleAsync()<br/>
{
	try<br/>
	{
		kony.i18n.setCurrentLocaleAsync("en_GB", onsuccesscallback, onfailurecallback);<br/>
		alert("current locale is set to "+kony.i18n.getCurrentLocale());<br/>
	}
	catch(err)<br/>
	{
		alert("Exception in setCurrentLocaleAsync  : "+err );<br/>
	}
}</pre>*/

		setCurrentLocaleAsync= function (/**String*/localename, /**Function*/onsuccesscallback, /**Function*/onfailurecallback, /**Object*/ info){}				

		kony.phone.
		/**This API provides access to the Messaging service of the underlying platform. You can send a text message to a specified number. This API accesses the messaging application of the underlying platform and uses that application to send text message to the specified number.
		* @param	phonenumber{String}	Number to which the SMS must be sent. <b>Mandatory</b>
		* @param	text{String}	Content of the SMS. <b>Mandatory</b>
		* @Availability All Platforms
		* @usage <pre>function sendSMS()<br/>
{
	try <br/>
	{<br/>
		
		var phNo="123456789";<br/>
		var msg= "hello world";<br/>
		var result = kony.phone.sendSMS(phNo,msg) ;<br/>
		if(result == 0)<br/>
		{
			alert("message sent successfully");<br/>
		}
		else<br/>
		{
			alert("Unable to send sms");<br/>
		}
		

	}
	catch(err)<br/>
	{
		alert("error in sending sms:: "+err);<br/>
	}
	
}</pre>*/

		sendSMS= function (/**String*/phonenumber, /**String*/text){}	
		
		
		kony.phone.
		/**This API provides you with the ability to make a call to the specified telephone number.
		* @param	number{String}	Number to which the call must be made. <b>Mandatory</b>
		* @Availability All Platforms
		* @usage <pre>function CallTheNumber()<br/>
{
	
	try<br/>
	{
		var number="123456789";<br/>
		kony.phone.dial(number);<br/>
	} 
	catch(err)<br/>
	{
		alert("error in dial:: "+err);<br/>
	}
}</pre>*/

		dial= function (/**String*/number){}
		
		kony.phone.
		/**This API allows you to open the picture gallery of the mobile device pick an existing picture.
		* @param	onselectioncallback{Function}	This callback function is invoked when a media is selected. <b>Mandatory</b>
		* @param	querycontext{Object}	Query context is Object- can be filled with key-value pairs for fine tuning the media items to display (currently only one key �mimetype� supported to query the gallery items � Later more query params can be added). The possible values of mimetype key can be image/*, video/*, audio/*. <b>Optional</b>
		* @Availability All Platforms
		* @usage <pre>function openMediaGallery()<br/>
{
	try <br/>
	{
		
		function onselectioncallback(rawbytes)<br/>
		{
			
			alert("in selection callback");<br/>
			if (rawbytes == null)<br/>
			{
			   alert("nothing selected");<br/>
			  return;<br/>
			}
			alert("return status is "+returnStatus);<br/>
			//(convert the rawbytes to base64 and can be assigned <br/>
			to a image widget or use base64 to upload)<br/>
			var base64 = convertToBase64(rawbytes);<br/>
			frmTest.imgone.base64 = base64;<br/>
			//Assigning rawbytes directly to a image widget<br/>
			//formid.imageid.rawdata = rawbytes<br/>
		}
		var querycontext = {mimetype:"video/*"};<br/>
		returnStatus = kony.phone.openMediaGallery(onselectioncallback, querycontext);<br/>
		
	}
	catch(err)<br/>
	{
		alert("error in openMediaGallery:: "+err);<br/>
	}
	
}</pre>*/

		openMediaGallery= function (/**Function*/onselectioncallback, /**Object*/querycontext){}		

		kony.phone.
		/**This API allows the application to launch the native email client with predefined email addresses, subject, body, and attachments.
		* @param	torecipients{String}	List of email addresses to be included in "to" list. For example, "john@example.com","stephen.joseph@kony.com" "test@somecompany.com" <b>Mandatory</b>
		* @param	ccrecipients{String}	List of email addresses to be included in "cc" list. For example, "john@example.com","stephen.joseph@kony.com" "test@somecompany.com". <b>Optional</b>
		* @param	bccrecipients{String}	List of email addresses to be included in "bcc" list. For example, "john@example.com","stephen.joseph@kony.com" "test@somecompany.com". <b>Optional</b>
		* @param	subject{String}	Subject to be part of the email. <b>Optional</b>
		* @param	messagebody{String}	Body to be part of the email. <b>Optional</b>
		* @param	ismessagebodyhtml{Boolean}	Specifies whether message body must be treated as HTML content. <b>Optional</b>
		* @param	attachments{Object}	Each attachment is a Object with the following key-value pairs:	mimetype [String] Standard mime types like image/png or image/jpg or image/* etc. attachment [Object] Rawbytes received from the camera, image widget, or openmediagallery api.filename (optional) [String] name of the file (along with the extension) to appear as attachment. The filename must include the complete path to the file that you want to attach. For example, "C:/Users/user123/example.pdf".
		* @Availability All Platforms
		* @usage <pre>function openEmail()<br/>
{
	try<br/>
	{
		var to=["abc@fgh.com"];<br/>
		var cc=["abc@abc.com"];<br/>
		var bcc = ["xyz@xyz.com"];<br/>
		var sub = "Hello";<br/>
		var msgbody = "Testing openEmail";<br/>
		kony.phone.openEmail(to,cc,bcc,sub,msgbody,false);<br/>		
	}<br/>
	catch(err)<br/>
	{
		alert("error in opening Email:: "+err);<br/>
	}
}</pre>*/

		openEmail= function (/**String*/torecipients, /**String*/ccrecipients, /**String*/bccrecipients, /**String*/subject, /**String*/messagebody, /**Boolean*/ismessagebodyhtml, /**Object*/attachments){}		
		
kony.phone.
		/**This API adds a new event to the device calendar.
		* @param	eventDetails{Object}	A hash Object that contains the following key-value pairs:summary [String] - Short description for the event. start [String] - The start date and time for the event. The format for date is "dd/mm/yyyy", and time is "hh:mm:ss". finish [String] - The finish date and time for the event. The format for date is "dd/mm/yyyy", and time is "hh:mm:ss". alarm [Number] - Time in seconds before the start time at which the phone must trigger an alarm. access [String] - Indicates the privacy setting for the event. <b>Mandatory</b>
		* @Availability All Platforms
		* @usage <pre>function addCalendarEvent()<br/>
{
	try <br/>
	{
		alert("calendar event is about to start");<br/>
		var evtobj={summary:"Event started", start:"15/04/2012<br/>
		11:23:45", finish:"21/12/2012 12:59:45", <br/>
		alarm:40,note:"Event will ends at 12.59 PM", access:"public"};<br/>
		kony.phone.addCalendarEvent(evtobj);<br/>
		//Adds a event to the device calendar<br/>
	}
	catch(PhoneError)<br/>
	{
		alert("error in addCalendarEvent:: "+PhoneError);<br/>
	}
	
}</pre>*/

		addCalendarEvent= function (eventDetails){}
		kony.phone.
		/**This API deletes an event that matches the specified event handled from the device calendar.
		/**In iPhone, this API returns array of events. Events are dictionary item that a user provides while adding an event. This new dictionary will also contain new key named as "event" that stores eventId. EventId from dictionary is used in removeCalendarEvent to remove an event.
		* @param	eventHandle{Object}	Event handle is returned by the find operation. <b>Mandatory</b>
		* @Availability All Platforms except BlackBerry 10, Mobile Web, Windows 8,  Kiosk, Desktop Web, and SPA.
		* @usage <pre>function removeCalendarEvent()<br/>
{
	try <br/>
	{
		kony.phone.removeCalendarEvent(events[1]);<br/>
		alert("Event deleted successfully");<br/>
	// It deletes an event that matches the specified event handle from the device calendar<br/>
	}
	catch(err)<br/>
	{
		alert("error in removeCalendarEvent:: "+err);<br/>
	}
	
}</pre>*/

		removeCalendarEvent= function (/**Object*/eventHandle){}		
		
		kony.phone.
		/**This API adds a new event to the device calendar.
		* @param	evtobj{Object}	A Hash Object that has the following key-value pairs (details of the event):type [String] - Specifies the criteria for searching the event. The criteria can be starting, ending, or occurring.start [String] - Specifies the start date and time for the event. The format for date is "dd/mm/yyyy", and time is "hh:mm:ss".finish [String] - Specifies the finish date and time for the event. The format for date is "dd/mm/yyyy", and time is "hh:mm:ss". <b>Mandatory</b>
		* @returns{Array|Null}	<ul><li>An array of Objects - Handle to the event (s) that match the specified input string in the device calendar.</li>
		* <li>If there is no event found that matches the specified criteria.</li></ul>
		* @Availability All Platforms
		* @usage <pre>function findCalendarEvent()<br/>
{
	try <br/>
	{
		alert("Finding the calendar events");<br/>
		var evtobj={type:"starting",start:"15/03/2012 12:46:45",<br/> 
		finish:"24/12/2012 12:59:45"};<br/>
		var events = kony.phone.findCalendarEvents(evtobj);<br/>
		alert("Found calendar event(s)");<br/>
	}
	catch(err)<br/>
	{
		alert("error in removeCalendarEvent:: "+err);<br/>
	}
	
}</pre>*/

		findCalendarEvents= function (/**Object*/evtobj){}	
		
		kony.store.
		/**This API returns the name of the nth key in the list. If n is greater than the number of key/value pairs in the object, then this method returns null.
		* @param	index{number}	Specifies the index for which the key name is to be returned. <b>Mandatory</b>
		* @returns{String|Null}	<ul><li>Returns the keyname of the specified index.</li>
		* <li>Returns null when the specified index is greater than the number of key/value pairs in the object.</li></ul>
		* @Availability All Platforms
		* @usage <pre>var keyName = kony.store.key(0);<br/>
alert("first key name is "+keyName);</pre>*/

		key= function (/**Number*/index){}
		
		kony.store.
		/**This API creates a structured clone of the given value. If this raises an exception then the list associated with the object is left unchanged.
		* @param	key{String}	Specifies the keyname for which the item needs to be set <b>Mandatory</b>
		* @param	Value{Object} Specifies the value that must be set at the given index. This value can be a number, string, Boolean, or a Lua table.<b>Mandatory</b>
		* @Availability All Platforms
		* @usage <pre>kony.store.setItem("keyValue5", "this is a key value");
kony.store.setItem("keyValue4", true);</pre>*/

		setItem= function (/**String*/key, /**Object*/Value){}
		
		kony.store.
		/**This API returns a structured clone of the current value associated with the given key. If the given key does not exist in the list associated with the object then this method returns null.
		* @param	keyname{String}	Specifies the keyname from which the item needs to be fetched. <b>Mandatory</b>
		* @returns {string}	Returns the item located at the specified index.
		* @Availability All Platforms
		* @usage <pre>var myValue = kony.store.getItem("name");<br/>
alert("name is "+myValue);</pre>*/

		getItem= function (/**String*/keyname){}		
		
		kony.store.
		/**This API removes the item identified by the key, if it exists. If no item with that key exists, the method does not perform any action.
		* @param	keyname{String}	Specifies the keyname for which the item needs to be removed. <b>Mandatory</b>
		* @Availability All Platforms
		* @usage <pre>kony.store.removeItem("name");<br/>
alert("name removed");</pre>*/

		removeItem= function (/**String*/keyname){}		
		
		kony.store.
		/**This API allows you to empty the database by clearing all the key-value pairs. If there are no key-value pairs, then the API does not do anything.
		* @Availability All Platforms
		* @usage <pre>try<br/>
{
	kony.store.clear();<br/>
	alert("store is cleared");<br/>
}
catch(err)<br/>
{
	alert("error occured in clear() and the error is :"+err);<br/>

}</pre>*/

		clear= function (){}	
		
		kony.store.
		/**This API returns the length of the local storage.
		* @returns	{String}	Returns the length of the local storage.
		* @Availability All Platforms
		* @usage <pre>mylength = kony.store.length();<br/>
alert("length is "+mylength);</pre>*/

		length= function (){}
		kony.db.
		/**This API allows you to open the specified version of a particular database. This is an asynchronous APIs.
		* @param name {String}	Specifies the actual name of the database that you want to open. <b>Mandatory</b>
		* @param version {String}	Specifies the version of the database that you want to open. <b>Mandatory</b>
		* @param displayName{String}	Specifies the display name of the database that you want to open. <b>Mandatory</b>
		* @param estimatedsize{Number}	Specifies the approximate size of the database in bytes. Applicable on SPA. <b>Optional</b>
		* @returns	{String}	Returns the unique ID of the database
		* @Availability iPhone,Android, BB, MobileWeb advanced, SPA,iPad
		* @usage <pre>var dbName="konytestDB";<br/>
var version="1.0";<br/>
var displayName="demo web SQL Database";<br/>
var estimatedSize=5*1024*1024;<br/>
//5*1024*1024 indicates 5 MB<br/>
var databaseObjectId = kony.db.openDatabase(dbName,version, displayname, estimatedSize);<br/>
//databaseObjectId contains the unique ID of the database</pre>*/

		openDatabase= function (/**String*/name, /**String*/version, /**String*/displayName, /**Number*/estimatedsize){}
		
		kony.db.
		/**This API allows you to execute the specified transaction on the given database. When you invoke this API, it returns immediately and asynchronously executes the transaction.
		* @param dbaseObjectId {String}	Specifies the unique ID of the database <b>Mandatory</b>
		* @param TransactionCallback {Function}	Specifies the callback function that contains the transactions. <b>Mandatory</b>
		* @param TransactionErrorCallback{Function}	Specifies the callback that must be executed if there is an error in executing the transaction. This callback function is used to roll back the updates to the database. <b>Optional</b>
		* @param SuccessCallback {Function}	Specifies the callback that must be executed if the transaction is successful. <b>Optional</b>
		* @Availability iPhone,Android, BB,SPA,iPad
		* @usage <pre>var dbName="konytestDB";<br/>
var version="1.0";<br/>
var displayName="demo web SQL Database";<br/>
var estimatedSize=5*1024*1024;<br/>
//5*1024*1024 indicates 5 MB<br/>
var databaseObjectId = kony.db.openDatabase(dbName,version, displayname, estimatedSize);<br/>
//databaseObjectId contains the unique ID of the database<br/>
function myTransactionCallback(dbId)<br/>		
{
	//SQLTransaction contains implementation of executeSql method<br/>		
	// invoke kony.db.executesql method for sql trasaction	<br/>					
} 
function myTransactionErrorCallback(SQLError)	<br/>	
{
	// proceed with the logic<br/>
}
function mySuccessCallback() <br/>
{
// proceed with the logic<br/>
}
kony.db.transaction(databaseObjectId, myTransactionCallback, myTransactionErrorCallback, mySuccessCallback);</pre>*/

		transaction= function (/**String*/dbaseObjectId, /**Function*/TransactionCallback, /**Function*/TransactionErrorCallback,/**Function*/SuccessCallback){}
		
		
		kony.db.
		/**This API allows you to read a specified transaction. This API creates a SQLTransaction object for read-only transactions.
		* @param dbaseObjectId {String}	Specifies the unique ID of the database <b>Mandatory</b>
		* @param TransactionCallback {Function}	Specifies the callback function that contains the transactions. <b>Mandatory</b>
		* @param TransactionErrorCallback{Function}	Specifies the callback that must be executed if there is an error in executing the transaction. This callback function is used to roll back the updates to the database. <b>Optional</b>
		* @param SuccessCallback {Function}	Specifies the callback that must be executed if the transaction is successful. <b>Optional</b>
		* @Availability iPhone,Android, BB,SPA,iPad
		* @usage <pre>var dbName="konytestDB";<br/>
var version="1.0";<br/>
var displayName="demo web SQL Database";<br/>
var estimatedSize=5*1024*1024;<br/>
//5*1024*1024 indicates 5 MB<br/>
var databaseObjectId = kony.db.openDatabase(dbName,version, displayname, estimatedSize);<br/>
//databaseObjectId contains the unique ID of the database<br/>			
function myTransactionCallback(dbId)<br/>			
{		
	//SQLTransaction contains implementation of executeSql method	<br/>		
	// invoke kony.db.executesql method for sql trasaction<br/>			
}				
function myTransactionErrorCallback(SQLError) <br/>       
{		
	// proceed with the logic<br/>		
}		
function mySuccessCallback()<br/>		
{		
	// proceed with the logic <br/>
}		
kony.db.readTransaction(databaseObjectId, myTransactionCallback, myTransactionErrorCallback, mySuccessCallback);</pre>*/

		readTransaction= function (/**String*/dbaseObjectId, /**Function*/TransactionCallback, /**Function*/TransactionErrorCallback, /**Function*/SuccessCallback){}	
		
		kony.db.
		/**This API allows you to execute a specified SQL statement on the given database. This is an asynchronous API.
		* @param transactionId {String}	Specifies the unique ID of the transaction. <b>Mandatory</b>
		* @param SQLStatement	{String}	Specifies the SQL statement that must be executed. <b>Mandatory</b>
		* @param arg	{Object}	Specifies the arguments for executing the SQL statement. If this parameter is not specified or is nil, then the statement is executed without any arguments.
		* @param SQLStatementSuccessCallback {Function}	Specifies the callback function that must be executed when the execution of the SQL statement is a success. <b>Optional</b>
		* @param SQLStatementErrorCallback{Function}	Specifies the callback function that must be executed when the execution of the SQL statement is a failure. <b>Optional</b>
		* @Availability iPhone,Android, BB,SPA,iPad
		* @usage <pre>var dbName="konytestDB";<br/>
var version="1.0";<br/>
var displayName="demo web SQL Database";<br/>
var estimatedSize=5*1024*1024;<br/>
//5*1024*1024 indicates 5 MB<br/>
var databaseObjectId = kony.db.openDatabase(dbName,version, displayname, estimatedSize);<br/>
//databaseObjectId contains the unique ID of the database<br/>
 function sql_success(transactionId, resultset)<br/>
{
	//logic to process the resultset<br/>
}
 function sql_errorcallback(err)<br/>
{
	print("Error processing sql statement error code=" + err["code"]);<br/>
}
 function myTransactionCallback(dbId)<br/>
{
	//SQLTransaction contains implementation of executeSql method<br/>
	// invoke kony.db.executesql method for sql trasaction<br/>
	var sqlStatement = "SELECT * FROM employee";<br/>
	kony.db.executeSql(dbId, sqlStatement, null, sql_success, sql_errorcallback);<br/>
}

function myTransactionErrorCallback(SQLError)<br/>
{
	// proceed with the logic<br/>
}

function mySuccessCallback()<br/>
{
	// proceed with the logic<br/>
}
kony.db.transaction(databaseObjectId, myTransactionCallback, myTransactionErrorCallback, mySuccessCallback);</pre>*/

		executeSql= function (/**String*/transactionId, /**String*/SQLStatement, /**Object*/arg, /**Function*/SQLStatementSuccessCallback,/**Function*/SQLStatementErrorCallback){}
		
		kony.db.
		/**This API returns the row available at the specified index. If there is no such row, then the API returns nil.
		* @param	transactionID{String}	Specifies the unique ID of the transaction. <b> Mandatory</b>
		* @param	SQLResultSet{Array}	Specifies the name of the SQL result set. <b> Mandatory</b>
		* @param	index{Number}	Specifies the index from which the row is to be retrieved. <b> Mandatory</b>
		* @returns	{String|Null}	<ul><li>Returns the row item at the specified index</li><li>Returns null if there is no row available at the specified index.</li></ul>
		* @usage <pre>function sql_success(transactionId, resultset)<br/>
{
//logic to process the resultset<br/>
for (var i=0; i<resultset.length;i++)<br/>
{
	var rowItem = Kony.db.sqlResultsetRowItem(transactionId,resultset,i);<br/>
	print("empID:" + rowItem["empID"] + " empName:" + rowItem["empName"] + " depID:" + rowItem["depName"]);<br/>
}
}</pre>*/

		sqlResultsetRowItem= function (/**String*/transactionID, /**Array*/SQLResultSet, /**Number*/index){}	
		
		kony.db.
		/**The changeVersion method allows scripts to automically verify the version number and change it at the same time during a schema update. This method creates an SQLTransactionSync object (executeSQL) for a read/write transaction. The database's actual version changes to newVersion only if the first argument (oldVersion) exactly matches the database's actual version, otherwise throws a SQLException.
		* @param oldVersion {String}	Specifies the older version of the database. <b>Mandatory</b>
		* @param newVersion {String}	Specifies the newer version of the database. <b>Mandatory</b>
		* @param SQLTransactionCallback {Function}	Specifies the callback function that contains the transactions. <b>Mandatory</b>
		* @param SQLTransactionErrorCallback {Function} Specifies the callback that must be executed if there is an error in executing the transaction. This callback function is used to roll back the updates to the database.
		* @param SQLTransactionVoidCallback	{Function}	Specifies the callback that must be executed if the transaction is successful.
		* @Availability iPhone,Android, BB,SPA,iPad, MobileWeb and SPA.*/
		

		changeVersion= function (/**String*/oldVersion, /**String*/newVersion, /**Function*/SQLTransactionCallback ,/**Function*/SQLTransactionErrorCallback, /**Function*/SQLTransactionVoidCallback){}
		
		
//Themes:
	kony.theme.
	/**This API allows you to apply a specified theme on the application dynamically.
	* @param themeidentifier{String}  Specifies a string that denotes the theme ID. The specified theme is applied to the application.<b>Mandatory</b>
	* @param onsuccesscallback{Function}	Specifies the callback function that needs to be executed in case of success. This callback function is executed after applying the specified theme. <b>Mandatory</b>
	* @param onerrorcallback {Function}	Specifies the callback function that needs to be executed in case of error.
	* @returns {Object} Returns a table that has the following key-value pairs: status - the status of the execution of this API.true - if the specified theme was applied successfully.false - if there was a problem while applying the specified theme. errorcode - the error code that comes up if there is a failure in the API execution (i.e, status=false).  errormessage - the error message that corresponds to the error code.
	* @Availability All Platforms
	* @usage <pre>function onsuccesscallback() <br/>
 {
	 alert("successfully set the theme to app")<br/>
 }

function onerrorcallback() <br/>
 {
	 alert("Theme is not set to the app")<br/>
 }
kony.theme.setCurrentTheme("red",onsuccesscallback,onerrorcallback);</pre>*/

		setCurrentTheme = function (/**String*/themeidentifier, /**Function*/onsuccesscallback, /**Function*/onerrorcallback){}
		

	kony.theme.
	/**This API enables you to create a theme.
	* @param url{String}  Specifies a string (URL) from which the theme is to be downloaded.<b>Mandatory</b>
	* @param themeIdentifier {Boolean}	Specifies a flag that indicates if the current theme must be replaced with the same identifier or use the 		theme only in the current session. <b>Mandatory</b>
	* @param onsuccesscallback {Function}	Specifies the callback function that needs to be executed in case of success. This callback function is executed after applying the specified theme. <b>Mandatory</b>
	* @param onerrorcallback {Function}	Specifies the callback function that needs to be executed in case of success. This callback function is executed after the theme is created.
	* @returns {Boolean|Number} <ul><li>Returns the successfully created theme.</li><li>Returns the error code</li></ul>
	* @Availability All Platforms
	* @usage <pre>function onsuccesscallback() <br/>
 {
	 alert("successfully set the theme to app")<br/>
 }

function onerrorcallback() <br/>
 {
	 alert("Theme is not set to the app")<br/>
 }
kony.theme.createTheme("", "Mytheme",onsuccesscallback,onerrorcallback);</pre>*/

		createTheme = function (/**String*/url, /**Boolean*/themeidentifier, /**Function*/onsuccesscallback, /**Function*/onerrorcallback){}
		
	kony.theme.		
	/**This API allows you to check the existence of specific theme in the application.
	* @param themeidentifier {string} Specifies a string that represents a theme.<b>Mandatory</b>
	* @returns {Object} The Boolean return value indicates the existence of the intended theme identifier. status - Boolean indicates whether the theme with the theme identifier exists or not. true - if the specified theme exists. false - if the specified theme does not exist.
	* @Availability All Platforms
	* @usage <pre>var isThemePresent=kony.theme.isThemePresent("green");
alert("IS theme present ? True/False: "+isThemePresent);</pre>*/

	isThemePresent = function (/**String*/themeidentifier){}
		
		
	kony.theme.
	/**This API returns all the themes available in the application.
	* @returns {Array} Represents all theme Identifiers
	* @Availability All Platforms
	* @usage <pre>var themes=kony.theme.getAllThemes();
alert("No Of themes are "+themes.length);</pre>*/

	getAllThemes = function (){}
		
	kony.theme.		
	/**This API returns the meta data of the current theme in the application.
	* @returns {Object} An Object representing the additional data associated with Theme or null. 
	* @Availability All Platforms
	* @usage <pre>var crntThemeData=kony.theme.getCurrentThemeData();
		alert("Current Theme Data is :"+crntThemeData);</pre>*/

	getCurrentThemeData = function (){}
		
	kony.theme.	
	/**This API returns the current theme that is applied to the application.
	* @returns {String} Returns the identifier of the current theme that is applied to the application. 
	* @Availability All Platforms
	* @usage <pre>var crntThemeData=kony.theme.getCurrentThemeData();
		alert("Current Theme Data is :"+crntThemeData);</pre>*/

		getCurrentTheme = function (){}
		
	kony.theme.	
	/**This API allows you to delete a specified theme in the application programmatically.
	* @param themeidentifier{String}  Specifies a string that denotes the theme ID. The specified theme will be deleted from the application.<b>Mandatory</b>
	* @param onsuccesscallback {Function}	Specifies the callback function that needs to be executed in case of success. This callback function is executed after applying the specified theme. <b>Mandatory</b>
	* @param onerrorcallback {Function}	Specifies the callback function that needs to be executed in case of success. This callback function is executed after the theme is created.
	* @returns {Object} Returns boolean indicating whether the theme is deleted or not. The status can be true or false. true - if the specified theme was deleted successfully. false - if the deletion failed.
	* @Availability All Platforms
	* @usage <pre>kony.theme.deleteTheme ("green");</pre>*/
	
		deleteTheme = function (/**String*/themeidentifier, /**Function*/onsuccesscallback, /**Function*/onerrorcallback){}
kony.push.
	/**If the device receives a Notification, the device executes the function of your choice. You can specify the functions to be executed for Push Notification in a Object for this API.
	* @param Object {Object} Specifies the functions to be executed for Push Notification.
	* @Availability BlackBerry, iPhone, Windows, Android
	* @usage <pre>
	config = {onsuccessfulregistration:onsuccess, onfailureregistration:onfailure, onlinenotification:onlineCallback, onsuccessfulderegistration:onderegsuccess, onfailurederegistration:onderegfailure }; kony.push.setCallbacks(config);
	//This example is for onsuccesregistration
	function onsuccess(identifier)
	{
		kony.print("Registered SUCCESSFULLY :"+identifier);
	//Send the identifier to the Push Notifications Sender.
	}
	//This example is for onfailureregistration
	function onfailure(errortable)
	{kony.print("Registration Failed");
	window.Alert("Message : " +errortable
	{"errorcode"}+errortable{"errormessage"},null,"info",null,,"Info");
	}
	
	//This example is for onlinenotification
	function onlineNotification(payload)
	{/
	/payload is a Object contains a set of key value pairs provided by
	the respective Push Notification Server
	}/
	/Note: This function is not applicable on Blackberry platform. **********************
	
	//This example is for offlinenotification
	function offlineNotification(payload)
	{/
	/payload is Object contains a set of key value pairs provided by
	the respective Push Notification Server
	}
	Note: This function is not applicable on Blackberry platform.**********************
	
	
	//This example is for onsuccessfulderegistration
	function onderegsuccess()
	{
	print("Deregistered Successfully :");
	}

	
	//This example is for onfailurederegistration
	function onderegfailure(errortable)
	{kony.print("Deregistration Failed");
	window.Alert("Message : " +errortable
	{"errorcode"}+errortable{"errormessage"},null,"info",null,,"Info");
	}
	</pre>*/

	setCallbacks = function (/**Object*/Object){}
		
		
	kony.push.	
	/**This API allows you to register the application and the mobile device for Push Notifications. This API takes a Object as a parameter. The platform invokes onsuccessfulregistration function for successful registration and onfailureregistration function for registration is a failure.
	* @param configObject {Object|Array}<ul><li>(iPhone) The Object for iPhone must contain any or all of the following: 0 - Specifies the Notification type as Badge. 1 - Specifies the Notification type as Sound. 2 - Specifies the Notification type as Alert.</li><li> (Android) The Object for Android must contain the following: senderid - Specifies the ID of the account authorized to send messages to the application.</li><li>(BlackBerry)The Object for Blackberry must contain the following:appid - Specifies the unique application ID. port - Specifies the port number on the device where the Push Notifications are received. bpasurl - Specifies an HTTP version of the PPG base URL. appicon - Specifies the icon to be displayed when there are no messages in the queue. starappicon - Specifies the icon to be displayed when there are unread messages in the queue. statusbaricon - Specifies the icon to be displayed in the status bar.</li><li>Windows Phone 7 does not require any input parameters. If needed you can specify the following <b>Optional</b> parameter in the Object: remoteimageurls (<b>Optional</b>) - Specifies an array of remote images to be displayed for a Tile message by including URl. enableraw (<b>Optional</b>) (Boolean) : The default value is true (receive raw messages). If false, raw messages can not be received. enabletile (<b>Optional</b>) (Boolean) : The default value is true (receive tile messages). If false, tile messages cannot be received. enabletoast (<b>Optional</b>) (Boolean) : The default value is true (receive toast messages). If false, toast messages cannot be received.</li> 
	* @Availability iPhone, Android, BlackBerry, Windows
	* @usage <pre>//The following code snippet uses the senderid to register for Push Notifications:
	var config = {senderid:"konyc2dm@gmail.com"};
	kony.push.register(config);
	
	//This example is for Android
	//The following code snippet uses the senderid to register for Push Notifications:
	var config = {senderid:"konyc2dm@gmail.com"};
	kony.push.register(config);
	
	//This example is for Blackberry
	var config = {appid:"1016-1no1ha3e5111ryMa71",port:20921,bpasurl:"http://pushapi.eval.blackberry.com",appicon:"icon.png",starappicon:"starappicon.png",statusbaricon:"statusicon.png"}
	kony.push.register(config);
	

	//This example is for iPhone
	//The following code snippet uses the notification types to register
	for Push Notifications:
	var config={0,1,2};
	kony.push.register(config);

	//This example is for WindowsPhone

	var config={-remoteimageurls:{"http://www.thisisfanzoo.com/blog/samples/logo2.png","http://www.yahoo.com/samples/logo3.png"},enableraw:true,enabletile:false,enabletoast:false};
	kony.push.register(config);
	</pre>*/

		register = function (/**Object*/configObject){}
		
		
	kony.push.		
	/**This API allows an application on a device to deregister from Push Notifications. On successful deregistration, the platform invokes the onsuccessfulderegistration function and on deregistration failure, the platform invokes the onfailurederegistration function.
	* @param Object Is an empty Object. <b>Mandatory</b>
	* @Availability iPhone Android BlackBerry Windows
	* @usage <pre>var myhash = new Hash();
		kony.push.deRegister(myhash);</pre>*/

	deRegister = function (emptyJSObject){}
		
		
	kony.push.		
	/**This API fetches the number of unread push notification messages that are stored on the device database.
	* @returns {Number} Returns the number of messages.
	* @Availability Available only on BlackBerry
	* @usage <pre>var count = kony.push.getMessageCount();
		kony.print("Message Count : "+count);
		//prints the number of unread messages</pre>*/

	getMessageCount = function (){}
		
		
	kony.push.		//push.getMessages()	
	/**Gets the unread notification messages from the device database. Once this function is called, the device database is cleared and the message count is reset to zero.
	* @returns {Object} Returns an object that has all the messages.
	* @Availability All only on BlackBerry
	* @usage <pre>var messages = kony.push.getMessages();
//returns an object that contains unread messages</pre>*/

	getMessages = function (){}
	
	//Camera API added on 13th Sep 2013
		
	kony.camera.
	/**This API enables you to delete rawbytes for the image. If you use this API, the captured image is deleted from the disk or in-memory.
	* @param rawBytes {Object} Specifies the rawbytes of the image (captured from the camera) you want to release when the camera widget accessMode property is set as: CAMERA_IMAGE_ACCESS_MODE_PUBLIC or CAMERA_IMAGE_ACCESS_MODE_PRIVATE or CAMERA_IMAGE_ACCESS_MODE_INMEMORY <b>Mandatory</b>
	* @returns {null} None
	* @Availability Available on iPhone, iPad, Android, Android Tablet, and Windows.
	* @usage <pre>//To delete the rawbytes captured by the camera widget cam1 in form Frm1, enter the following: 
	var imagetodel = frm1.cam1.rawBytes 
	kony.camera.releaseRawBytes(imagetodel)
	or
	kony.camera.releaseRawBytes(frm1.cam1.rawBytes)</pre>*/

	releaseRawBytes = function (/**Object*/rawBytes){}		
	
	
	
	kony.crypto.			
	/**This API allows you to create a key for cryptography using the specified algorithm. The key created using this API is used for encrypting clear text and decrypting the encrypted data.
	* @param algo {String} Scheme using which the key is to be created. Possible values are: securerandom - uses a secure random number as the scheme to generate an unique key. random - uses a random number as the scheme to generate an unique key. passphrase - for this scheme, you need to pass the exact passphrase using which the key needs to be generated. The passphrase scheme always produces the same key for the same passphrase text. <b>Mandatory</b>
	* @param keystrength {Number} Is number of bits that indicate the key strength. For the aes subalgo - possible values are 128, 192, 256. For the tripledes subalgo - possible values are 192. <b>Mandatory</b>
	* @param propertiesTable {Object} passphrasetext {Array of Strings}- the exact passphrase using which the key needs to be generated if the scheme is passphrase. passphrasetext is a string of array that contains strings(//repeated text with same meaning). For subalgo aes, it contains a single string (passphrasetext = {"inputstring1"}), whereas for tripledes subalgo, it contains three strings (passphrasetext = {"inputstring1","inputstring2","inputstring3"}). passphrasehashlogo - hashing algorithm to be applied for the passphrase text. (applicable only on iPhone).Possible values for the hash algorithm are: o md2,md4, and md5 for key strength of 128 and sha2 for key strength of 256 <b>Mandatory</b> 
	* @returns userdata {Object} The key that is created using the specified algorithm.
	* @Availability All Platforms
	* @usage <pre>var myEncryptionKey = kony.crypto.newKey("random",128,{subalgo="aes"});</pre>*/

		newKey = function (/**String*/algo, /**Number*/keystrength, /**Object*/propertiesTable){}
		
		kony.crypto.
		/**This API provides the ability to encrypt the input text with the specified key and algorithm. The rawbytes of the encrypted text are returned.
	* @param algo {String} Algorithm using the input string that needs to be encrypted. <b>Mandatory</b> Possible values are: 1. aes 2. tripledes 3. rsa
	* @param generatedkey {userdata Object} The key to be used for encryption. <b>Mandatory</b> Note: This API accepts only the key generated using the kony.crypto.newKey API.
	* @param inputstring {String} - Data which needs to be encrypted. <b>Mandatory</b>
	* @param propertiesTable {Object} - This Object contains the following key-value pairs: padding - a string that denotes the padding that needs to be applied. mode - a string that denotes the encryption mode. initializationvector - a string that denotes the IV to be used. Mandatory
	* @returns {Object} � userdata The rawbytes for the encrypted version of the input text.
	* @Availability All Platforms
	* @usage <pre>var algo="aes";
		=>var aeskey=
		kony.crypto.
		newKey("
		passphrase",128,{passphrasetext:"inputstring1",subalgo:"aes",passphrasehashalgo:"=>var inputstr="pleaseencryptme";
		=>var
		prptobj={padding:"
		pkcs5",mode:"cbc",initializationvector:"1234567890123456"};
		=>var myEncryptedText =
		kony.crypto.encrypt(algo,aeskey,inputstr,prptobj);</pre>*/

		encrypt = function (algo, generatedkey, inputstring, propertiesTable){}
		
	
		kony.crypto.
		/**This API provides the ability to decrypt the encrypted text with the specified key and algorithm. The API returns the decrypted text.
	* @param algo {String} Algorithm using which the encrypted text needs to be decrypted. <b>Mandatory</b> Possible values are: aes and tripledes
	* @param generatedkey {userdata} The key to be used for decryption. <b>Mandatory</b> 
	* @param encryptedRawbytes {userdata} The rawbytes of the encrypted text that need to be decrypted. <b>Mandatory</b> 
	* @param propertiesTable {Object} - <b>Mandatory</b> This Object contains the following key-value pairs: padding - a string denotes the padding that needs to be applied. Block size for different algorithms is: aes - 128 bits, tripledes - 64 bits, rsa - 1024 or 2048 bits. mode - a string that denotes the encryption mode. initializationvector - a string that denotes the IV to be used.
	* @returns {String} The clear text decrypted from the encrypted rawbytes.
	* @Availability All Platforms
	* @usage <pre>var algo="aes";
		var aeskey=
		kony.crypto.
		newKey("
		passphrase",128,{passphrasetext:"inputstring1",subalgo:"aes",passphrasehashalgo:"var inputstr="encryptedtextrawbytes";
		var prptobj={padding:"pkcs5",mode:"cbc",initializationvector: "1234567890123456"};
		myClearText = kony.crypto.decrypt(algo,aeskey,inputstr,prptobj);</pre>*/

		decrypt = function (/**String*/algo, /**UserData*/generatedkey, /**UserData*/encryptedRawbytes, /**Object*/propertiesTable){}
		
		kony.crypto.
		/**This API provides the ability to extract the public key from a base64 string of encoded X509 certificate or a locally packaged X509 certificate.
	* @param algo {String} The algorithm used for the public key. Possible value is: RSA <b>Mandatory</b>
	* @param inputsource {String} This parameter indicates the name of the Input source certificate from which the key needs to retrieved. <b>Mandatory</b>
	* @param islocalresource {boolean} This flag defines how the inputsource string needs to be interpreted. <b>Mandatory</b> a. islocalresource is false - represents that the input source is base64 string of X509 certificate. b. islocalresource is true - represents that the input source is name of the local resource for the certificate. For example, public.cer.
	* @returns userdata {Object} The public key extracted from the certificate.
	* @Availability All Platforms
	* @usage <pre>var myKey = kony.crypto.retrievePublicKey("rsa","public.cer",true);</pre>*/

		retrievePublicKey = function (/**String*/algo, /**String*/inputsource, /**Boolean*/islocalresource){}
		kony.crypto.
		/**Hash value is a unique and compact numerical representation of a chunk of data. This API provides the ability to create a hash value in hexadecimal format for a given input string using the specified algorithm.
	* @param algo {String} Algorithm to be used for creating the hash value. Possible values are: sha1, sha224, sha256, sha384, sha512, md2, md4, and md5 <b>Mandatory</b> 
	* @param inputstring {String} It is Input string for which the hash value needs to be created. <b>Mandatory</b>
	* @returns {String} Hash value created using the specified algorithm for the given input string. This string is in hexadecimal format. Length of the hashValue string in bytes is as follows (for each algorithm):1. sha1 2. sha224 3. sha256 4. sha384 5. sha512 6. md2 7. md4 8. md5
	* @Availability All Platforms
	* @usage <pre>var algo="sha1";
		var inputstr="pleasecreatehash";
		var myHashValue = kony.crypto.createHash(algo,inputstr);</pre>*/

		createHash = function (/**String*/algo, /**String*/inputstring){}
		kony.crypto.
		/**This API allows you to save the generated key on the device store. If a key does not exist with the given name, the API creates a key; if a key exists with the given name, the API updates the same. The key is saved and a unique identifier is returned.
	* @param name {String} Unique name with which you want to save the key on the device store. <b>Mandatory</b>
	* @param key {Object} The key that you want to save on the device. <b>Mandatory</b>
	* @returns {String} The unique ID represents the saved key on the device store. we can access the key from the device store using this unique ID.
	* @Availability All Platforms
	* @usage <pre>myuniqueID = kony.crypto.saveKey("myKey",EncryptDecryptKey);</pre>*/

		saveKey  = function (/**String*/name, /**Object*/key){}
		kony.crypto.
		/**This API provides you the ability to read the key from the device store.
	* @param uniqueID {String} Unique ID represents the key on the device store (this is the ID returned by kony.crypto.saveKey API). <b>Mandatory</b> 
	* @returns {rawbytes} � Object This key is generated using aes, tripledes, or RSA algorithms and saved on the device store.
	* @Availability All Platforms
	* @usage <pre>var EncryptDecryptKey = kony.crypto.newKey("passphrase", 128,
		{passphrasetext={"inputstring1"}, subalgo="aes",
		passphrasehashalgo="md5"});
		myUniqueIDKey = kony.crypto.saveKey("myKey",EncryptDecryptKey);
		var myCryptoKey = kony.crypto.readKey(myUniqueIDKey);
		//myCryptoKey will hold the same key as EncryptDecryptKey</pre>*/

		readKey  = function (/**String*/uniqueID){}
		kony.crypto.
		/**You can delete the key from the device store if you are sure that you do not need that key anymore in the application.
		* @param uniqueID {String} Unique ID represents the key on the device store (this is the ID returned by kony.crypto.saveKey API). <b>Mandatory</b>
		* @Availability All Platforms
		* @usage <pre>EncryptDecryptKey = kony.crypto.newKey("passphrase", 128,
		{passphrasetext={"inputstring1"}, subalgo="aes",
		passphrasehashalgo="md5"});
		myUniqueIDKey = kony.crypto.saveKey("myKey",EncryptDecryptKey);
		kony.crypto.deleteKey(myUniqueIDKey);</pre>*/

		deleteKey = function (/**String*/uniqueID){}
		 
		
		kony.stream.
		/**This API registers the application for streaming with the OS provider of the underlying platform.
		* @param protocol {String} Specifies the underlying streaming protocol to be used. Kony currently supports only HTTP1.1 protocol. <b>Mandatory</b>
		* @param configparams {Object} Specifies an Object with key-value pairs of configuration parameters required for the underlying protocol. <b>Mandatory</b> The configuration parameters for HTTP1.1 protocol are : 1. url {String} <b>Mandatory</b> 2. cookie {Object} - Optional with key-value pairs: a. streamingid {String} b. jessessionid {String} 3. headers {Object} <b>Optional</b> 4. params {Object} <b>Optional</b>
		* @param method {String} Specifies the method. Possible values are: a. get b. post(Default value is post) For example: "post"  Mandatory
		* @param outputformat{String} Specifies the output format of the stream. <b>Mandatory</b> Currently supported values are: a. String (default) b. JSON 
		* @param callback{Function}	Specifies callback {Function} Specifies the function that needs to be executed when the streaming data is available. <b>Mandatory</b> The callback function has the following signature: callbackFunction(status, data, context)
		* @returns {String} Stream identifier for this registration. This identifier is to be used during deregistration. Null incase there is any input error.
		* @Availability All Platforms except Desktop Web
		* @usage <pre>Example1:
		function myCallbackFunction(status, data, context)
		{//execute the logic here}
		var cookieParams = { streamingid: "12218181agdgdhjhjd",	jessessionid: "198181819919agagah1t1g1 };
		var configParams = { url: "http//www.mobilestreaming.kony.com", cookie: cookieParams, headers:{authmode:basic},arams:{quote="goog"}, method="post"};
		var streamObj = kony.stream.registerDataStream("http1.1", configParams, "string", myCallbackFunction);
		//all the parameters are passed (<b>Mandatory</b> and <b>Optional</b>) and the output parameter is 'string'	print(streamObj{"streamID"});

		Example2
		function myCallbackFunction(status, data, context)
		{//execute the logic here}
		var configParams = { url: "http//www.mobilestreaming.kony.com", method: "post" };
		var streamObj = kony.stream.registerDataStream("http1.1", configParams, "json", myCallbackFunction);
		//only mandatory parameters are passed and the output parameter is	json
		print(streamObj{"streamID"});</pre>*/

		registerDataStream = function (/**String*/protocol, /**Object*/configparams, /**String*/outputformat, /**Function*/callback){}
		
		kony.stream.
		/**This API allows you to deregister the application that was registered earlier with the Streaming Server.
		* @param streamingidentifier{String} Streaming identifier returned during registration.
		* @Availability All Platforms except Desktop Web
		* @usage <pre>Example 1
		var status = kony.stream.deregisterDataStream("1309352259757");
		//deregisters the data stream with the specified identifier on	BlackBerry platform 
		print(status);
		Example 2
		var status = kony.stream.deregisterDataStream("1");
		//deregisters the data stream with the specified identifier on	Windows Phone
		print(status);</pre>*/

		deregisterDataStream = function (/**String*/streamingidentifier){}
	kony.stream.			
	/**This API specifies the callback function that needs to be executed for a registered data stream.
	* @param streamingid {String} Specifies the unique ID that identifies the stream. <b>Mandatory</b>
	* @param callbackfunction {Function} Specifies the callback function that needs to be executed. <b>Mandatory</b>
	* @Availability All Platforms except Desktop Web
	* @usage <pre>function myCallbackFunction1(status, data, context)
		{//execute the logic here}
		var streamTab = kony.stream.setCallback(�1�, myCallbackFunction1);
		print(streamTab{"status"});</pre>*/

		setCallback = function (/**String*/streamingid, /**Function*/callbackfunction){}
				
				
				//Application Event APIs
	kony.application.			
	/**This API specifies if the application must timeout after a defined period of inactivity (time difference between the current device time and the last time you clicked on any user interface component) and also specifies the action after the timeout interval.
	* @param timeoutValue {number} The timeout value in minutes. <b>Mandatory</b>
	* @param callback {Function} The function that must be executed after the timeout has occurred. The callback function has the logic to display the current form.<b>Mandatory</b>	
	* @Availability All Platforms
	* @usage <pre>function registerForIdleTimeout()
		{
		kony.application.registerForIdleTimeout(1, test);
		}</pre>*/

		registerForIdleTimeout = function (/**Number*/timeoutValue, /**Function*/callback){}
		
		kony.application.			
	/**This API specifies if the application must have a layout from "left to right" or "right to left".
	* @param layoutDirection {number} Specifies the layout direction for the content and the widgets of an application. <b>Mandatory</b>
	* @Availability Available on Windows 8
	* @usage <pre>//If an application supports English and Arabic languages, app developer can invoke below snippet anywhere 
in appservice/preappinit/postappinit.


function setApplicationLayoutBasedOnLocale()
{
If(kony.i18n.getCurrentLocale() == �en_US�)
{
kony.application.setApplicationLayout(constants.APPLICATION_LAYOUT_LEFT2RIGHT); 
}else
{ 
kony.application.setApplicationLayout(constants.APPLICATION_LAYOUT_RIGHT2LEFT);
}
}</pre>*/

		setApplicationLayout = function (/**Number*/layoutDirection){}
		
	kony.application.			
	/**This API specifies that the application must not timeout after a defined period of inactivity (time difference between the current device time and the last time you clicked on any user interface component). This API unregisters the application from idletimeout.
	* @Availability All Platforms
	* @usage <pre>function unregisterForIdleTimeout()
		{
		kony.application.unregisterForIdleTimeout();
		alert("====unRegister======");
		}</pre>*/

	unregisterForIdleTimeout = function (){}
	
	
		kony.application.			
	/**This API sets the bookmark state to the URL. This API accepts the formID and a json structure of key value pairs which will be added to the URL of the page.
	* @param formID {String} Identifier of the form to be bookmarked. <b>Mandatory</b>
	* @param state {Object} A JSON object comprising key value pairs. The key value pairs are user defined. You cannot specify this as a nested structure. i.e the value part cannot be another JSON object. <b>Mandatory</b>
	* @Availability SPA and Desktop Web
	* @usage <pre>var state = {Bookmark : "about", text : "About"};
kony.application.setBMState ("form1", state)
</pre>*/

	setBMState = function (/**String*/formID,/**Object*/state){}
	
		kony.application.			
	/**This API resets the state associated with the URL of a form. It removes all the parameters attached to the form URL.
	* @param formID {String} Identifier of the form for which the parameters of the URL have to be removed. <b>Mandatory</b>
	* @Availability SPA and Desktop Web
	* @usage <pre>kony.application.resetBMState ("form1")
</pre>*/

	resetBMState = function (/**String*/formID){}
	
	
			kony.application.			
	/**This API retrieves the list of parameters attached to a URL using the above add, set APIs.
	* @param formID {String} Identifier of the form for which the parameters of the URL have to be fetched. <b>Mandatory</b>
	* @Availability SPA and Desktop Web
	* @usage <pre>kony.application.getBMState("form1")
</pre>*/

	getBMState = function (/**String*/formID){}
		
	
			kony.application.			
	/**This API adds a specified key and value to the parameter list of the URL of the form.
	* @param formID {String} Identifier of the form to be bookmarked. <b>Mandatory</b>
	* @param key {String} A JSON object comprising key value pairs. The key value pairs are user defined. You cannot specify this as a nested structure. i.e the value part cannot be another JSON object. <b>Mandatory</b>
	* @param value {String} Value string representing the RHS of the key-value combination. The value cannot be a nested structure.
	* @Availability SPA and Desktop Web
	* @usage <pre>kony.application.addBMState ("form1", "About", "page2")
</pre>*/

	addBMState = function (/**String*/formID,/**String*/key,/**String*/value){}
	
	
				kony.application.			
	/**This API removes a specified key from the parameter list of the URL of the form.
	* @param formID {String} Identifier of the form for which the parameters of the URL have to be removed. <b>Mandatory</b>
	* @param key {String} A JSON object comprising key value pairs. The key value pairs are user defined. You cannot specify this as a nested structure. i.e the value part cannot be another JSON object. <b>Mandatory</b>
	* @Availability SPA and Desktop Web
	* @usage <pre>kony.application.removeBMState ("form1", "About")
</pre>*/

	removeBMState = function (/**String*/formID,/**String*/key){}
	
	kony.application.			
	/**This API enables you to create a Charm settings menu for an application.
	* @param id {String} Identifier of the Charm setting menu created.<b>Mandatory</b>
	* @param menuSettings {Object} The menuSettings hash table comprises the following key-value pairs:id: ID of the Charm menu item.text: Name of the menu item.<b>Mandatory</b>	
	* @Availability Windows 8
	* @usage <pre>function callbackMenuItem1(id, text, sitemcallback)
{
     //typically popup.show() should be called here
     kony.print(id)
     alert(id);
}

var settingsMenuItem1 = {id : "about", text : "About", onClick : callbackMenuItem1};
var settingsMenuItem2 = {id : "help", text : "Help", onClick : callbackMenuItem1];
var settingsMenu = [settingsMenuItem1, settingsMenuItem2];
kony.application.createSettingsMenu("mysettingsmenu", settingsMenu);</pre>*/

	createSettingsMenu = function (/**String*/id,/**Object*/menuSettings){}
	
	kony.application.			
	/**This method uses the unique identifier which represents the Charm settings menu and sets it as current settings menu. There can be only one current settings menu that can be set any time. Calling this method multiple times, replaces the current Charm settings menu.
	* @param id {String} Identifier of the Charm setting menu to be set.<b>Mandatory</b>
	* @Availability Windows 8
	* @usage <pre>kony.application.setCurrentSettingsMenu ("myMenu")</pre>*/

	setCurrentSettingsMenu = function (/**String*/id){}
	
	kony.application.			
	/**This method returns the unique identifier of the current  menu that is set through getCurrentSettingsMenu.
	* @Availability Windows 8
	* @usage <pre>kony.application.getCurrentSettingsMenu ();

//Alert the Current Charm Settings menu
alert("Current charm menu id is:: "+currCharmMenuId);</pre>*/

	getCurrentSettingsMenu = function (){}
	
		kony.application.			
	/**This API enables you to add a menu item at a given index in the Charm settings menu.
	* @param id {String} Identifier of the Charm setting menu created.<b>Mandatory</b>
	* @param index {Number} The index at which the menu item must be added. The index value lies between 0 and n-1. If the index is beyond the current length of the Charm menu items then the item is added to the end.
	* @param menuSettings {Object} The menuSettings hash table comprises the following key-value pairs:id: ID of the Charm menu item.text: Name of the menu item.onClick: onclick event to be executed for the menu item.<b>Mandatory</b>
	* @Availability Windows 8
	* @usage <pre>//The below function is the callback function for onClickClosure event of app menu item with id "appmenuitemid3".
function onClickClosure3()
{
    //proceed with the logic
}

var settingsMenuItem1 = {id : "about", text : "About", onClick : onClickClosure3};

//Adding the above app menu item at the index 3.
kony.application.addSettingsMenuItemAt("accountMenu", 3,  settingsMenuItem1);
</pre>*/

	addSettingsMenuItemAt = function (/**String*/id,/**Number*/index,/**Object*/menuSettings){}
	
	kony.application.			
	/**This API enables you to removes the specified App Menu item based on the index.
	* @param id {String} Identifier of the Charm setting menu created.<b>Mandatory</b>
	* @param index {Number} The index at which the menu item must be added. The index value lies between 0 and n-1. If the index is beyond the current length of the Charm menu items then the item is added to the end.
	* @Availability Windows 8
	* @usage <pre>//Removing a menu item from the index 3.
kony.application.removeSettingsMenuItemAt("charmmenu", 3);

</pre>*/

	removeSettingsMenuItemAt = function (/**String*/id,/**Number*/index){}
	
	kony.application.			
	/**You can design a user interface to be displayed to the end user when you zoom out of an application. This API enables you to set a form  to be shown to the user when a zoom out gesture is performed. This API is introduced to support the Semantic Zoom feature introduced with Windows 8.
	* @param formid {String} Specifies the id of the form to be displayed when the user zooms out of the application.<b>Mandatory</b>
	* @Availability Windows 8
	* @usage <pre>//Zooming out of a an application and displaying a form with an id myForm1 on zoomout

function zoomout()
{
    kony.application.setZoomedOutView(myForm1);
}
</pre>*/

	setZoomedOutView = function (/**Object*/formid){}
	
	
	kony.application.			
	/**This API enables you to disable a zoomed out view set for an application using the previous API.
	* @Availability Windows 8
	* @usage <pre>//Disabling zoomout on an application

function zoomout()
{
    kony.application.disableZoomedOutView();
}
</pre>*/

	disableZoomedOutView = function (){}
	
	
			kony.props.			
	/**This API is used to access parameters from an external properties file.
	* @param group{null} Current value is null for JavaScript and nil for Lua, this parameter will be used and enhanced in the future.<b>Mandatory</b>	
	* @param key{String} The key for which you want to access the value.
	* @returns The value that matches the given key. null or nil is returned if there is no value matching the given input key in the properties file
	* @Availability SPA and Mobile Web
	* @usage <pre>frmhome.label103982946332169.text=kony.props.getProperty(null,"key1");
</pre>*/

	getProperty = function (/**null*/group,/**String*/key){}
	
	
	kony.application.
	/**This API enables you to zoom in on an application programmatically. If the application is already zoomed in, this API has no effect.
	* @Availability Windows 8
	* @usage <pre>//Enabling zoomin on an application

function zoomIn()
{
    kony.application.zoomIn();
}
</pre>*/

	zoomIn = function (){}	
	
	
				
	kony.application.			
	/**This API captures the callback events for various states of the application such as onactive, oninactive, onbackground, onforegorund, onappterminate, onkeyboardchange, onpowersourcechange, and onnetworkchange.
	* @param callbacks {Object} Specifies an Object with key as appstate and value as available on all platforms callback function for the corresponding appstate. <b>Mandatory</b>The different appstates are onactive, oninactive, onbackground, onforegorund, onappterminate, onkeyboardchange, onpowersourcechange, and onnetworkchange (Status, Newtork, Date). 
	* @Availability All Platforms except Desktop Web, SPA,Mobile Web, and Symbian.
	* @usage <pre>//onactive function
		function test()
		{
		alert("===============Test excuted=======");
		}
		//oninactive function
		function test1()
		{
		alert("===============Test1 excuted=======");
		}
		//onbackground function
		function test2()
		{
		alert("===============Test2 excuted=======");
		}
		//onforeground function
		function test3()
		{
		alert("===============Test3 excuted=======");
		}
		//onappterminate function
		function test4()
		{
		alert("===============Test4 excuted=======");
		}
		//setcallbackfunction
		function setCallBacks()
		{
		alert("===============setApplicationCallbacks excuted=======");
		var callbacksObj = {onactive: test, oninactive:	test1, onbackground:test2, onforeground:test3, onappterminate:test4};
		kony.application.setApplicationCallbacks(callbacksObj);</pre>*/

	setApplicationCallbacks = function (/**Object*/callbacks){}
		
kony.application.		
/**This API is used to invoke all initialization events such as preappinit, postappinit, init, appservice, showstartupform etc.
	* @param callbacks{Object} Is an object which comprises of the following parameters such as preappinit, postappinit, init, appservice, and showstartupform.<b>Mandatory</b>
	* @Availability All Platforms
	* @usage <pre>//onactive function
		function test()
		{
		alert("===============Test excuted=======");
		}
		//oninactive function
		function test1()
		{
		alert("===============Test1 excuted=======");
		}
		//onbackground function
		function test2()
		{
		alert("===============Test2 excuted=======");
		}
		//onforeground function
		function test3()
		{
		alert("===============Test3 excuted=======");
		}
		//onappterminate function
		function test4()
		{
		alert("===============Test4 excuted=======");
		}
		//setAppInitialization function
		function setAppInitializationEvents()
		{
		kony.application.setApplicationInitializationEvents({init:test,
		preappinit:test1, postappinit:test2, appservice:test3,
		showstartupform:test4});
		alert("===============setAppInitializationEvents excuted=======");</pre>*/

	setApplicationInitializationEvents = function (/**Object*/callbacks){}
		
	
		
		/**This API provides you the ability to convert rawbytes (returned by the camera or the encryption API) to a base64 encoded string.
		* @param rawbytes{String|Number|Object|Array|Boolean} The rawbytes that you want to convert to an encoded base64 string. These rawbytes can be those that are returned from a camera or the encryption API. <b>Mandatory</b>
		* @returns {String|null}	The encoded base64 string that was converted from the provided rawbytes. This converted encoded base64 string can be displayed on the screen to the user whenever required as this string is readable.null is returned if the rawbytes cannot be converted to base64 string or the provided input is not of type rawbytes.
		* @Availability All Platforms
		* @usage <pre>var myVal = 2000;
kony.convertToBase64(myVal)</pre>*/

		kony.convertToBase64 = function (rawbytes){}	
		
		/**This API provides you the ability to read rawbytes from a base 64 encoded string.
		* @param base64String{String} The base64 encoded string from which you want to read the rawbytes.<b>Mandatory</b>
		* @returns {String|Number|Boolean|Array|Object|null} The datatype of the rawbytes varies per platform. In JavaScript, there is no specific type for rawbytes and every platform represent the rawbytes in a unique way.
		* @Availability All Platforms
		* @usage <pre>var base64 ="MIICKTCCAZKgAwIBAgIESrI6bzANBgkqhkiG9w0BAQUFADBZMQswCQYDVQQGEwJp
bjELMAkGA1UECBMCYXAxDDAKBgNVBAcTA2h5ZDENMAsGA1UEChMEa29ueTENMAsGA1UECxMEa29ue
TERMA8GA1UEAxMIcGF0dGFiaGkwHhcNMDkwOTE3MTMzMjMxWhcNMDkxMjE2MTMzMjMxWjBZMQswCQ
YDVQQGEwJpbjELMAkGA1UECBMCYXAxDDAKBgNVBAcTA2h5ZDENMAsGA1UEChMEa29ueTENMAsGA1U
ECxMEa29ueTERMA8GA1UEAxMIcGF0dGFiaGkwgZ8wDQYJKoZIhvcNAQEBBQADgY0AMIGJAoGBAIGP
dqCQCtFgsy1sM494o1F07aN+UXgsilTuKsNRExOb03RGrg2WpAI8PqMXD1XzGZAg+qC9iQexpWHUj
XgCYCbYrETvB3wNAToOrRE6mhZ0iaJij/0tLZACocLiTnvmzZU1B/xowvlioD3zsEs5N5n0U0fIsv
W/22MZ6WtZuAZTAgMBAAEwDQYJKoZIhvcNAQEFBQADgYEAXfOB1Mhx2R9ameeZz0hvCzYYSGcWsWN
ZaM7lMdBHFPzASYcVrmLj7JlLpuMm679A2p2JwXBsfetmhKse1ixqVeWdbe/FUfESU+8Krdvkcknv
ZaDqXYFxQAaVjTwWOn+zcDHf7LjjDohgDsMOJWXHkVQj2jooXqiktrBrpccm864=";
kony.convertToBase64(myVal)
var rawBytes = kony.convertToRawBytes(base64);</pre>*/

		kony.convertToRawBytes = function (base64String){}
		
		
		/**This API uses the handle to the error object and returns the actual error object.
		* @param error{Object|Handle} The input parameters of this API is either the Original Error object or a handle received in try/catch block.<b>Mandatory</b>
		* @returns {Object}	Returns the JS error object.
		* @Availability All Platforms
		* @usage <pre>try

{

�.

}

catch ( e )

{

var err = kony.getError(e);

if (err instanceof KonyError)

alert(�A Kony error�);

else (err instanceof EvalError)

alert(�A JS Eval Eror�);

}</pre>*/

		kony.getError = function (/**Object*/error){}
		
		
		/**This API receives any number of arguments, and prints their values to stdout, using the tostring function to convert them to strings. print is not intended for formatted output, but only as a quick way to show a value, typically for debugging. For formatted output, use string.format.
		* @param myString{string|Object|Number|Array} Specifies the string to be printed <b>Mandatory</b>
		* @Availability All Platforms
		* @usage <pre>kony.print ("This is a test message.");</pre>*/

		kony.print = function (/**Object*/myString){}			
		
		kony.application.
		/**This API terminates the application.
		* @Availability All Platforms
		* @usage <pre>function exit()
{
   try{
         kony.application.exit();
      }
   catch(Error)
      {
         alert("Exception While getting exiting the application  : "+Error);
      }
}</pre>*/

		exit = function (){}
		
		
	kony.application.	
	/**This API allows you to display a loading screen (following a certain color schema) to the user while another action is in progress. The loading screen can be defined in such a way it can either block the UI or does not block the UI. Typically, the loading screen is a semi-transparent screen over-laid on the current form.
	* @param skin{String} The skin to be applied to the loading screen. All the skin attributes supported by different platforms are applicable. This is a reference to an existing skin. If it is nil, the native platform skin is applied. <b>Mandatory</b>
	* @param text{String} The text to be displayed when displaying the loading screen. For example, "Searching flights...". If it is nil, no text is displayed. <b>Mandatory</b>
	* @param position{String} Indicates the position of the loading screen, whether it should occupy the entire screen or just the center of the screen. The possible values for position are :constants.LOADING_SCREEN_POSITION_FULL_SCREEN (default),  constants.LOADING_SCREEN_POSITION_ONLY_CENTER. <b>Mandatory</b>
	* @param isBlocked{Boolean} Indicates if the UI should be blocked. <b>Mandatory</b>
	* @param showProgressIndicator{Boolean} Is an integer constant which can have any one of the following values: APPLICATION_MODE_NATIVE, APPLICATION_MODE_HYBRID, APPLICATION_MODE_WRAPPER <b>Mandatory</b>
	* @param properties{Object} Indicates the platform specific properties to be applied to the loading screen. <b>Mandatory</b>
	* @Availability iPad/iPhone, Android, BlackBerry, Windows Phone, 
	* @usage <pre>kony.application.showLoadingScreen("loadskin","LoadingScreen",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, false,true,null);</pre>*/

		showLoadingScreen = function (/**String*/skin, /**String*/text, /**String*/position, /**Boolean*/isBlocked, /**Boolean*/showProgressIndicator, /**Object*/properties){}
		
	kony.application.	
	/**This API provides you the ability to dismiss the loading screen displayed earlier. If there is no loading screen, this API has no affect.
	
	* @Availability iPad/iPhone, Android, BlackBerry, Windows Phone.
	* @usage <pre>kony.application.dismissLoadingScreen();</pre>*/

		dismissLoadingScreen = function (){}

		
		/**This API retrieves the data type of the specified input. The possible return values are:string,number,boolean,function,userdata,null
		* @param variable{String|Number|Boolean|function|userdata|null} Specifies the value for which you want to retrieve the data type. <b>Mandatory</b>
		* @returns {String}	Returns a String that determines the data type of the specified input.
		* @Availability All platforms
		* @usage <pre>var myVal = 2000;
var varType = kony.type(myVal);//Returns a number
var varType1 = type("hello");
var varType = kony.type(myVal);//Returns a string</pre>*/

		kony.type = function (/**String|Number|Boolean|function|userdata|null*/ variable){}
		
		
		kony.application.
		/**This method allows you to set a gesture recognizer for a specified gesture for all Forms. You can set a Gesture recognizer only for a Form, a Box, and a Scroll Box. 
		* @param gestureType{Number} Indicates the type of gesture that needs to be detected on the widget. <b>Mandatory</b>
		  @param setupParams{Object} Specifies an object that has the configuration parameters needed to setup a gesture recognizer. <b>Mandatory</b>
		  @param gestureHandler{Function} Specifies the function that needs to be executed when a gesture is recognized. 	<b>Mandatory</b>
		  @usage <pre>//Defining a function
function formGesture(widgetID,gestureInfo)
{
	var y = kony.type(gestureInfo); //expected value of y = table
	var z = kony.type(gestureInfo.gesturesetUpParams); //expected values of z = table
	var a = gestureInfo.gestureType;
	var b = gestureInfo.gesturesetUpParams;
	var c = gestureInfo.gesturePosition;
	var d = gestureInfo.gestureX;
	var e = gestureInfo.gestureY;
	var f = gestureInfo.widgetWidth;
	var g = gestureInfo.widgetHeight;
	kony.print("*******************************************");
	if(kony.os.toNumber(gestureInfo.gestureType) == 2)
	{
		h = gestureInfo.swipeDirection;
		kony.print("swipe direction is: "+h);
	}
	else{
		h = ""
	}
	if(kony.os.toNumber(a) == 1)
	{
		b1 = "fingers: "+gestureInfo.gesturesetUpParams.fingers;
		b2 = "taps: "+gestureInfo.gesturesetUpParams.taps;
		kony.print(""+b1+""+b2);
	}	
	else if(kony.os.toNumber(a) == 2)
	{
		b1 = "fingers :"+gestureInfo.gesturesetUpParams.fingers;
		b2 = "";
		kony.print(""+b1+""+b2);
	}	
	else if(kony.os.toNumber(a) == 3)
	{
		b1 = "pressduration:"+gestureInfo.gesturesetUpParams.pressDuration;
		b2 = "";
		kony.print(""+b1+""+b2);
	}

	kony.print("widget id is: "+widgetID[id]); //will print the widgetID. To print widgetID use widgetID.id 
	kony.print("type of gestureInfo is: "+y);
	kony.print("type of gesturesetUpParams is: "+z);
	kony.print("gestureType is: "+a); //gestureType=1 or 2 or 3
	kony.print("gesturesetUpParams is: "+b.fingers); //gesturesetUpParams = {fingers =1, taps =1} or {fingers =1, taps =2} or {fingers =1} or {pressDuration = 1}
	kony.print("gesturePosition is: "+c); //gesturePosition=1 or 2 or 3 or .....9
	kony.print("gestureX is: "+d); //ex: gestureX=30
	kony.print("gestureY is: "+e); //ex: gestureY=100
	kony.print("widgetWidth is: "+f); //ex: widgetWidth=320
	kony.print("widgetHeight is: "+g); //ex: widgetHeight=28
	//gesturePosition, gestureX, gestureY, widgetWidth, widgetHeight params are not applicable in android
	kony.print("*******************************************");
}
function callbackSingleTapGesture()
{
	var x ={fingers:1,taps:1};
	try{
		kony.application.setGestureRecognizerForAllForms(1, x, formGesture);
	}
	catch(err){
		alert(typeof err);
		alert("error in function callbackSingleTapGesture: "+err.message);
	}
}</pre>*/

		setGestureRecognizerForAllForms = function (/**Number*/gestureType, /**Object*/setupParams, /**Function*/gestureHandler){}

		kony.application.
		/**This method allows you to  remove a specified gesture recognizer for all Forms. You can remove the gesture recognizer from a Form, an HBox, a VBox, and a Scroll Box. 
		* @param uniqueidentifier{Number} Reference to the gesture. The reference to the gesture is returned by the setGestureRecognizerForAllForms.<b>Mandatory</b>
		* @usage <pre>function callbackClearLongPressGesture()
{
	try{
		kony.application.removeGestureRecognizerForAllForms(3);
	}
	catch(err){
		alert(typeof err);
		alert("error in function callbackClearLongPressGesture: "+err.message);
	}
}</pre>*/

		removeGestureRecognizerForAllForms = function (/**Number*/uniqueidentifier){}

		kony.accelerometer.
		/**This API allows you to retrieve the current device acceleration. The specified callback functions are invoked asynchronously and this API returns the value immediately without waiting for actual retrieval of the device acceleration data. This is an asynchronous API.
		* @param onSuccessCallback{Function} Specifies the callback function that must be executed when retrieving the current device acceleration is successful.<b>Mandatory</b>
		* @param onFailureCallback{Function} Specifies the callback function that must be executed when the API call fails in retrieving the current device location. This callback function does not have any input parameters. You can define the logic that must be executed in this function.<b>Mandatory</b>
		* @Availability iPhone, Android/Android Tablet, BlackBerry, Mango, iPad.
		* @Usage <pre> //retrieve current acceleration request 

// onsuccesscallback

// This method accepts an 'accelerometerdata' object, which contains the current device acceleration values

function onsuccesscallback(accelerometerdata)
{

	kony.print("X: " + accelerometerdata.x +"Y: " + accelerometerdata.y +"Z: " + accelerometerdata.z +"Timestamp: " + accelerometerdata.timestamp );

}

// onfailurecallback 

function onfailurecallback(error)
{
	kony.print("code: " + error.code +"message: " + error.message);

}

function retrieveCurrentAcceleration()
{
	// Current acceleration request. 

	kony.accelerometer.retrieveCurrentAcceleration (onsuccesscallback, onfailurecallback);

}</pre>
		*/
		
		retrieveCurrentAcceleration = function (/**Function*/onSuccessCallback, /**Function*/onFailureCallback){}
		
		kony.accelerometer.
		/**This API allows you to start monitoring the device acceleration or motion. When there is a change in the device acceleration values when the device moves, the callback functions are invoked. The callback functions are invoked asynchronously and this API returns immediately without waiting for the device initialization for accelerometer. This is an asynchronous API.
		* @param onSuccessCallback{Function} Specifies the callback function that must be executed when monitoring the device acceleration is successful.<b>Mandatory</b>
		* @param onFailureCallback{Function} Specifies the callback function that must be executed when the API call fails. This callback function does not have any input parameters.<b>Mandatory</b>
		* @param configData{Object} Specifies the configuration parameters for the monitoring operation.<b>Mandatory</b>
		* @Availability iPhone, Android/Android Tablet, BlackBerry, Mango, iPad.
		* @Usage <pre>//Start monitoring request 

// onsuccesscallback 

// This method accepts an 'accelerometerdata' object, which containsthe current device acceleration values 


function onsuccesscallback(accelerometerdata)
{
	kony.print("X: " +accelerometerdata.x +"Y: " +accelerometerdata.y +"Z: " +accelerometerdata.z +"Timestamp: " +accelerometerdata.timestamp );

}


//onfailure callback 

function onfailurecallback(error)
{
	kony.print("code: " + error.code +"message: " + error.message);

}



function startMonitoringAcceleration()
{
	// Start monitor acceleration request.

	kony.accelerometer.startMonitoringAcceleration(onsuccesscallback, onfailurecallback,{frequency:10, onchange:false});

}
		
		</pre>*/

		startMonitoringAcceleration = function (/**Function*/onSuccessCallback, /**Function*/onFailureCallback, /**Object*/configData){}
		
		
		kony.accelerometer.
		/**This API allows you to stop the device monitoring activity if it is active. You can start monitoring the device motion using accelerometer.startmonitoringacceleration API.
		* @Availability iPhone, Android/Android Tablet, BlackBerry, Mango, iPad
		* @Usage <pre>function stopMonitoringAcceleration()
{
	//stop the device monitoring activity if it is active
	kony.accelerometer.stopMonitoringAcceleration();
}
		</pre>
		*/

		stopMonitoringAcceleration = function (){}
		
		
		
kony.accelerometer.
		/**This API allows you to register for the acceleration events such as 'shake'. This event is triggered only at the end of the shake event indicating that device motion has occurred. The precision with which a shake event can be recognized may vary per platform and depends on the device capability. This is an asynchronous API.
		* @param events{Object} Specifies a table with the type of events. <b>Mandatory</b>
		* @Availability iPhone, Android/Android Tablet, BlackBerry, Mango, iPad.
		* @Usage <pre>//Defining shake function 

function onshake()
{
	kony.print("Shake called");

}

function registerAccelerationEvents()
{
	//register acceleration events 

	//Defining the event object 

	var events = {shake:onshake};


	//Registering Shake event 

	kony.accelerometer.registerAccelerationEvents(events);

} </pre>
		*/

		registerAccelerationEvents = function (/**Object*/events){}
		
		kony.accelerometer.
		/**This API allows you to de-register for the specified acceleration event types. This is an asynchronous API.
		* @param eventTypes{Array} Specifies a table that lists the type of events for which you want to unregister.<b>Mandatory</b>
		* @Availability iPhone, Android/Android Tablet, BlackBerry, Mango, iPad.
		* @Usage <pre>function unregisteraccelerationevents()
{
	//stop acceleration request 

	kony.accelerometer.unregisteraccelerationevents({"shake"});

}</pre>
		*/

		unregisterAccelerationEvents = function (/**Array*/eventTypes){}

		
		
		kony.application.
		/**This API allows you to read the configurations associated with a specified key. This is an asynchronous call.
		* @param key{String} Specifies the key for which you want to read the settings. The settings are read from the application settings file that is bundled along with the application binary.
		* @param onsuccesscallback{Function} Specifies the callback function that must be executed when a key-value is read successfully.<b>Mandatory</b>
		* @param onfailurecallback{Function} Specifies the callback function that must be executed when there is an error in fetching the app setting. This callback function receives the error code and the error message.<b>Mandatory</b>
		* @returns This API asynchronously returns the settings for a key by invoking onsuccess callback and does not return any values directly.
		* @Availability iPhone*/

		settings.read = function (/**String*/key, /**Function*/onsuccesscallback, /**Function*/onfailureback){}
		
kony.application.
		/**This API allows you to write the values to the specified key with the given value. New keys cannot be introduced with this API. When the value for the specified key is modified using this API, the changes should reflect in the application settings at the device level. This is an asynchronous call.
		* @param key{String} Specifies the unique key. The specified key must be existing. You cannot introduce a new key.<b>Mandatory</b>
		* @param value{String} Specifies the value to be set for a key. The existing value would be replaced with the new value. Value can be Boolean, String, double, or an object. An object is returned only when "Display option" is multi-select.<b>Mandatory</b>
		* @param onsuccesscallback{Function} Specifies the callback function that must be executed when the new value is updated against the specified key.<b>Mandatory</b>
		* @param onfailurecallback{Function} Specifies the callback function that must be executed when there is an error in updating the configuration. This callback function receives the error code and the error message.<b>Mandatory</b>
		* @returns This API asynchronously returns the values by invoking on success and does not return any values directly.<b>Mandatory</b>
		* @Availability iPhone*/
		
		settings.write = function (/**String*/key, /**String*/value, /**Function*/onsuccesscallback, /**Function*/onfailureback){}
		
kony.application.
		/**This API allows you to set a badge value to an application icon on the mobile desktop at the top-right corner of the application icon. If you pass an empty String as a parameter, the badge applied on the application icon is removed.
		* @param badgeValue{String} Specifies the value of the badge. The value that you specify in the badgeValue parameter appears within the badge. Do not pass any other value except a numerical value. For example, to set a badge value for an appicon, specify the value as "2" instead of 2. If the length of the badge value is greater than 1 the badge is a rounded rectangle. For example, if you specify the value of the badge as 88, the Number appears in a rounded rectangular badge. If the length of the badge value is 1, the badge is always a circle.<b>Mandatory</b>
		* @Availability iPhone, iPad
		* @Usage <pre> function setApplicationBadgeValue()
{
	//Set the ApplicationBadgeValue to the  application icon on the mobile desktop at the top-right corner of the application icon.
	kony.application.setApplicationBadgeValue("234567");
}
		</pre>*/
	
		setApplicationBadgeValue = function (/**String*/badgeValue){}
		
kony.application.
		/**This API allows you to read the badge value (if any) attached to the given application icon. If the applications icon does not have any badge value attached to it, this API returns an empty String.
		* @returns badgeValue{String} Returns the badge value applied to the application icon If the application icon has no badge value attached to it, it returns null.
		* @Availability iPhone, iPad
		* @Usage <pre>function getApplicationBadgeValue()
{
	//Get the ApplicationBadgeValue from the  application icon on the mobile desktop at the top-right corner of the application icon.
	kony.application.getApplicationBadgeValue();
}</pre>
		
		*/
		
		getApplicationBadgeValue = function (){}
		
kony.application.
		/**This API allows you to set a badge value to the specified app menu item on the top-right corner of the app menu item. If you pass an empty String as the parameter, the badge value of the app menu item is cleared.
		* @param appmenuID{String} If you are setting the badge for an app menu item that was created dynamically, use the same ID that was used to create the app menu item. If you are setting the badge for an app menu item that was created from the IDE, use the ID available in the generated script file.<b>Mandatory</b>
		* @param menuItemId{String} Id of the app menu item to which the badge value to be set.<b>Mandatory</b>
		* @param badgeValue{String} Specifies the value of the badge. The value you specify in the badge value appears within the badge. If the length of the badge value is greater than 1 the badge is a rounded rectangle. For example, if you specify the value of the badge as 88, the Number appears in a rounded rectangular badge. If the length of the badge value is 1, the badge is always a circle. The maximum Number of characters that can be specified in a badge value is 9. If the badge value id beyond 9 only the first 9 characters are displayed.<b>Mandatory</b>
		* @Availability iPhone, iPad
		* @Usage <pre>function setAppMenuBadgeValue()
{
	//Set the AppMenuBadgeValue for the menu item with id ::"appmenuitemid3" ,here the badge value is "3"
	kony.application.setAppMenuBadgeValue("accountMenu","appmenuitemid3","3");
}</pre>
		*/

		setAppMenuBadgeValue = function (/**String*/appmenuID, /**String*/menuItemId, /**String*/badgeValue){}
		
kony.application.
		/**This API enables you to read the badge value (if any) attached to the specified app menu item. If the specified app menu item does not have any badge value attached to it, the API returns an empty String.
		* @param appmenuID{String} If you are setting the badge for an app menu item that was created dynamically, use the same ID that was used to create the app menu item. If you are setting the badge for an app menu item that was created from the IDE, use the ID available in the generated script file.<b>Mandatory</b>
		* @param menuItemID{String} Identifier of the app menu item from which the badge value is to be read.<b>Mandatory</b>
		* @returns badgeValue{String} Returns the badge value applied to the specified app menu. If the specified app menu has no badge value attached to it, it returns an empty String.
		* @Availability iPhone, iPad
		* @Usage <pre>function getAppMenuBadgeValue()
{
	//Get the AppMenuBadgeValue for the menu item with id ::"appmenuitemid3"
	kony.application.getAppMenuBadgeValue("accountMenu","appmenuitemid3");
}</pre>
		*/

		getAppMenuBadgeValue = function (/**String*/appmenuID, /**String*/menuItemId, /**String*/badgeValue){}
		

		//This API explicitly invalidates a session on Mobile Web.
		//* @param formName{Object} Specifies the form to which the application must navigate after the session is invalidated.<b>Optional</b>
		//* @param params{Function} Specifies a table of parameters that you want to pass to the new session.<b>Optional</b>
		//* @returns This API navigates to the specified form or remains on the same form if there is no form specified.
		//* @Availability Mobile Web
		//* @Usage <pre>
//The following function is for invalidateSession API
//function invalidateSession()
//{
	//invalidating the session
	//kony.application.invalidateSession();

//}</pre>*/

		//application.invalidateSession = function (/**Object*/formName, /**Function*/params){}
		

		//**This API retrieves the session parameters of the previous session in the application life cycle.
		//* @returns listOfParams{Array} Returns a table of the previous session parameters.
		//* @Availability Mobile Web
		//* @Usage <pre>//The following function is for getPreviousSessionParams API
//function getPreviousSessionParams()
//{
	//Collecting all the params in to an object
	//var mySessionParams = kony.application.getPreviousSessionParams();
	//kony.print("mySessionParams are"+mySessionParams);
//} </pre>
		//*/

		//application.getPreviousSessionParams = function (){}
		

		
kony.application.
		/**This API returns a handle to the current form. The form handle is useful when you are sending analytics to the analytic engine.
		* @returns currentForm{Object}
		* @Availability Available on all platforms.	
		* @Usage <pre>function getCurrentForm()
{
	//Get the current form
	var currentForm = kony.application.getCurrentForm();
	//Alert the current form
	alert("currentForm is::"+currentForm);
}</pre>*/

		getCurrentForm = function (){}
		
kony.application.
		/**This API returns a handle to the previous form.
		* @returns previousForm{Object} API returns the previous form handle.
		* @Availability Available on all platforms.
		* @Usage <pre>function getPreviousForm()
{
	//Get the Previous form
	var previousForm = kony.application.getPreviousForm();
	//Alert the Previous form
	alert("previousForm is::"+previousForm);
}</pre>*/

		getPreviousForm = function (/**Object*/previousForm){}
		
kony.application.
		/**This API opens the web page at the specified URL in the native browser of the mobile device.
		* @param URL {String} Specifies the URL that points to the external web page.<b>Mandatory</b>
        * @Availability All RichClient platforms   
		* @Usage  <pre>//The following function is for openMediaURL API
function openURL()
{
	//Accessing an external web page : http://www.google.com
	
	kony.application.openURL("http://www.google.com")
}</pre>*/
		

		openURL = function (/**String*/URL){}
		
		kony.application.
		/**This API allows you to get the application mode.
		* @returns {Number} Application Mode set for an application<b>Mandatory</b>
        * @Availability All RichClient platforms   
		* @Usage  <pre>kony.application.getApplicationMode();</pre>*/
		

		getApplicationMode = function (){}
		
				kony.application.
		/**This API allows you to set the application mode.
		* @param IntegerConstant{Number} Application Mode set for an application<b>Mandatory</b>
        * @Availability All RichClient platforms   
		* @Usage  <pre>kony.application.setApplicationMode(APPLICATION_MODE_NATIVE)</pre>*/
		

		setApplicationMode = function (/**String*/IntegerConstant){}
		
		
		kony.application.
		/**This API launches the native media player and starts playing the media (audio or video) at the specified URL. The media server provides the appropriate media content depending upon the device (for example, Blackberry, iPhone, etc).
		* @param URL {String} Specifies the URL that points to the external web page.<b>Mandatory</b>
		* @Usage <pre>function openMediaURL()
{
	//Launching the native media player and starts playing the media (audio or video) at the URL:"http://www.youtube.com/watch?v=_kKJ_Dmpa7o"
	kony.application.openMediaURL("http://www.youtube.com/watch?v=_kKJ_Dmpa7o");
} </pre>*/

		openMediaURL = function (/**String*/URL){}
		
		kony.application.
		/**This API enables you to set uniform behavior across platforms.
		* @param JSObjectbehaviors{Object} Is a Object with the following key-value pairs:

    invokePreshowPostShowOnDeviceBack[Boolean]: Specifies if the preshow or postshow events are triggered when the user presses the back button.
    isPopupModel [Boolean]: Specifies if the Popup is modal (requires interaction before it can return to the parent application). The value set as the property for a popup takes precedence over the value set dynamically.
    retainSpaceOnHide[Boolean]: Specifies whether the space allocated for a widget is retained when the widget is made invisible. Applicable on widgets placed in a percentage container.

    restoreformstateondeviceback[Boolean]: Specifies whether the default behavior of form app menu state is retained when the user presses the back button.
<b>Mandatory</b>
		* @Availability Available on all platforms.	
		* @Usage <pre> 
		function setApplicationBehaviors()<br/>
{
	//Controlling the behaviours by setting invokePreshowPostShowEventsOnDeviceBack as true,isPopupModel as true,and retainSpaceOnHide as true.
	
	kony.application.setApplicationBehaviors({invokePreshowPostShowEventsOnDeviceBack:true,isPopupModel:true, retainSpaceOnHide:true});</pre>
	
}

*/
		setApplicationBehaviors = function (/**Object*/JSObjectbehaviors){}
		
		kony.application.
				/**This API enables you to set the data for an application tile. If the user chooses to pin the application tile, the data set is visible. For more information on pinning a tile, refer http://www.microsoft.com/windowsphone/en-us/howto/wp7/start/move-or-delete-tile-on-start.aspx.
		* @param frontTileData{object} Specifies the data to be displayed at the front of a tile.<b>Mandatory</b>
		* @param backTileData{object} Specifies the data to be displayed at the back of a tile.<b>Optional</b>
		* @Availability Available on Mango
		* @Usage <pre> 
		frontTileData:{"Front Tile Title", "..../test.png", 20}
backTileData:{"Front Tile Title", "..../test.png", "This is the back tile content"}
kony.application.setAppTile( frontTileData, backTileData );</pre>

*/
		setAppTile = function (/**object*/frontTileData, /**object*/backTileData){}
		kony.application.
		/**This API enables you to create or update data for a secondary tile. Unlike the application tiles, secondary tiles are automatically pinned to the Start Screen of the device.
		* @param id{string} Unique identifier of the secondary tile.<b>Mandatory</b
		* @param frontTileData{object} Specifies the data to be displayed at the front of a tile.<b>Mandatory</b>
		* @param backTileData{object} Specifies the data to be displayed at the back of a tile.<b>Optional</b>
		* @Availability Available on Mango
		* @Usage <pre> 
		frontTileData:{"Front Tile Title", "..../test.png", 20}
backTileData:{"Front Tile Title", "..../test.png", "This is the back tile content"}
kony.application.setAppTile( frontTileData, backTileData );</pre>

*/
		setSecondaryTile = function (/**string*/id,/**object*/frontTileData, /**object*/backTileData){}
		
		kony.application.
		/**This API enables you to remove and unpin a specified secondary tile which was created earlier.
		* @param id{string} Unique identifier of the secondary tile.<b>Mandatory</b
		* @Availability Available on Mango
		* @Usage <pre> 
		frontTileData:{"Front Tile Title", "..../test.png", 20}
backTileData:{"Front Tile Title", "..../test.png", "This is the back tile content"}
kony.application.setAppTile( frontTileData, backTileData );</pre>

*/
		removeSecondaryTile = function (/**string*/id){}
		
		kony.application.
		/**This API allows you to create App Menu dynamically through code.
	* @param appmenuid{String}.Id of the menu item <b>Mandatory</b>
	* @param appmenu{Array}<b>Mandatory</b>
	* @param skinid{String}The normal skin to be set for the menu.<b>optional</b>
	* @param onFocusSkinId{String}The focus skin to be set for the menu.<b>optional</b>
    * @Available All Platforms
	* @access Write
	* @usage <pre>
	//The below two functions are callback functions for onClickClosure events for menu items.</br>
	function onClickClosure1()</br>
	{</br>
	//proceed with the logic</br>
	}</br>
	function onClickClosure2()</br>
	{</br>
		//proceed with the logic</br>
	}</br>
	//Defining appmenu items (Atleast one item should be defined)</br>
	var appMenuItem1 = ["appmenuitemid1","Accounts", "icon1.png", onClickClosure1];</br>
	var appMenuItem2 = ["appmenuitemid2", "Payments", "icon2.png", onClickClosure2];</br>

	//defining appMenu parameter with the above menu items</br>
	var appMenu = [appMenuItem1, appMenuItem2];</br>

	//Creating App menu </br>
	kony.application.createAppMenu("myappmenu", appMenu, "skn1", "fcskn1");</pre>
     */
	createAppMenu = function(/**String*/appmenuid,/**Array*/appmenu,/**String*/skinid, /**String*/onFocusSkinId){}

kony.application.
/**This API allows you to uses the unique identifier which represents the App Menu and sets it as current app menu.
    * @param appmenuid{String}.Id of the menu item <b>Mandatory</b>
	* @Available All Platforms
	* @access Write
	* @usage <pre>
	//After creating appMenu with the unique identifier "myappmenu", set it as current app menu.</br>
    var kony.application.setCurrentAppMenu("myappmenu");</pre>
	 */
	setCurrentAppMenu = function (/**String*/appmenuid){}



kony.application.	
/** This API returns the unique identifier of the current app menu that is set through setCurrentAppMenu. 
    * @Available All Platforms
	* @access Write
	* @usage <pre>	
	//Get the Current app menu</br>
	var currAppMenuId = kony.application.getCurrentAppMenu();</br>
	
	//Alert the Current app menu</br>
	alert("Current app menu id is:: "+currAppMenuId);</pre>*/
	getCurrentAppMenu = function() {}

kony.application.
/**This API takes id (which is set using createAppMenu) instead of index and sets the focus on the menu item of the current app menu.	
	* @param appMenuItemId{String}.Id of the appmenu item <b>Mandatory</b>
	* @Available All Platforms
	* @access Write
	* @usage <pre>
	//Set the menu item with the identifier "appmenuitemid2" as the focused menu item.</br>
    kony.application.setAppMenuFocusByID("appmenuitemid2");</pre>*/
	setAppMenuFocusByID = function (/**String*/appMenuItemId){}
	
	
	
kony.application.
/**This API adds an App Menu item at the given index.
   * @param appmenuid{String} Appmenu Identifier<b>Mandatory</b>
   * @param index{Number}.The index at which the menu item must be added. The index value lies between 0 and n-1.<b>Mandatory</b>
   * @param appmenu{Array}<b>Mandatory</b>
   * @Available All Platforms
   * @access Write
   * @usage <pre>
   //The below function is the callback function for onClickClosure event of app menu item with id "appmenuitemid3".</br>
	function onClickClosure3()</br>
	{</br>
	//proceed with the logic</br>
	}</br>

   //Defining app menu item</br>
   var appMenuItem3 = ["appmenuitemid3","Rewards","reward.png",onClickClosure3];</br>
   
   //Adding the above app menu item at the index 3.</br>
   kony.application.addAppMenuItemAt("accountMenu", 3,  appMenuItem3);</pre>*/
   addAppMenuItemAt = function (/**String*/appmenuid, /**Number*/index, /**Array*/appmenu){}
   
   
kony.application.   
/**This API removes the specified App Menu item.
   * @param appmenuid{String} Appmenu Identifier<b>Mandatory</b>
   * @param index{Number}The index at which the menu item must be removed.<b>Mandatory</b>
   * @Available All Platforms
   * @access Write
   * @usage <pre>
    var appMenuId = "accountMenu";</br>
    //Removing the app menu item at index 2.kony.application.removeAppMenuItemAt(appMenuId,2);</pre>
     */
    removeAppMenuItemAt = function(/**String*/appmenuid, /**Number*/index) {}
	
	
	kony.hybrid.
	/**This API provides the ability to send data from the browser widget execution context to native context.
   * @param Function{String} Specifies the function that needs to be executed<b>Mandatory</b>
   * @param paramsTable{Object} Specifies the list of parameters that the user defined function expects as input parameters.
   * @Available iPhone and Android
   * @access Write
   * @usage <pre>
    //Defining executeFunctionInNativeContext
function executeFunctionInNativeContext()
{
	kony.hybrid.executeFunctionInNativeContext("JSFunThree",
{"KonySolutions",false,{"abc","xyz"}});

}</pre>
     */
	executeFunctionInNativeContext=function(/**String*/Function, /**Object*/paramsTable){}
	
	kony.hybrid.
		/**This API provides the ability to send data from the native execution context to browser widget context.
   * @param Function{String} Specifies the function that needs to be executed<b>Mandatory</b>
   * @param paramsTable{Object} Specifies the list of parameters that the user defined function expects as input parameters.
   * @Available iPhone and Android
   * @access Write
   * @usage <pre>
    function executeFunctionInSPAContext()
{

	kony.hybrid.executeFunctionInSPAContext("JSFunThree",["KonyLabs",2012,false]);</pre>
}
     */
	executeFunctionInSPAContext=function(/**String*/Function, /**Object*/paramsTable){}

kony.hybrid.
		/**This API is used to exchange data with the server-side context.
   * @param Function{String} Specifies the function that needs to be executed<b>Mandatory</b>
   * @param paramsTable{Object} Specifies the list of parameters that the user defined function expects as input parameters.
   * @Available iPhone and Android
   * @access Write
   * @usage <pre>
    function executeFunctionInTCContext()
{

	kony.hybrid.executeFunctionInTCContext("JSFunThree",{"KonySolutions",
false,{"abc","xyz"}});
}   </pre> */
	executeFunctionInTCContext=function(/**String*/Function, /**Object*/paramsTable){}	
	
	kony.contact.
		/**This API adds a contact to the address book of the mobile device
   * @param contactDetails{Object} A table with contact details listed out as key value pairs<b>Mandatory</b>
   * @returns {Object|null} Table containing the information related to the newly created contact is returned.
   * @Available Mobile Web, Windows 8, and Win Mobile 6x do not support this API.
   * @access Write
   */
	add=function(/**Object*/contactDetails){}	
	
		kony.contact.
		/**This API parses through the address book of the mobile device and looks for  contacts that match the input string.
   * @param firstName{String} A string that represents the firstname of the contact.<b>Mandatory</b>
   * @param needDetails{Boolean} When the needdetails parameter is not passed, the default value set is true. When needdetails is set to true, this API returns the complete details of the contact. If needdetails is false, contact.find returns a list of contacts with a new field called displayname in the existing contact structure. All other fields of contact structure are not populated. displayname is a combination of firstname and lastname. displayname is a platform specific Android property. <b>Optional</b>
   * @returns {Object|null} Table containing the information related a contact is returned.
   * @Available Mobile Web, Windows 8, and Win Mobile 6x do not support this API.
   * @access Write
   */
	find=function(/**String*/firstName, /**Boolean*/needDetails){}	

		kony.contact.
		/**This API deletes the contact (s) that was returned by the contact.find  operation.
   * @param ReferenceTable{Object} Specifies the reference table returned by the contact.find API<b>Mandatory</b>
   * @returns {Object|null} Table of the contacts that is deleted
   * @Available Mobile Web, Windows 8, and Win Mobile 6x do not support this API.
   * @access Write
   */
	remove=function(/**Object*/ReferenceTable){}	
	
		kony.contact.
		/**This API displays the details of a given contact and returns a new instance of the contact structure.
   * @param ReferenceTable{Object} Specifies the reference table returned by the contact.find API<b>Mandatory</b>
   * @returns {Object|null} Table of the contacts retrieved. The reference table retrieved contains a field photorawbytes. This is a new property in the existing contact structure that should be populated with raw bytes, just like camera or gallery raw bytes.
   * @Available Mobile Web, Windows 8, and Win Mobile 6x do not support this API.
   * @access Write
   */
	details=function(/**Object*/ReferenceTable){}
	
		kony.application.
/**@Deprecated This method shows only the App Menu items that you specify and hides the rest.
	* @param Listofmenuids{Object}  Specifies the index number 0<= index <=n-1; where n is the number of App Menu items. <b>Mandatory</b>
	* @Availability All Platforms
	*/

		showAppMenuItems= function (/**Object*/Listofmenuids){}	
		
	kony.application.
/**@Deprecated This method hides the App Menu items that you specify and shows the rest.
	* @param Listofmenuids{Object}  Specifies the index number 0<= index <=n-1; where n is the number of App Menu items. <b>Mandatory</b>
	* @Availability All Platforms
	*/

		hideAppMenuItems= function (/**Object*/Listofmenuids){}	
		
kony.application.
/**@Deprecated Specifies the App Menu item on which the focus must be set.
	* @param Index{Number}  Specifies the index number 0<= index <=n-1; where n is the number of App Menu items.<b>Mandatory</b>
	* @Availability All Platforms
	*/

		setAppMenuFocusIndex= function (/**Number*/Index){}
		
kony.application.
/**@Deprecated This API allows you to set header at the application level with the given input values. 
	* @param headerlist{Array}  Specifies the list of attributes for the header.<b>Mandatory</b>
	* @Availability All Platforms
	*/

		setAppHeaders= function (/**Array*/headerlist){}
		
kony.application.
/**@Deprecated This API allows you to set footer at the application level with the given input values. 
	* @param footerlist{Array}  Specifies the list of attributes for the footer.<b>Mandatory</b>
	* @Availability All Platforms
	*/

		setAppFooters= function (/**Array*/footerlist){}
		
kony.application.
		/**Used to customize the default paddings applied for Textbox. Generally default padding is appended to padding applied through layout configurations of the widget. Setting the value to 'false' will ensure no default padding is applied to textbox widgets. 
   * @param bool {Boolean} Indicates if default padding should be set.<b>Mandatory</b>
   * @returns {null} 
   * @Available iPhone and iPad
   * @Usage <pre>
    kony.application.setDefaultTextboxPadding(false);
   </pre> */
	setDefaultTextboxPadding=function(/**Boolean*/bool){}	
	
kony.application.
		/**Used to set the alignment of the checkBox selection image. 
   * @param SelectionImageAlignment {Object} Indicates if default padding should be set. Possible values for SelectionImageAlignment: constants.CHECKBOX_SELECTION_IMAGE_ALIGNMENT_LEFT, constants.CHECKBOX_SELECTION_IMAGE_ALIGNMENT_RIGHT<b>Mandatory</b>
   * @returns {null} 
   * @Available iPhone and iPad
   * @Usage <pre>
    kony.application. setCheckBoxSelectionImageAlignment(constants.CHECKBOX_SELECTION_IMAGE_ALIGNMENT_RIGHT);
   </pre> */
	setCheckBoxSelectionImageAlignment=function(/**Object*/SelectionImageAlignment){}	
	
kony.application.
		/**Used to set the ImageWidget width to MIN of available width or image width in absence of reference width. If ImageWidget is smaller thant the available width it will be alligned using the widget alignment rules. 
   * @param bool {Boolean} Indicates if default padding should be set.<b>Mandatory</b>
   * @returns {null} 
   * @Available iPhone and iPad
   * @Usage <pre>
    kony.application. setRespectImageSizeForImageWidgetAlignment (true);
   </pre> */
	setRespectImageSizeForImageWidgetAlignment=function(/**Boolean*/bool){}	
	
	
//Here are the children of the kony namespace are assigned

kony.ui = new ui();
//kony.string = new string();
//kony.location= new location();
//kony.timer= new timer();
//kony.os= new os();
//kony.net=new net();
//kony.i18n=new i18n();
//kony.phone= new phone();
//kony.store=new store();
//kony.db=new db();
//kony.theme=new theme();
//kony.application=new application();
//kony.stream=new stream();
//kony.push=new push();
//kony.crypto=new crypto();
//kony.ds=new ds();
//kony.accelerometer=new accelerometer();
//kony.hybrid=new hybrid();
//kony.camera=new camera();
