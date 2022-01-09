import React, { memo, useEffect, useRef } from 'react';

import Quill from 'quill';

import { BenefitsEditorContainer } from './BenefitsEditor.styled';

import 'quill/dist/quill.core.css';

interface BenefitsEditorProps {
  value: string;
  onChange(value: string | undefined): void;
}

function BenefitsEditor({ value, onChange }: BenefitsEditorProps): JSX.Element {
  const editor = useRef<Quill>();

  useEffect(() => {
    const options = {
      placeholder:
        '• For example, reduce weight and improve cardiovascular fitness',
      formats: ['list'],
      modules: {
        toolbar: null,
      },
    };

    editor.current = new Quill('#benefits-editor', options);

    if (value) {
      editor.current.format('list', 'bullet');
      editor.current.insertText(0, value, 'list', 'bullet');
    }

    editor.current.once('selection-change', (delta, oldDelta, source) => {
      if (source === 'user') {
        editor.current?.format('list', 'bullet');
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    editor.current?.on('text-change', (delta, oldDelta, source) => {
      if (source === 'user') {
        if (oldDelta.ops.length === 1) editor.current?.format('list', 'bullet');

        onChange(editor.current?.getText());
      }
    });
  }, [onChange]);

  return <BenefitsEditorContainer id="benefits-editor" />;
}

export default memo(BenefitsEditor);
