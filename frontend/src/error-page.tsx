import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage(): JSX.Element {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>エラー</h1>
      <p>申し訳ありません、予期せぬエラーが発生しました。</p>
      <p>
        <i>{Boolean(error.statusText) || error.message}</i>
      </p>
    </div>
  );
}
