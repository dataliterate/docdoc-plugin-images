var plugin = null
  ;

module.exports = {
  name: 'image',
  serves: ['png'],
  init: function(pluginContext) {
    plugin = pluginContext;
  },
  generate: function(media, config, context) {
      // @todo should be callback based
      plugin.copyMedia(media);
      html = '';
      html += '<a href="' + plugin.path(media.webpath, config.depth) + '" class="zoom" target="_new">';
      html += '<img src="' + plugin.path(media.webpath, config.depth) + '">';
      html += '</a>';
      html += '<div class="asset-annotation">';
      html += '<span>File: </span>';
      html += media.webpath;
      html += '<a href="' + plugin.path(media.webpath, config.depth) + '" target="_new">';
      html += 'PNG';
      html += '</a>';
      html += '</div>';
      return html;
  }
}