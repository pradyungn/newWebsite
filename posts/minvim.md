---
title: Your First (good) VimRC
color: green
date: 7/1/2020
blurb: Vim isn't meant to be a full-time development environment out of box... so let's make it one.
---

Vim. Whether you love it, hate it, or haven't heard of it (in which case you're missing out lmao)
its ubiquity can't really be debated. And to be quite honest, I find it so much
more _natural_ than any other editor I've used - and I've used almost all of the
major one. VSCode, Sublime, IntelliJ derivatives, Atom, and for chrissakes EMACS
\- nothing really stacked up to Vim's intuitive interface (at least for me). Now
I literally use Vim for _**everything**_ - even for things that normally require
specific environments, like Flutter (Android Studio) or Data Science in Python
(PyCharm or Jupyter). The reason that I'm able to do that is two specific facets
of my vim environment:
* NeoVim - a distribution of Vim that's more open source, supporting asynchronous
backends, and has some extra features like native terminals.
* coc.nvim - a plugin for NeoVim
Neovim specifically is pretty easy to set up - it's literally the same interface
as Vim with some nice goodies thrown in. COC.nvim takes a little longer to set
up on the other hand, so I'm going to cover setting up COC.nvim for various
development scenarios in a future article. The configuration in this article
should allow you to come out with a great experience in either Vim or NeoVim.

The goal of this article isn't to just _give you_ a config. It's to help you
understand how Vim configuration works - hopefully to an extent that you feel
comfortable writing your own Vim configuration in the future.

## Native Vim Configuration
First we're going to set up some native Vim/NeoVim configuration. These settings
will allow us to have a more comfortable experience - even before we get plugins
involved. Let's start with the first four clusters.

```vim
set noshowmode

set ignorecase
set smartcase

set mouse=a

set hidden

syntax on
set printoptions+=syntax:y
```

This cluster is going to set a couple of settings that lead the way for the rest
of the configuration. I want to explain these settings in order:
* `noshowmode` - hides the current mode in your command line, this will instead
be shown in Airline, which we will install later.
* I've added `smartcase` and `ignorecase`, which will essentially ignore CaSe when
typing and searching, but start caring about them if you have a capital letter
in your regex
* `mouse=a` enables mouse support
* `hidden` allows us to edit multiple buffers at the same time - something we'll
take advantage of by using airline.
* The last two lines allow us to have syntax highlighting enabled for applicable
filetypes.

```vim
set expandtab
set tabstop=4
set softtabstop=4
set shiftwidth=4
set smarttab
set autoindent
set smartindent
set shiftround
```

This cluster is going to convert your Tab into 4 spaces, and allows the rest of
the editor to auto-tab and stuff. Basically sets up tabbing.

```vim
set undofile
set undodir=~/.vim/undodir
```

```vim
filetype plugin indent on
filetype plugin on

set splitright
set splitbelow

set nocompatible

set clipboard=unnamedplus
```

```vim
if !&scrolloff
    set scrolloff=8
endif

if !&sidescrolloff
    set sidescrolloff=5
endif
```

```vim
if has("autocmd")
  au BufReadPost * if line("'\"") > 0 && line("'\"") <= line("$")
    \| exe "normal! g'\"" | endif
endif
set number

augroup numbertoggle
  autocmd!
  autocmd BufEnter,FocusGained,InsertLeave * set relativenumber
  autocmd BufLeave,FocusLost,InsertEnter   * set norelativenumber
augroup END
```

```vim
set termguicolors

set noerrorbells

set nowrap

autocmd BufEnter * silent! lcd %:p:h
```

```vim
set nohlsearch

set noshowmatch
set noswapfile
set nobackup
set incsearch

set updatetime=50

set shortmess+=c

set colorcolumn=80
highlight ColorColumn ctermbg=0 guibg=#4C566A
```

## Plugins!
Plugins - the things that take the normally Vim even more powerful than you could
imagine. While the language-related plugins tend to be managed by coc.nvim
(not covered in this already long guide), we're going to use Vim-Plug to manage
all of the plugins that modify, add, and improve behaviors in Vim.
