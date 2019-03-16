import { useEffect } from 'react';
import PubNub from 'pubnub';

const pubnub = new PubNub({
  publishKey: process.env.REACT_APP_PUBNUB_PUBLISH_KEY,
  subscribeKey: process.env.REACT_APP_PUBNUB_SUBSCRIBE_KEY,
});

export default () => {
  useEffect(() => {
    pubnub.addListener({
      message(msg) {
        console.log(msg.message);
      },
    });
    pubnub.subscribe({ channels: ['test'] });
    return () => {
      pubnub.unsubscribeAll();
    };
  }, []);

  const publish = (message) => {
    const publishConfig = {
      channel: 'test',
      message,
    };
    pubnub.publish(publishConfig);
  };

  const handleCardClick = (value) => {
    publish({ action: 'card-select', value });
  };

  return { onCardClick: handleCardClick };
};
