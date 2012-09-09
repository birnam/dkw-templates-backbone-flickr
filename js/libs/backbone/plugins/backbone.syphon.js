  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>backbone.syphon/lib/backbone.syphon.js at master · derickbailey/backbone.syphon</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon-precomposed" sizes="57x57" href="apple-touch-icon-114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="apple-touch-icon-114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="apple-touch-icon-144.png" />
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="apple-touch-icon-144.png" />

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.png" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="n0E9biHxt2OL7MG+/OafQfK0eYP9Ilejd7lb183Lksk=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-fb2e759b043637d634af849678419057854ecab8.css" media="screen" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-1341f0560955f0e5a5388506fa38d50a59749d10.css" media="screen" rel="stylesheet" type="text/css" />
    


    <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-07f0d6bdd2eb4ae0b813b21ba4a781a6d7863588.js" type="text/javascript"></script>
    
    <script defer="defer" src="https://a248.e.akamai.net/assets.github.com/assets/github-32c72354ce7a40e5599c958236115fae33eb513e.js" type="text/javascript"></script>
    
    

      <link rel='permalink' href='/derickbailey/backbone.syphon/blob/1abe1a7ed836cc867e7176a0219cf25f0cd26067/lib/backbone.syphon.js'>
    <meta property="og:title" content="backbone.syphon"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/derickbailey/backbone.syphon"/>
    <meta property="og:image" content="https://a248.e.akamai.net/assets.github.com/images/gravatars/gravatar-user-420.png?1345673561"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="backbone.syphon - Serialize a Backbone.View in to a JavaScript object"/>

    <meta name="description" content="backbone.syphon - Serialize a Backbone.View in to a JavaScript object" />

  <link href="https://github.com/derickbailey/backbone.syphon/commits/master.atom" rel="alternate" title="Recent Commits to backbone.syphon:master" type="application/atom+xml" />

  </head>


  <body class="logged_in page-blob macintosh vis-public env-production ">
    <div id="wrapper">

    
    

      <div id="header" class="true clearfix">
        <div class="container clearfix">
          <a class="site-logo" href="https://github.com/">
            <img alt="GitHub" class="github-logo-4x" height="30" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7@4x.png?1338945075" />
            <img alt="GitHub" class="github-logo-4x-hover" height="30" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7@4x-hover.png?1338945075" />
          </a>

              <a href="/notifications" class="notification-indicator tooltipped downwards" title="You have no unread notifications">
                <span class="mail-status all-read"></span>
              </a>

              
    <div class="topsearch ">
        <form accept-charset="UTF-8" action="/search" id="top_search_form" method="get">
  <a href="/search" class="advanced-search tooltipped downwards" title="Advanced Search"><span class="mini-icon mini-icon-advanced-search"></span></a>
  <div class="search placeholder-field js-placeholder-field">
    <input type="text" class="search my_repos_autocompleter" id="global-search-field" name="q" results="5" spellcheck="false" autocomplete="off" data-autocomplete="my-repos-autocomplete" placeholder="Search&hellip;" data-hotkey="s" />
    <div id="my-repos-autocomplete" class="autocomplete-results">
      <ul class="js-navigation-container"></ul>
    </div>
    <input type="submit" value="Search" class="button">
    <span class="mini-icon mini-icon-search-input"></span>
  </div>
  <input type="hidden" name="type" value="Everything" />
  <input type="hidden" name="repo" value="" />
  <input type="hidden" name="langOverride" value="" />
  <input type="hidden" name="start_value" value="1" />
</form>

      <ul class="top-nav">
          <li class="explore"><a href="https://github.com/explore">Explore</a></li>
          <li><a href="https://gist.github.com">Gist</a></li>
          <li><a href="/blog">Blog</a></li>
        <li><a href="http://help.github.com">Help</a></li>
      </ul>
    </div>


            


  <div id="userbox">
    <div id="user">
      <a href="https://github.com/birnam"><img height="20" src="https://secure.gravatar.com/avatar/a3ac80d516a148d88e8372826697338c?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
      <a href="https://github.com/birnam" class="name">birnam</a>
    </div>
    <ul id="user-links">
      <li>
        <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a New Repo"><span class="mini-icon mini-icon-create"></span></a>
      </li>
      <li>
        <a href="/settings/profile" id="account_settings"
          class="tooltipped downwards"
          title="Account Settings ">
          <span class="mini-icon mini-icon-account-settings"></span>
        </a>
      </li>
      <li>
          <a href="/logout" data-method="post" id="logout" class="tooltipped downwards" title="Sign Out">
            <span class="mini-icon mini-icon-logout"></span>
          </a>
      </li>
    </ul>
  </div>



          
        </div>
      </div>

      

      

            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="container hentry">
        
        <div class="pagehead repohead instapaper_ignore readability-menu">
        <div class="title-actions-bar">
          


              <ul class="pagehead-actions">

          <li class="subscription">
              <form accept-charset="UTF-8" action="/notifications/subscribe" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="n0E9biHxt2OL7MG+/OafQfK0eYP9Ilejd7lb183Lksk=" /></div>
  <input id="repository_id" name="repository_id" type="hidden" value="4339563" />
  <div class="context-menu-container js-menu-container js-context-menu">
    <span class="minibutton switcher bigger js-menu-target">
      <span class="js-context-button">
          <span class="mini-icon mini-icon-watching"></span> Watch
      </span>
    </span>

    <div class="context-pane js-menu-content">
      <a href="javascript:;" class="close js-menu-close"><span class="mini-icon mini-icon-remove-close"></span></a>
      <div class="context-title">Notification status</div>

      <div class="context-body pane-selector">
        <ul class="js-navigation-container">
          <li class="selector-item js-navigation-item js-navigation-target selected">
            <span class="mini-icon mini-icon-confirm"></span>
            <label>
              <input checked="checked" id="do_included" name="do" type="radio" value="included" />
              <h4>Not watching</h4>
              <p>You will only receive notifications when you participate or are mentioned.</p>
            </label>
            <span class="context-button-text js-context-button-text">
              <span class="mini-icon mini-icon-watching"></span>
              Watch
            </span>
          </li>
          <li class="selector-item js-navigation-item js-navigation-target ">
            <span class="mini-icon mini-icon-confirm"></span>
            <label>
              <input id="do_subscribed" name="do" type="radio" value="subscribed" />
              <h4>Watching</h4>
              <p>You will receive all notifications for this repository.</p>
            </label>
            <span class="context-button-text js-context-button-text">
              <span class="mini-icon mini-icon-unwatch"></span>
              Unwatch
            </span>
          </li>
          <li class="selector-item js-navigation-item js-navigation-target ">
            <span class="mini-icon mini-icon-confirm"></span>
            <label>
              <input id="do_ignore" name="do" type="radio" value="ignore" />
              <h4>Ignored</h4>
              <p>You will not receive notifications for this repository.</p>
            </label>
            <span class="context-button-text js-context-button-text">
              <span class="mini-icon mini-icon-mute"></span>
              Stop ignoring
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</form>
          </li>

          <li class="js-toggler-container js-social-container starring-container ">
            <a href="/derickbailey/backbone.syphon/unstar" class="minibutton js-toggler-target starred" data-remote="true" data-method="post" rel="nofollow">
              <span class="mini-icon mini-icon-star"></span>
                Unstar
            </a><a href="/derickbailey/backbone.syphon/star" class="minibutton js-toggler-target unstarred" data-remote="true" data-method="post" rel="nofollow">
              <span class="mini-icon mini-icon-star"></span>
                Star
            </a><a class="social-count js-social-count" href="/derickbailey/backbone.syphon/stargazers">71</a>
          </li>

              <li>
                <a href="/derickbailey/backbone.syphon/fork_select" class="minibutton btn-fork js-toggler-target lighter" rel="facebox nofollow">Fork</a><a href="/derickbailey/backbone.syphon/network" class="social-count">14</a>
              </li>


    </ul>

          <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
            <span class="repo-label"><span>public</span></span>
            <span class="mega-icon mega-icon-public-repo"></span>
            <span class="author vcard">
<a href="/derickbailey" class="url fn" itemprop="url" rel="author">              <span itemprop="title">derickbailey</span>
              </a></span> /
            <strong><a href="/derickbailey/backbone.syphon" class="js-current-repository">backbone.syphon</a></strong>
          </h1>
        </div>

          

  <ul class="tabs">
    <li><a href="/derickbailey/backbone.syphon" class="selected" highlight="repo_sourcerepo_downloadsrepo_commitsrepo_tagsrepo_branches">Code</a></li>
    <li><a href="/derickbailey/backbone.syphon/network" highlight="repo_network">Network</a></li>
    <li><a href="/derickbailey/backbone.syphon/pulls" highlight="repo_pulls">Pull Requests <span class='counter'>4</span></a></li>

      <li><a href="/derickbailey/backbone.syphon/issues" highlight="repo_issues">Issues <span class='counter'>5</span></a></li>

      <li><a href="/derickbailey/backbone.syphon/wiki" highlight="repo_wiki">Wiki</a></li>

    <li><a href="/derickbailey/backbone.syphon/graphs" highlight="repo_graphsrepo_contributors">Graphs</a></li>


  </ul>
  
<div class="frame frame-center tree-finder" style="display:none"
      data-tree-list-url="/derickbailey/backbone.syphon/tree-list/1abe1a7ed836cc867e7176a0219cf25f0cd26067"
      data-blob-url-prefix="/derickbailey/backbone.syphon/blob/1abe1a7ed836cc867e7176a0219cf25f0cd26067"
    >

  <div class="breadcrumb">
    <span class="bold"><a href="/derickbailey/backbone.syphon">backbone.syphon</a></span> /
    <input class="tree-finder-input js-navigation-enable" type="text" name="query" autocomplete="off" spellcheck="false">
  </div>

    <div class="octotip">
      <p>
        <a href="/derickbailey/backbone.syphon/dismiss-tree-finder-help" class="dismiss js-dismiss-tree-list-help" title="Hide this notice forever" rel="nofollow">Dismiss</a>
        <span class="bold">Octotip:</span> You've activated the <em>file finder</em>
        by pressing <span class="kbd">t</span> Start typing to filter the
        file list. Use <span class="kbd badmono">↑</span> and
        <span class="kbd badmono">↓</span> to navigate,
        <span class="kbd">enter</span> to view files.
      </p>
    </div>

  <table class="tree-browser" cellpadding="0" cellspacing="0">
    <tr class="js-header"><th>&nbsp;</th><th>name</th></tr>
    <tr class="js-no-results no-results" style="display: none">
      <th colspan="2">No matching files</th>
    </tr>
    <tbody class="js-results-list js-navigation-container">
    </tbody>
  </table>
</div>

<div id="jump-to-line" style="display:none">
  <h2>Jump to Line</h2>
  <form accept-charset="UTF-8">
    <input class="textfield" type="text">
    <div class="full-button">
      <button type="submit" class="classy">
        Go
      </button>
    </div>
  </form>
</div>


<div class="tabnav">

  <span class="tabnav-right">
    <ul class="tabnav-tabs">
      <li><a href="/derickbailey/backbone.syphon/tags" class="tabnav-tab" highlight="repo_tags">Tags <span class="counter ">3</span></a></li>
      <li><a href="/derickbailey/backbone.syphon/downloads" class="tabnav-tab" highlight="repo_downloads">Downloads <span class="counter blank">0</span></a></li>
    </ul>
    
  </span>

  <div class="tabnav-widget scope">

    <div class="context-menu-container js-menu-container js-context-menu">
      <a href="#"
         class="minibutton bigger switcher js-menu-target js-commitish-button btn-branch repo-tree"
         data-hotkey="w"
         data-master-branch="master"
         data-ref="master">
         <span><i>branch:</i> master</span>
      </a>

      <div class="context-pane commitish-context js-menu-content">
        <a href="javascript:;" class="close js-menu-close"><span class="mini-icon mini-icon-remove-close"></span></a>
        <div class="context-title">Switch branches/tags</div>
        <div class="context-body pane-selector commitish-selector js-navigation-container">
          <div class="filterbar">
            <input type="text" id="context-commitish-filter-field" class="js-navigation-enable" placeholder="Filter branches/tags" data-filterable />
            <ul class="tabs">
              <li><a href="#" data-filter="branches" class="selected">Branches</a></li>
              <li><a href="#" data-filter="tags">Tags</a></li>
            </ul>
          </div>

          <div class="js-filter-tab js-filter-branches" data-filterable-for="context-commitish-filter-field" data-filterable-type=substring>
            <div class="no-results js-not-filterable">Nothing to show</div>
              <div class="commitish-item branch-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/derickbailey/backbone.syphon/blob/deep-serialize/lib/backbone.syphon.js" class="js-navigation-open" data-name="deep-serialize" rel="nofollow">deep-serialize</a>
                </h4>
              </div>
              <div class="commitish-item branch-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/derickbailey/backbone.syphon/blob/dev/lib/backbone.syphon.js" class="js-navigation-open" data-name="dev" rel="nofollow">dev</a>
                </h4>
              </div>
              <div class="commitish-item branch-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/derickbailey/backbone.syphon/blob/gh-pages/lib/backbone.syphon.js" class="js-navigation-open" data-name="gh-pages" rel="nofollow">gh-pages</a>
                </h4>
              </div>
              <div class="commitish-item branch-commitish selector-item js-navigation-item js-navigation-target selected">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/derickbailey/backbone.syphon/blob/master/lib/backbone.syphon.js" class="js-navigation-open" data-name="master" rel="nofollow">master</a>
                </h4>
              </div>
          </div>

          <div class="js-filter-tab js-filter-tags" style="display:none" data-filterable-for="context-commitish-filter-field" data-filterable-type=substring>
            <div class="no-results js-not-filterable">Nothing to show</div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/derickbailey/backbone.syphon/blob/v0.3.0/lib/backbone.syphon.js" class="js-navigation-open" data-name="v0.3.0" rel="nofollow">v0.3.0</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/derickbailey/backbone.syphon/blob/v0.2.0/lib/backbone.syphon.js" class="js-navigation-open" data-name="v0.2.0" rel="nofollow">v0.2.0</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/derickbailey/backbone.syphon/blob/v0.1.1/lib/backbone.syphon.js" class="js-navigation-open" data-name="v0.1.1" rel="nofollow">v0.1.1</a>
                </h4>
              </div>
          </div>
        </div>
      </div><!-- /.commitish-context-context -->
    </div>
  </div> <!-- /.scope -->

  <ul class="tabnav-tabs">
    <li><a href="/derickbailey/backbone.syphon" class="selected tabnav-tab" highlight="repo_source">Files</a></li>
    <li><a href="/derickbailey/backbone.syphon/commits/master" class="tabnav-tab" highlight="repo_commits">Commits</a></li>
    <li><a href="/derickbailey/backbone.syphon/branches" class="tabnav-tab" highlight="repo_branches" rel="nofollow">Branches <span class="counter ">4</span></a></li>
  </ul>

</div>

  
  
  


          

        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:115f74ff613aceab443ece749eaf9e2f -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:115f74ff613aceab443ece749eaf9e2f -->

<!-- block_view_fragment_key: views10/v8/blob:v21:d88453a7ce227415c31d91fc785d8c9f -->
  <div id="slider">

    <div class="breadcrumb" data-path="lib/backbone.syphon.js/">
      <b itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/derickbailey/backbone.syphon/tree/1abe1a7ed836cc867e7176a0219cf25f0cd26067" class="js-rewrite-sha" itemprop="url"><span itemprop="title">backbone.syphon</span></a></b> / <span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/derickbailey/backbone.syphon/tree/1abe1a7ed836cc867e7176a0219cf25f0cd26067/lib" class="js-rewrite-sha" itemscope="url"><span itemprop="title">lib</span></a></span> / <strong class="final-path">backbone.syphon.js</strong> <span class="js-clippy mini-icon mini-icon-clippy " data-clipboard-text="lib/backbone.syphon.js" data-copied-hint="copied!" data-copy-hint="copy to clipboard"></span>
    </div>

      
  <div class="commit file-history-tease js-blob-contributors-content" data-path="lib/backbone.syphon.js/">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/e592bd1326b1e80188ed4c0bf26b9f75?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><a href="/derickbailey">derickbailey</a></span>
    <time class="js-relative-date" datetime="2012-06-04T17:18:45-07:00" title="2012-06-04 17:18:45">June 04, 2012</time>
    <div class="commit-title">
        <a href="/derickbailey/backbone.syphon/commit/1abe1a7ed836cc867e7176a0219cf25f0cd26067" class="message">build v0.3.0</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>2</strong> contributors</a></p>
          <a class="avatar tooltipped downwards" title="josemota" href="/derickbailey/backbone.syphon/commits/master/lib/backbone.syphon.js?author=josemota"><img height="20" src="https://secure.gravatar.com/avatar/49e9604462c50b8e958aacfc61f2e0b0?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="derickbailey" href="/derickbailey/backbone.syphon/commits/master/lib/backbone.syphon.js?author=derickbailey"><img height="20" src="https://secure.gravatar.com/avatar/e592bd1326b1e80188ed4c0bf26b9f75?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2>Users on GitHub who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/49e9604462c50b8e958aacfc61f2e0b0?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/josemota">josemota</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/e592bd1326b1e80188ed4c0bf26b9f75?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/derickbailey">derickbailey</a>
        </li>
      </ul>
    </div>
  </div>


    <div class="frames">
      <div class="frame frame-center" data-path="lib/backbone.syphon.js/" data-permalink-url="/derickbailey/backbone.syphon/blob/1abe1a7ed836cc867e7176a0219cf25f0cd26067/lib/backbone.syphon.js" data-title="backbone.syphon/lib/backbone.syphon.js at master · derickbailey/backbone.syphon · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="mini-icon mini-icon-text-file"></b></span>
                <span class="mode" title="File Mode">file</span>
                  <span>297 lines (229 sloc)</span>
                <span>8.529 kb</span>
              </div>
              <ul class="button-group actions">
                  <li>
                    <a class="grouped-button file-edit-link minibutton bigger lighter js-rewrite-sha" href="/derickbailey/backbone.syphon/edit/1abe1a7ed836cc867e7176a0219cf25f0cd26067/lib/backbone.syphon.js" data-method="post" rel="nofollow" data-hotkey="e">Edit</a>
                  </li>
                <li>
                  <a href="/derickbailey/backbone.syphon/raw/master/lib/backbone.syphon.js" class="minibutton btn-raw grouped-button bigger lighter" id="raw-url">Raw</a>
                </li>
                  <li>
                    <a href="/derickbailey/backbone.syphon/blame/master/lib/backbone.syphon.js" class="minibutton btn-blame grouped-button bigger lighter">Blame</a>
                  </li>
                <li>
                  <a href="/derickbailey/backbone.syphon/commits/master/lib/backbone.syphon.js" class="minibutton btn-history grouped-button bigger lighter" rel="nofollow">History</a>
                </li>
              </ul>
            </div>
              <div class="data type-javascript">
      <table cellpadding="0" cellspacing="0" class="lines">
        <tr>
          <td>
            <pre class="line_numbers"><span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
</pre>
          </td>
          <td width="100%">
                <div class="highlight"><pre><div class='line' id='LC1'><span class="c1">// Backbone.Syphon, v0.3.0</span></div><div class='line' id='LC2'><span class="c1">// Copyright (c)2012 Derick Bailey, Muted Solutions, LLC.</span></div><div class='line' id='LC3'><span class="c1">// Distributed under MIT license</span></div><div class='line' id='LC4'><span class="c1">// http://github.com/derickbailey/backbone.syphon</span></div><div class='line' id='LC5'><span class="nx">Backbone</span><span class="p">.</span><span class="nx">Syphon</span> <span class="o">=</span> <span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">Backbone</span><span class="p">,</span> <span class="nx">$</span><span class="p">,</span> <span class="nx">_</span><span class="p">){</span></div><div class='line' id='LC6'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">Syphon</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC7'><br/></div><div class='line' id='LC8'>&nbsp;&nbsp;<span class="c1">// Ignore Element Types</span></div><div class='line' id='LC9'>&nbsp;&nbsp;<span class="c1">// --------------------</span></div><div class='line' id='LC10'><br/></div><div class='line' id='LC11'>&nbsp;&nbsp;<span class="c1">// Tell Syphon to ignore all elements of these types. You can</span></div><div class='line' id='LC12'>&nbsp;&nbsp;<span class="c1">// push new types to ignore directly in to this array.</span></div><div class='line' id='LC13'>&nbsp;&nbsp;<span class="nx">Syphon</span><span class="p">.</span><span class="nx">ignoredTypes</span> <span class="o">=</span> <span class="p">[</span><span class="s2">&quot;button&quot;</span><span class="p">,</span> <span class="s2">&quot;submit&quot;</span><span class="p">,</span> <span class="s2">&quot;reset&quot;</span><span class="p">];</span></div><div class='line' id='LC14'><br/></div><div class='line' id='LC15'>&nbsp;&nbsp;<span class="c1">// Syphon</span></div><div class='line' id='LC16'>&nbsp;&nbsp;<span class="c1">// ------</span></div><div class='line' id='LC17'><br/></div><div class='line' id='LC18'>&nbsp;&nbsp;<span class="c1">// Get a JSON object that represents</span></div><div class='line' id='LC19'>&nbsp;&nbsp;<span class="c1">// all of the form inputs, in this view</span></div><div class='line' id='LC20'>&nbsp;&nbsp;<span class="nx">Syphon</span><span class="p">.</span><span class="nx">serialize</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">view</span><span class="p">,</span> <span class="nx">options</span><span class="p">){</span></div><div class='line' id='LC21'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">data</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC22'><br/></div><div class='line' id='LC23'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Build the configuration</span></div><div class='line' id='LC24'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">config</span> <span class="o">=</span> <span class="nx">buildConfig</span><span class="p">(</span><span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC25'><br/></div><div class='line' id='LC26'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Get all of the elements to process</span></div><div class='line' id='LC27'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">elements</span> <span class="o">=</span> <span class="nx">getInputElements</span><span class="p">(</span><span class="nx">view</span><span class="p">,</span> <span class="nx">config</span><span class="p">);</span></div><div class='line' id='LC28'><br/></div><div class='line' id='LC29'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Process all of the elements</span></div><div class='line' id='LC30'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">elements</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">el</span><span class="p">){</span></div><div class='line' id='LC31'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">$el</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">el</span><span class="p">);</span></div><div class='line' id='LC32'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">type</span> <span class="o">=</span> <span class="nx">getElementType</span><span class="p">(</span><span class="nx">$el</span><span class="p">);</span> </div><div class='line' id='LC33'><br/></div><div class='line' id='LC34'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Get the key for the input</span></div><div class='line' id='LC35'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">keyExtractor</span> <span class="o">=</span> <span class="nx">config</span><span class="p">.</span><span class="nx">keyExtractors</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="nx">type</span><span class="p">);</span></div><div class='line' id='LC36'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">key</span> <span class="o">=</span> <span class="nx">keyExtractor</span><span class="p">(</span><span class="nx">$el</span><span class="p">);</span></div><div class='line' id='LC37'><br/></div><div class='line' id='LC38'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Get the value for the input</span></div><div class='line' id='LC39'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">inputReader</span> <span class="o">=</span> <span class="nx">config</span><span class="p">.</span><span class="nx">inputReaders</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="nx">type</span><span class="p">);</span></div><div class='line' id='LC40'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">value</span> <span class="o">=</span> <span class="nx">inputReader</span><span class="p">(</span><span class="nx">$el</span><span class="p">);</span></div><div class='line' id='LC41'><br/></div><div class='line' id='LC42'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Get the key assignment validator and make sure</span></div><div class='line' id='LC43'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// it&#39;s valid before assigning the value to the key</span></div><div class='line' id='LC44'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">validKeyAssignment</span> <span class="o">=</span> <span class="nx">config</span><span class="p">.</span><span class="nx">keyAssignmentValidators</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="nx">type</span><span class="p">);</span></div><div class='line' id='LC45'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">validKeyAssignment</span><span class="p">(</span><span class="nx">$el</span><span class="p">,</span> <span class="nx">key</span><span class="p">,</span> <span class="nx">value</span><span class="p">)){</span></div><div class='line' id='LC46'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC47'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC48'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC49'><br/></div><div class='line' id='LC50'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Done; send back the results.</span></div><div class='line' id='LC51'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">data</span><span class="p">;</span></div><div class='line' id='LC52'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC53'>&nbsp;&nbsp;</div><div class='line' id='LC54'>&nbsp;&nbsp;<span class="c1">// Use the given JSON object to populate</span></div><div class='line' id='LC55'>&nbsp;&nbsp;<span class="c1">// all of the form inputs, in this view</span></div><div class='line' id='LC56'>&nbsp;&nbsp;<span class="nx">Syphon</span><span class="p">.</span><span class="nx">deserialize</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">view</span><span class="p">,</span> <span class="nx">data</span><span class="p">,</span> <span class="nx">options</span><span class="p">){</span></div><div class='line' id='LC57'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Build the configuration</span></div><div class='line' id='LC58'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">config</span> <span class="o">=</span> <span class="nx">buildConfig</span><span class="p">(</span><span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC59'><br/></div><div class='line' id='LC60'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Get all of the elements to process</span></div><div class='line' id='LC61'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">elements</span> <span class="o">=</span> <span class="nx">getInputElements</span><span class="p">(</span><span class="nx">view</span><span class="p">,</span> <span class="nx">config</span><span class="p">);</span></div><div class='line' id='LC62'><br/></div><div class='line' id='LC63'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Process all of the elements</span></div><div class='line' id='LC64'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">elements</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">el</span><span class="p">){</span></div><div class='line' id='LC65'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">$el</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">el</span><span class="p">);</span></div><div class='line' id='LC66'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">type</span> <span class="o">=</span> <span class="nx">getElementType</span><span class="p">(</span><span class="nx">$el</span><span class="p">);</span> </div><div class='line' id='LC67'><br/></div><div class='line' id='LC68'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Get the key for the input</span></div><div class='line' id='LC69'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">keyExtractor</span> <span class="o">=</span> <span class="nx">config</span><span class="p">.</span><span class="nx">keyExtractors</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="nx">type</span><span class="p">);</span></div><div class='line' id='LC70'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">key</span> <span class="o">=</span> <span class="nx">keyExtractor</span><span class="p">(</span><span class="nx">$el</span><span class="p">);</span></div><div class='line' id='LC71'><br/></div><div class='line' id='LC72'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Write value to input</span></div><div class='line' id='LC73'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">inputWriter</span> <span class="o">=</span> <span class="nx">config</span><span class="p">.</span><span class="nx">inputWriters</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="nx">type</span><span class="p">);</span></div><div class='line' id='LC74'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">inputWriter</span><span class="p">(</span><span class="nx">$el</span><span class="p">,</span> <span class="nx">data</span><span class="p">[</span><span class="nx">key</span><span class="p">]);</span></div><div class='line' id='LC75'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC76'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC77'><br/></div><div class='line' id='LC78'>&nbsp;&nbsp;<span class="c1">// Helpers</span></div><div class='line' id='LC79'>&nbsp;&nbsp;<span class="c1">// -------</span></div><div class='line' id='LC80'><br/></div><div class='line' id='LC81'>&nbsp;&nbsp;<span class="c1">// Retrieve all of the form inputs</span></div><div class='line' id='LC82'>&nbsp;&nbsp;<span class="c1">// from the view</span></div><div class='line' id='LC83'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">getInputElements</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">view</span><span class="p">,</span> <span class="nx">config</span><span class="p">){</span></div><div class='line' id='LC84'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">form</span> <span class="o">=</span> <span class="nx">view</span><span class="p">.</span><span class="nx">$el</span><span class="p">.</span><span class="nx">is</span><span class="p">(</span><span class="s2">&quot;form&quot;</span><span class="p">)</span> <span class="o">?</span> <span class="nx">view</span><span class="p">.</span><span class="nx">el</span> <span class="o">:</span> <span class="nx">view</span><span class="p">.</span><span class="nx">$</span><span class="p">(</span><span class="s2">&quot;form&quot;</span><span class="p">)[</span><span class="mi">0</span><span class="p">];</span></div><div class='line' id='LC85'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">elements</span> <span class="o">=</span> <span class="nx">form</span><span class="p">.</span><span class="nx">elements</span><span class="p">;</span></div><div class='line' id='LC86'><br/></div><div class='line' id='LC87'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">elements</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">reject</span><span class="p">(</span><span class="nx">elements</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">el</span><span class="p">){</span></div><div class='line' id='LC88'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">reject</span><span class="p">;</span></div><div class='line' id='LC89'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">type</span> <span class="o">=</span> <span class="nx">getElementType</span><span class="p">(</span><span class="nx">el</span><span class="p">);</span></div><div class='line' id='LC90'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">extractor</span> <span class="o">=</span> <span class="nx">config</span><span class="p">.</span><span class="nx">keyExtractors</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="nx">type</span><span class="p">);</span></div><div class='line' id='LC91'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">identifier</span> <span class="o">=</span> <span class="nx">extractor</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="nx">el</span><span class="p">));</span></div><div class='line' id='LC92'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC93'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">foundInIgnored</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">include</span><span class="p">(</span><span class="nx">config</span><span class="p">.</span><span class="nx">ignoredTypes</span><span class="p">,</span> <span class="nx">type</span><span class="p">);</span></div><div class='line' id='LC94'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">foundInInclude</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">include</span><span class="p">(</span><span class="nx">config</span><span class="p">.</span><span class="nx">include</span><span class="p">,</span> <span class="nx">identifier</span><span class="p">);</span></div><div class='line' id='LC95'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">foundInExclude</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">include</span><span class="p">(</span><span class="nx">config</span><span class="p">.</span><span class="nx">exclude</span><span class="p">,</span> <span class="nx">identifier</span><span class="p">);</span></div><div class='line' id='LC96'><br/></div><div class='line' id='LC97'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">foundInInclude</span><span class="p">){</span></div><div class='line' id='LC98'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">reject</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC99'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC100'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">config</span><span class="p">.</span><span class="nx">include</span><span class="p">){</span></div><div class='line' id='LC101'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">reject</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC102'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC103'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">reject</span> <span class="o">=</span> <span class="p">(</span><span class="nx">foundInExclude</span> <span class="o">||</span> <span class="nx">foundInIgnored</span><span class="p">);</span></div><div class='line' id='LC104'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC105'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC106'><br/></div><div class='line' id='LC107'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">reject</span><span class="p">;</span></div><div class='line' id='LC108'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC109'><br/></div><div class='line' id='LC110'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">elements</span><span class="p">;</span></div><div class='line' id='LC111'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC112'><br/></div><div class='line' id='LC113'>&nbsp;&nbsp;<span class="c1">// Determine what type of element this is. It</span></div><div class='line' id='LC114'>&nbsp;&nbsp;<span class="c1">// will either return the `type` attribute of</span></div><div class='line' id='LC115'>&nbsp;&nbsp;<span class="c1">// an `&lt;input&gt;` element, or the `tagName` of</span></div><div class='line' id='LC116'>&nbsp;&nbsp;<span class="c1">// the element when the element is not an `&lt;input&gt;`.</span></div><div class='line' id='LC117'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">getElementType</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">el</span><span class="p">){</span></div><div class='line' id='LC118'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">typeAttr</span><span class="p">;</span></div><div class='line' id='LC119'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">$el</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">el</span><span class="p">);</span></div><div class='line' id='LC120'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">tagName</span> <span class="o">=</span> <span class="nx">$el</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">tagName</span><span class="p">;</span></div><div class='line' id='LC121'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">type</span> <span class="o">=</span> <span class="nx">tagName</span><span class="p">;</span></div><div class='line' id='LC122'><br/></div><div class='line' id='LC123'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">tagName</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">()</span> <span class="o">===</span> <span class="s2">&quot;input&quot;</span><span class="p">){</span></div><div class='line' id='LC124'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">typeAttr</span> <span class="o">=</span> <span class="nx">$el</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s2">&quot;type&quot;</span><span class="p">);</span></div><div class='line' id='LC125'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">typeAttr</span><span class="p">){</span></div><div class='line' id='LC126'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span> <span class="o">=</span> <span class="nx">typeAttr</span><span class="p">;</span></div><div class='line' id='LC127'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC128'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span> <span class="o">=</span> <span class="s2">&quot;text&quot;</span><span class="p">;</span></div><div class='line' id='LC129'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC130'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC131'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC132'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Always return the type as lowercase</span></div><div class='line' id='LC133'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// so it can be matched to lowercase</span></div><div class='line' id='LC134'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// type registrations.</span></div><div class='line' id='LC135'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">type</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">();</span></div><div class='line' id='LC136'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC137'>&nbsp;&nbsp;</div><div class='line' id='LC138'>&nbsp;&nbsp;<span class="c1">// Build a configuration object and initialize</span></div><div class='line' id='LC139'>&nbsp;&nbsp;<span class="c1">// default values.</span></div><div class='line' id='LC140'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">buildConfig</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">){</span></div><div class='line' id='LC141'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">config</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">clone</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="o">||</span> <span class="p">{};</span></div><div class='line' id='LC142'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC143'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">config</span><span class="p">.</span><span class="nx">ignoredTypes</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">clone</span><span class="p">(</span><span class="nx">Syphon</span><span class="p">.</span><span class="nx">ignoredTypes</span><span class="p">);</span></div><div class='line' id='LC144'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">config</span><span class="p">.</span><span class="nx">inputReaders</span> <span class="o">=</span> <span class="nx">config</span><span class="p">.</span><span class="nx">inputReaders</span> <span class="o">||</span> <span class="nx">Syphon</span><span class="p">.</span><span class="nx">InputReaders</span><span class="p">;</span></div><div class='line' id='LC145'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">config</span><span class="p">.</span><span class="nx">inputWriters</span> <span class="o">=</span> <span class="nx">config</span><span class="p">.</span><span class="nx">inputWriters</span> <span class="o">||</span> <span class="nx">Syphon</span><span class="p">.</span><span class="nx">InputWriters</span><span class="p">;</span></div><div class='line' id='LC146'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">config</span><span class="p">.</span><span class="nx">keyExtractors</span> <span class="o">=</span> <span class="nx">config</span><span class="p">.</span><span class="nx">keyExtractors</span> <span class="o">||</span> <span class="nx">Syphon</span><span class="p">.</span><span class="nx">KeyExtractors</span><span class="p">;</span></div><div class='line' id='LC147'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">config</span><span class="p">.</span><span class="nx">keyAssignmentValidators</span> <span class="o">=</span> <span class="nx">config</span><span class="p">.</span><span class="nx">keyAssignmentValidators</span> <span class="o">||</span> <span class="nx">Syphon</span><span class="p">.</span><span class="nx">KeyAssignmentValidators</span><span class="p">;</span></div><div class='line' id='LC148'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC149'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">config</span><span class="p">;</span></div><div class='line' id='LC150'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC151'><br/></div><div class='line' id='LC152'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">Syphon</span><span class="p">;</span></div><div class='line' id='LC153'><span class="p">})(</span><span class="nx">Backbone</span><span class="p">,</span> <span class="nx">jQuery</span><span class="p">,</span> <span class="nx">_</span><span class="p">);</span></div><div class='line' id='LC154'><br/></div><div class='line' id='LC155'><span class="c1">// Type Registry</span></div><div class='line' id='LC156'><span class="c1">// -------------</span></div><div class='line' id='LC157'><br/></div><div class='line' id='LC158'><span class="c1">// Type Registries allow you to register something to</span></div><div class='line' id='LC159'><span class="c1">// an input type, and retrieve either the item registered</span></div><div class='line' id='LC160'><span class="c1">// for a specific type or the default registration</span></div><div class='line' id='LC161'><span class="nx">Backbone</span><span class="p">.</span><span class="nx">Syphon</span><span class="p">.</span><span class="nx">TypeRegistry</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC162'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">registeredTypes</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC163'><span class="p">};</span></div><div class='line' id='LC164'><br/></div><div class='line' id='LC165'><span class="c1">// Borrow Backbone&#39;s `extend` keyword for our TypeRegistry</span></div><div class='line' id='LC166'><span class="nx">Backbone</span><span class="p">.</span><span class="nx">Syphon</span><span class="p">.</span><span class="nx">TypeRegistry</span><span class="p">.</span><span class="nx">extend</span> <span class="o">=</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Model</span><span class="p">.</span><span class="nx">extend</span><span class="p">;</span></div><div class='line' id='LC167'><br/></div><div class='line' id='LC168'><span class="nx">_</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">Backbone</span><span class="p">.</span><span class="nx">Syphon</span><span class="p">.</span><span class="nx">TypeRegistry</span><span class="p">.</span><span class="nx">prototype</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC169'><br/></div><div class='line' id='LC170'>&nbsp;&nbsp;<span class="c1">// Get the registered item by type. If nothing is</span></div><div class='line' id='LC171'>&nbsp;&nbsp;<span class="c1">// found for the specified type, the default is</span></div><div class='line' id='LC172'>&nbsp;&nbsp;<span class="c1">// returned.</span></div><div class='line' id='LC173'>&nbsp;&nbsp;<span class="nx">get</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">type</span><span class="p">){</span></div><div class='line' id='LC174'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">item</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">registeredTypes</span><span class="p">[</span><span class="nx">type</span><span class="p">];</span></div><div class='line' id='LC175'><br/></div><div class='line' id='LC176'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">item</span><span class="p">){</span></div><div class='line' id='LC177'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">item</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">registeredTypes</span><span class="p">[</span><span class="s2">&quot;default&quot;</span><span class="p">];</span></div><div class='line' id='LC178'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC179'><br/></div><div class='line' id='LC180'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">item</span><span class="p">;</span></div><div class='line' id='LC181'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC182'><br/></div><div class='line' id='LC183'>&nbsp;&nbsp;<span class="c1">// Register a new item for a specified type</span></div><div class='line' id='LC184'>&nbsp;&nbsp;<span class="nx">register</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">type</span><span class="p">,</span> <span class="nx">item</span><span class="p">){</span></div><div class='line' id='LC185'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">registeredTypes</span><span class="p">[</span><span class="nx">type</span><span class="p">]</span> <span class="o">=</span> <span class="nx">item</span><span class="p">;</span></div><div class='line' id='LC186'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC187'><br/></div><div class='line' id='LC188'>&nbsp;&nbsp;<span class="c1">// Register a default item to be used when no</span></div><div class='line' id='LC189'>&nbsp;&nbsp;<span class="c1">// item for a specified type is found</span></div><div class='line' id='LC190'>&nbsp;&nbsp;<span class="nx">registerDefault</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">item</span><span class="p">){</span></div><div class='line' id='LC191'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">registeredTypes</span><span class="p">[</span><span class="s2">&quot;default&quot;</span><span class="p">]</span> <span class="o">=</span> <span class="nx">item</span><span class="p">;</span></div><div class='line' id='LC192'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC193'><br/></div><div class='line' id='LC194'>&nbsp;&nbsp;<span class="c1">// Remove an item from a given type registration</span></div><div class='line' id='LC195'>&nbsp;&nbsp;<span class="nx">unregister</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">type</span><span class="p">){</span></div><div class='line' id='LC196'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">registeredTypes</span><span class="p">[</span><span class="nx">type</span><span class="p">]){</span></div><div class='line' id='LC197'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">delete</span> <span class="k">this</span><span class="p">.</span><span class="nx">registeredTypes</span><span class="p">[</span><span class="nx">type</span><span class="p">];</span></div><div class='line' id='LC198'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC199'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC200'><span class="p">});</span></div><div class='line' id='LC201'><br/></div><div class='line' id='LC202'><br/></div><div class='line' id='LC203'><br/></div><div class='line' id='LC204'><br/></div><div class='line' id='LC205'><span class="c1">// Key Extractors</span></div><div class='line' id='LC206'><span class="c1">// --------------</span></div><div class='line' id='LC207'><br/></div><div class='line' id='LC208'><span class="c1">// Key extractors produce the &quot;key&quot; in `{key: &quot;value&quot;}`</span></div><div class='line' id='LC209'><span class="c1">// pairs, when serializing.</span></div><div class='line' id='LC210'><span class="nx">Backbone</span><span class="p">.</span><span class="nx">Syphon</span><span class="p">.</span><span class="nx">KeyExtractorSet</span> <span class="o">=</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Syphon</span><span class="p">.</span><span class="nx">TypeRegistry</span><span class="p">.</span><span class="nx">extend</span><span class="p">();</span></div><div class='line' id='LC211'><br/></div><div class='line' id='LC212'><span class="c1">// Built-in Key Extractors</span></div><div class='line' id='LC213'><span class="nx">Backbone</span><span class="p">.</span><span class="nx">Syphon</span><span class="p">.</span><span class="nx">KeyExtractors</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Syphon</span><span class="p">.</span><span class="nx">KeyExtractorSet</span><span class="p">();</span></div><div class='line' id='LC214'><br/></div><div class='line' id='LC215'><span class="c1">// The default key extractor, which uses the</span></div><div class='line' id='LC216'><span class="c1">// input element&#39;s &quot;id&quot; attribute</span></div><div class='line' id='LC217'><span class="nx">Backbone</span><span class="p">.</span><span class="nx">Syphon</span><span class="p">.</span><span class="nx">KeyExtractors</span><span class="p">.</span><span class="nx">registerDefault</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">$el</span><span class="p">){</span></div><div class='line' id='LC218'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">$el</span><span class="p">.</span><span class="nx">prop</span><span class="p">(</span><span class="s2">&quot;name&quot;</span><span class="p">);</span></div><div class='line' id='LC219'><span class="p">});</span></div><div class='line' id='LC220'><br/></div><div class='line' id='LC221'><br/></div><div class='line' id='LC222'><span class="c1">// Input Readers</span></div><div class='line' id='LC223'><span class="c1">// -------------</span></div><div class='line' id='LC224'><br/></div><div class='line' id='LC225'><span class="c1">// Input Readers are used to extract the value from</span></div><div class='line' id='LC226'><span class="c1">// an input element, for the serialized object result</span></div><div class='line' id='LC227'><span class="nx">Backbone</span><span class="p">.</span><span class="nx">Syphon</span><span class="p">.</span><span class="nx">InputReaderSet</span> <span class="o">=</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Syphon</span><span class="p">.</span><span class="nx">TypeRegistry</span><span class="p">.</span><span class="nx">extend</span><span class="p">();</span></div><div class='line' id='LC228'><br/></div><div class='line' id='LC229'><span class="c1">// Built-in Input Readers</span></div><div class='line' id='LC230'><span class="nx">Backbone</span><span class="p">.</span><span class="nx">Syphon</span><span class="p">.</span><span class="nx">InputReaders</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Syphon</span><span class="p">.</span><span class="nx">InputReaderSet</span><span class="p">();</span></div><div class='line' id='LC231'><br/></div><div class='line' id='LC232'><span class="c1">// The default input reader, which uses an input</span></div><div class='line' id='LC233'><span class="c1">// element&#39;s &quot;value&quot;</span></div><div class='line' id='LC234'><span class="nx">Backbone</span><span class="p">.</span><span class="nx">Syphon</span><span class="p">.</span><span class="nx">InputReaders</span><span class="p">.</span><span class="nx">registerDefault</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">$el</span><span class="p">){</span></div><div class='line' id='LC235'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">$el</span><span class="p">.</span><span class="nx">val</span><span class="p">();</span></div><div class='line' id='LC236'><span class="p">});</span></div><div class='line' id='LC237'><br/></div><div class='line' id='LC238'><span class="c1">// Checkbox reader, returning a boolean value for</span></div><div class='line' id='LC239'><span class="c1">// whether or not the checkbox is checked.</span></div><div class='line' id='LC240'><span class="nx">Backbone</span><span class="p">.</span><span class="nx">Syphon</span><span class="p">.</span><span class="nx">InputReaders</span><span class="p">.</span><span class="nx">register</span><span class="p">(</span><span class="s2">&quot;checkbox&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">$el</span><span class="p">){</span></div><div class='line' id='LC241'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">checked</span> <span class="o">=</span> <span class="nx">$el</span><span class="p">.</span><span class="nx">prop</span><span class="p">(</span><span class="s2">&quot;checked&quot;</span><span class="p">);</span></div><div class='line' id='LC242'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">checked</span><span class="p">;</span></div><div class='line' id='LC243'><span class="p">});</span></div><div class='line' id='LC244'><br/></div><div class='line' id='LC245'><br/></div><div class='line' id='LC246'><span class="c1">// Input Writers</span></div><div class='line' id='LC247'><span class="c1">// -------------</span></div><div class='line' id='LC248'><br/></div><div class='line' id='LC249'><span class="c1">// Input Writers are used to insert a value from an</span></div><div class='line' id='LC250'><span class="c1">// object into an input element.</span></div><div class='line' id='LC251'><span class="nx">Backbone</span><span class="p">.</span><span class="nx">Syphon</span><span class="p">.</span><span class="nx">InputWriterSet</span> <span class="o">=</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Syphon</span><span class="p">.</span><span class="nx">TypeRegistry</span><span class="p">.</span><span class="nx">extend</span><span class="p">();</span></div><div class='line' id='LC252'><br/></div><div class='line' id='LC253'><span class="c1">// Built-in Input Writers</span></div><div class='line' id='LC254'><span class="nx">Backbone</span><span class="p">.</span><span class="nx">Syphon</span><span class="p">.</span><span class="nx">InputWriters</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Syphon</span><span class="p">.</span><span class="nx">InputWriterSet</span><span class="p">();</span></div><div class='line' id='LC255'><br/></div><div class='line' id='LC256'><span class="c1">// The default input writer, which sets an input</span></div><div class='line' id='LC257'><span class="c1">// element&#39;s &quot;value&quot;</span></div><div class='line' id='LC258'><span class="nx">Backbone</span><span class="p">.</span><span class="nx">Syphon</span><span class="p">.</span><span class="nx">InputWriters</span><span class="p">.</span><span class="nx">registerDefault</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">$el</span><span class="p">,</span> <span class="nx">value</span><span class="p">){</span></div><div class='line' id='LC259'>&nbsp;&nbsp;<span class="nx">$el</span><span class="p">.</span><span class="nx">val</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC260'><span class="p">});</span></div><div class='line' id='LC261'><br/></div><div class='line' id='LC262'><span class="c1">// Checkbox writer, set whether or not the checkbox is checked</span></div><div class='line' id='LC263'><span class="c1">// depending on the boolean value.</span></div><div class='line' id='LC264'><span class="nx">Backbone</span><span class="p">.</span><span class="nx">Syphon</span><span class="p">.</span><span class="nx">InputWriters</span><span class="p">.</span><span class="nx">register</span><span class="p">(</span><span class="s2">&quot;checkbox&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">$el</span><span class="p">,</span> <span class="nx">value</span><span class="p">){</span></div><div class='line' id='LC265'>&nbsp;&nbsp;<span class="nx">$el</span><span class="p">.</span><span class="nx">prop</span><span class="p">(</span><span class="s2">&quot;checked&quot;</span><span class="p">,</span> <span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC266'><span class="p">});</span></div><div class='line' id='LC267'><br/></div><div class='line' id='LC268'><span class="c1">// Radio button writer, set whether or not the radio button is</span></div><div class='line' id='LC269'><span class="c1">// checked.  The button should only be checked if it&#39;s value</span></div><div class='line' id='LC270'><span class="c1">// equals the given value.</span></div><div class='line' id='LC271'><span class="nx">Backbone</span><span class="p">.</span><span class="nx">Syphon</span><span class="p">.</span><span class="nx">InputWriters</span><span class="p">.</span><span class="nx">register</span><span class="p">(</span><span class="s2">&quot;radio&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">$el</span><span class="p">,</span> <span class="nx">value</span><span class="p">){</span></div><div class='line' id='LC272'>&nbsp;&nbsp;<span class="nx">$el</span><span class="p">.</span><span class="nx">prop</span><span class="p">(</span><span class="s2">&quot;checked&quot;</span><span class="p">,</span> <span class="nx">$el</span><span class="p">.</span><span class="nx">val</span><span class="p">()</span> <span class="o">===</span> <span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC273'><span class="p">});</span></div><div class='line' id='LC274'><br/></div><div class='line' id='LC275'><span class="c1">// Key Assignment Validators</span></div><div class='line' id='LC276'><span class="c1">// -------------------------</span></div><div class='line' id='LC277'><br/></div><div class='line' id='LC278'><span class="c1">// Key Assignment Validators are used to determine whether or not a</span></div><div class='line' id='LC279'><span class="c1">// key should be assigned to a value, after the key and value have been</span></div><div class='line' id='LC280'><span class="c1">// extracted from the element. This is the last opportunity to prevent</span></div><div class='line' id='LC281'><span class="c1">// bad data from getting serialized to your object.</span></div><div class='line' id='LC282'><br/></div><div class='line' id='LC283'><span class="nx">Backbone</span><span class="p">.</span><span class="nx">Syphon</span><span class="p">.</span><span class="nx">KeyAssignmentValidatorSet</span> <span class="o">=</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Syphon</span><span class="p">.</span><span class="nx">TypeRegistry</span><span class="p">.</span><span class="nx">extend</span><span class="p">();</span></div><div class='line' id='LC284'><br/></div><div class='line' id='LC285'><span class="c1">// Build-in Key Assignment Validators</span></div><div class='line' id='LC286'><span class="nx">Backbone</span><span class="p">.</span><span class="nx">Syphon</span><span class="p">.</span><span class="nx">KeyAssignmentValidators</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Syphon</span><span class="p">.</span><span class="nx">KeyAssignmentValidatorSet</span><span class="p">();</span></div><div class='line' id='LC287'><br/></div><div class='line' id='LC288'><span class="c1">// Everything is valid by default</span></div><div class='line' id='LC289'><span class="nx">Backbone</span><span class="p">.</span><span class="nx">Syphon</span><span class="p">.</span><span class="nx">KeyAssignmentValidators</span><span class="p">.</span><span class="nx">registerDefault</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span> <span class="k">return</span> <span class="kc">true</span><span class="p">;</span> <span class="p">});</span></div><div class='line' id='LC290'><br/></div><div class='line' id='LC291'><span class="c1">// But only the &quot;checked&quot; radio button for a given</span></div><div class='line' id='LC292'><span class="c1">// radio button group is valid</span></div><div class='line' id='LC293'><span class="nx">Backbone</span><span class="p">.</span><span class="nx">Syphon</span><span class="p">.</span><span class="nx">KeyAssignmentValidators</span><span class="p">.</span><span class="nx">register</span><span class="p">(</span><span class="s2">&quot;radio&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">$el</span><span class="p">,</span> <span class="nx">key</span><span class="p">,</span> <span class="nx">value</span><span class="p">){</span> </div><div class='line' id='LC294'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">$el</span><span class="p">.</span><span class="nx">prop</span><span class="p">(</span><span class="s2">&quot;checked&quot;</span><span class="p">);</span></div><div class='line' id='LC295'><span class="p">});</span></div><div class='line' id='LC296'><br/></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>
      </div>
    </div>

  </div>

<div class="frame frame-loading large-loading-area" style="display:none;" data-tree-list-url="/derickbailey/backbone.syphon/tree-list/1abe1a7ed836cc867e7176a0219cf25f0cd26067" data-blob-url-prefix="/derickbailey/backbone.syphon/blob/1abe1a7ed836cc867e7176a0219cf25f0cd26067">
  <img src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-64.gif?1338945075" height="64" width="64">
</div>

        </div>
      </div>
      <div class="context-overlay"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer" >
        
  <div class="upper_footer">
     <div class="container clearfix">

       <!--[if IE]><h4 id="blacktocat_ie">GitHub Links</h4><![endif]-->
       <![if !IE]><h4 id="blacktocat">GitHub Links</h4><![endif]>

       <ul class="footer_nav">
         <h4>GitHub</h4>
         <li><a href="https://github.com/about">About</a></li>
         <li><a href="https://github.com/blog">Blog</a></li>
         <li><a href="https://github.com/features">Features</a></li>
         <li><a href="https://github.com/contact">Contact &amp; Support</a></li>
         <li><a href="https://github.com/training">Training</a></li>
         <li><a href="http://enterprise.github.com/">GitHub Enterprise</a></li>
         <li><a href="http://status.github.com/">Site Status</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Clients</h4>
         <li><a href="http://mac.github.com/">GitHub for Mac</a></li>
         <li><a href="http://windows.github.com/">GitHub for Windows</a></li>
         <li><a href="http://eclipse.github.com/">GitHub for Eclipse</a></li>
         <li><a href="http://mobile.github.com/">GitHub Mobile Apps</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Tools</h4>
         <li><a href="http://get.gaug.es/">Gauges: Web analytics</a></li>
         <li><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></li>
         <li><a href="https://gist.github.com">Gist: Code snippets</a></li>

         <h4 class="second">Extras</h4>
         <li><a href="http://jobs.github.com/">Job Board</a></li>
         <li><a href="http://shop.github.com/">GitHub Shop</a></li>
         <li><a href="http://octodex.github.com/">The Octodex</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Documentation</h4>
         <li><a href="http://help.github.com/">GitHub Help</a></li>
         <li><a href="http://developer.github.com/">Developer API</a></li>
         <li><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></li>
         <li><a href="http://pages.github.com/">GitHub Pages</a></li>
       </ul>

     </div><!-- /.site -->
  </div><!-- /.upper_footer -->

<div class="lower_footer">
  <div class="container clearfix">
    <!--[if IE]><div id="legal_ie"><![endif]-->
    <![if !IE]><div id="legal"><![endif]>
      <ul>
          <li><a href="https://github.com/site/terms">Terms of Service</a></li>
          <li><a href="https://github.com/site/privacy">Privacy</a></li>
          <li><a href="https://github.com/security">Security</a></li>
      </ul>

      <p>&copy; 2012 <span title="0.15293s from fe2.rs.github.com">GitHub</span> Inc. All rights reserved.</p>
    </div><!-- /#legal or /#legal_ie-->

  </div><!-- /.site -->
</div><!-- /.lower_footer -->

      </div><!-- /#footer -->

    

<div id="keyboard_shortcuts_pane" class="instapaper_ignore readability-extra" style="display:none">
  <h2>Keyboard Shortcuts <small><a href="#" class="js-see-all-keyboard-shortcuts">(see all)</a></small></h2>

  <div class="columns threecols">
    <div class="column first">
      <h3>Site wide shortcuts</h3>
      <dl class="keyboard-mappings">
        <dt>s</dt>
        <dd>Focus site search</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>?</dt>
        <dd>Bring up this help dialog</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column middle" style='display:none'>
      <h3>Commit list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>c <em>or</em> o <em>or</em> enter</dt>
        <dd>Open commit</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>y</dt>
        <dd>Expand URL to its canonical form</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column last js-hidden-pane" style='display:none'>
      <h3>Pull request list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>o <em>or</em> enter</dt>
        <dd>Open issue</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
        <dd>Submit comment</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> shift p</dt>
        <dd>Preview comment</dd>
      </dl>
    </div><!-- /.columns.last -->

  </div><!-- /.columns.equacols -->

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>

    <h3>Issues</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>x</dt>
          <dd>Toggle selection</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
          <dd>Submit comment</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> shift p</dt>
          <dd>Preview comment</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>c</dt>
          <dd>Create issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Create label</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>i</dt>
          <dd>Back to inbox</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>u</dt>
          <dd>Back to issues</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>/</dt>
          <dd>Focus issues search</dd>
        </dl>
      </div>
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>

    <h3>Issues Dashboard</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
      </div><!-- /.column.first -->
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>

    <h3>Network Graph</h3>
    <div class="columns equacols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt><span class="badmono">←</span> <em>or</em> h</dt>
          <dd>Scroll left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">→</span> <em>or</em> l</dt>
          <dd>Scroll right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↑</span> <em>or</em> k</dt>
          <dd>Scroll up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↓</span> <em>or</em> j</dt>
          <dd>Scroll down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Toggle visibility of head labels</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">←</span> <em>or</em> shift h</dt>
          <dd>Scroll all the way left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">→</span> <em>or</em> shift l</dt>
          <dd>Scroll all the way right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↑</span> <em>or</em> shift k</dt>
          <dd>Scroll all the way up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↓</span> <em>or</em> shift j</dt>
          <dd>Scroll all the way down</dd>
        </dl>
      </div><!-- /.column.last -->
    </div>
  </div>

  <div class="js-hidden-pane" >
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first js-hidden-pane" >
        <h3>Source Code Browsing</h3>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Activates the file finder</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Jump to line</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>w</dt>
          <dd>Switch branch/tag</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>y</dt>
          <dd>Expand URL to its canonical form</dd>
        </dl>
      </div>
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first">
        <h3>Browsing Commits</h3>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
          <dd>Submit comment</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>escape</dt>
          <dd>Close form</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>p</dt>
          <dd>Parent commit</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o</dt>
          <dd>Other parent commit</dd>
        </dl>
      </div>
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>
    <h3>Notifications</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open notification</dd>
        </dl>
      </div><!-- /.column.first -->

      <div class="column second">
        <dl class="keyboard-mappings">
          <dt>e <em>or</em> shift i <em>or</em> y</dt>
          <dd>Mark as read</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift m</dt>
          <dd>Mute thread</dd>
        </dl>
      </div><!-- /.column.first -->
    </div>
  </div>

</div>

    <div id="markdown-help" class="instapaper_ignore readability-extra">
  <h2>Markdown Cheat Sheet</h2>

  <div class="cheatsheet-content">

  <div class="mod">
    <div class="col">
      <h3>Format Text</h3>
      <p>Headers</p>
      <pre>
# This is an &lt;h1&gt; tag
## This is an &lt;h2&gt; tag
###### This is an &lt;h6&gt; tag</pre>
     <p>Text styles</p>
     <pre>
*This text will be italic*
_This will also be italic_
**This text will be bold**
__This will also be bold__

*You **can** combine them*
</pre>
    </div>
    <div class="col">
      <h3>Lists</h3>
      <p>Unordered</p>
      <pre>
* Item 1
* Item 2
  * Item 2a
  * Item 2b</pre>
     <p>Ordered</p>
     <pre>
1. Item 1
2. Item 2
3. Item 3
   * Item 3a
   * Item 3b</pre>
    </div>
    <div class="col">
      <h3>Miscellaneous</h3>
      <p>Images</p>
      <pre>
![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)
</pre>
     <p>Links</p>
     <pre>
http://github.com - automatic!
[GitHub](http://github.com)</pre>
<p>Blockquotes</p>
     <pre>
As Kanye West said:

> We're living the future so
> the present is our past.
</pre>
    </div>
  </div>
  <div class="rule"></div>

  <h3>Code Examples in Markdown</h3>
  <div class="col">
      <p>Syntax highlighting with <a href="http://github.github.com/github-flavored-markdown/" title="GitHub Flavored Markdown" target="_blank">GFM</a></p>
      <pre>
```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```</pre>
    </div>
    <div class="col">
      <p>Or, indent your code 4 spaces</p>
      <pre>
Here is a Python code example
without syntax highlighting:

    def foo:
      if not bar:
        return true</pre>
    </div>
    <div class="col">
      <p>Inline code for comments</p>
      <pre>
I think you should use an
`&lt;addr&gt;` element here instead.</pre>
    </div>
  </div>

  </div>
</div>


    <div id="ajax-error-message" class="flash flash-error">
      <span class="mini-icon mini-icon-exclamation"></span>
      Something went wrong with that request. Please try again.
      <a href="#" class="mini-icon mini-icon-remove-close ajax-error-dismiss"></a>
    </div>

    <div id="logo-popup">
      <h2>Looking for the GitHub logo?</h2>
      <ul>
        <li>
          <h4>GitHub Logo</h4>
          <a href="http://github-media-downloads.s3.amazonaws.com/GitHub_Logos.zip"><img alt="Github_logo" src="https://a248.e.akamai.net/assets.github.com/images/modules/about_page/github_logo.png?1338945074" /></a>
          <a href="http://github-media-downloads.s3.amazonaws.com/GitHub_Logos.zip" class="minibutton btn-download download">Download</a>
        </li>
        <li>
          <h4>The Octocat</h4>
          <a href="http://github-media-downloads.s3.amazonaws.com/Octocats.zip"><img alt="Octocat" src="https://a248.e.akamai.net/assets.github.com/images/modules/about_page/octocat.png?1338945074" /></a>
          <a href="http://github-media-downloads.s3.amazonaws.com/Octocats.zip" class="minibutton btn-download download">Download</a>
        </li>
      </ul>
    </div>

    
    
    <span id='server_response_time' data-time='0.15563' data-host='fe2'></span>
  </body>
</html>

