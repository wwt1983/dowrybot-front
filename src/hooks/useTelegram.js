const tg = window.Telegram.WebApp;

export function useTelegram() {
  const onToggleButton = () => {
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
    }else{
        tg.MainButton.show();
    }
  };

  return {
    tg,
    user: tg.initDataUnsafe?.user,
    onToggleButton,
    queryId: tg.initDataUnsafe?.query_id,
    id: tg.initDataUnsafe?.user?.id
  };
}
