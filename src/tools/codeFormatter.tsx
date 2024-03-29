// eslint-disable-next-line import/prefer-default-export
import type { ReactElement } from 'react';
import React from 'react';
import { ECodeType } from '../enums';
import type { ICodeFormatInput } from '../types/codeformat';
import useClipboardCopy from '../hooks/useClipboardCopy';


const space = `${'    '}`;

const generateSpace = (lvl: number): string => {
  let amount = `${''}`;
  for (let x = 0; x < lvl; x++) {
    amount += space;
  }
  return amount;
};

const createChildren = (data: Record<string, unknown>, lvl: number, nested = false): ReactElement[] => {
  const children: ReactElement[] = [];


  if (nested) {
    children.push(
      <span style={{ whiteSpace: 'pre' }} className="inline">
        {' {'}

      </span>,
    );
    children.push(<br />);
    Object.entries(data).forEach(([k, v]) => {
      if (typeof v === 'object') {
        children.push(
          <p className="inline">
            <span style={{ whiteSpace: 'pre' }} className="text-rose-500 inline">
              {generateSpace(lvl)} &quot;{k}&quot;
            </span>
            :<span className="text-rose-500 inline">{createChildren(v as Record<string, unknown>, lvl + 1, true)}</span>
          </p>,
        );
      } else {
        children.push(
          <p className="inline">
            <span style={{ whiteSpace: 'pre' }} className="text-rose-500 inline">
              {generateSpace(lvl)} &quot;{k}&quot;
            </span>
            :<span className="text-blue-400 inline"> &quot;{v as string}&quot;</span>,
          </p>,
        );
        children.push(<br />);
      }
    });

    children.push(<span style={{ whiteSpace: 'pre' }} className="inline">{`${generateSpace(lvl - 1)}},`}</span>);
    children.push(<br />);
  } else {
    Object.entries(data).forEach(([k, v]) => {
      if (typeof v === 'object') {
        children.push(
          <p className="inline">
            <span style={{ whiteSpace: 'pre' }} className="text-rose-500 inline">
              {generateSpace(lvl)} &quot;{k}&quot;
            </span>
            :<span className="inline">{createChildren(v as Record<string, unknown>, lvl + 1, true)}</span>
          </p>,
        );
      } else {
        children.push(
          <p className="inline">
            <span style={{ whiteSpace: 'pre' }} className="text-rose-500 inline">
              {generateSpace(lvl)} &quot;{k}&quot;
            </span>
            :<span className="text-blue-400 inline"> &quot;{v as string}&quot;</span>,
          </p>,
        );
        children.push(<br />);
      }
    });
  }

  return children;
};

const formatJson = (data: Record<string, unknown>): ReactElement => {
  let children: ReactElement[] = [];

  children.push(<span>{'{'}</span>);
  children.push(<br />);
  children = [...children, ...createChildren(data, 1)];
  children.push(<span>{'}'}</span>);
  const { copyToClipboard, copyMessage } = useClipboardCopy();
  return <div className="code relative">{children}
    <button
      className={`absolute top-[2%] right-[0.3%] px-1 py-0.5 text-base rounded-sm ${copyMessage === 'Copy' && "hover:bg-rose-900"}`}
      onClick={() => copyToClipboard(JSON.stringify(data))}
    >
      {copyMessage === 'Copy' ? `📋${copyMessage}` : `✅${copyMessage}`}

    </button>

  </div>;
};

const formatEnv = (data: Record<string, unknown>): ReactElement => {

  const children: ReactElement[] = Object.entries(data).map(([k, v]) => {
    return (
      <React.Fragment key={`${k}:${v as string}`}>
        <p className="inline">
          <span style={{ whiteSpace: 'pre' }} className="text-rose-500 inline">
            &quot;{k}&quot;
          </span>
          :<span className="text-blue-400 inline"> &quot;{v as string}&quot;</span>,
        </p>
        <br />
      </React.Fragment>
    );
  });

  const { copyToClipboard, copyMessage } = useClipboardCopy();
  return <div className="code relative">{children}
    <button
      className={`absolute top-[2%] right-[0.3%] px-1 py-0.5 text-base rounded-sm ${copyMessage === 'Copy' && "hover:bg-rose-900"}`}
      onClick={() => copyToClipboard(JSON.stringify(data))}
    >
      {copyMessage === 'Copy' ? `📋${copyMessage}` : `✅${copyMessage}`}

    </button>
  </div >;
};

const generateCode = <T extends ECodeType>(type: T, data: ICodeFormatInput[T]): ReactElement | null => {
  switch (type) {
    case ECodeType.Json:
      return formatJson(data as Record<string, unknown>);
    case ECodeType.Env:
      return formatEnv(data as Record<string, unknown>);
    default:
      console.log('Unsupported code format');
      return null;
  }
};

export default generateCode;
