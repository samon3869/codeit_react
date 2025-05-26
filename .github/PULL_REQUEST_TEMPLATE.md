## 변경 사유:

- 이 변경이 필요한 이유나 배경을 설명해 주세요.

## 체크리스트:

- [ ] 브랜치치와 커밋이름이 규칙대로 작성되었나요?
    - [ ] 브랜치의 이름은 작업의 내용을 명확히 알 수 있게
    직관적으로 지정 ex. fix/login-issue, feat/add-user-profile
    - [ ] 커밋의 이름은 아래 규칙(Conventional Commit, relase note 자동작성에 필요한 양식) 따르게 지정 
    <type>(<scope>): <subject> 
    ex. feat(UserPorfile): Add email verification
    cf. type에는 아래 내용들이 올 수 있음
    feat: 기능 개발과 관련
    docs: 주석/ReadMe 등 문서화 관련
    test: 테스트 관련
    fix: 버그나 typo 등을 수정 사항 관련
    chore: 코드와 관련이 없는 내용들을 수정(License 등)
    ci: CI/CD 등과 관련한 작업을 수행할 때
- [ ] 코드의 변경 사유와 목적이 명확하게 기술되었나요?
- [ ] 새로운 단위 테스트가 추가되었나요 기존 테스스트는 모두 통과하는가요
- [ ] 변경된 코드가 기존 기능에 영향을 주지 않도록 설계되었었나요
- [ ] 변경된 파일에 대한 문서나 주석이 업데이트되었나요?
- [ ] 코드의 스타일과 컨벤션을 준수하였나요? (예: PEF9, ESLint)

## 추가 사항:

- 리뷰어에게 알려야 할 추가적인 정보나 주의 사항을 기술해 주세요.