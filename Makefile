all:
	@echo "Please choose a task."
.PHONY: all

eslint:
	npm exec --no --call 'eslint . --ext .js,.msj,.ts --color'
.PHONY: eslint

eslint-fix:
	npm exec --no --call 'eslint "{src,app,libs,test}/**/*.ts" --color --fix'
.PHONY: eslint-fix

spellcheck:
	cspell lint --config .cspell/cspell.yaml
.PHONY: spellcheck

markdownlint:
	markdownlint .
.PHONY: markdownlint

lint-spellcheck-dictionaries:
	@find '.cspell/' \( -name '*.txt' \) \
		| while read TXT_FILE; \
	do \
		TERMS_ACTUAL=$$(cat "$${TXT_FILE}"); \
		TERMS_SORTED=$$(LC_COLLATE=C sort "$${TXT_FILE}" --ignore-case); \
		if [ "$${TERMS_ACTUAL}" != "$${TERMS_SORTED}" ]; then \
			echo "Terms at \"$${TXT_FILE}\" are not declared with the expected sort." && exit 1; \
		fi; \
		if [ -n "$$(sort $${TXT_FILE} | uniq --count --repeated)" ]; then \
			echo "Some terms at \"$${TXT_FILE}\" are duplicated." && exit 1; \
		fi; \
	done
.PHONY: lint-spellcheck-dictionaries
