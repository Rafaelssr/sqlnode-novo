step 01:
tu ta na tela de login -> autentica -> retorna o Response -> loga pra home

    HOJE tá assim:
    	se não tiver usuario, na tela de login não faz nada

tu vai fazer assim:

    na tela de login, no controller, tu vai verificar na request e jogar as infos para o banco = enviar email e senha para o server.

    no server; tu verifica duas coisas:
    	Se EXISTE USUARIO COM AQUELE EMAIL, e se existir, se a senha tá correta.
    		caso não exista, joga um erro 404, dizendo que o user not found, e redireciona para a rota de registro.
    	Se já tiver usuario com aquele email e a senha, status 200 e redirect para home.
