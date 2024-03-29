import { ActivatedRoute, Params, Router } from '@angular/router';
import { parseDateRangesWithDefault, parseDateWithDefault } from './datetime';
import { parseBoolean, parseIntArray, parseIntWithDefault } from './int';
import { parseStringArray } from './string';

export function mergeRouter(
  router: Router,
  route: ActivatedRoute,
  params: Params
) {
  params['t_'] = new Date().getTime();
  router.navigate([], {
    relativeTo: route,
    queryParams: params,
    queryParamsHandling: 'merge',
  });
}

export function parseRouterQuery(route: ActivatedRoute, key: string): string {
  return route.snapshot.queryParamMap.get(key) || '';
}

export function parseIntQuery(route: ActivatedRoute, key: string, def: number) {
  const v = parseRouterQuery(route, key);
  return parseIntWithDefault(v, def);
}

export function parseIntArrayQuery(
  route: ActivatedRoute,
  key: string,
  def: number[]
) {
  const v = parseRouterQuery(route, key);
  return parseIntArray(v) || def;
}

export function parseBooleanQuery(route: ActivatedRoute, key: string) {
  const v = parseRouterQuery(route, key);
  return parseBoolean(v);
}

export function parseStringQuery(
  route: ActivatedRoute,
  key: string,
  def: string = ''
) {
  return parseRouterQuery(route, key) || def;
}

export function parseStringArrayQuery(
  route: ActivatedRoute,
  key: string,
  def: string[] = []
) {
  const v = parseRouterQuery(route, key);
  return parseStringArray(v) || def;
}

export function parseDateRangesQuery(
  route: ActivatedRoute,
  key: string,
  def: any = []
) {
  const v = parseRouterQuery(route, key);
  return parseDateRangesWithDefault(v, def);
}

export function parseDateQuery(
  route: ActivatedRoute,
  key: string,
  def: any = null
) {
  const v = parseRouterQuery(route, key);
  return parseDateWithDefault(v, def);
}

