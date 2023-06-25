

gtag('config', 'G-VB7QBQX49D');
gtag('event', 'page_view', { 'send_to': 'G-VB7QBQX49D' });
gtag('event', eventName, eventParameters);
// Sends the event to the Google Analytics property with a
// tag ID of `G-VB7QBQX49D` set by the config command in
// the gtag.js snippet.
gtag('event', 'play', {
  'event_category': 'Videos',
  'event_label': 'Fall Campaign'
});

gtag('event', eventName, {
  'send_to': 'G-VB7QBQX49D',
  'parameter1': 'value1',
  'parameter2': 'value2',
  // ...
});

// Send the event to the Google Analytics property
// with a tag ID of 'G-VB7QBQX49D'.
gtag('event', 'play', {
  'send_to': 'G-VB7QBQX49D',
  'event_category': 'Videos',
  'event_label': 'Fall Campaign'
});


gtag('config', 'G-VB7QBQX49D', {
  'custom_map': {'dimension<Index>': 'dimension_name'}
});
gtag('event', 'any_event_name', {'dimension_name': 'dimension_value'});


gtag('config', 'G-VB7QBQX49D', {
  'custom_map': {'metric<Index>': 'metric_name'}
});
gtag('event', 'any_event_name', {'metric_name': 'metric_value'});

gtag('event', 'timing_complete', {
  'name': 'timingVar',
  'value': timingValue,
  'event_category': 'timingCategory',
  'event_label': 'timingLabel'
});

gtag('event', 'exception', {
  'description': 'error_message',
  'fatal': false  // set to true if the exception is fatal
});