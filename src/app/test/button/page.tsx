// src/app/test/button/page.tsx

"use client";

import { BaseButton } from "@/components/button/BaseButton";
import { CircleButton } from "@/components/button/CircleButton";
import { HeartButton } from "@/components/button/HeartButton";
import { MainButton } from "@/components/button/MainButton";
import { SquareIconButton } from "@/components/button/SquareIconButton";
import UTurnRightIcon from "@mui/icons-material/UTurnRight";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import SortIcon from "@mui/icons-material/Sort";

export default function Page() {
  return (
    <>
      <BaseButton>버튼</BaseButton>
      <hr />
      <MainButton variant="primary" type="confirm" size="lg">
        메인 버튼
      </MainButton>
      <hr />
      <MainButton variant="primary" type="confirm" size="md">
        메인 버튼
      </MainButton>
      <hr />
      <MainButton variant="primary" type="confirm" size="md">
        목록으로 돌아가기&ensp;
        <UTurnRightIcon sx={{ rotate: "90deg" }} />
      </MainButton>
      <hr />
      <MainButton variant="primary" type="confirm" size="sm42">
        메인 버튼
      </MainButton>
      <hr />
      <MainButton variant="primary" type="cancel" size="sm48">
        메인 버튼
      </MainButton>
      <hr />
      <MainButton disabled variant="primary" type="confirm" size="sm48">
        메인 버튼
      </MainButton>
      <hr />
      <MainButton variant="secondary" type="confirm" size="lg">
        메인 버튼
      </MainButton>
      <hr />
      <MainButton variant="secondary" type="cancel" size="md">
        메인 버튼
      </MainButton>
      <hr />
      <MainButton variant="secondary" type="confirm" size="sm48">
        메인 버튼
      </MainButton>
      <hr />
      <SquareIconButton>
        <SortIcon />
      </SquareIconButton>
      <hr />
      <CircleButton size="small">
        <SortIcon />
      </CircleButton>
      <hr />
      <CircleButton>
        <SortIcon />
      </CircleButton>
      <hr />
      <CircleButton>
        <ArrowBackIosNewIcon />
      </CircleButton>
      <hr />
      <CircleButton>
        <NavigateBeforeIcon />
      </CircleButton>
      <hr />
      <CircleButton>1</CircleButton>
      <hr />
      <CircleButton>22</CircleButton>
      <hr />
      <CircleButton>222</CircleButton>
      <hr />
      <HeartButton size="lg" isLiked={false} likeCount={20} />
      <hr />
      <HeartButton size="lg" isLiked={true} likeCount={20} />
      <hr />
      <HeartButton size="sm" isLiked={false} likeCount={20} />
      <hr />
      <HeartButton size="sm" isLiked={true} likeCount={20} />
    </>
  );
}
