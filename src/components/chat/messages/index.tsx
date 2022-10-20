import React, { useEffect, useRef, useState } from 'react';
import useVirtual from 'react-cool-virtual';

import { store, useAppSelector } from '../../../store';
import { IChatMsg } from '../../../store/slices/interfaces/dataMessages';
import Message from './message';
import { chatMessagesSelector } from '../../../store/slices/chatMessagesSlice';

interface IMessagesProps {
  userId: string;
}
const Messages = ({ userId }: IMessagesProps) => {
  const allMessages = useAppSelector(chatMessagesSelector.selectAll);
  const scrollToRef = useRef<HTMLDivElement>(null);
  const currentUser = store.getState().session.currentUser;
  const [chatMessages, setChatMessages] = useState<Array<IChatMsg>>([]);

  const { outerRef, innerRef, items, scrollToItem } = useVirtual({
    itemCount: chatMessages.length,
  });

  useEffect(() => {
    let chatMessages: IChatMsg[] = [];
    if (userId === 'public') {
      chatMessages = allMessages.filter((m) => !m.isPrivate);
    } else {
      chatMessages = allMessages.filter(
        (m) => m.isPrivate && (m.from.userId === userId || m.to === userId),
      );
    }

    setChatMessages(chatMessages);
  }, [allMessages, userId]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!chatMessages.length) {
        return;
      }
      scrollToItem(
        {
          index: chatMessages.length - 1,
          smooth: true,
        },
        () => {
          if (scrollToRef.current) {
            scrollToRef.current.scrollIntoView({
              behavior: 'smooth',
              block: 'end',
              inline: 'nearest',
            });
          }
        },
      );
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
    //eslint-disable-next-line
  }, [chatMessages.length]);

  const renderMsg = (index) => {
    const body = chatMessages[index] as IChatMsg;
    return (
      <Message key={body.message_id} body={body} currentUser={currentUser} />
    );
  };

  return (
    <div
      className="relative h-full px-2 xl:px-4 pt-2 xl:pt-4 overflow-auto scrollBar scrollBar4 messages-item-wrap"
      ref={outerRef as any}
    >
      <div ref={innerRef as any} className="inner">
        {items.map(({ index, measureRef }) => (
          <div
            key={index}
            ref={measureRef}
            className="message-item mb-2 xl:mb-3"
          >
            {renderMsg(index)}
          </div>
        ))}
        <div ref={scrollToRef} />
      </div>
    </div>
  );
};

export default Messages;
