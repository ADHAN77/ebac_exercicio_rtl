import { fireEvent, render, screen } from '@testing-library/react';
import PostComments from '.';

describe('Teste para o componente PostComments', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComments />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve adicionar dois comentários corretamente', () => {
        render(<PostComments />);

        const commentInput = screen.getByTestId('comment-input');
        const commentButton = screen.getByTestId('comment-button');
        const commentText1 = 'Primeiro comentário';
        const commentText2 = 'Segundo comentário';

        // Inserindo o primeiro comentário
        fireEvent.change(commentInput, { target: { value: commentText1 } });
        fireEvent.click(commentButton);

        // Inserindo o segundo comentário
        fireEvent.change(commentInput, { target: { value: commentText2 } });
        fireEvent.click(commentButton);

        // Verificar se os comentários foram adicionados à lista
        const commentsList = screen.getByTestId('comments-list');
        expect(commentsList).toHaveTextContent(commentText1);
        expect(commentsList).toHaveTextContent(commentText2);
    });
});